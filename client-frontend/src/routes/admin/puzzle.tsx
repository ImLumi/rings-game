import { createFileRoute, useLoaderData } from '@tanstack/react-router';
import Gamefloor from '../../components/Gamefloor';
import { For, useObservable } from '@legendapp/state/react';
import { Guess, Puzzle } from '../../states/game.state';
import { MdControlPoint, MdDeleteForever } from 'react-icons/md';
import { getPuzzles } from '../../api/puzzle/puzzleApi';

export const Route = createFileRoute('/admin/puzzle')({
  component: RouteComponent,
  loader: getPuzzles,
});

function RouteComponent() {
  const puzzles = useLoaderData({ from: '/admin/puzzle' });
  const puzzles$ = useObservable<{ puzzle: Puzzle; solution: Guess }[]>(
    puzzles.map((puzzle) => ({
      puzzle: { taskText: puzzle.taskText, url: puzzle.imageUrl },
      solution: {
        x: puzzle.targetPositionX,
        y: puzzle.targetPositionY,
        size: puzzle.targetRadius,
      },
    })),
  );
  console.log('puzzles', puzzles);

  return (
    <div className="flex flex-row flex-wrap items-center gap-10 p-5">
      <div className="hover:bg-primary-light relative flex max-w-[298px] flex-1/2 flex-col gap-2 overflow-hidden rounded-2xl p-5 shadow-2xl ring-2 transition-all duration-200">
        <h1 className="text-2xl font-bold text-white">Add new puzzle</h1>
        <div className="flex h-[258px] w-[258px] items-center justify-center">
          <MdControlPoint fill="white" size={200} />
        </div>
      </div>
      <For each={puzzles$}>
        {(puzzle) => (
          <div className="bg-primary hover:bg-primary/70 relative flex max-w-[298px] flex-1/2 flex-col gap-2 overflow-hidden rounded-2xl p-5 shadow-2xl ring-2 transition-all duration-200">
            <div className="absolute top-0 right-0 rounded-bl-2xl bg-white pe-2 pt-1">
              <button className="cursor-pointer ps-2 font-extrabold text-red-700 transition-all duration-200 hover:ps-5 hover:text-2xl">
                <MdDeleteForever size={25} />
              </button>
            </div>
            <h1 className="text-2xl font-bold text-white">
              {puzzle.puzzle.taskText.get()}
            </h1>
            <div className="h-[258px] w-[258px]">
              <Gamefloor
                puzzle$={puzzle.puzzle}
                solution$={puzzle.solution}
                className="box-border w-fit origin-top-left scale-50 rounded-full border-8 border-white"
              />
            </div>
          </div>
        )}
      </For>
    </div>
  );
}
