import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { EditUser } from "@/components/users/EditUser";
import { Badge } from "@/components/ui/badge";

const UserInformation = () => {
  const value = 66;
  return (
    <>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium">User Information</h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Edit User</Button>
            </SheetTrigger>
            <EditUser />
          </Sheet>
        </div>

        <div className="space-y-4 mt-4">
          <div className="flex flex-col gap-2 mb-6">
            <p className="text-sm text-muted-foreground">Profile Completion</p>
            <div className="flex items-center gap-4">
              <Progress value={value} />
              <span className=" text-xs font-medium text-white rounded-full border-2 border-green-500/50 py-2 px-1">
                {value}%
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Username: </span>
            <span>Saaim Ahmed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Email: </span>
            <span>saaimahmed18@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Phone: </span>
            <span>+880 1721 689294</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Location: </span>
            <span>Alu Bazar, Old Dhaka-1100, Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Role: </span>
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              Admin
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Joined on 16th Aug 2025
          </p>
        </div>
      </div>
    </>
  );
};

export default UserInformation;
