"use client";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const GradeSummary = () => {
  const summaryData = [
    { label: "Credits Completed", value: "15" },
    { label: "Credits Attempted", value: "24" },
    { label: "CGPA (By Credits Completed)", value: "1.47" },
    { label: "CGPA (By Credits Attempted)", value: "1.47" },
  ];

  return (
    <div className="max-w-[90%] mx-auto overflow-hidden border rounded-xl shadow-sm mt-20">
      <div className="bg-[#1e90ff] text-white py-3 px-4 text-center font-semibold text-lg">
        Grade Summary
      </div>
      <Table>
        <TableBody>
          {summaryData.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-bold">{data.label}</TableCell>
              <TableCell className="text-left py-4 px-6 font-bold text-gray-900">
                {data.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default GradeSummary;
