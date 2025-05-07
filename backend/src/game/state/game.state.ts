import { User, Puzzle } from 'generated/prisma';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Subscription,
  take,
  timer,
} from 'rxjs';
import { Server } from 'socket.io';

export type Guess = {
  x: number;
  y: number;
  size: number;
};

export type GuessDto = {
  x: number;
  y: number;
};

const RING_SIZES = [100, 80, 60, 40, 20];

// emit event: correctGuess
// emit event: gameState
// emit event: gameOver
export class GameRoom {
  public players$ = new BehaviorSubject<User[] | null>(null);
  private currentPlayerIndex$ = new BehaviorSubject<number>(0);
  private puzzles: Puzzle[];
  private round$ = new BehaviorSubject<number>(1);
  private readonly maxRounds = 5;
  private ringSize$ = new BehaviorSubject<number>(RING_SIZES[0]);
  private currentPuzzle$ = new BehaviorSubject<Puzzle | null>(null);
  private guess$ = new BehaviorSubject<Guess | null>(null);
  private wrongGuess$ = new BehaviorSubject<Guess | null>(null);
  private turnTime$ = new BehaviorSubject<number>(30);
  private readonly unitOfTime = 30;
  private turnTimerSubscription: Subscription;
  private server: Server;

  constructor(public readonly id: string) {}

  getPlayers() {
    if (!this.players$.value) return [];
    return this.players$.value;
  }

  setServer(server: Server) {
    this.server = server;
  }

  setPuzzles(puzzles: Puzzle[]) {
    this.puzzles = puzzles;
  }

  addPlayer(player: User) {
    const players = this.players$.value;
    if (!!players && players.length < 2) {
      this.players$.next([...players, player]);
    }
  }

  addPlayers(players: User[]) {
    if (players.length > 2) throw new Error('Too many players');
    this.players$.next([...players]);
  }

  getActualPlayer() {
    if (!this.players$.value) throw new Error('No players in the room');
    return this.players$.value[this.currentPlayerIndex$.value];
  }

  isStealTurn() {
    return this.wrongGuess$.value !== null;
  }

  start(server: Server) {
    if (!this.isReady()) {
      throw new Error('Not enough players to start the game');
    }
    if (this.players$.value === null) throw new Error('No players in the room');
    this.players$.next(this.players$.value.map((p) => ({ ...p, score: 0 })));
    if (!this.server) {
      this.server = server;
      this.emitGameState();
    }
    this.emitGameState();
    this.startTurn();
  }

  startTurn() {
    this.nextPuzzle();
    this.startTimer();
    this.ringSize$.next(RING_SIZES[this.round$.value - 1]);
  }

  checkGuess() {
    if (this.currentPuzzle$.value === null) return;
    if (this.guess$.value === null) return;

    const isCorrect = this.isCorrect(
      this.guess$.value,
      this.currentPuzzle$.value,
    );
    if (!isCorrect && !this.wrongGuess$.value) {
      this.emitCheckedGuess(isCorrect);
      this.wrongGuess$.next(this.guess$.value);
      this.guess$.next(null);
      return;
    }
    if (isCorrect) this.addScore();

    this.emitCheckedGuess(isCorrect);
    this.endTurn();
  }

  stealTurn() {
    if (!this.wrongGuess$.value) throw new Error('No wrong guess to steal');
    this.guess$.next(null);
    this.startTimer({ isStealTurn: true });
  }

  guessing(guess: GuessDto) {
    if (this.turnTime$.value <= 0) throw new Error('Time is up');
    this.guess$.next({
      ...guess,
      size: this.ringSize$.value,
    });
  }

  private isReady() {
    if (this.players$.value === null) return false;
    return this.players$.value.length === 2;
  }

  private startTimer({ isStealTurn = false }: { isStealTurn?: boolean } = {}) {
    this.clearTimer();
    const timerDuration = isStealTurn ? this.unitOfTime / 2 : this.unitOfTime;

    this.turnTime$.next(timerDuration);
    this.turnTimerSubscription = timer(0, 1000)
      .pipe(take(timerDuration))
      .subscribe(() => {
        this.turnTime$.next(this.turnTime$.value - 1);
      });
  }

