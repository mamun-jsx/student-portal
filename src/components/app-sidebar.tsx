"use client";

import {
  Book,
  LayoutDashboard,
  LogOut,
  PlusCircle,
  Users,
  Star,
  History,
  Trash2,
  GraduationCap,
  IdCard,
  CreditCard,
  Calendar,
  ClipboardCheck,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@/hooks/useUser";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const adminItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Add Course",
    url: "/dashboard/add-course",
    icon: PlusCircle,
  },
  {
    title: "All Courses",
    url: "/dashboard/all-course",
    icon: Book,
  },
  {
    title: "All Students",
    url: "/dashboard/all-students",
    icon: Users,
  },
];

const studentItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Courses",
    url: "/dashboard/my-courses",
    icon: Book,
  },
  {
    title: "My Reviews",
    url: "/dashboard/my-reviews",
    icon: Star,
  },
  {
    title: "Registration History",
    url: "/dashboard/registration-history",
    icon: History,
  },
  {
    title: "Course Drop",
    url: "/dashboard/course-drop",
    icon: Trash2,
  },
  {
    title: "Grades",
    url: "/dashboard/grades",
    icon: GraduationCap,
  },
  {
    title: "Admit Card",
    url: "/dashboard/admit-card",
    icon: IdCard,
  },
  {
    title: "Payment Dues",
    url: "/dashboard/payment-dues",
    icon: CreditCard,
  },
  {
    title: "Academic Calendar",
    url: "/dashboard/academic-calendar",
    icon: Calendar,
  },
  {
    title: "Preregistration",
    url: "/dashboard/preregistration",
    icon: ClipboardCheck,
  },
];

export function AppSidebar() {
  const { user, loading } = useUser();
  const pathname = usePathname();

  const handleLogout = () => {
    document.cookie = "user=; path=/; max-age=0;";
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const items = user?.role === "admin" ? adminItems : studentItems;

  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b ">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-ec-primary to-ec-accent bg-clip-text text-transparent">
            <Link href="/">Student Portal</Link>
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            {!loading && (
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              className="text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
