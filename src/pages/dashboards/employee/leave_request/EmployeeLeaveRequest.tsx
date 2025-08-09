import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const EmployeeLeaveRequest = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-white">
        My Leaves
      </h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <h3 className="text-lg">Vacation</h3>
            <Badge className="bg-yellow-200 text-black ml-auto">Pending</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-1/4">
            <h3>Leave Type</h3>
            <p className="text-muted-foreground">Papers</p>
          </div>
          <div className="w-1/4">
            <h3>Durations</h3>
            <p className="text-muted-foreground">5 days</p>
          </div>
          <div className="w-1/4">
            <h3>Start Date</h3>
            <p className="text-muted-foreground">01/08/2025</p>
          </div>
          <div className="w-1/4">
            <h3>End Date</h3>
            <p className="text-muted-foreground">13/08/2025</p>
          </div>
          <div className="w-1/4">
            <h3>Reason</h3>
            <p className="text-muted-foreground">Personal</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeLeaveRequest;
