import {useMutation, useQuery} from "@tanstack/react-query";
import {queryKeys} from "@/api/queryKeys.ts";
import {incidentsApi} from "@/api/incidents/IncidentsApi.ts";
import {Incident} from "@/lib/models/Incident.ts";
import {queryClient} from "@/api/queryClient.ts";

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

export const useUpdateIncident = (id: number | undefined) => useMutation({
  mutationFn: (dto: Partial<Incident>) => incidentsApi.update(id, dto),
  onSettled: () => {
    queryClient.invalidateQueries({queryKey: queryKeys.incidents});
  },
});

export const useCreateEmptyIncident = (operatorId: number) => useMutation({
  mutationFn: () => incidentsApi.createEmpty(operatorId),
  onSettled: (incident) => {
    if (incident) {
      queryClient.setQueryData<Incident>(queryKeys.incidentsOne(incident.id), incident);

      queryClient.invalidateQueries({ queryKey: queryKeys.incidents });
    }
  },
});
