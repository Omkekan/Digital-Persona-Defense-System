import { DashboardLayout } from "@/components/dashboard-layout"
import { SettingsHeader } from "@/components/settings-header"
import { SettingsTabs } from "@/components/settings-tabs"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <SettingsHeader />
        <SettingsTabs />
      </div>
    </DashboardLayout>
  )
}
