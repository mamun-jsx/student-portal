import AllStudentsTable from "@/components/AdminDashboard/AllStudentsTable";

const AllStudentsPage = async () => {
  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50/30">
      <AllStudentsTable />
    </div>
  );
};

export default AllStudentsPage;
