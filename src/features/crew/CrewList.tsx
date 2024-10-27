import {useGetCrews} from "@/api/crew/crewQueries.ts";
import {CrewBlock} from "@/features/crew/CrewBlock.tsx";

const CrewList = () => {
  const { data: crews } = useGetCrews();

  return (
    <div className="flex flex-col gap-2 w-full overflow-y-auto min-h-full">
      {!crews?.length && (
        <div className="w-full min-h-full flex items-center justify-center">
          <span className="text-slate-400 text-sm">Нет активных бригад</span>
        </div>
      )}

      {crews?.map((crew) => (
        <CrewBlock key={crew.id} crew={crew} />
      ))}
    </div>
  );
};

export { CrewList };
