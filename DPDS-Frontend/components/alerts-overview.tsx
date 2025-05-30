import { AlertTriangle, Shield, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AlertsOverview() {
  const alertStats = [
    {
      title: "Active Alerts",
      value: "3",
      description: "Require immediate attention",
      icon: AlertTriangle,
      color: "text-red-500",
      bgColor: "bg-red-500/20",
    },
    {
      title: "Monitoring",
      value: "12",
      description: "Currently being tracked",
      icon: Shield,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/20",
    },
    {
      title: "Pending Review",
      value: "7",
      description: "Awaiting your review",
      icon: Clock,
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
    },
    {
      title: "Resolved",
      value: "28",
      description: "Successfully handled",
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-500/20",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {alertStats.map((stat) => (
        <Card key={stat.title} className="border-gray-800 bg-gray-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <p className="text-xs text-gray-400 mt-1">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
