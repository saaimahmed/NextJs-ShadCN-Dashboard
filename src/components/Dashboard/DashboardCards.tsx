"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  UsersRound,
  BriefcaseBusiness,
  WalletMinimal,
  LucideListOrdered,
} from "lucide-react";

export default function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {/* Card 1: Target Progress */}

      <Card className="flex flex-col rounded-xl border py-6 gap-6 bg-card text-card-foreground">
        <CardHeader className="px-6 grid auto-rows-min gap-1.5">
          <CardDescription className="text-xl text-bold">
            Total Customers
          </CardDescription>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-2xl lg:text-3xl font-display">1890</h4>
              <div className="text-sm text-muted-foreground">
                <span className="text-green-600">+10.4%</span> from last month
              </div>
            </div>
            <div className="bg-muted flex size-12 items-center justify-center rounded-full border">
              <UsersRound className="w-5 h-5" />
            </div>
          </div>
        </CardHeader>
      </Card>
      {/* Card 2: Total Customers */}
      <Card className="flex flex-col rounded-xl border py-6 gap-6 bg-card text-card-foreground">
        <CardHeader className="px-6 grid auto-rows-min gap-1.5">
          <CardDescription className="text-xl text-bold">
            Total Orders
          </CardDescription>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-2xl lg:text-3xl font-display">1890</h4>
              <div className="text-sm text-muted-foreground">
                <span className="text-green-600">+10.4%</span> from last month
              </div>
            </div>
            <div className="bg-muted flex size-12 items-center justify-center rounded-full border">
              <LucideListOrdered className="w-5 h-5" />
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Card 3: Total Deals */}
      <Card className="flex flex-col rounded-xl border py-6 gap-6 bg-card text-card-foreground">
        <CardHeader className="px-6 grid auto-rows-min gap-1.5">
          <CardDescription className="text-xl text-bold">
            Total Deals
          </CardDescription>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-2xl lg:text-3xl font-display">1,02,890</h4>
              <div className="text-sm text-muted-foreground">
                <span className="text-red-600">-0.8%</span> from last month
              </div>
            </div>
            <div className="bg-muted flex size-12 items-center justify-center rounded-full border">
              <BriefcaseBusiness className="w-5 h-5" />
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Card 4: Total Revenue */}
      <Card className="flex flex-col rounded-xl border py-6 gap-6 bg-card text-card-foreground">
        <CardHeader className="px-6 grid auto-rows-min gap-1.5">
          <CardDescription className="text-xl text-bold">
            Total Revenue
          </CardDescription>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-2xl lg:text-3xl font-display">$435,578</h4>
              <div className="text-sm text-muted-foreground">
                <span className="text-green-600">+20.1%</span> from last month
              </div>
            </div>
            <div className="bg-muted flex size-12 items-center justify-center rounded-full border">
              <WalletMinimal className="w-5 h-5" />
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
