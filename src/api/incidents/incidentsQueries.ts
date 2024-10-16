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
  onMutate: async (dto: Partial<Incident>) => {
    await queryClient.cancelQueries({queryKey: queryKeys.incidents});

    const previousIncidentData = queryClient.getQueryData(queryKeys.incidentsOne(id));

    queryClient.setQueryData(queryKeys.incidentsOne(id), (old: Incident) => ({...old, ...dto}));

    return {previousIncidentData};
  },
  onError: (_err, _newData, context) => {
    queryClient.setQueryData(queryKeys.incidentsOne(id), context?.previousIncidentData);
  },
  onSettled: () => {
    queryClient.invalidateQueries({queryKey: queryKeys.incidents});
  },
});
