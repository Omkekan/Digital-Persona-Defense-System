"use client"

import { useState } from "react"
import { AlertTriangle, Eye, X, Check, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Alert {
  id: string
  type: "voice_clone" | "text_impersonation" | "web_impersonation" | "suspicious_activity"
  title: string
  description: string
  severity: "high" | "medium" | "low"
  timestamp: string
  status: "active" | "monitoring" | "pending" | "resolved"
  source: string
}

const alerts: Alert[] = [
  {
    id: "a1",
    type: "voice_clone",
    title: "Potential Voice Clone Detected",
    description: "Suspicious voice sample detected on VoIP call from unknown number",
    severity: "high",
    timestamp: "2023-05-28 14:23",
    status: "active",
    source: "Voice Monitor",
  },
  {
    id: "a2",
    type: "web_impersonation",
    title: "Fake Social Media Profile",
    description: "LinkedIn profile using your photo and professional information",
    severity: "high",
    timestamp: "2023-05-28 09:15",
    status: "active",
    source: "Web Scanner",
  },
  {
    id: "a3",
    type: "text_impersonation",
    title: "Email Impersonation Attempt",
    description: "Email sent from similar domain mimicking your writing style",
    severity: "medium",
    timestamp: "2023-05-27 16:45",
    status: "monitoring",
    source: "Email Monitor",
  },
  {
    id: "a4",
    type: "suspicious_activity",
    title: "Unusual Login Pattern",
    description: "Multiple failed login attempts from different locations",
    severity: "medium",
    timestamp: "2023-05-27 11:30",
    status: "pending",
    source: "Security Monitor",
  },
  {
    id: "a5",
    type: "text_impersonation",
    title: "Forum Post Impersonation",
    description: "Post on tech forum using your username and similar writing style",
    severity: "low",
    timestamp: "2023-05-26 20:12",
    status: "resolved",
    source: "Web Scanner",
  },
]

export function AlertsList() {
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null)

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            High
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
            Medium
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Low
          </Badge>
        )
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-red-500/20 text-red-500 hover:bg-red-500/30">Active</Badge>
      case "monitoring":
        return <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30">Monitoring</Badge>
      case "pending":
        return <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30">Pending</Badge>
      case "resolved":
        return <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">Resolved</Badge>
      default:
        return null
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "voice_clone":
        return "🔊"
      case "text_impersonation":
        return "📝"
      case "web_impersonation":
        return "🌐"
      case "suspicious_activity":
        return "⚠️"
      default:
        return "🔔"
    }
  }

  return (
    <Card className="border-gray-800 bg-gray-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          Recent Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="rounded-lg border border-gray-800 bg-gray-950 p-4 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{getTypeIcon(alert.type)}</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-white">{alert.title}</h4>
                      {getSeverityBadge(alert.severity)}
                      {getStatusBadge(alert.status)}
                    </div>
                    <p className="text-sm text-gray-400">{alert.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{alert.timestamp}</span>
                      <span>•</span>
                      <span>{alert.source}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-400 hover:text-white"
                    onClick={() => setSelectedAlert(alert)}
                  >
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Button>
                  {alert.status === "active" && (
                    <>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-green-400 hover:text-green-300">
                        <Check className="h-4 w-4" />
                        <span className="sr-only">Mark as resolved</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-300">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Dismiss</span>
                      </Button>
                    </>
                  )}
                  {alert.status === "pending" && (
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-yellow-400 hover:text-yellow-300">
                      <Clock className="h-4 w-4" />
                      <span className="sr-only">Set reminder</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
