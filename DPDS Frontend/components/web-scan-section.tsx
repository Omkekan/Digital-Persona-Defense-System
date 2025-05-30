"use client"

import { useState } from "react"
import { Globe, Search, ExternalLink, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function WebScanSection() {
  const [url, setUrl] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const [scanResults, setScanResults] = useState<any[]>([])

  const handleScan = () => {
    if (!url) return
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
      setScanResults([
        {
          id: 1,
          url: "https://fake-profile.com/alex-smith",
          type: "Social Media Profile",
          risk: "high",
          similarity: 89,
          description: "Fake LinkedIn profile using your photo and bio",
        },
        {
          id: 2,
          url: "https://scam-site.net/testimonial",
          type: "Testimonial",
          risk: "medium",
          similarity: 67,
          description: "Fake testimonial attributed to your name",
        },
        {
          id: 3,
          url: "https://forum.example.com/user/alex_s",
          type: "Forum Account",
          risk: "low",
          similarity: 34,
          description: "Similar username but different writing style",
        },
      ])
    }, 3000)
  }

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "high":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            High Risk
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
            Medium Risk
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Low Risk
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card className="border-gray-800 bg-gray-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-400">
          <Globe className="h-5 w-5" />
          Web Impersonation Scanner
        </CardTitle>
        <CardDescription>Scan the web for potential impersonation attempts and fake profiles</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter your name, username, or domain to scan..."
            className="bg-gray-950 border-gray-800 focus-visible:ring-purple-500"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button
            onClick={handleScan}
            disabled={!url || isScanning}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
          >
            {isScanning ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                Scanning...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Scan Web
              </>
            )}
          </Button>
        </div>

        {scanResults.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-semibold text-white flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              Scan Results ({scanResults.length} found)
            </h4>
            {scanResults.map((result) => (
              <div key={result.id} className="rounded-lg border border-gray-800 bg-gray-950 p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h5 className="font-medium text-white">{result.type}</h5>
                      {getRiskBadge(result.risk)}
                    </div>
                    <p className="text-sm text-gray-400">{result.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>Similarity: {result.similarity}%</span>
                      <span>•</span>
                      <a href={result.url} className="flex items-center gap-1 hover:text-purple-400">
                        View Source <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
