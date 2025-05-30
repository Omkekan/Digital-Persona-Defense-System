"use client"

import { useState } from "react"
import { AlertTriangle, ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Threat {
  id: string
  type: string
  source: string
  riskLevel: "high" | "medium" | "low"
  timestamp: string
  status: "active" | "resolved" | "investigating"
}

const threats: Threat[] = [
  {
    id: "t1",
    type: "Voice Clone",
    source: "Unknown VoIP Call",
    riskLevel: "high",
    timestamp: "2023-05-28 14:23",
    status: "active",
  },
  {
    id: "t2",
    type: "Text Impersonation",
    source: "Email Campaign",
    riskLevel: "medium",
    timestamp: "2023-05-27 09:45",
    status: "investigating",
  },
  {
    id: "t3",
    type: "Social Media Clone",
    source: "Twitter Bot",
    riskLevel: "medium",
    timestamp: "2023-05-26 18:12",
    status: "resolved",
  },
  {
    id: "t4",
    type: "Writing Style",
    source: "Forum Post",
    riskLevel: "low",
    timestamp: "2023-05-25 11:30",
    status: "resolved",
  },
]

export function RecentThreats() {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("desc")
    }
  }

  const getRiskBadge = (risk: string) => {
    switch (risk) {
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
      case "investigating":
        return <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30">Investigating</Badge>
      case "resolved":
        return <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">Resolved</Badge>
      default:
        return null
    }
  }

  return (
    <Card className="border-gray-800 bg-gray-900">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-white">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Recent Threats
            </CardTitle>
            <CardDescription>Detected impersonation attempts and their status</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
              <DropdownMenuItem>View all threats</DropdownMenuItem>
              <DropdownMenuItem>Export report</DropdownMenuItem>
              <DropdownMenuItem>Configure alerts</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-gray-800">
          <Table>
            <TableHeader className="bg-gray-950">
              <TableRow className="hover:bg-gray-900 border-gray-800">
                <TableHead className="w-[180px]">
                  <Button
                    variant="ghost"
                    className="p-0 font-medium text-gray-400 hover:text-white"
                    onClick={() => handleSort("type")}
                  >
                    Type
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>Source</TableHead>
                <TableHead className="w-[100px]">
                  <Button
                    variant="ghost"
                    className="p-0 font-medium text-gray-400 hover:text-white"
                    onClick={() => handleSort("riskLevel")}
                  >
                    Risk
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead className="w-[150px]">
                  <Button
                    variant="ghost"
                    className="p-0 font-medium text-gray-400 hover:text-white"
                    onClick={() => handleSort("timestamp")}
                  >
                    Timestamp
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead className="w-[120px]">Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {threats.map((threat) => (
                <TableRow key={threat.id} className="hover:bg-gray-800 border-gray-800">
                  <TableCell className="font-medium">{threat.type}</TableCell>
                  <TableCell>{threat.source}</TableCell>
                  <TableCell>{getRiskBadge(threat.riskLevel)}</TableCell>
                  <TableCell className="text-gray-400">{threat.timestamp}</TableCell>
                  <TableCell>{getStatusBadge(threat.status)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronDown className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Mark as resolved</DropdownMenuItem>
                        <DropdownMenuItem>Ignore</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
