import mapboxgl, {Map as MapboxMap, Marker} from "mapbox-gl";
import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import {useGetCrewsGeoCoded} from "@/api/crew/crewQueries.ts";
import {createRoot} from "react-dom/client";
import {HospitalMarker} from "@/features/map/HospitalMarker.tsx";
import {useMapContext} from "@/lib/context/MapContext.ts";
import {CrewMarker} from "@/features/map/CrewMarker.tsx";

const MainMap = () => {
  const { setMapRef } = useMapContext();

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

    setMapRef(mapRef.current);

    return () => {
      mapRef.current?.remove();
      setMapRef(null);
    };
  }, [setMapRef]);

  useEffect(() => {
    if (crewsGeoCoded && mapRef.current) {
      crewsGeoCoded.forEach(crew => {
        const baseMarkerNode = document.createElement("div");

        const baseRoot = createRoot(baseMarkerNode);
        baseRoot.render(<HospitalMarker address={crew.base_address} />);

        new Marker(baseMarkerNode)
          .setLngLat([Number(crew.base_geo?.lon), Number(crew.base_geo?.lat)])
          .addTo(mapRef.current as MapboxMap);

        if (crew.current_lat && crew.current_lon) {
          const crewMarkerNode = document.createElement("div");

          const crewRoot = createRoot(crewMarkerNode);
          crewRoot.render(<CrewMarker number={crew.id} />);

          new Marker(crewMarkerNode)
            .setLngLat([Number(crew.current_lon), Number(crew.current_lat)])
            .addTo(mapRef.current as MapboxMap);
        }
      });
    }
  }, [crewsGeoCoded, mapRef]);

  return (
    <div
      ref={mapContainerRef}
      id="map-container"
      className="w-full h-dvh min-h-dvh z-0"
    />
  );
};

export { MainMap };
