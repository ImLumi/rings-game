import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center gap-5 p-5">
      <div className="bg-primary flex min-h-100 max-w-300 flex-col items-center rounded-2xl p-5 text-white shadow-2xl ring-2 ring-black">
        <div className="flex h-20 w-100 justify-between">
          <Link
            to="/admin/puzzle"
            className="[&.active]:text-secondary text-2xl font-bold"
          >
            Puzzles
          </Link>
          <Link
            to="/admin"
            className="[&.active]:text-secondary text-2xl font-bold"
          >
            Players
          </Link>
          <Link
            to="/admin/game"
            className="[&.active]:text-secondary text-2xl font-bold"
          >
            game
          </Link>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-10 p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
