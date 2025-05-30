"use client"

import { useState } from "react"
import { Mic, Upload, Play, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
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

export function VoiceAnalyzer() {
  const [isRecording, setIsRecording] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)

  const toggleRecording = () => {
    setIsRecording(!isRecording)
  }

  return (
    <Card className="border-gray-800 bg-gray-900 overflow-hidden">
      <div className="absolute right-0 top-0 h-16 w-16 opacity-10">
        <Mic className="h-full w-full text-green-500" />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-green-400">
          <Mic className="h-5 w-5" />
          Voice Clone Detection
        </CardTitle>
        <CardDescription>Upload audio to check for potential voice cloning</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-950 border border-gray-800 p-4">
            <div className="flex items-center justify-center h-[120px]">
              {audioFile ? (
                <div className="w-full">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{audioFile.name}</span>
                    <span className="text-xs text-gray-500">00:00 / 00:00</span>
                  </div>
                  <div className="relative h-12 w-full overflow-hidden rounded-md bg-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex gap-1">
                        {Array.from({ length: 50 }).map((_, i) => (
                          <div
                            key={i}
                            className="h-8 w-0.5 bg-gray-700"
                            style={{
                              height: `${Math.random() * 100}%`,
                              backgroundColor: i % 3 === 0 ? "#22d3ee" : "#10b981",
                              opacity: 0.7,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-center">
                    <Button size="sm" variant="outline" className="rounded-full h-8 w-8 p-0 border-gray-700">
                      <Play className="h-4 w-4" />
                      <span className="sr-only">Play</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-500">
                  <Mic className="mb-2 h-10 w-10" />
                  <p className="text-sm">No audio recorded or uploaded</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                variant={isRecording ? "destructive" : "outline"}
                className={cn("border-gray-700 bg-gray-800 hover:bg-gray-700", isRecording && "animate-pulse")}
                onClick={toggleRecording}
              >
                {isRecording ? (
                  <>
                    <Square className="mr-2 h-4 w-4" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Mic className="mr-2 h-4 w-4" />
                    Record Audio
                  </>
                )}
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-gray-700 bg-gray-800 hover:bg-gray-700 hover:text-green-400"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Audio
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 border-gray-800">
                  <DialogHeader>
                    <DialogTitle>Upload Audio File</DialogTitle>
                    <DialogDescription>
                      Upload an audio file (.mp3, .wav) to analyze for potential voice cloning
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-700 p-12">
                      <Upload className="mb-4 h-8 w-8 text-gray-500" />
                      <p className="mb-2 text-sm text-gray-400">Drag and drop your audio file here</p>
                      <Button variant="secondary" size="sm">
                        Browse Files
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <Button
              disabled={!audioFile && !isRecording}
              className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-500 hover:to-green-500"
            >
              Analyze Voice
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-800 bg-gray-950 px-6 py-3">
        <p className="text-xs text-gray-500">
          Our system detects voice cloning by analyzing vocal patterns and audio artifacts
        </p>
      </CardFooter>
    </Card>
  )
}
