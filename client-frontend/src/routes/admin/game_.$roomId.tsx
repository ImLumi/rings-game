import { createFileRoute } from '@tanstack/react-router';
import { socket } from '../../socket';
import { adminstore$ } from '../../states/admin.state';
import { use$ } from '@legendapp/state/react';
import ClipboardBox from './-components/ClipboardBox';
import { store$ } from '../../states/game.state';
import { useEffect } from 'react';
import Gamefloor from '../../components/Gamefloor';
import { mergeIntoObservable } from '@legendapp/state';

const GAME_ACTIONS = {
  START: 'start',
  NEXT: 'next',
  CHECK: 'check',
  STEAL: 'steal',
};

export const Route = createFileRoute('/admin/game_/$roomId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { roomId } = Route.useParams();
  const roomState = use$(adminstore$.roomState);
  const gameState = use$(store$.gameState);

  useEffect(() => {
    socket.emit('admin', { roomId });
    socket.emit('admin-room-status', roomId, () => {
      console.log('admin-room-status callback');
    });
    socket.on('admin-puzzle', (data) => {
      mergeIntoObservable(store$.gameState.solution, data.puzzle);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Game Room: {roomId}</h1>
      <div className="flex h-20 w-100 justify-between">
        {roomState.inviteCodes.map((code) => (
          <div key={code?.inviteCode} className="text-xl font-bold">
            {code.playerName} :
            <ClipboardBox text={code.inviteCode} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-10 p-5">
        {Object.values(GAME_ACTIONS).map((action) => (
          <button
            key={action}
            className="btn-secondary text-black"
            onClick={() => {
              socket.emit('admin', { roomId, action });
            }}
          >
            {action.charAt(0).toUpperCase() + action.slice(1)}
          </button>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold">Game State</h2>
        <div className="flex flex-wrap items-center gap-10 p-5">
          <p>current player: {gameState.currentPlayer?.name}</p>
          <p>
            turn time: <span>{gameState.turnTime}</span>
          </p>
          <p>round: {gameState.round}</p>
          <p>has wrong guess: {gameState.isWrongGuess}</p>
          {gameState.currentPuzzle && (
            <Gamefloor
              puzzle$={store$.gameState.currentPuzzle}
              wrongGuess$={store$.gameState.wrongGuess}
              guess$={store$.gameState.guess}
              solution$={store$.gameState.solution}
              ringSize={gameState.ringSize || 100}
            />
          )}
        </div>
      </div>
    </div>
  );
}
