import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/lib/components/ui/tabs.tsx";
import {ActiveIncidentListTab} from "@/features/incident/ActiveIncidentListTab.tsx";
import {PreviousIncidentListTab} from "@/features/incident/PreviousIncidentListTab.tsx";

const IncidentList = () => {
  return (
    <div className="fixed top-20 left-3 min-w-[250px] max-w-[250px] h-3/4 bg-background rounded-lg flex flex-col gap-2 p-3">
      <span className="text-slate-400">Вызовы</span>

      <Tabs defaultValue="active" className="h-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">Текущие</TabsTrigger>
          <TabsTrigger value="past">Прошедшие</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="h-full">
          <ActiveIncidentListTab />
        </TabsContent>

        <TabsContent value="past" className="h-full">
          <PreviousIncidentListTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { IncidentList };
