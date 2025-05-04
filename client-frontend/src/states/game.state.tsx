import { observable, mergeIntoObservable } from '@legendapp/state';
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
  size: number;
}

export interface GameState {
  players: Player[] | null;
  currentPlayer: Player | null;
  currentPuzzle: Puzzle | null;
  guess: Guess | null;
  wrongGuess: Guess | null;
  turnTime: number;
  isWrongGuess: boolean | null;
  isCorrect: boolean | null;
  isGameOver: boolean | null;
  isYourTurn: boolean | null;
  isStealTurn: boolean | null;
  solution: Guess | null;
  round: number | null;
  guessSize: number | null;
}

interface Store {
  gameState: GameState;
  player: LocalPlayer;
  isJoined: boolean;
}

export const store$ = observable<Store>({
  gameState: {
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
    guessSize: null,
    isYourTurn: (): boolean =>
      store$.gameState.currentPlayer?.id.get() === store$.player.id.get(),
    isStealTurn: (): boolean =>
      !store$.gameState.isYourTurn.get() && store$.gameState.isWrongGuess.get(),
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
socket.on('gameState', (gameState: GameState) =>
  mergeIntoObservable(store$.gameState, gameState),
);
socket.on('checkedGuess', (correctGuess: CorrectGuessDto) => {
  mergeIntoObservable(store$.gameState, correctGuess);
});
