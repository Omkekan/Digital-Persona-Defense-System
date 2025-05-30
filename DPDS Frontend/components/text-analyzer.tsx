"use client"

import { useState } from "react"
import { Brain, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export function TextAnalyzer() {
  const [text, setText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = () => {
    if (!text) return
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <Card className="border-gray-800 bg-gray-900 overflow-hidden">
      <div className="absolute right-0 top-0 h-16 w-16 opacity-10">
        <Brain className="h-full w-full text-cyan-500" />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-cyan-400">
          <Brain className="h-5 w-5" />
          Text Impersonation Analyzer
        </CardTitle>
        <CardDescription>Upload a file or paste text to scan for AI-mimicked writing</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea
            placeholder="Paste text here to analyze..."
            className="min-h-[120px] bg-gray-950 border-gray-800 resize-none focus-visible:ring-cyan-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-gray-700 bg-gray-800 hover:bg-gray-700 hover:text-cyan-400">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload File
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-gray-800">
                <DialogHeader>
                  <DialogTitle>Upload Text File</DialogTitle>
                  <DialogDescription>
                    Upload a text file (.txt, .doc, .pdf) to analyze for potential impersonation
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-700 p-12">
                    <Upload className="mb-4 h-8 w-8 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-400">Drag and drop your file here</p>
                    <Button variant="secondary" size="sm">
                      Browse Files
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button
              onClick={handleAnalyze}
              disabled={!text || isAnalyzing}
              className={cn(
                "bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-500 hover:to-green-500",
                "relative overflow-hidden",
              )}
            >
              {isAnalyzing && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent"></div>
                </div>
              )}
              Analyze Text
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-800 bg-gray-950 px-6 py-3">
        <p className="text-xs text-gray-500">
          Our AI analyzes linguistic patterns to detect potential impersonation attempts
        </p>
      </CardFooter>
    </Card>
  )
}
