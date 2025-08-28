"use client";

import { useState } from "react";
import { Bell, Clock } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import { notificationData } from "@/constains/notification";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function NotificationDropdown() {
  const [notifications, setNotifications] = useState(notificationData);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative focus:outline-none"
          >
            <Bell className="h-6 w-6" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-72">
          <div className="flex items-center justify-between gap-8 p-2">
            <DropdownMenuLabel className="text-lg font-medium">
              Notifications
            </DropdownMenuLabel>
            <Button variant="link">View All</Button>
          </div>
          <Separator />
          {notifications.length > 0 ? (
            notifications.map((n) => (
              <DropdownMenuItem
                key={n.id}
                className={`cursor-pointer flex items-center gap-4 p-2 space-y-6 border-1 border-r-bg-background ${
                  !n.read
                    ? "bg-gray-100 dark:bg-gray-800 font-semibold "
                    : "text-gray-500"
                }`}
                onClick={() =>
                  setNotifications((prev) =>
                    prev.map((x) => (x.id === n.id ? { ...x, read: true } : x))
                  )
                }
              >
                {/* Left Avatar */}
                <Avatar className="size-8">
                  <AvatarImage
                    src={n.avatar || "/default-avatar.png"}
                    alt="User Avatar"
                  />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>

                {/* Right content */}
                <div className="flex flex-col flex-1">
                  <span className="text-sm font-medium">{n.title}</span>
                  <span className="text-xs text-muted-foreground line-clamp-1">
                    {n.message}
                  </span>
                  <span className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                    <Clock className="!w-3 !h-3" />
                    {n.timeAgo}
                  </span>
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="p-2 text-sm text-gray-500 text-center">
              No new notifications
            </div>
          )}
          <Separator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
