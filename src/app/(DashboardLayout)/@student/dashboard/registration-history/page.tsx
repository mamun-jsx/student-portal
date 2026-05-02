"use client";

import { LayoutList, RefreshCcw, ArrowDownToDot } from "lucide-react";
import { registrationHistory } from "@/actions/studentsApi/RegistrationHistory";
import { useEffect, useState } from "react";

const RegistrationHistory = () => {
  const data = registrationHistory;
  const semesters = data?.semester;
  const semesterHistory = data?.semesterHistory;
  const [selectedSemester, setSelectedSemester] = useState("");
  useEffect(() => {
  if (data?.semester?.length) {
    setSelectedSemester(data.semester[0].semesterId);
  }
}, [data]);
  const selectedSemesterObj = semesters?.find(
    s => s.semesterId === selectedSemester,
  );

  console.log(selectedSemester);

  return (
    <div className="min-h-screen">
      <div className="bg-white shadow-md border-b px-3 py-2">
        <span className="flex gap-1 items-center">
          <LayoutList size={20} />
          <h1 className="flex items-center gap-1 text-xl font-bold text-gray-700">
            Registration Form{" "}
            <p className="text-md text-gray-500">
              ({selectedSemesterObj?.semester})
            </p>
          </h1>
        </span>
        <p className="ml-6 text-md text-red-400">
          You are in a previous Semester!
        </p>
      </div>
      <div className="bg-white/5 space-y-5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex flex-wrap h-full items-stretch lg:justify-between space-x-3 ">
          <div className="w-80 px-4 py-3 bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 rounded-xl flex items-center">
            <select
              className="w-full text-gray-800 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
              value={selectedSemester}
              onChange={e => setSelectedSemester(e.target.value)}
            >
              {semesters.map(item => (
                <option
                  key={item._id}
                  value={item.semesterId}
                  className="hover:text-blue-400"
                >
                  {item.semester}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="flex items-center gap-1 bg-gray-400 text-gray-50 font-bold text-md px-3 py-1 rounded-tl-xl rounded-br-xl shadow-sm">
              <RefreshCcw size={18} />
              <span className="hidden sm:block md:hidden lg:block">
                Refresh Registration status
              </span>
            </button>
            <button className="flex items-center gap-1 bg-blue-400 text-gray-50 font-bold text-md px-3 py-1 rounded-bl-xl rounded-tr-xl shadow-sm">
              <ArrowDownToDot />
              <span className="hidden sm:block md:hidden lg:block">
                Download Registration Form
              </span>
            </button>
          </div>
        </div>
        <div className="rounded-t-xl rounded-b overflow-x-auto border bg-white/50 shadow-md pb-5">
          <table className="min-w-full whitespace-nowrap">
            <thead className="bg-ec-primary shadow-md">
              <tr className="text-gray-100 text-sm sm:text-md">
                <th className="px-3 py-2 text-left">#</th>
                <th className="px-3 py-2 text-left">Code</th>
                <th className="px-3 py-2 text-left">Subject</th>
                <th className="px-3 py-2 text-left">Teacher</th>
                <th className="px-3 py-2 text-left">Grade</th>
                <th className="px-3 py-2 text-left">Credits</th>
                <th className="px-3 py-2 text-left">Type</th>
                <th className="px-3 py-2 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {semesterHistory?.[selectedSemester]?.length ? (
                semesterHistory[selectedSemester].map((course, index) => (
                  <tr key={course._id}
                    className="text-gray-700 text-sm sm:text-md border-b border-gray-300"
                  >
                    <td className="px-3 py-2">{index+1}</td>
                    <td className="px-3 py-2">{course.course_code}</td>
                    <td className="px-3 py-2">{course.course_subject}</td>
                    <td className="px-3 py-2">{course.course_teacher}</td>
                    <td className="px-3 py-2">{course.course_grade}</td>
                    <td className="px-3 py-2">{course.course_credits}</td>
                    <td className="px-3 py-2">{course.course_type}</td>
                    <td className="px-3 py-2">{course.course_amount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegistrationHistory;
