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

  getPrevious = async (): Promise<Incident[]> => {
    try {
      const result = await baseApi.get(apiRoutes.incidentsPrevious);

      return result.data;
    }
    catch(error) {
      throw new Error(`Failed to get previous incidents: ${error}`);
    }
  };

  getOne = async (id: number | undefined): Promise<Incident | undefined> => {
    if (id === undefined) {
      return;
    }

    try {
      const result = await baseApi.get(`${apiRoutes.incident}${id}`);

      return result.data;
    }
    catch(error) {
      throw new Error(`Failed to get incident ${id}: ${error}`);
    }
  };
}

export const incidentsApi = new IncidentsApi();
