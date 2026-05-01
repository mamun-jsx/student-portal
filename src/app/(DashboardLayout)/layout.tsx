import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getUser } from "@/utils/getUser";

interface DashboardLayoutProps {
  children: React.ReactNode;
  student: React.ReactNode;
  admin: React.ReactNode;
}

const DashboardLayout = async ({ student, admin }: DashboardLayoutProps) => {
  const user = await getUser();
  const role = user?.role || "student";

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex-1" />
          
        </header>
        <main className="flex-1 overflow-y-auto px-1">
          {role === "admin" ? admin : student}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
