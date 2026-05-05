"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const academicData = [
  {
    id: 1,
    semester: "Summer 2025",
    gpa: "1",
    credits: "12",
    details: "Course details for Summer 2025...",
  },
  {
    id: 2,
    semester: "Fall 2025",
    gpa: "1.94",
    credits: "12",
    details: "Course details for Fall 2025...",
  },
];

const ExpandableGradeTable = () => {
  const [expandedRow, setExpendedRow] = useState<number | null>();

  const toggleRow = (id: number) => {
    setExpendedRow(expandedRow === id ? null : id);
  };

  return (
    <div className=" max-w-[90%] mx-auto overflow-hidden border rounded-xl shadow-sm mt-13 mb-3">
      <div className="bg-[#1e90ff] text-white py-2 px-4 text-center text-sm font-medium">
        Expand rows to see detailed course grade information
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50/50">
            <TableHead className="w-[50px]"></TableHead>
            <TableHead className="font-bold text-gray-700">Semester</TableHead>
            <TableHead className="font-bold text-gray-700">GPA</TableHead>
            <TableHead className="font-bold text-gray-700">CREDITS</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {academicData.map((data) => {
            return (
              <React.Fragment key={data.id}>
                <TableRow
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleRow(data.id)}
                >
                  <TableCell>
                    {expandedRow === data.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 border rounded-full" />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{data.semester}</TableCell>
                  <TableCell>{data.gpa}</TableCell>
                  <TableCell>{data.credits}</TableCell>
                </TableRow>
                {expandedRow === data.id && (
                  <TableRow className="bg-blue-50/20">
                    <TableCell
                      colSpan={4}
                      className="p-4 text-sm text-gray-600"
                    >
                      <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                        {data.details}
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpandableGradeTable;
