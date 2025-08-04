import * as React from "react";
import { Calendar, Clock, Home, Users } from "lucide-react";
import { NavUser } from "@/components/nav-user";
import { AdminLogo } from "@/components/admin/admin-logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";

const data = {
  user: {
    name: "user",
    email: "user@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  menu: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: Home,
    },
    {
      title: "Employees",
      url: "/admin/dashboard/employees",
      icon: Users,
    },
    {
      title: "Leave Requests",
      url: "/admin/dashboard/leave-request",
      icon: Calendar,
    },
    {
      title: "Attendance",
      url: "/admin/dashboard/attendance",
      icon: Clock,
    },
  ],
};

export function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AdminLogo />
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
