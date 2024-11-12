import {useState} from "react";
import { Map as MapboxMap } from "mapbox-gl";

export interface MapContextInterface {
  mapRef: MapboxMap | null;
  setMapRef: (ref: MapboxMap | null) => void;
}

export const useMap = (): MapContextInterface => {
  const [mapRef, setMapRef] = useState<MapboxMap | null>(null);

  return { mapRef, setMapRef };
};
