import { HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { HoverCard } from "@/components/ui/hover-card";


const UserBadges = () => {
  return (
    <>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <h1 className="text-lg font-medium">User Badges</h1>
        <div className="flex gap-4 mt-4">
          <HoverCard>
            <HoverCardTrigger>
              <BadgeCheck
                size={36}
                className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
              />
            </HoverCardTrigger>
            <HoverCardContent>
              <h1 className="font-bold mb-3"> Verified User</h1>
              <p className="text-sm text-muted-foreground">
                This User has been verified by the admin.
              </p>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <Shield
                size={36}
                className="rounded-full bg-green-500/30 border-1 border-green-500/50 p-2"
              />
            </HoverCardTrigger>
            <HoverCardContent>
              <h1 className="font-bold mb-3"> Admin</h1>
              <p className="text-sm text-muted-foreground">
                This User has been verified by the admin.
              </p>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger>
              <Candy
                size={36}
                className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
              />
            </HoverCardTrigger>
            <HoverCardContent>
              <h1 className="font-bold mb-3">Awarded</h1>
              <p className="text-sm text-muted-foreground">
                This User has been verified by the admin.
              </p>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger>
              <Citrus
                size={36}
                className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
              />
            </HoverCardTrigger>
            <HoverCardContent>
              <h1 className="font-bold mb-3">Popular</h1>
              <p className="text-sm text-muted-foreground">
                This User has been verified by the admin.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </>
  );
};

export default UserBadges;
