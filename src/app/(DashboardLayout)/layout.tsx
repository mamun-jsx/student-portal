import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";

interface DashboardLayoutProps {
  children: React.ReactNode;
  student: React.ReactNode;
  admin: React.ReactNode;
}

const DashboardLayout = async ({ student, admin }: DashboardLayoutProps) => {
  const role = "student";
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: "var(--background)" }}
    >
      <Nav />
      <main className="flex-grow pt-16 px-6">
        <div className="max-w-7xl w-full mx-auto py-8">
          {role === "admin" ? admin : student}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
