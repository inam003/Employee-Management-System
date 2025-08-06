import * as React from "react";
import { Calendar, Clock, Home, Users } from "lucide-react";
import { AdminFooter } from "@/components/admin/admin-footer";
import { AdminLogo } from "@/components/admin/admin-logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavAdmin } from "@/components/admin/nav-admin";

const data = {
  user: {
    name: "admin",
    email: "admin@example.com",
    avatar: "https://github.com/shadcn.png",
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
        <NavAdmin items={data.menu} />
      </SidebarContent>
      <SidebarFooter>
        <AdminFooter user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
