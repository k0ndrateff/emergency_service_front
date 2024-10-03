import {createRootRouteWithContext, Outlet} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import {AuthContextInterface} from "@/lib/hooks/useAuth.ts";

export const Route = createRootRouteWithContext<AuthContextInterface>()({
  component: () => (
    <div className="bg-background w-full min-h-dvh">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
