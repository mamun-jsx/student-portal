import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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
    <div
      className="flex flex-col min-h-screen"
      style={{ background: "var(--background)" }}
    >
      <Nav />
      <main className="flex-grow pt-16 px-6">
        <div className="max-w-7xl w-full mx-auto py-8 space-y-6">
          {user && (
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h1 className="text-2xl font-bold text-white">
                Welcome back, <span className="text-ec-accent">{user.name}</span>!
              </h1>
              <p className="text-gray-400">
                You are logged in as <span className="capitalize">{user.role}</span>.
              </p>
            </div>
          )}
          {role === "admin" ? admin : student}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
