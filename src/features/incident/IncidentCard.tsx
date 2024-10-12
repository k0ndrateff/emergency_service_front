import {getRouteApi} from "@tanstack/react-router";
import {useGetOneIncident} from "@/api/incidents/incidentsQueries.ts";

const route = getRouteApi('/_authenticated/dashboard');

const IncidentCard = () => {
  const search = route.useSearch();

  const { data: incident, isLoading } = useGetOneIncident(search.incident);

  if (isLoading) {
    return null;
  }

  if (!search.incident || !incident) {
    return <span>Вызов не выбран</span>;
  }

  return (
    <span>{ incident.description }</span>
  );
};

export { IncidentCard };
