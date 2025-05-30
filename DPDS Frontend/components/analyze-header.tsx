import { Brain, Mic, Globe } from "lucide-react"

export function AnalyzeHeader() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold text-white">Analysis Center</h1>
        <p className="text-gray-400 mt-2">
          Comprehensive tools to analyze your digital identity for potential impersonation risks
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="flex items-center gap-3 rounded-lg border border-gray-800 bg-gray-900 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
            <Brain className="h-5 w-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Text Analysis</h3>
            <p className="text-sm text-gray-400">Detect writing pattern mimicry</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-gray-800 bg-gray-900 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
            <Mic className="h-5 w-5 text-green-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Voice Analysis</h3>
            <p className="text-sm text-gray-400">Identify voice cloning attempts</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-gray-800 bg-gray-900 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
            <Globe className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Web Scanning</h3>
            <p className="text-sm text-gray-400">Monitor online impersonation</p>
          </div>
        </div>
      </div>
    </div>
  )
}
