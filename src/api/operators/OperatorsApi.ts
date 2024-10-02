import {baseApi} from "@/api/BaseApi.ts";
import {apiRoutes} from "@/api/ApiRoutes.ts";
import {Operator} from "@/lib/models/Operator.ts";

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
}

export const operatorsApi = new OperatorsApi();
