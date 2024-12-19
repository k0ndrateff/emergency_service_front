import {RefObject, useEffect} from "react";
import {Map as MapboxMap, Marker} from 'mapbox-gl';
import {useGetCrewsGeoCoded} from "@/api/crew/crewQueries.ts";
import {useGetIncidentsGeoCoded} from "@/api/incidents/incidentsQueries.ts";
import {createRoot} from "react-dom/client";
import {HospitalMarker} from "@/features/map/HospitalMarker.tsx";
import {CrewMarker} from "@/features/map/CrewMarker.tsx";
import {IncidentMarker} from "@/features/map/IncidentMarker.tsx";

export const useMapMarkers = (mapRef: RefObject<MapboxMap | null>) => {
  const { data: crewsGeoCoded } = useGetCrewsGeoCoded();
  const { data: incidentsGeoCoded } = useGetIncidentsGeoCoded();

  useEffect(() => {
    if (crewsGeoCoded && mapRef?.current) {
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

  useEffect(() => {
    if (incidentsGeoCoded && mapRef?.current) {
      incidentsGeoCoded.forEach(incident => {
        if (incident.address_geo) {
          const incidentMarkerNode = document.createElement("div");

          const incidentRoot = createRoot(incidentMarkerNode);
          incidentRoot.render(<IncidentMarker incident={incident} />);

          new Marker(incidentMarkerNode)
            .setLngLat([Number(incident.address_geo.lon), Number(incident.address_geo.lat)])
            .addTo(mapRef.current as MapboxMap);
        }
      });
    }
  }, [incidentsGeoCoded, mapRef]);
};
