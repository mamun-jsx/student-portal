"use client";

import React, { useState, useEffect } from "react";
import { 
  LayoutList, 
  RefreshCcw, 
  Download, 
  History, 
  Search,
  BookOpen,
  DollarSign,
  GraduationCap
} from "lucide-react";
import { registrationHistory } from "@/actions/studentsApi/RegistrationHistory";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function RegistrationHistoryContent() {
  const data = registrationHistory;
  const semesters = data?.semester || [];
  const semesterHistory = data?.semesterHistory || {};
  
  const [selectedSemester, setSelectedSemester] = useState("");

  useEffect(() => {
    if (semesters.length > 0) {
      setSelectedSemester(semesters[0].semesterId);
    }
  }, [semesters]);

  const selectedSemesterObj = semesters.find(s => s.semesterId === selectedSemester);
  const currentHistory = semesterHistory[selectedSemester] || [];

  const totalCredits = currentHistory.reduce((acc, curr) => acc + parseInt(curr.course_credits || "0"), 0);
  const totalAmount = currentHistory.reduce((acc, curr) => acc + (curr.course_amount || 0), 0);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border">
        <div className="flex items-center gap-4">
          <div className="bg-[var(--ec-primary)]/10 p-3 rounded-2xl text-[var(--ec-primary)]">
            <History className="size-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Registration History</h1>
            <p className="text-muted-foreground font-medium flex items-center gap-2">
              <GraduationCap className="size-4" />
              Academic Year 2026 • {selectedSemesterObj?.semester || "Select Semester"}
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="w-56">
            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger className="h-11 border-gray-200 focus:ring-[var(--ec-primary)]">
                <SelectValue placeholder="Select Semester" />
              </SelectTrigger>
              <SelectContent>
                {semesters.map((item) => (
                  <SelectItem key={item._id} value={item.semesterId}>
                    {item.semester}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" size="icon" className="h-11 w-11 hover:text-[var(--ec-primary)]">
            <RefreshCcw className="size-4" />
          </Button>
          <Button className="h-11 bg-[var(--ec-primary)] hover:bg-[var(--ec-accent)] text-white font-semibold gap-2">
            <Download className="size-4" />
            Download Form
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-none shadow-md bg-white overflow-hidden group">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
              <BookOpen className="size-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Courses</p>
              <p className="text-2xl font-black text-gray-800">{currentHistory.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-md bg-white overflow-hidden group">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-purple-50 p-3 rounded-xl text-purple-600 group-hover:scale-110 transition-transform">
              <LayoutList className="size-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Credits</p>
              <p className="text-2xl font-black text-gray-800">{totalCredits}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-md bg-white overflow-hidden group">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-green-50 p-3 rounded-xl text-green-600 group-hover:scale-110 transition-transform">
              <DollarSign className="size-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Amount</p>
              <p className="text-2xl font-black text-gray-800">৳{totalAmount.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Table */}
      <Card className="border-none shadow-xl bg-white overflow-hidden">
        <CardHeader className="bg-gray-50/50 border-b px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl font-bold">Enrolled Courses</CardTitle>
              <CardDescription>Comprehensive list of subjects for {selectedSemesterObj?.semester}</CardDescription>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              Previous Semester Record
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="w-[60px] pl-8">#</TableHead>
                  <TableHead className="font-bold">Code</TableHead>
                  <TableHead className="font-bold">Subject Name</TableHead>
                  <TableHead className="font-bold">Instructor</TableHead>
                  <TableHead className="font-bold text-center">Grade</TableHead>
                  <TableHead className="font-bold text-center">Credits</TableHead>
                  <TableHead className="font-bold">Type</TableHead>
                  <TableHead className="text-right pr-8 font-bold">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentHistory.length > 0 ? (
                  currentHistory.map((course, index) => (
                    <TableRow key={course._id} className="hover:bg-gray-50 transition-colors group">
                      <TableCell className="pl-8 text-muted-foreground font-medium">{index + 1}</TableCell>
                      <TableCell className="font-bold text-[var(--ec-primary)]">{course.course_code}</TableCell>
                      <TableCell className="font-semibold text-gray-800">{course.course_subject}</TableCell>
                      <TableCell className="text-muted-foreground font-medium">{course.course_teacher}</TableCell>
                      <TableCell className="text-center">
                        <span className="inline-block px-3 py-1 rounded-lg bg-gray-100 font-black text-[var(--ec-accent)] shadow-sm">
                          {course.course_grade}
                        </span>
                      </TableCell>
                      <TableCell className="text-center font-bold text-gray-700">{course.course_credits}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          course.course_type === 'Regular' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                        }`}>
                          {course.course_type}
                        </span>
                      </TableCell>
                      <TableCell className="text-right pr-8 font-bold text-[var(--ec-secondary)]">
                        ৳{course.course_amount.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="h-40 text-center">
                      <div className="flex flex-col items-center justify-center text-muted-foreground space-y-2">
                        <Search className="size-8 opacity-20" />
                        <p className="font-medium">No registration data found for this semester.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      {/* Footer Note */}
      <div className="bg-[var(--ec-primary)]/5 border border-[var(--ec-primary)]/10 p-6 rounded-2xl">
        <p className="text-sm text-[var(--ec-primary)] font-medium leading-relaxed">
          <strong>Note:</strong> This data is fetched from the central academic repository. If you notice any discrepancies in your grades or course list, please contact the Registrar's Office immediately. Digital copies of the registration form are valid for all official campus purposes.
        </p>
      </div>
    </div>
  );
}
