import { CalendarDaysIcon, Clock, Hourglass, Users } from "lucide-react";

export const adminAnalytics = [
  { title: "Total Employees", value: 10, icon: Users },
  { title: "Pending Leaves", value: 3, icon: Hourglass },
  {
    title: "Leave History",
    value: 5,
    icon: CalendarDaysIcon,
  },
  { title: "Total Attendance", value: 10, icon: Clock },
];

export const employeeAnalytics = [
  { title: "My Leave Requests", value: 5, icon: CalendarDaysIcon },
  {
    title: "Leave History",
    value: 5,
    icon: CalendarDaysIcon,
  },
  { title: "My Attendance", value: 8, icon: Clock },
];
