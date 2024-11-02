import {createFileRoute} from '@tanstack/react-router'
import {MainMap} from "@/features/map/MainMap.tsx";
import {Header} from "@/features/dashboard/Header.tsx";
import {IncidentList} from "@/features/incident/IncidentList.tsx";
import {CardAndCrewsPanel} from "@/features/incident/CardAndCrewsPanel.tsx";
import {AddressFinder} from "@/features/map/AddressFinder.tsx";

interface SearchParams {
  incident?: number;
}

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: Dashboard,
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
      incident: search.incident ? Number(search.incident) : undefined,
    })
});

function Dashboard() {
  return (
    <div>
      <Header />

      <MainMap />
      <AddressFinder />

      <IncidentList />
      <CardAndCrewsPanel />
    </div>
  );
}
