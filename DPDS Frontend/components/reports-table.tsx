"use client"
import { Eye, Download, Trash2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Report {
  id: string
  type: "text" | "voice" | "web"
  title: string
  date: string
  riskScore: number
  status: "completed" | "processing" | "failed"
  size: string
}

const reports: Report[] = [
  {
    id: "r1",
    type: "text",
    title: "Email Content Analysis",
    date: "2023-05-28 14:23",
    riskScore: 78,
    status: "completed",
    size: "2.3 KB",
  },
  {
    id: "r2",
    type: "voice",
    title: "Voice Sample Verification",
    date: "2023-05-27 09:45",
    riskScore: 23,
    status: "completed",
    size: "4.7 MB",
  },
  {
    id: "r3",
    type: "web",
    title: "Social Media Scan",
    date: "2023-05-26 18:12",
    riskScore: 89,
    status: "completed",
    size: "156 KB",
  },
  {
    id: "r4",
    type: "text",
    title: "Document Authenticity Check",
    date: "2023-05-25 11:30",
    riskScore: 45,
    status: "processing",
    size: "1.8 KB",
  },
  {
    id: "r5",
    type: "voice",
    title: "Phone Call Analysis",
    date: "2023-05-24 16:45",
    riskScore: 67,
    status: "failed",
    size: "8.2 MB",
  },
]

export function ReportsTable() {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case "text":
        return (
          <Badge variant="outline" className="border-cyan-500 text-cyan-500">
            Text
          </Badge>
        )
      case "voice":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Voice
          </Badge>
        )
      case "web":
        return (
          <Badge variant="outline" className="border-purple-500 text-purple-500">
            Web
          </Badge>
        )
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">Completed</Badge>
      case "processing":
        return <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30">Processing</Badge>
      case "failed":
        return <Badge className="bg-red-500/20 text-red-500 hover:bg-red-500/30">Failed</Badge>
      default:
        return null
    }
  }

  const getRiskColor = (score: number) => {
    if (score < 30) return "text-green-500"
    if (score < 70) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <Card className="border-gray-800 bg-gray-900">
      <CardHeader>
        <CardTitle className="text-white">Recent Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-gray-800">
          <Table>
            <TableHeader className="bg-gray-950">
              <TableRow className="hover:bg-gray-900 border-gray-800">
                <TableHead>Type</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Size</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id} className="hover:bg-gray-800 border-gray-800">
                  <TableCell>{getTypeBadge(report.type)}</TableCell>
                  <TableCell className="font-medium">{report.title}</TableCell>
                  <TableCell className="text-gray-400">{report.date}</TableCell>
                  <TableCell>
                    <span className={`font-bold ${getRiskColor(report.riskScore)}`}>{report.riskScore}%</span>
                  </TableCell>
                  <TableCell>{getStatusBadge(report.status)}</TableCell>
                  <TableCell className="text-gray-400">{report.size}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
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
