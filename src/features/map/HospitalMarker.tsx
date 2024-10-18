import {HospitalIcon} from "@/assets";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/lib/components/ui/tooltip.tsx";

interface Props {
  address: string;
}

export const HospitalMarker = (props: Props) => {
  const { address } = props;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="w-fit h-fit p-2 bg-background rounded">
            <HospitalIcon className="w-5"/>
          </div>
        </TooltipTrigger>

        <TooltipContent>
          {address}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
