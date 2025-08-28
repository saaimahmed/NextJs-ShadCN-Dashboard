import AppAreaChart from "@/components/appAreaChart/AppAreaChart";
import AppBarChar from "@/components/appBarChart/AppBarChar";
import AppPieChart from "@/components/appPieChart/AppPieChart";
import CardList from "@/components/cardList/CardList";
import DashboardCards from "@/components/Dashboard/DashboardCards";
import TodoList from "@/components/todoList/TodoList";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function Home() {
  const value = 66;
  return (
    <>
      <div className="my-5">
        <Link href="/" className="text-xl font-semibold">
          Dashboard
        </Link>
      </div>
      <div>
        <DashboardCards />
      </div>
      <div className="my-5 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppBarChar />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <CardList title="Latest Transactions" />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <AppPieChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <TodoList />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppAreaChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <CardList title="Popular Contents" />
        </div>
      </div>
    </>
  );
}
