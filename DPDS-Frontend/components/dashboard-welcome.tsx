import { Shield } from "lucide-react"

interface DashboardWelcomeProps {
  username: string
}

export function DashboardWelcome({ username }: DashboardWelcomeProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-800 bg-gray-900 p-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-white">Welcome, {username}!</h1>
        <p className="text-gray-400">Ready to assess your digital identity.</p>
      </div>
      <div className="hidden md:block">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800">
          <Shield className="h-6 w-6 text-cyan-400" />
        </div>
      </div>
    </div>
  )
}
