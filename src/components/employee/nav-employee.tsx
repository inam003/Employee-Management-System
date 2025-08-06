import { type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, NavLink } from "react-router";
import { cn } from "@/lib/utils";

export function NavEmployee({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <NavLink to={item.url} key={item.title} end>
            {({ isActive }) => (
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={cn(
                    "transition-colors",
                    isActive ? "bg-blue-600 text-white hover:bg-blue-700" : ""
                  )}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </NavLink>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
