import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardWelcome } from "@/components/dashboard-welcome"
import { TextAnalyzer } from "@/components/text-analyzer"
import { VoiceAnalyzer } from "@/components/voice-analyzer"
import { RiskScore } from "@/components/risk-score"
import { RecentThreats } from "@/components/recent-threats"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <DashboardWelcome username="Alex" />
        <div className="grid gap-6 md:grid-cols-2">
          <TextAnalyzer />
          <VoiceAnalyzer />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <RiskScore score={68} />
          </div>
          <div className="md:col-span-2">
            <RecentThreats />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
