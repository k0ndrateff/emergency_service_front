import {useAuth} from "@/lib/hooks/useAuth.ts";
import {RouterProvider} from "@tanstack/react-router";
import {router} from "@/router.ts";
import {AuthContext} from "@/lib/context/AuthContext.ts";

export const App = () => {
  const authCtx = useAuth();

  return (
    <AuthContext.Provider value={authCtx}>
      <RouterProvider router={router} context={authCtx} />
    </AuthContext.Provider>
  );
};
