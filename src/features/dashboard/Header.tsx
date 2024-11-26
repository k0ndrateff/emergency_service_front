import {TimeDisplay} from "@/features/dashboard/TimeDisplay.tsx";
import {LogoutBlock} from "@/features/dashboard/LogoutBlock.tsx";
import {Button} from "@/lib/components/ui/button.tsx";
import {HelpCircleIcon} from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 h-fit w-full grid grid-cols-3 items-center justify-items-center z-10 bg-background p-3">
      <div className="justify-self-start">
        <Button variant="ghost" className="flex items-center">
          Справка
          <HelpCircleIcon className="pl-1.5 size-5" />
        </Button>
      </div>

      <div className="col-start-2">
        <TimeDisplay />
      </div>

      <div className="col-start-3 justify-self-end">
        <LogoutBlock />
      </div>
    </header>
  );
};

export { Header };