  private clearTimer() {
    if (this.turnTimerSubscription) this.turnTimerSubscription.unsubscribe();
  }

  private emitGameState() {
    combineLatest([
      this.players$.pipe(
        map((p) => p?.map(({ id, name, score }) => ({ id, name, score }))),
      ),
      this.currentPlayerIndex$,
      this.currentPuzzle$.pipe(
        map((p) => (p ? { taskText: p.taskText, url: p.imageUrl } : null)),
      ),
      this.guess$,
      this.wrongGuess$,
      this.turnTime$,
      this.round$,
      this.ringSize$,
    ]).subscribe(
      ([
        players,
        currentPlayerIndex,
        currentPuzzle,
        guess,
        wrongGuess,
        turnTime,
        round,
        ringSize,
      ]) => {
        this.server.to(String(this.id)).emit('gameState', {
          roomId: this.id,
          players,
          currentPlayer: players?.[currentPlayerIndex],
          currentPuzzle,
          guess,
          wrongGuess,
          turnTime,
          round,
          ringSize,
        });
      },
    );
  }

  private nextPuzzle(puzzleId?: number) {
    let puzzle: Puzzle | undefined;
    if (!puzzleId) {
      puzzle = this.puzzles.at(0);
    } else {
      puzzle = this.puzzles.find((p) => p.id === puzzleId);
    }
    if (!puzzle) throw new Error('Puzzle not found');

    this.puzzles = this.puzzles.filter((p) => p.id !== puzzle.id);
    this.currentPuzzle$.next(puzzle);
  }

  private switchCurrentPlayer() {
    this.currentPlayerIndex$.next(this.currentPlayerIndex$.value === 0 ? 1 : 0);
  }

  private addScore() {
    const currentPlayerIndex = this.currentPlayerIndex$.value;
    //works with only two players!!
    const winnerPlayerIndex = this.wrongGuess$.value
      ? 1 - currentPlayerIndex
      : currentPlayerIndex;

    if (this.players$.value === null) throw new Error('No players in the room');
    const roundWinner = this.players$.value[winnerPlayerIndex];
    roundWinner.score += 1;
    this.players$.next([...this.players$.value]);
  }

  private emitCheckedGuess(isCorrect: boolean) {
    const isStealTurn = this.isStealTurn();
    const solution = {
      x: this.currentPuzzle$.value?.targetPositionX,
      y: this.currentPuzzle$.value?.targetPositionY,
      size: this.currentPuzzle$.value?.targetRadius,
    };
    this.server.to(String(this.id)).emit('checkedGuess', {
      isCorrect,
      solution: isStealTurn || isCorrect ? solution : null,
      wrongGuess: isCorrect ? null : this.guess$.value,
    });
  }

  private isCorrect(guess: Guess, puzzle: Puzzle) {
    const { targetPositionX, targetPositionY, targetRadius } = puzzle;
    const distance = Math.sqrt(
      Math.pow(guess.x - targetPositionX, 2) +
        Math.pow(guess.y - targetPositionY, 2),
    );
    return (
      Math.abs(guess.size - targetRadius) < distance &&
      distance < guess.size + targetRadius
    );
  }

  private endTurn() {
    this.clearTimer();
    this.guess$.next(null);
    this.wrongGuess$.next(null);
    this.switchCurrentPlayer();
    if (this.round$.value >= this.maxRounds) {
      this.endGame();
      return;
    }
    this.round$.next(this.round$.value + 1);
    this.ringSize$.next(RING_SIZES[this.round$.value - 1]);
  }

  private endGame() {
    const players = this.players$.value;
    if (!players) throw new Error('No players in the room');
    const [winner, loser] = players.sort((a, b) => b.score - a.score);
    this.server.to(winner.id).emit('gameOver', {
      message: 'You won!',
      isWin: true,
      score: winner.score,
    });
    this.server.to(loser.id).emit('gameOver', {
      message: 'You lost!',
      isWin: false,
      score: loser.score,
    });
  }
}
