import AllCoursesTable from "@/components/AdminDashboard/AllCoursesTable";

const AllCoursePage = async () => {
  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50/30">
      <AllCoursesTable />
    </div>
  );
};

export default AllCoursePage;
