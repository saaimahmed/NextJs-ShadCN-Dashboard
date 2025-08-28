"use client";
import { LogOutIcon, Menu, Moon, Settings2Icon, UserRound } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "../providers/ModeToggle";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import NotificationDropdown from "./NotificationDropdown";
import SearchBar from "./SearchBar";

const Navbar = () => {
  // const { toggleSidebar } = useSidebar();

  return (
    <>
      <nav className="p-4 flex items-center justify-between border-b-1 h-15 sticky top-0 bg-background z-10">
        {/* left-side collapse Button */}
        <SidebarTrigger />
        {/* If USe Custom Button Open And Close Using useSidebar Hook */}
        {/* <Menu onClick={toggleSidebar} /> */}
        {/* Right Side  */}
        <div className="flex items-center justify-start gap-4">
          <div className="flex items-center gap-4">
            <SearchBar/>
            <NotificationDropdown />
            <ModeToggle />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="/saaimahmed.png"
                  alt="Profile"
                  className="object-cover"
                />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-2">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserRound className="mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings2Icon className="mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <LogOutIcon className="mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
