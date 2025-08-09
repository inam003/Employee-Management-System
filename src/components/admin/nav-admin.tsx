import { type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";

export function NavAdmin({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}) {
  return (
    <SidebarGroup className="p-0 pt-3">
      <SidebarMenu>
        {items.map((item) => (
          <NavLink to={item.url} key={item.title} end>
            {({ isActive }) => (
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={cn(
                    "transition-colors px-3 py-5 rounded-none",
                    isActive
                      ? "bg-blue-600 hover:bg-blue-700 text-white hover:text-white dark:hover:text-white"
                      : ""
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
