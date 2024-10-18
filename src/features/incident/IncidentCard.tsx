import {getRouteApi} from "@tanstack/react-router";
import {useGetOneIncident, useUpdateIncident} from "@/api/incidents/incidentsQueries.ts";
import {LabeledInput} from "@/lib/components/LabeledInput.tsx";
import {useEffect, useState} from "react";

const route = getRouteApi('/_authenticated/dashboard');

const IncidentCard = () => {
  const search = route.useSearch();

  const [description, setDescription] = useState("");

  const { data: incident, isLoading } = useGetOneIncident(search.incident);
  const { mutate } = useUpdateIncident(search.incident);

  useEffect(() => {
    if (incident)
      setDescription(incident.description);
  }, [search.incident]);

  const handleChangeDescription = (value: string) => {
    setDescription(value);

    mutate({ description });
  }

  if (isLoading) {
    return null;
  }

  if (!search.incident || !incident) {
    return <span>Вызов не выбран</span>;
  }

  return (
    <div className="flex flex-col gap-4">
      <LabeledInput label="Описание" value={description} onChange={handleChangeDescription} />
    </div>
  );
};

export { IncidentCard };
