import {Crew} from "@/lib/models/Crew.ts";
import {getCrewIcon} from "@/lib/helpers/getCrewIcon.tsx";

interface Props {
  crew: Crew;
}

const CrewBlock = (props: Props) => {
  const { crew } = props;

  return (
    <div className="w-full flex items-center gap-3 rounded py-1.5 pl-1.5 pr-3 hover:bg-slate-900/90 active:bg-slate-900/80 cursor-pointer">
      <div className="w-full flex items-baseline justify-between">
        <div className="flex items-center gap-2">
          <span>{`№${crew.id}`}</span>

          <div className="flex w-7 h-7">
            {getCrewIcon(crew.type)}
          </div>
        </div>

        <span className="text-slate-400 text-xs">{crew.status === 1 ? "Свободна" : crew.status}</span>
      </div>
    </div>
  );
};

export {CrewBlock };
