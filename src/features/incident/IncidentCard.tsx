import {getRouteApi} from "@tanstack/react-router";
import {useGetOneIncident, useUpdateIncident} from "@/api/incidents/incidentsQueries.ts";
import {LabeledInput} from "@/lib/components/LabeledInput.tsx";
import {useEffect, useState} from "react";
import {Button} from "@/lib/components/ui/button.tsx";
import {Incident} from "@/lib/models/Incident.ts";
import {IncidentPrioritySelect} from "@/features/incident/IncidentPrioritySelect.tsx";
import {DangerClassSelect} from "@/features/incident/DangerClassSelect.tsx";
import {IncidentStatusSelect} from "@/features/incident/IncidentStatusSelect.tsx";
import {LabeledTextarea} from "@/lib/components/LabeledTextarea.tsx";

const route = getRouteApi('/_authenticated/dashboard');

const IncidentCard = () => {
  const search = route.useSearch();

  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(0);
  const [dangerClass, setDangerClass] = useState(0);
  const [status, setStatus] = useState(0);
  const [address, setAddress] = useState("");

  const { data: incident, isLoading } = useGetOneIncident(search.incident);
  const { mutate } = useUpdateIncident(search.incident);

  useEffect(() => {
    if (incident) {
      setDescription(incident.description);
      setPriority(incident.priority);
      setDangerClass(incident.danger_class);
      setStatus(incident.status);
      setAddress(incident.address);
    }
  }, [incident]);

  const handleUpdate = () => {
    const dto: Partial<Incident> = {
      description: description !== incident?.description ? description : undefined,
      priority: priority !== incident?.priority ? priority : undefined,
      danger_class: dangerClass !== incident?.danger_class ? dangerClass : undefined,
      status: status !== incident?.status ? status : undefined,
      address: address !== "" ? address : undefined,
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

        <IncidentPrioritySelect value={priority} onBlur={handleUpdate} onChange={setPriority} />

        <DangerClassSelect value={dangerClass} onBlur={handleUpdate} onChange={setDangerClass} />

        <IncidentStatusSelect value={status} onBlur={handleUpdate} onChange={setStatus} />

        <LabeledTextarea label="Адрес" value={address} onBlur={handleUpdate} onChange={setAddress}/>
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
