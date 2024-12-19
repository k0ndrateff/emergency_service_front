import mapboxgl, {Map as MapboxMap} from "mapbox-gl";
import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import {useMapContext} from "@/lib/context/MapContext.ts";
import {useMapMarkers} from "@/lib/hooks/useMapMarkers.tsx";

const MainMap = () => {
  const { setMapRef } = useMapContext();

  const mapRef = useRef<MapboxMap>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLDivElement,
      language: "ru-RU",
      center: [37.495, 55.668],
      zoom: 12.49,
      style: "mapbox://styles/mapbox/navigation-night-v1",
    });

    setMapRef(mapRef.current);

    return () => {
      mapRef.current?.remove();
      setMapRef(null);
    };
  }, [setMapRef]);

  useMapMarkers(mapRef);

  return (
    <div
      ref={mapContainerRef}
      id="map-container"
      className="w-full h-dvh min-h-dvh z-0"
    />
  );
};

export { MainMap };
