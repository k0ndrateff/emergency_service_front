import mapboxgl, { Map as MapboxMap } from "mapbox-gl";
import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

const MainMap = () => {
  const mapRef = useRef<MapboxMap>();
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiazBuZHJhdGVmZiIsImEiOiJja2sycjJ2emkxM3MzMnZxc253ZGtveWI2In0.vV9nG1Cqb7OruzUmHKY0LQ";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLDivElement,
      center: [37.495, 55.668],
      zoom: 12.49,
      style: "mapbox://styles/mapbox/navigation-night-v1",
    });

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      id="map-container"
      className="w-full h-dvh min-h-dvh z-0"
    />
  );
};

export { MainMap };
