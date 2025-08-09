import { AnalyticsCards } from "@/components/admin/analyticsCards";
import LeaveRequests from "@/components/admin/leave-requests";

const AdminHome = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-white">
        Admin Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <AnalyticsCards />
      </div>

      <div>
        <LeaveRequests />
      </div>
    </div>
  );
};

export default AdminHome;
