import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/lib/components/ui/tabs.tsx";
import {ActiveIncidentListTab} from "@/features/incident/ActiveIncidentListTab.tsx";

const IncidentList = () => {
  return (
    <div className="fixed top-20 left-3 min-w-[200px] h-3/4 bg-background rounded-lg flex flex-col gap-2 p-3">
      <span className="text-slate-400">Вызовы</span>

      <Tabs defaultValue="active">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">Текущие</TabsTrigger>
          <TabsTrigger value="past">Прошедшие</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <ActiveIncidentListTab />
        </TabsContent>

        <TabsContent value="past">
          Прошедшие вызовы
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { IncidentList };
