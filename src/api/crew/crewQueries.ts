import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "@/api/queryKeys.ts";
import {crewApi} from "@/api/crew/crewApi.ts";

export const useGetCrews = () => useQuery({
  queryKey: queryKeys.crewsAll(),
  queryFn: crewApi.getAll
});

export const useGetCrewsGeoCoded = () => useQuery({
  queryKey: queryKeys.crewsAllGeoCoded(),
  queryFn: crewApi.getAllGeoCoded
});
