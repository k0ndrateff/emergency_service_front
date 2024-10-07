import {baseApi} from "@/api/BaseApi.ts";
import {apiRoutes} from "@/api/ApiRoutes.ts";
import {Operator} from "@/lib/models/Operator.ts";
import {CreateOperatorDto} from "@/lib/models/CreateOperatorDto.ts";

class OperatorsApi {
  getAll = async (): Promise<Operator[]> => {
    try {
      const result = await baseApi.get(apiRoutes.operators);

      return result.data;
    }
    catch(error) {
      throw new Error(`Failed to get all operators: ${error}`);
    }
  };

  getOne = async (id: number): Promise<Operator> => {
    try {
      const result = await baseApi.get(`${apiRoutes.operator}${id}`);

      return result.data;
    }
    catch(error) {
      throw new Error(`Failed to get operator ${id}: ${error}`);
    }
  };

  create = async (dto: CreateOperatorDto): Promise<Operator> => {
    try {
      const result = await baseApi.post(apiRoutes.operators, dto);

      return result.data;
    }
    catch(error) {
      throw new Error(`Failed to create operator: ${error}`);
    }
  };
}

export const operatorsApi = new OperatorsApi();
