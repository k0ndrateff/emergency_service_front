import {createFileRoute} from '@tanstack/react-router'
import {MainMap} from "@/features/map/MainMap.tsx";
import {Header} from "@/features/dashboard/Header.tsx";
import {IncidentList} from "@/features/incident/IncidentList.tsx";

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div>
      <Header />

      <MainMap />

      <IncidentList />
    </div>
  );
}
