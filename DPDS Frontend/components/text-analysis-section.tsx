"use client"

import { useState } from "react"
import { Brain, Upload, FileText, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function TextAnalysisSection() {
  const [text, setText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const handleAnalyze = () => {
    if (!text) return
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)
    }, 3000)
  }

  return (
    <Card className="border-gray-800 bg-gray-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-cyan-400">
          <Brain className="h-5 w-5" />
          Advanced Text Analysis
        </CardTitle>
        <CardDescription>Deep analysis of writing patterns, style, and linguistic fingerprints</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="input" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800">
            <TabsTrigger value="input">Input Text</TabsTrigger>
            <TabsTrigger value="upload">Upload File</TabsTrigger>
            <TabsTrigger value="results" disabled={!analysisComplete}>
              Results
            </TabsTrigger>
          </TabsList>
          <TabsContent value="input" className="space-y-4">
            <Textarea
              placeholder="Paste the text you want to analyze for potential impersonation patterns..."
              className="min-h-[200px] bg-gray-950 border-gray-800 resize-none focus-visible:ring-cyan-500"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                {text.length} characters • {text.split(" ").filter((word) => word.length > 0).length} words
              </div>
              <Button
                onClick={handleAnalyze}
                disabled={!text || isAnalyzing}
                className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-500 hover:to-green-500"
              >
                {isAnalyzing ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Analyze Text
                  </>
                )}
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="upload" className="space-y-4">
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-700 p-12">
              <Upload className="mb-4 h-12 w-12 text-gray-500" />
              <h3 className="mb-2 text-lg font-semibold text-white">Upload Document</h3>
              <p className="mb-4 text-center text-sm text-gray-400">
                Support for .txt, .doc, .docx, .pdf files up to 10MB
              </p>
              <Button variant="secondary">
                <FileText className="mr-2 h-4 w-4" />
                Choose File
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="results" className="space-y-4">
            {analysisComplete && (
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300">AI Detection Score</span>
                      <span className="text-sm font-bold text-red-400">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300">Style Consistency</span>
                      <span className="text-sm font-bold text-yellow-400">64%</span>
                    </div>
                    <Progress value={64} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300">Linguistic Patterns</span>
                      <span className="text-sm font-bold text-green-400">42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300">Vocabulary Complexity</span>
                      <span className="text-sm font-bold text-cyan-400">89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                </div>
                <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
                  <h4 className="mb-2 font-semibold text-white">Analysis Summary</h4>
                  <p className="text-sm text-gray-300">
                    The text shows moderate signs of AI generation with inconsistent stylistic patterns. Several
                    linguistic markers suggest potential automated content creation. Recommend further investigation for
                    verification.
                  </p>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
