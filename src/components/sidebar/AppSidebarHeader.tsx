import React from "react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "../ui/sidebar";
import Link from "next/link";
import Image from "next/image";

const AppSidebarHeader = () => {
  return (
    <>
      <SidebarHeader className=" h-15  flex items-center justify-center">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="
              "
            >
              <Link
                href="/"
                className="flex items-center gap-2 px-2 py-4 rounded "
              >
                <Image src="/logo.png" alt="Zoro Logo" width={30} height={30} />
                <span className="text-2xl font-extrabold text-green-700">
                  ZORO 24
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator className="mx-0" />
    </>
  );
};

export default AppSidebarHeader;
