import * as React from "react";
import { Calendar, Clock, Home } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { EmployeeLogo } from "./employee-logo";
import { EmployeeFooter } from "./employee-footer";
import { NavEmployee } from "./nav-employee";

const data = {
  user: {
    name: "employee",
    email: "employee@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  menu: [
    {
      title: "Dashboard",
      url: "/employee/dashboard",
      icon: Home,
    },
    {
      title: "Leave Requests",
      url: "/employee/dashboard/leave-request",
      icon: Calendar,
    },
    {
      title: "Attendance",
      url: "/employee/dashboard/attendance",
      icon: Clock,
    },
  ],
};

export function EmployeeSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <EmployeeLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavEmployee items={data.menu} />
      </SidebarContent>
      <SidebarFooter>
        <EmployeeFooter user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
