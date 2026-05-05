import GradeSummary from "@/components/GradeSummary/GradeSummary";
import GradeChart from "@/components/GradeChart/GradeChart";
import ResultChart from "@/components/ResultChart/ResultChart";
import ExpandableGradeTable from "@/components/ExpandableGradeTable/ExpandableGradeTable";

const Grades = () => {
  return (
    <div>
      <GradeSummary />
      <ResultChart />
      <GradeChart />
      <ExpandableGradeTable />
    </div>
  );
};

export default Grades;
