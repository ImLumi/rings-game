import { createFileRoute } from '@tanstack/react-router';
import Gamefloor from '../components/Gamefloor';
import { store$ } from '../states/game.state';
import { Memo, use$, useObservable } from '@legendapp/state/react';
import { useEffect } from 'react';
import { socket } from '../socket';

export const Route = createFileRoute('/game_/$inviteCode')({
  component: RouteComponent,
});

function RouteComponent() {
  const { inviteCode } = Route.useParams();
  // const gameState = use$(store$.gameState);
  // const thisPlayer = use$(store$.player);
  const isGuessing = use$(store$.gameState.isGuessing);
  const ringSize = use$(store$.gameState.ringSize);
  const otherPlayer = useObservable(
    () =>
      store$.gameState.players?.filter(
        (p) => p.id.get() !== store$.player.id.get(),
      )[0],
  );

  useEffect(() => {
    if (!store$.isJoined.get()) {
      socket.emit('join', inviteCode);
    }
  }, [inviteCode]);

  // const
  return (
    <div className="flex flex-col items-center gap-5 p-5">
      <div className="bg-primary flex w-fit flex-col items-center justify-center rounded-2xl p-5 text-white shadow-2xl ring-2 ring-black">
        <Memo>
          {() => (
            <>
              <h1 className="text-2xl font-bold">
                round {store$.gameState.round.get()}
              </h1>
              <div className="flex w-full justify-around">
                <div className="flex flex-col">
                  <p>you ({store$.player.name.get()})</p>
                  <p>{store$.player.score.get()}</p>
                </div>
                <div className="flex flex-col">
                  <p>{otherPlayer?.name.get()}</p>
                  <p>{otherPlayer?.score.get()}</p>
                </div>
              </div>
              <div>time: {store$.gameState.turnTime.get()}</div>
              <div>{store$.gameState.currentPuzzle?.taskText.get()}</div>
            </>
          )}
        </Memo>
        <Gamefloor
          puzzle$={store$.gameState.currentPuzzle}
          guess$={isGuessing ? store$.player.guess : store$.gameState.guess}
          wrongGuess$={store$.gameState.wrongGuess}
          solution$={store$.gameState.solution}
          ringSize={ringSize || 100}
          isMovableRing={isGuessing}
        />
      </div>
    </div>
  );
}
