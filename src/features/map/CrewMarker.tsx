import {AmbulanceIcon} from "@/assets";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/lib/components/ui/tooltip.tsx";

interface Props {
  number: number;
}

export const CrewMarker = (props: Props) => {
  const { number } = props;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="w-fit h-fit p-2 bg-background rounded">
            <AmbulanceIcon className="w-5"/>
          </div>
        </TooltipTrigger>

        <TooltipContent>
          {`№${number}`}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
