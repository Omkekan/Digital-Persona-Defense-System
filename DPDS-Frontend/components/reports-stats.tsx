import { Brain, Mic, Globe, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ReportsStats() {
  const stats = [
    {
      title: "Total Analyses",
      value: "247",
      change: "+12%",
      icon: TrendingUp,
      color: "text-cyan-400",
    },
    {
      title: "Text Scans",
      value: "156",
      change: "+8%",
      icon: Brain,
      color: "text-cyan-400",
    },
    {
      title: "Voice Analyses",
      value: "67",
      change: "+23%",
      icon: Mic,
      color: "text-green-400",
    },
    {
      title: "Web Scans",
      value: "24",
      change: "+5%",
      icon: Globe,
      color: "text-purple-400",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-gray-800 bg-gray-900">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <p className="text-xs text-green-400">{stat.change} from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
