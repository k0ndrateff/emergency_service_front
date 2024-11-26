import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/help')({
  component: Help,
})

function Help() {
  return (
    <div>Help page!</div>
  );
}
