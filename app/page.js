import ActionBar from "./components/ActionBar";
import LeadCards from "./components/LeadCards";
import LeadsTable from "./components/LeadsTable";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col p-3">
        <ActionBar />
        <LeadCards />
        <LeadsTable />
      </div>
    </div>
  );
}
