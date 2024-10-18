import mapboxgl, {Map as MapboxMap, Marker} from "mapbox-gl";
import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import {useGetCrewsGeoCoded} from "@/api/crew/crewQueries.ts";
import {createRoot} from "react-dom/client";
import {HospitalMarker} from "@/features/map/HospitalMarker.tsx";

const MainMap = () => {
  const mapRef = useRef<MapboxMap>();
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const { data: crewsGeoCoded } = useGetCrewsGeoCoded();

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiazBuZHJhdGVmZiIsImEiOiJja2sycjJ2emkxM3MzMnZxc253ZGtveWI2In0.vV9nG1Cqb7OruzUmHKY0LQ";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLDivElement,
      language: "ru-RU",
      center: [37.495, 55.668],
      zoom: 12.49,
      style: "mapbox://styles/mapbox/navigation-night-v1",
    });

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (crewsGeoCoded && mapRef.current) {
      crewsGeoCoded.forEach(crew => {
        const markerNode = document.createElement("div");

        // Use createRoot instead of ReactDOM.render
        const root = createRoot(markerNode);
        root.render(<HospitalMarker address={crew.base_address} />);

        new Marker(markerNode)
          .setLngLat([Number(crew.base_geo?.lon), Number(crew.base_geo?.lat)])
          .addTo(mapRef.current as MapboxMap);
      });
    }
  }, [crewsGeoCoded]);

  return (
    <div
      ref={mapContainerRef}
      id="map-container"
      className="w-full h-dvh min-h-dvh z-0"
    />
  );
};

export { MainMap };
