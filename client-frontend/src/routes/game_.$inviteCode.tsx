import { createFileRoute } from '@tanstack/react-router';
import Gamefloor from '../components/Gamefloor';
import { store$ } from '../states/game.state';
import { use$ } from '@legendapp/state/react';
import { useEffect } from 'react';
import { socket } from '../socket';

export const Route = createFileRoute('/game_/$inviteCode')({
  component: RouteComponent,
});

function RouteComponent() {
  const { inviteCode } = Route.useParams();
  const gameState = use$(store$.gameState);
  const thisPlayer = use$(store$.player);
  const isGuessing = use$(store$.gameState.isGuessing);
  const otherPlayer = gameState.players?.filter(
    (p) => p.id !== thisPlayer.id,
  )[0];

  useEffect(() => {
    if (!store$.isJoined.get()) {
      socket.emit('join', inviteCode);
    }
  }, [inviteCode]);

  // const
  return (
    <div>
      <h1 className="text-2xl font-bold">round {gameState.round}</h1>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>you ({thisPlayer.name})</p>
          <p>{thisPlayer.score}</p>
        </div>
        <div className="flex flex-col">
          <p>{otherPlayer?.name}</p>
          <p>{otherPlayer?.score}</p>
        </div>
      </div>
      <div>time: {gameState.turnTime}</div>
      <div>{gameState.currentPuzzle?.taskText}</div>
      <Gamefloor
        puzzle$={store$.gameState.currentPuzzle}
        guess$={isGuessing ? store$.player.guess : store$.gameState.guess}
        wrongGuess$={store$.gameState.wrongGuess}
        solution$={store$.gameState.solution}
        ringSize={gameState.ringSize || 100}
      />
    </div>
  );
}
