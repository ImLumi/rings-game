import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { $React } from '@legendapp/state/react-web';
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

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="font-montesarrat relative mb-5 text-3xl">
        <span className="text-primary text-4xl font-bold">Welcome</span>
        <br />
        rings game
      </h1>
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
          <button className="btn-primary-outline" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
