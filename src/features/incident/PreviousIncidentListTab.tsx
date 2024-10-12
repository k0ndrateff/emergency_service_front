import {useGetPreviousIncidents} from "@/api/incidents/incidentsQueries.ts";
import {IncidentBlock} from "@/features/incident/IncidentBlock.tsx";

const PreviousIncidentListTab = () => {
  const { data: incidents } = useGetPreviousIncidents();

  return (
    <div className="flex flex-col gap-2 w-full overflow-y-auto min-h-full">
      {!incidents?.length && (
        <div className="w-full min-h-full flex items-center justify-center">
          <span className="text-slate-400 text-sm">Нет прошедших вызовов</span>
        </div>
      )}

      {incidents?.map((incident) => (
        <IncidentBlock incident={incident}/>
      ))}
    </div>
  );
};

export { PreviousIncidentListTab };
