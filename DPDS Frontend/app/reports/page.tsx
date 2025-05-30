import { DashboardLayout } from "@/components/dashboard-layout"
import { ReportsHeader } from "@/components/reports-header"
import { ReportsTable } from "@/components/reports-table"
import { ReportsStats } from "@/components/reports-stats"

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <ReportsHeader />
        <ReportsStats />
        <ReportsTable />
      </div>
    </DashboardLayout>
  )
}
