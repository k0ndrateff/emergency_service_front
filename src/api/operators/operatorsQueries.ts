import {queryOptions} from "@tanstack/react-query";
import {queryKeys} from "@/api/queryKeys.ts";
import {operatorsApi} from "@/api/operators/OperatorsApi.ts";

export const getAllOperatorsQueryOptions = queryOptions({
  queryKey: queryKeys.operatorsAll(),
  queryFn: operatorsApi.getAll
});
