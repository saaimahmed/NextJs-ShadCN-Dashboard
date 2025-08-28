import CardList from "@/components/cardList/CardList";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import AppToolttipChart from "@/components/appTooltipChart/AppToolttipChart";
import UserBreadCrumbs from "./UserBreadCrumbs";
import UserBadges from "./UserBadges";
import UserInformation from "./UserInformation";

const SingleUserPage = () => {
  return (
    <>
      <div className="py-2">
        {/* BreadCrumbs Section */}
        <UserBreadCrumbs />
        {/* Container */}
        <div className="mt-4 flex flex-col xl:flex-row gap-8">
          {/* Left */}
          <div className="w-full xl:w-1/3 space-y-6">
            {/* User Badges Container */}

            <UserBadges />
            {/* Information Container */}

            <UserInformation />

            {/* Card List Container */}
            <div className="bg-primary-foreground p-4 rounded-lg">
              <CardList title="Recent Transitions" />
            </div>
          </div>
          {/* Right */}
          <div className="w-full xl:w-2/3 space-y-6">
            {/* User Card container */}
            <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <Avatar className="size-12">
                  <AvatarImage src="/profile-removebg.png" alt="user Profile" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-semibold ">Saaim Ahmed</h1>
              </div>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                facere illo porro est ullam dicta asperiores, ipsa iste! Odio,
                ipsa?
              </p>
            </div>

            {/* Chart Container */}
            <div className="bg-primary-foreground p-4 rounded-lg">
              <AppToolttipChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUserPage;
