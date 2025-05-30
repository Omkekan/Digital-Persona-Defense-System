import { Settings, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AlertsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">Security Alerts</h1>
        <p className="text-gray-400 mt-2">Monitor and manage security alerts for potential impersonation attempts</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="border-gray-700 bg-gray-800 hover:bg-gray-700">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
        <Button variant="outline" className="border-gray-700 bg-gray-800 hover:bg-gray-700">
          <Settings className="mr-2 h-4 w-4" />
          Alert Settings
        </Button>
      </div>
    </div>
  )
}
