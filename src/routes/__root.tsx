import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="bg-background w-full min-h-dvh">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
