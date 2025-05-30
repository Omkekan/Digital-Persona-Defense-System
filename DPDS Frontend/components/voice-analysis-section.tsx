"use client"

import { useState } from "react"
import { Mic, Upload, Square, AudioWaveformIcon as Waveform } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function VoiceAnalysisSection() {
  const [isRecording, setIsRecording] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const toggleRecording = () => {
    setIsRecording(!isRecording)
  }

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)
    }, 4000)
  }

  return (
    <Card className="border-gray-800 bg-gray-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-400">
          <Mic className="h-5 w-5" />
          Voice Clone Detection
        </CardTitle>
        <CardDescription>Advanced audio analysis to detect voice synthesis and cloning attempts</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="record" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800">
            <TabsTrigger value="record">Record Audio</TabsTrigger>
            <TabsTrigger value="upload">Upload File</TabsTrigger>
            <TabsTrigger value="results" disabled={!analysisComplete}>
              Results
            </TabsTrigger>
          </TabsList>
          <TabsContent value="record" className="space-y-4">
            <div className="rounded-lg bg-gray-950 border border-gray-800 p-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative">
                  <div
                    className={`h-24 w-24 rounded-full border-4 ${isRecording ? "border-red-500 animate-pulse" : "border-gray-600"} flex items-center justify-center`}
                  >
                    <Mic className={`h-8 w-8 ${isRecording ? "text-red-500" : "text-gray-400"}`} />
                  </div>
                  {isRecording && (
                    <div className="absolute -inset-2 rounded-full border-2 border-red-500 animate-ping"></div>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium text-white">{isRecording ? "Recording..." : "Ready to Record"}</p>
                  <p className="text-sm text-gray-400">
                    {isRecording ? "Speak clearly into your microphone" : "Click to start recording your voice"}
                  </p>
                </div>
                <Button
                  onClick={toggleRecording}
                  variant={isRecording ? "destructive" : "default"}
                  className={
                    isRecording
                      ? ""
                      : "bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-500 hover:to-green-500"
                  }
                >
                  {isRecording ? (
                    <>
                      <Square className="mr-2 h-4 w-4" />
                      Stop Recording
                    </>
                  ) : (
                    <>
                      <Mic className="mr-2 h-4 w-4" />
                      Start Recording
                    </>
                  )}
                </Button>
              </div>
            </div>
            {(isRecording || audioFile) && (
              <div className="flex justify-center">
                <Button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-500 hover:to-green-500"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Analyzing Audio...
                    </>
                  ) : (
                    <>
                      <Waveform className="mr-2 h-4 w-4" />
                      Analyze Voice
                    </>
                  )}
                </Button>
              </div>
            )}
          </TabsContent>
          <TabsContent value="upload" className="space-y-4">
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-700 p-12">
              <Upload className="mb-4 h-12 w-12 text-gray-500" />
              <h3 className="mb-2 text-lg font-semibold text-white">Upload Audio File</h3>
              <p className="mb-4 text-center text-sm text-gray-400">Support for .mp3, .wav, .m4a files up to 50MB</p>
              <Button variant="secondary">
                <Upload className="mr-2 h-4 w-4" />
                Choose Audio File
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="results" className="space-y-4">
            {analysisComplete && (
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300">Clone Probability</span>
                      <span className="text-sm font-bold text-red-400">23%</span>
                    </div>
                    <Progress value={23} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300">Voice Authenticity</span>
                      <span className="text-sm font-bold text-green-400">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300">Audio Quality</span>
                      <span className="text-sm font-bold text-cyan-400">94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300">Spectral Analysis</span>
                      <span className="text-sm font-bold text-yellow-400">76%</span>
                    </div>
                    <Progress value={76} className="h-2" />
                  </div>
                </div>
                <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
                  <h4 className="mb-2 font-semibold text-white">Voice Analysis Summary</h4>
                  <p className="text-sm text-gray-300">
                    The audio sample shows high authenticity with minimal signs of synthetic generation. Natural vocal
                    patterns and breathing detected. Low probability of voice cloning technology usage.
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
