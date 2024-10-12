import {baseApi} from "@/api/BaseApi.ts";
import {apiRoutes} from "@/api/ApiRoutes.ts";
import {Crew} from "@/lib/models/Crew.ts";
import {CrewGeoCoded} from "@/lib/models/CrewGeoCoded.ts";

class CrewApi {
  getAll = async (): Promise<Crew[]> => {
    try {
      const result = await baseApi.get(apiRoutes.crews);

      return result.data;
    }
    catch(error) {
      throw new Error(`Failed to get crews: ${error}`);
    }
  };

  getAllGeoCoded = async (): Promise<CrewGeoCoded[]> => {
    try {
      const result = await baseApi.get(apiRoutes.crewsGeoCoded);

      return result.data;
    }
    catch(error) {
      throw new Error(`Failed to get crews geo coded: ${error}`);
    }
  };
}

export const crewApi = new CrewApi();
