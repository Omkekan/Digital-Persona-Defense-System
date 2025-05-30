"use client"

import { User, Shield, Bell, Database, Key, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function SettingsTabs() {
  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-6 bg-gray-800">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="privacy">Privacy</TabsTrigger>
        <TabsTrigger value="api">API</TabsTrigger>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
      </TabsList>

      <TabsContent value="profile" className="space-y-4">
        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <User className="h-5 w-5" />
              Profile Information
            </CardTitle>
            <CardDescription>Update your personal information and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Alex" className="bg-gray-950 border-gray-800" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Smith" className="bg-gray-950 border-gray-800" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="alex.smith@example.com"
                className="bg-gray-950 border-gray-800"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Tell us about yourself..." className="bg-gray-950 border-gray-800" />
            </div>
            <Button className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-500 hover:to-green-500">
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security" className="space-y-4">
        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Shield className="h-5 w-5" />
              Security Settings
            </CardTitle>
            <CardDescription>Manage your account security and authentication</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Password</h4>
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" className="bg-gray-950 border-gray-800" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" className="bg-gray-950 border-gray-800" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" className="bg-gray-950 border-gray-800" />
              </div>
              <Button variant="outline" className="border-gray-700 bg-gray-800 hover:bg-gray-700">
                Update Password
              </Button>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Two-Factor Authentication</h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-300">Enable 2FA for enhanced security</p>
                  <p className="text-xs text-gray-500">Requires authenticator app</p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications" className="space-y-4">
        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Bell className="h-5 w-5" />
              Notification Preferences
            </CardTitle>
            <CardDescription>Choose how you want to be notified about security events</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">High-risk alerts</p>
                  <p className="text-xs text-gray-500">Immediate notification for critical threats</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">Analysis complete</p>
                  <p className="text-xs text-gray-500">When your analysis is finished</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">Weekly reports</p>
                  <p className="text-xs text-gray-500">Summary of your security status</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">Product updates</p>
                  <p className="text-xs text-gray-500">New features and improvements</p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="privacy" className="space-y-4">
        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Database className="h-5 w-5" />
              Privacy & Data
            </CardTitle>
            <CardDescription>Control how your data is used and stored</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">Data retention</p>
                  <p className="text-xs text-gray-500">Keep analysis data for 90 days</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">Analytics</p>
                  <p className="text-xs text-gray-500">Help improve our services</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">Third-party sharing</p>
                  <p className="text-xs text-gray-500">Share anonymized data with partners</p>
                </div>
                <Switch />
              </div>
            </div>
            <div className="space-y-2">
              <Button variant="destructive" className="w-full">
                Delete All Data
              </Button>
              <p className="text-xs text-gray-500 text-center">
                This action cannot be undone. All your data will be permanently deleted.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="api" className="space-y-4">
        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Key className="h-5 w-5" />
              API Access
            </CardTitle>
            <CardDescription>Manage API keys and integrations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">API Access</p>
                  <p className="text-xs text-gray-500">Enable programmatic access to DPDS</p>
                </div>
                <Switch />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <div className="flex gap-2">
                  <Input
                    id="apiKey"
                    value="dpds_sk_1234567890abcdef"
                    readOnly
                    className="bg-gray-950 border-gray-800 font-mono"
                  />
                  <Button variant="outline" className="border-gray-700 bg-gray-800 hover:bg-gray-700">
                    Copy
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="border-gray-700 bg-gray-800 hover:bg-gray-700">
                Generate New Key
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="appearance" className="space-y-4">
        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Palette className="h-5 w-5" />
              Appearance
            </CardTitle>
            <CardDescription>Customize the look and feel of your dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-gray-300">Theme</Label>
                <div className="mt-2 grid gap-2 grid-cols-3">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="dark" name="theme" defaultChecked className="text-cyan-500" />
                    <Label htmlFor="dark" className="text-sm">
                      Dark
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="light" name="theme" className="text-cyan-500" />
                    <Label htmlFor="light" className="text-sm">
                      Light
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="auto" name="theme" className="text-cyan-500" />
                    <Label htmlFor="auto" className="text-sm">
                      Auto
                    </Label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">Reduced motion</p>
                  <p className="text-xs text-gray-500">Minimize animations and transitions</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300">High contrast</p>
                  <p className="text-xs text-gray-500">Increase contrast for better visibility</p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
