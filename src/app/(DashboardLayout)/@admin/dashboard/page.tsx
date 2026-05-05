import AdminDashboardContent from "@/components/AdminDashboard/AdminDashboardContent";

const AdminDashboardPage = async () => {
  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50/30">
      <AdminDashboardContent />
    </div>
  );
};

export default AdminDashboardPage;
