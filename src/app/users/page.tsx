import { User, users } from "@/constains/user";
import { DataTable } from "./data-table";

import { columns } from "@/app/users/columns";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return users;
}

const UsersPage = async () => {
  const data = await getData();

  return (
    <>
      <div className="py-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              {/* <BreadcrumbLink href="/"></BreadcrumbLink> */}
              <Link href="/">Dashboard</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {/* <BreadcrumbLink href="/users">Users</BreadcrumbLink> */}
              <Link href="/users">Users</Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="my-8 py-2 px-4 bg-secondary rounded-md">
        <h1 className="font-semibold">All Users List</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default UsersPage;
