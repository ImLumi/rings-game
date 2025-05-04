import {
  createFileRoute,
  useLoaderData,
  useNavigate,
} from '@tanstack/react-router';
import Combobox from './-components/Combobox';
import { useObservable } from '@legendapp/state/react';
import { PuzzleDto } from '../../api/puzzle/puzzle.interface';
import { getPuzzles } from '../../api/puzzle/puzzleApi';
import { getUsers } from '../../api/user/userApi';
import { UserDto } from '../../api/user/user.interface';
import { createGame } from '../../api/puzzle/gameApi';
import { adminstore$ } from '../../states/admin.state';

export const Route = createFileRoute('/admin/game')({
  component: RouteComponent,
  loader: async () => ({
    puzzles: await getPuzzles(),
    users: await getUsers(),
  }),
});

function RouteComponent() {
  const { puzzles, users } = useLoaderData({ from: '/admin/game' });
  const navigate = useNavigate();
  const selected$ = useObservable<PuzzleDto[]>([]);
  const firstPlayer$ = useObservable<UserDto | null>(null);
  const secondPlayer$ = useObservable<UserDto | null>(null);
  const puzzles$ = useObservable(puzzles);
  const users$ = useObservable(users);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const selectedPuzzles = selected$.get();
    const firstPlayer = firstPlayer$.get();
    const secondPlayer = secondPlayer$.get();
    if (!firstPlayer || !secondPlayer) {
      alert('Please select both players');
      return;
    }
    if (firstPlayer.id === secondPlayer.id) {
      alert('Players must be different');
      return;
    }
    if (selectedPuzzles.length < 5) {
      alert('Please select at least 5 puzzles');
      return;
    }
    const room = await createGame({
      puzzles: puzzles.map((p) => p.id),
      players: [firstPlayer.id, secondPlayer.id],
    });
    adminstore$.roomState.set(room);
    navigate({ to: '/admin/game/$roomId', params: { roomId: room.id } });
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-white">Admin</h1>
      <p className="text-sm">This is the admin page</p>
      <form
        className="flex flex-col flex-wrap items-center gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap gap-5">
          <Combobox
            label="first Player:"
            options$={users$}
            selected$={firstPlayer$}
            optionKey={'id'}
            filterKey={'name'}
          />
          <Combobox
            multiple
            label="puzzles:"
            options$={puzzles$}
            selected$={selected$}
            optionKey="id"
            filterKey="taskText"
          />
          <Combobox
            label="second Player:"
            options$={users$}
            selected$={secondPlayer$}
            optionKey={'id'}
            filterKey={'name'}
          />
        </div>
        <button
          type="submit"
          className="btn-secondary text-primary w-40 border-2 border-black"
        >
          Create game
        </button>
      </form>
    </>
  );
}
