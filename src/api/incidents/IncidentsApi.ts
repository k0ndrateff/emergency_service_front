import {baseApi} from "@/api/BaseApi.ts";
import {apiRoutes} from "@/api/ApiRoutes.ts";
import {Incident} from "@/lib/models/Incident.ts";

class IncidentsApi {
  getActive = async (): Promise<Incident[]> => {
    try {
      const result = await baseApi.get(apiRoutes.incidentsActive);

      return result.data;
    }
    catch(error) {
      throw new Error(`Failed to get active incidents: ${error}`);
    }
  };
}

export const incidentsApi = new IncidentsApi();
