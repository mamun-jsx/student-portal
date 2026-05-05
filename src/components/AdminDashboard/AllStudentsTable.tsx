"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Search, GraduationCap, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

const studentData: Record<string, any[]> = {
  "Fall 2024": [
    { id: "2024-1-60-001", name: "Md. Imran Hossain", credits: 105, dept: "CSE", year: 2024, status: "Active" },
    { id: "2024-1-60-002", name: "Sara Ahmed", credits: 98, dept: "BBA", year: 2024, status: "Active" },
    { id: "2024-1-60-003", name: "Tanvir Rahman", credits: 112, dept: "EEE", year: 2024, status: "Active" },
  ],
  "Spring 2024": [
    { id: "2023-3-60-045", name: "Ayesha Khan", credits: 65, dept: "Pharmacy", year: 2023, status: "Active" },
    { id: "2023-3-60-046", name: "Rafiqul Islam", credits: 72, dept: "English", year: 2023, status: "Active" },
  ],
};

const semesters = ["Fall 2024", "Spring 2024", "Summer 2024", "Fall 2023"];

export default function AllStudentsTable() {
  const [selectedSemester, setSelectedSemester] = useState("Fall 2024");
  const [search, setSearch] = useState("");

  const filteredStudents = (studentData[selectedSemester] || []).filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-6 rounded-2xl border shadow-sm">
        <div className="flex items-center gap-4">
          <div className="bg-[var(--ec-secondary)]/10 p-3 rounded-2xl text-[var(--ec-secondary)]">
            <Users className="size-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Student Directory</h1>
            <p className="text-muted-foreground text-sm font-medium">Manage and view student records by semester.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <div className="relative flex-grow sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input 
              placeholder="Search by ID or Name..." 
              className="pl-10 h-11 border-gray-200" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger className="w-[180px] h-11 border-gray-200">
              <SelectValue placeholder="Semester" />
            </SelectTrigger>
            <SelectContent>
              {semesters.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="border-none shadow-xl bg-white overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="pl-8 font-bold">Student Name</TableHead>
                <TableHead className="font-bold">Student ID</TableHead>
                <TableHead className="font-bold">Department</TableHead>
                <TableHead className="font-bold text-center">Completed Credits</TableHead>
                <TableHead className="font-bold text-center">Admission Year</TableHead>
                <TableHead className="text-right pr-8 font-bold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <TableRow key={student.id} className="hover:bg-gray-50 transition-colors">
                    <TableCell className="pl-8 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-[var(--ec-primary)]/10 flex items-center justify-center text-[var(--ec-primary)] font-bold">
                          {student.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2)}
                        </div>
                        <span className="font-bold text-gray-800">{student.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-[var(--ec-secondary)]">{student.id}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider">
                        {student.dept}
                      </span>
                    </TableCell>
                    <TableCell className="text-center font-black text-gray-700">{student.credits}</TableCell>
                    <TableCell className="text-center font-bold text-gray-600">{student.year}</TableCell>
                    <TableCell className="text-right pr-8">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        <div className="size-1.5 rounded-full bg-green-600 animate-pulse" />
                        {student.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-40 text-center text-muted-foreground font-medium">
                    No students found matching your criteria.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
