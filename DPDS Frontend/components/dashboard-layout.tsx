"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen flex-col bg-gray-950">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar isOpen={sidebarOpen} />
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-950 to-gray-900 p-4 md:p-6">{children}</main>
      </div>
      <footer className="border-t border-gray-800 bg-gray-950 p-4 text-center text-sm text-gray-400">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Security FAQ
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Report Abuse
            </a>
          </div>
          <div className="text-gray-500">Built for digital defense in the AI age</div>
        </div>
      </footer>
    </div>
  )
}
