"use client"

import { useEffect, useState } from "react"
import { Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface RiskScoreProps {
  score: number
}

export function RiskScore({ score }: RiskScoreProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(score)
    }, 500)
    return () => clearTimeout(timer)
  }, [score])

  const getScoreColor = () => {
    if (score < 30) return "text-green-500"
    if (score < 70) return "text-yellow-500"
    return "text-red-500"
  }

  const getScoreText = () => {
    if (score < 30) return "Low Risk"
    if (score < 70) return "Medium Risk"
    return "High Risk"
  }

  const circumference = 2 * Math.PI * 70
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <Card className="border-gray-800 bg-gray-900 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-white">
          Cloneability Risk Score
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-gray-400 cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                This score reflects how easily your digital identity can be replicated by AI systems. Lower scores
                indicate better protection.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
        <CardDescription>How easily your identity can be replicated</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center pt-4">
        <div className="relative flex h-48 w-48 items-center justify-center">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 160 160">
            {/* Background circle */}
            <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="12" />
            {/* Progress circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="12"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className={`text-4xl font-bold ${getScoreColor()}`}>{progress}</span>
            <span className="text-sm text-gray-400">{getScoreText()}</span>
          </div>
        </div>
        <div className="mt-4 w-full space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Voice Similarity</span>
            <span className="font-medium text-cyan-400">76%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
            <div className="h-full bg-cyan-500" style={{ width: "76%" }}></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Writing Pattern</span>
            <span className="font-medium text-green-400">54%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
            <div className="h-full bg-green-500" style={{ width: "54%" }}></div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Online Presence</span>
            <span className="font-medium text-cyan-400">82%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
            <div className="h-full bg-cyan-500" style={{ width: "82%" }}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
