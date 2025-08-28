import React from 'react'
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { ChevronUp, LogOutIcon, Settings2Icon, User2Icon } from 'lucide-react'

const AppSidebarFooter = () => {
  return (
    <>
    <SidebarFooter className="mt-auto px-2 py-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="flex items-center gap-2 px-3 py-2 rounded transition-colors w-full">
                    <User2Icon className="h-5 w-5 " />
                    <span className="flex-1 font-medium">Saaim Ahmed</span>
                    <ChevronUp className="h-4 w-4 " />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  side="top"
                  align="end"
                  className="w-[100%] right-0"
                >
                  <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 w-full">
                    <User2Icon className="h-4 w-4" />
                    <span className="flex-1">Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 w-full">
                    <Settings2Icon className="h-4 w-4" />
                    <span className="flex-1">Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    variant="destructive"
                    className="flex items-center gap-2 px-3 py-2 w-full"
                  >
                    <LogOutIcon className="h-4 w-4" />
                    <span className="flex-1">Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </>
  )
}

export default AppSidebarFooter