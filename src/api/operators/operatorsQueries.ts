import {queryOptions, useMutation, useQuery} from "@tanstack/react-query";
import {queryKeys} from "@/api/queryKeys.ts";
import {operatorsApi} from "@/api/operators/OperatorsApi.ts";
import {CreateOperatorDto} from "@/lib/models/CreateOperatorDto.ts";
import {queryClient} from "@/api/queryClient.ts";

export const getAllOperatorsQueryOptions = queryOptions({
  queryKey: queryKeys.operatorsAll(),
  queryFn: operatorsApi.getAll
});

export const useGetOneOperator = (id: number) => useQuery({
  queryKey: queryKeys.operatorsOne(id),
  queryFn: () => operatorsApi.getOne(id)
});

export const useCreateOperator = () => useMutation({
  mutationFn: (name: string) => {
    const splittedName = name.split(" ");

    const dto: CreateOperatorDto = {
      first_name: splittedName[0],
      last_name: splittedName[1],
      middle_name: splittedName[2],
    };

    return operatorsApi.create(dto);
  },
  onSettled: async () => {
    await queryClient.invalidateQueries({ queryKey: queryKeys.operators });
  }
});
