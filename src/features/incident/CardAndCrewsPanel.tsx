import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/lib/components/ui/tabs.tsx";
import {IncidentCard} from "@/features/incident/IncidentCard.tsx";
import {CrewList} from "@/features/crew/CrewList.tsx";

const CardAndCrewsPanel = () => {
  return (
    <div className="fixed top-20 right-3 min-w-[250px] h-3/4 bg-background rounded-lg flex flex-col gap-2 p-3">
      <Tabs defaultValue="card" className="h-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="card">Карточка</TabsTrigger>
          <TabsTrigger value="crews">Бригады</TabsTrigger>
        </TabsList>

        <TabsContent value="card" className="h-full">
          <IncidentCard />
        </TabsContent>

        <TabsContent value="crews" className="h-full">
          <CrewList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { CardAndCrewsPanel };
