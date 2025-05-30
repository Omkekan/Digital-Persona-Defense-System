"use client"

import { Brain, FileText, Globe, LineChart, Mic, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useEffect, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

interface DashboardSidebarProps {
  isOpen: boolean
}

export function DashboardSidebar({ isOpen }: DashboardSidebarProps) {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const sidebarItems = [
    {
      icon: Brain,
      label: "Analyze Text",
      href: "/analyze",
    },
    {
      icon: Mic,
      label: "Analyze Audio",
      href: "/analyze",
    },
    {
      icon: Globe,
      label: "Web Scan",
      href: "/analyze",
    },
    {
      icon: LineChart,
      label: "Risk Score",
      href: "/",
    },
    {
      icon: FileText,
      label: "Past Reports",
      href: "/reports",
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/settings",
    },
  ]

  if (isMobile && !isOpen) {
    return null
  }

  return (
    <aside
      className={cn(
        "bg-gray-950 border-r border-gray-800 transition-all duration-300 ease-in-out z-20",
        isOpen ? "w-64" : "w-16",
        isMobile && isOpen && "fixed inset-y-0 left-0 h-full",
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4">
          {isOpen && <h2 className="text-sm font-semibold text-gray-400">NAVIGATION</h2>}
          {!isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto text-gray-400 hover:text-white"
              onClick={() => {
                const event = new CustomEvent("toggle-sidebar")
                window.dispatchEvent(event)
              }}
            >
              {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          )}
        </div>
        <nav className="flex-1 space-y-1 px-2">
          <TooltipProvider>
            {sidebarItems.map((item) => (
              <Tooltip key={item.label} delayDuration={0}>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                      "hover:bg-gray-800 hover:text-cyan-400",
                      "group relative",
                    )}
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 blur group-hover:opacity-30 transition-opacity"></div>
                      <item.icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 relative" />
                    </div>
                    {isOpen && <span>{item.label}</span>}
                  </a>
                </TooltipTrigger>
                {!isOpen && <TooltipContent side="right">{item.label}</TooltipContent>}
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </div>
    </aside>
  )
}
