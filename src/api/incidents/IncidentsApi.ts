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

  update = async (id: number | undefined, dto: Partial<Incident>): Promise<void> => {
    if (id === undefined) {
      return;
    }

    try {
      await baseApi.patch(`${apiRoutes.incident}${id}`, dto);
    }
    catch(error) {
      throw new Error(`Failed to update incident ${id}: ${error}`);
    }
  };

  createEmpty = async (operatorId: number): Promise<Incident> => {
    try {
      const response = await baseApi.post(apiRoutes.incident, {operatorId});

      return response.data;
    }
    catch(error) {
      throw new Error(`Failed to create empty incident: ${error}`);
    }
  };
}

export const incidentsApi = new IncidentsApi();
