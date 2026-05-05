import StudentDashboardContent from "@/components/StudentDashboard/StudentDashboardContent";

const StudentDashboard = async () => {
  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50/30">
      <StudentDashboardContent />
    </div>
  );
};

export default StudentDashboard;
