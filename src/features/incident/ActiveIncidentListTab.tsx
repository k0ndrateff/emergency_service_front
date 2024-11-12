import {useCreateEmptyIncident, useGetActiveIncidents} from "@/api/incidents/incidentsQueries.ts";
import {IncidentBlock} from "@/features/incident/IncidentBlock.tsx";
import {Button} from "@/lib/components/ui/button.tsx";
import {useAuth} from "@/lib/hooks/useAuth.ts";
import {getRouteApi} from "@tanstack/react-router";
import {BlockSkeleton} from "@/lib/components/BlockSkeleton.tsx";

const route = getRouteApi('/_authenticated/dashboard');

const ActiveIncidentListTab = () => {
  const { userId } = useAuth();
  const navigate = route.useNavigate();

  const { data: incidents, isLoading: areIncidentsLoading } = useGetActiveIncidents();
  const { mutateAsync: createEmptyIncident, isPending: isCreatingIncident } = useCreateEmptyIncident(userId ?? 0);

  const handleCreateIncident = async () => {
    const incident = await createEmptyIncident();

    if (incident)
      navigate({ search: { incident: incident.id } });
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-2 w-full overflow-y-auto">
        {areIncidentsLoading &&
          Array.from({ length: 5 }).map((_, idx) => (
            <BlockSkeleton key={idx} />
          ))
        }

        {!areIncidentsLoading && !incidents?.length && (
          <div className="w-full min-h-full flex items-center justify-center">
            <span className="text-slate-400 text-sm">Нет активных вызовов</span>
          </div>
        )}

        {!areIncidentsLoading && incidents?.map((incident) => (
          <IncidentBlock key={incident.id} incident={incident}/>
        ))}
      </div>

      <div className="w-full pb-11">
        <Button className="w-full" disabled={isCreatingIncident} onClick={handleCreateIncident}>
          Новый вызов
        </Button>
      </div>
    </div>
  );
};

export {ActiveIncidentListTab};
