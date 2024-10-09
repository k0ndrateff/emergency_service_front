import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "@/api/queryKeys.ts";
import {incidentsApi} from "@/api/incidents/IncidentsApi.ts";

export const useGetActiveIncidents = () => useQuery({
  queryKey: queryKeys.incidentsActive(),
  queryFn: incidentsApi.getActive
});
