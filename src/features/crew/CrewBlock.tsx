import {Crew} from "@/lib/models/Crew.ts";

interface Props {
  crew: Crew;
}

const CrewBlock = (props: Props) => {
  const { crew } = props;

  return (
    <div className="w-full flex items-center gap-3 rounded py-1.5 pl-1.5 pr-3 hover:bg-slate-900/90 active:bg-slate-900/80 cursor-pointer">
      <div className="w-full flex items-baseline justify-between">
        <span className="truncate">{crew.type}</span>

        <span className="text-slate-400 text-xs">{crew.status}</span>
      </div>
    </div>
  );
};

export { CrewBlock };
