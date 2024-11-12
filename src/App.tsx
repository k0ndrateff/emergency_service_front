import {useAuth} from "@/lib/hooks/useAuth.ts";
import {RouterProvider} from "@tanstack/react-router";
import {router} from "@/router.ts";
import {AuthContext} from "@/lib/context/AuthContext.ts";
import {useMap} from "@/lib/hooks/useMap.ts";
import {MapContext} from "@/lib/context/MapContext.ts";

export const App = () => {
  const authCtx = useAuth();
  const mapCtx = useMap();

  return (
    <AuthContext.Provider value={authCtx}>
      <MapContext.Provider value={mapCtx}>
        <RouterProvider router={router} context={authCtx} />
      </MapContext.Provider>
    </AuthContext.Provider>
  );
};
