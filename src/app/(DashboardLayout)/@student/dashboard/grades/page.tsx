import GradeSummary from "@/Components/GradeSummary/GradeSummary";
import GradeChart from "./../../../../../Components/GradeChart/GradeChart";
import ResultChart from "./../../../../../Components/ResultChart/ResultChart";
import ExpandableGradeTable from "@/Components/ExpandableGradeTable/ExpandableGradeTable";

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
