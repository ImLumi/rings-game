import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { $React } from '@legendapp/state/react-web';
import { use$ } from '@legendapp/state/react';
import { useObservable } from '@legendapp/state/react';
import { socket } from '../socket';
import { store$ } from '../states/game.state';
import { when } from '@legendapp/state';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const inviteCode$ = useObservable('');
  const player = use$(store$.player);
  const isJoined = use$(store$.isJoined);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {!isJoined && (
        <h1 className="font-montesarrat relative mb-5 text-3xl">
          <span className="text-primary text-4xl font-bold">Welcome</span>
          <br />
          rings game
        </h1>
      )}
      {isJoined && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl">You are already in a game</h2>
          <p className="text-sm">
            Hello {player.name} your id: {player.id}
          </p>
        </div>
      )}
      <div className="max-w-400">
        <form
          className="flex flex-col items-center justify-center gap-2 p-3"
          onSubmit={async (e) => {
            e.preventDefault();
            socket.emit('join', inviteCode$.get());
            await when(store$.isJoined);
            navigate({ to: `/game/${inviteCode$.get()}` });
          }}
        >
          <$React.input
            className="input-primary"
            $value={inviteCode$}
            placeholder="Enter invite code"
          />
          <$React.button
            className="btn-primary-outline"
            type="submit"
            onClick={() => {
              console.log('invite code:', inviteCode$.get());
            }}
          >
            Send
          </$React.button>
        </form>
      </div>
    </div>
  );
}
