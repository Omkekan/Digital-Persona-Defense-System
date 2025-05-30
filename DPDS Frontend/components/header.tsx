"use client"

import { Bell, ChevronDown, Menu, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface HeaderProps {
  toggleSidebar: () => void
}

export function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-800 bg-gray-950 px-4 md:px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 blur-sm opacity-70"></div>
            <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gray-950 font-bold text-white">
              DP
            </div>
          </div>
          <span className="hidden text-xl font-bold text-white md:inline-block">DPDS</span>
        </div>
      </div>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          <li>
            <a href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/analyze" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Analyze
            </a>
          </li>
          <li>
            <a href="/reports" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Reports
            </a>
          </li>
          <li>
            <a href="/alerts" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Alerts
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
          <span className="sr-only">Notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 text-gray-400 hover:text-white">
              <div className="h-8 w-8 rounded-full bg-gray-800 p-1">
                <User className="h-full w-full" />
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
