import { Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReportsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">Analysis Reports</h1>
        <p className="text-gray-400 mt-2">View and manage all your past analysis reports and findings</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="border-gray-700 bg-gray-800 hover:bg-gray-700">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
        <Button className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-500 hover:to-green-500">
          <Download className="mr-2 h-4 w-4" />
          Export All
        </Button>
      </div>
    </div>
  )
}
