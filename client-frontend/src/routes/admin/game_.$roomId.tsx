import { createFileRoute, useLoaderData } from '@tanstack/react-router';
import { socket } from '../../socket';
import { adminstore$ } from '../../states/admin.state';
import { use$ } from '@legendapp/state/react';
import ClipboardBox from './-components/ClipboardBox';

const GAME_ACTIONS = {
  START: 'start',
  NEXT: 'next',
  CHECK: 'check',
  STEAL: 'steal',
};

export const Route = createFileRoute('/admin/game_/$roomId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const { roomId } = params;
    if (!roomId) {
      throw new Error('Room ID is required');
    }
    socket.emit('admin', { roomId });
    socket.emit('admin-room-status', roomId);
    return { roomId };
  },
});

function RouteComponent() {
  const { roomId } = useLoaderData({ from: '/admin/game_/$roomId' });
  const roomState = use$(adminstore$.roomState);

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
    </div>
  );
}
