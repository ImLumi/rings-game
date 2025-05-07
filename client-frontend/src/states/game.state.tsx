import { observable, mergeIntoObservable, observe } from '@legendapp/state';
import { socket } from '../socket';

// Type your Store interface
export interface Player {
  id: string;
  name: string;
  score: number;
}

export interface LocalPlayer extends Omit<Player, 'id'> {
  id: string | null;
  guess: Guess | null;
}

export interface Puzzle {
  taskText: string;
  url: string;
}

export interface Guess {
  x: number;
  y: number;
}

export interface Solution extends Guess {
  size: number;
}

export interface GameState {
  roomId: string | null;
  players: Player[] | null;
  currentPlayer: Player | null;
  currentPuzzle: Puzzle | null;
  guess: Guess | null;
  wrongGuess: Guess | null;
  turnTime: number;
  isWrongGuess: boolean;
  isCorrect: boolean | null;
  isGameOver: boolean | null;
  isYourTurn: boolean;
  isStealTurn: boolean;
  isGuessing: boolean;
  solution: Solution | null;
  round: number | null;
  ringSize: number | null;
}

interface Store {
  gameState: GameState;
  player: LocalPlayer;
  isJoined: boolean;
}

export const store$ = observable<Store>({
  gameState: {
    roomId: null,
    players: null,
    currentPlayer: null,
    currentPuzzle: null,
    guess: null,
    wrongGuess: null,
    turnTime: 0,
    isWrongGuess: (): boolean => store$.gameState.wrongGuess.get() !== null,
    isCorrect: null,
    isGameOver: null,
    solution: null,
    round: null,
    ringSize: null,
    isYourTurn: (): boolean =>
      store$.gameState.currentPlayer?.id.get() === store$.player.id.get(),
    isStealTurn: (): boolean =>
      !store$.gameState.isYourTurn.get() && store$.gameState.isWrongGuess.get(),
    isGuessing: (): boolean =>
      store$.gameState.isYourTurn.get() || store$.gameState.isStealTurn.get(),
  },
  player: {
    id: null,
    name: '--- Guest ---',
    score: 0,
    guess: null,
  },
  isJoined: (): boolean => store$.player.id.get() !== null,
});

type CorrectGuessDto = {
  isCorrect: boolean;
  solution: Guess | null;
  wrongGuess: Guess | null;
};

socket.on('joined', (player: LocalPlayer) =>
  mergeIntoObservable(store$.player, player),
);
socket.on('gameState', (gameState: GameState) => {
  store$.gameState.solution.set(null);
  mergeIntoObservable(store$.gameState, gameState);
});
socket.on('checkedGuess', (correctGuess: CorrectGuessDto) => {
  mergeIntoObservable(store$.gameState, correctGuess);
});

observe(() => {
  if (store$.gameState.isGuessing.get())
    socket.emit('guessing', {
      guess: store$.player.guess.get(),
      id: store$.player.id.get(),
    });
});
