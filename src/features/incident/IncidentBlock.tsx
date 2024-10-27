import {Incident} from "@/lib/models/Incident.ts";
import {getPriorityColor} from "@/lib/helpers/getPriorityColor.ts";
import {getRouteApi} from "@tanstack/react-router";
import {cn} from "@/lib/utils/utils.ts";

const route = getRouteApi('/_authenticated/dashboard');

interface Props {
  incident: Incident;
}

const IncidentBlock = (props: Props) => {
  const { incident } = props;

  const navigate = route.useNavigate();
  const search = route.useSearch();

  const priorityColor = getPriorityColor(incident.priority);

  const startDate = new Intl.DateTimeFormat('ru-RU', {
    timeStyle: 'short',
    timeZone: 'Europe/Moscow',
  }).format(new Date(incident.start_time));

  const handleClick = () => {
    navigate({ search: { incident: incident.id } });
  };

  return (
    <div className={cn("w-full flex items-center gap-3 rounded py-1.5 pl-1.5 pr-3 hover:bg-slate-900/90" +
      " active:bg-slate-900/80 cursor-pointer", { "bg-slate-900/80": search.incident === incident.id })} onClick={handleClick}>
      <div className={`w-0.5 h-full min-h-4 rounded-sm ${priorityColor} shrink-0`} />

      <div className="w-full flex items-baseline justify-between gap-1.5">
        <span className="truncate">{incident.description}</span>

        <span className="text-slate-400 text-xs">{startDate}</span>
      </div>
    </div>
  );
};

export {IncidentBlock };
