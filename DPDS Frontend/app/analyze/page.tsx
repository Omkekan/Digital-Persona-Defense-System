import { DashboardLayout } from "@/components/dashboard-layout"
import { AnalyzeHeader } from "@/components/analyze-header"
import { TextAnalysisSection } from "@/components/text-analysis-section"
import { VoiceAnalysisSection } from "@/components/voice-analysis-section"
import { WebScanSection } from "@/components/web-scan-section"

export default function AnalyzePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <AnalyzeHeader />
        <div className="grid gap-6">
          <TextAnalysisSection />
          <VoiceAnalysisSection />
          <WebScanSection />
        </div>
      </div>
    </DashboardLayout>
  )
}
