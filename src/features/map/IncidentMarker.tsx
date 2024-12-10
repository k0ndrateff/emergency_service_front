import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/lib/components/ui/tooltip.tsx";
import {getPriorityColor} from "@/lib/helpers/getPriorityColor.ts";
import {Incident} from "@/lib/models/Incident.ts";

interface Props {
  incident: Incident;
}

export const IncidentMarker = (props: Props) => {
  const { incident } = props;

  const priorityColor = getPriorityColor(incident.priority);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className={`w-6 h-6 ${priorityColor} border border-accent rounded-full`} />
        </TooltipTrigger>

        <TooltipContent>
          {incident.description}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
