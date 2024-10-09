import {useGetActiveIncidents} from "@/api/incidents/incidentsQueries.tsx";

const ActiveIncidentListTab = () => {
  const { data: incidents } = useGetActiveIncidents();

  return (
    <div className="flex flex-col gap-2 w-full">
      {incidents?.map((incident) => (
        <div>{incident.description}</div>
      ))}
    </div>
  );
};

export { ActiveIncidentListTab };
