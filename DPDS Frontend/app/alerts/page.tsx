import { DashboardLayout } from "@/components/dashboard-layout"
import { AlertsHeader } from "@/components/alerts-header"
import { AlertsOverview } from "@/components/alerts-overview"
import { AlertsList } from "@/components/alerts-list"

export default function AlertsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <AlertsHeader />
        <AlertsOverview />
        <AlertsList />
      </div>
    </DashboardLayout>
  )
}
