import {useGetActiveIncidents} from "@/api/incidents/incidentsQueries.ts";
import {IncidentBlock} from "@/features/incident/IncidentBlock.tsx";

const ActiveIncidentListTab = () => {
  const { data: incidents } = useGetActiveIncidents();

  return (
    <div className="flex flex-col gap-2 w-full overflow-y-auto min-h-full">
      {!incidents?.length && (
        <div className="w-full min-h-full flex items-center justify-center">
          <span className="text-slate-400 text-sm">Нет активных вызовов</span>
        </div>
      )}

      {incidents?.map((incident) => (
        <IncidentBlock key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export { ActiveIncidentListTab };
