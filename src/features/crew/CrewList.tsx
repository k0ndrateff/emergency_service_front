import {useGetCrews} from "@/api/crew/crewQueries.ts";
import {CrewBlock} from "@/features/crew/CrewBlock.tsx";
import {BlockSkeleton} from "@/lib/components/BlockSkeleton.tsx";

const CrewList = () => {
  const { data: crews, isLoading } = useGetCrews();

  return (
    <div className="flex flex-col gap-2 w-full overflow-y-auto min-h-full">
      {isLoading &&
        Array.from({ length: 5 }).map((_, idx) => (
          <BlockSkeleton key={idx} />
        ))
      }

      {!isLoading && !crews?.length && (
        <div className="w-full min-h-full flex items-center justify-center">
          <span className="text-slate-400 text-sm">Нет активных бригад</span>
        </div>
      )}

      {!isLoading && crews?.map((crew) => (
        <CrewBlock key={crew.id} crew={crew} />
      ))}
    </div>
  );
};

export { CrewList };
