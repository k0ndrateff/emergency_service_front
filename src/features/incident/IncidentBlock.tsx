import {Incident} from "@/lib/models/Incident.ts";
import {getPriorityColor} from "@/lib/helpers/getPriorityColor.ts";

interface Props {
  incident: Incident;
}

const IncidentBlock = (props: Props) => {
  const { incident } = props;

  const priorityColor = getPriorityColor(incident.priority);

  const startDate = new Intl.DateTimeFormat('ru-RU', {
    timeStyle: 'short',
    timeZone: 'Europe/Moscow',
  }).format(new Date(incident.start_time));

  return (
    <div className="w-full flex items-center gap-3 rounded py-1.5 pl-1.5 pr-3 hover:bg-slate-900/90 active:bg-slate-900/80 cursor-pointer">
      <div className={`w-0.5 h-full min-h-4 rounded-sm ${priorityColor} shrink-0`} />

      <div className="w-full flex items-baseline justify-between">
        <span className="truncate">{incident.description}</span>

        <span className="text-slate-400 text-xs">{startDate}</span>
      </div>
    </div>
  );
};

export {IncidentBlock };