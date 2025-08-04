import * as React from "react";
import { Calendar, Clock, Home } from "lucide-react";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";
import { EmployeeLogo } from "./employee-logo";

const data = {
  user: {
    name: "user",
    email: "user@example.com",
    avatar: "/avatars/shadcn.jpg",
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
        <NavMain items={data.menu} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
