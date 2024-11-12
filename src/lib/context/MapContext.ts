import {createContext, useContext} from "react";
import {MapContextInterface} from "@/lib/hooks/useMap.ts";

export const MapContext = createContext<MapContextInterface | null>(null);

export const useMapContext = (): MapContextInterface => {
  const ctx = useContext(MapContext);

  if (!ctx)
    throw new Error('useMapContext must be used inside of MapContextProvider');

  return ctx;
}
