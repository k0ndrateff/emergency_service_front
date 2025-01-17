import {useGetPreviousIncidents} from "@/api/incidents/incidentsQueries.ts";
import {IncidentBlock} from "@/features/incident/IncidentBlock.tsx";
import {BlockSkeleton} from "@/lib/components/BlockSkeleton.tsx";

const PreviousIncidentListTab = () => {
  const { data: incidents, isLoading } = useGetPreviousIncidents();

  return (
    <div className="flex flex-col gap-2 w-full overflow-y-auto min-h-full">
      {isLoading &&
        Array.from({ length: 5 }).map((_, idx) => (
          <BlockSkeleton key={idx} />
        ))
      }

      {!isLoading && !incidents?.length && (
        <div className="w-full min-h-full flex items-center justify-center">
          <span className="text-slate-400 text-sm">Нет прошедших вызовов</span>
        </div>
      )}

      {!isLoading && incidents?.map((incident) => (
        <IncidentBlock key={incident.id} incident={incident}/>
      ))}
    </div>
  );
};

export { PreviousIncidentListTab };
