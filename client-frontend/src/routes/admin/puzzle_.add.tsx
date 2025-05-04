import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/puzzle_/add')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex">
      <form></form>
    </div>
  );
}
