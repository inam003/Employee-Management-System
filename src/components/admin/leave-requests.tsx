import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const LeaveRequests = () => {
  return (
    <div>
      <Card>
        <CardHeader className="font-semibold">
          <CardTitle className="text-2xl mb-2">Recent Leave Requests</CardTitle>
          <CardDescription className="text-base">
            Latest leave requests requiring your attention
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="py-4">
            <CardContent className="flex items-center justify-start gap-3">
              <Avatar className="size-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-muted-foreground">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  User name
                </h3>
                <p>09/08/2025 - 11/08/2025</p>
                <p>Papers</p>
              </div>
              <Badge className="ml-auto bg-yellow-200 text-black">
                Pending
              </Badge>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeaveRequests;
