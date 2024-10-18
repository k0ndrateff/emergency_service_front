import {getRouteApi} from "@tanstack/react-router";
import {useGetOneIncident, useUpdateIncident} from "@/api/incidents/incidentsQueries.ts";
import {LabeledInput} from "@/lib/components/LabeledInput.tsx";
import {useEffect, useState} from "react";
import {Button} from "@/lib/components/ui/button.tsx";
import {Incident} from "@/lib/models/Incident.ts";

const route = getRouteApi('/_authenticated/dashboard');

const IncidentCard = () => {
  const search = route.useSearch();

  const [description, setDescription] = useState("");

  const { data: incident, isLoading } = useGetOneIncident(search.incident);
  const { mutate } = useUpdateIncident(search.incident);

  useEffect(() => {
    if (incident)
      setDescription(incident.description);
  }, [incident]);

  const handleUpdate = () => {
    const dto: Partial<Incident> = {
      description: description !== incident?.description ? description : undefined,
    };

    mutate(dto);
  }

  const handleMarkAsFake = () => {
    const now = new Date();

    mutate({ end_time: now.toISOString(), status: 4, priority: 4 });
  };

  const handleMarkAsSuccess = () => {
    const now = new Date();

    mutate({ end_time: now.toISOString(), status: 3, priority: 4 });
  };

  if (isLoading) {
    return null;
  }

  if (!search.incident || !incident) {
    return <span>Вызов не выбран</span>;
  }

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <LabeledInput label="Описание" value={description} onBlur={handleUpdate} onChange={setDescription}/>
      </div>

      {!incident.end_time && (
        <div className="flex flex-col gap-3 pb-11">
          <Button variant="success" onClick={handleMarkAsSuccess}>Завершить</Button>
          <Button variant="warning" onClick={handleMarkAsFake}>Пометить как ложный</Button>
        </div>
      )}
    </div>
  );
};

export {IncidentCard};
