import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "@/api/queryKeys.ts";
import {incidentsApi} from "@/api/incidents/IncidentsApi.ts";

export const useGetActiveIncidents = () => useQuery({
  queryKey: queryKeys.incidentsActive(),
  queryFn: incidentsApi.getActive
});

export const useGetPreviousIncidents = () => useQuery({
  queryKey: queryKeys.incidentsPrevious(),
  queryFn: incidentsApi.getPrevious
});

export const useGetOneIncident = (id: number | undefined) => useQuery({
  queryKey: queryKeys.incidentsOne(id),
  queryFn: () => incidentsApi.getOne(id),
  enabled: typeof id === "number"
});
