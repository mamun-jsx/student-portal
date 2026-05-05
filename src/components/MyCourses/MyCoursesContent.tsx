"use client";

import React, { useState } from "react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar } from "lucide-react";

const semesters = [
  "Spring 2024",
  "Summer 2024",
  "Fall 2024",
  "Spring 2025",
  "Summer 2025",
  "Fall 2025",
];

const dummyData: Record<string, any[]> = {
  "Spring 2024": [
    { code: "CSE101", title: "Introduction to Computer Science", credit: 3, section: "A", instructor: "Dr. Smith" },
    { code: "MAT101", title: "Calculus I", credit: 3, section: "B", instructor: "Prof. Johnson" },
    { code: "ENG101", title: "English Composition", credit: 3, section: "C", instructor: "Ms. Davis" },
  ],
  "Summer 2024": [
    { code: "CSE201", title: "Data Structures", credit: 4, section: "A", instructor: "Dr. Brown" },
    { code: "PHY101", title: "Physics I", credit: 3, section: "B", instructor: "Prof. Wilson" },
  ],
  "Fall 2024": [
    { code: "CSE202", title: "Algorithms", credit: 3, section: "A", instructor: "Dr. Miller" },
    { code: "MAT201", title: "Linear Algebra", credit: 3, section: "D", instructor: "Prof. Taylor" },
    { code: "CSE203", title: "Database Systems", credit: 3, section: "B", instructor: "Dr. Moore" },
  ],
  "Spring 2025": [
    { code: "CSE301", title: "Operating Systems", credit: 3, section: "A", instructor: "Dr. Garcia" },
    { code: "CSE302", title: "Computer Networks", credit: 3, section: "C", instructor: "Prof. Martinez" },
    { code: "HUM101", title: "Sociology", credit: 2, section: "F", instructor: "Ms. Robinson" },
  ],
  "Summer 2025": [
    { code: "CSE303", title: "Software Engineering", credit: 3, section: "A", instructor: "Dr. Clark" },
    { code: "CSE304", title: "Artificial Intelligence", credit: 3, section: "B", instructor: "Prof. Rodriguez" },
  ],
  "Fall 2025": [
    { code: "CSE401", title: "Distributed Systems", credit: 3, section: "A", instructor: "Dr. Lewis" },
    { code: "CSE402", title: "Machine Learning", credit: 3, section: "B", instructor: "Prof. Walker" },
    { code: "MAT301", title: "Probability & Statistics", credit: 3, section: "C", instructor: "Dr. Hall" },
  ],
};

export default function MyCoursesContent() {
  const [selectedSemester, setSelectedSemester] = useState(semesters[0]);

  const courses = dummyData[selectedSemester] || [];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-ec-primary flex items-center gap-2">
            <BookOpen className="size-8" />
            My Enrolled Courses
          </h1>
          <p className="text-muted-foreground mt-1">
            View and manage your academic courses for each semester.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="size-5 text-ec-accent" />
          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger className="w-[180px] border-ec-primary/20 focus:ring-ec-primary">
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>
            <SelectContent>
              {semesters.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="border-none shadow-lg overflow-hidden bg-background/50 backdrop-blur-sm">
        <CardHeader className="bg-ec-primary/5 border-b border-ec-primary/10">
          <CardTitle className="text-xl font-bold text-ec-primary">
            Course Schedule - {selectedSemester}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="font-bold text-ec-primary w-[120px]">Course Code</TableHead>
                <TableHead className="font-bold text-ec-primary">Course Title</TableHead>
                <TableHead className="font-bold text-ec-primary text-center">Credits</TableHead>
                <TableHead className="font-bold text-ec-primary text-center">Section</TableHead>
                <TableHead className="font-bold text-ec-primary">Instructor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <TableRow key={course.code} className="hover:bg-ec-primary/5 transition-colors">
                    <TableCell className="font-medium text-ec-secondary">{course.code}</TableCell>
                    <TableCell className="font-semibold">{course.title}</TableCell>
                    <TableCell className="text-center">
                        <span className="bg-ec-accent/10 text-ec-accent px-2 py-1 rounded-full text-xs font-bold">
                            {course.credit} Credits
                        </span>
                    </TableCell>
                    <TableCell className="text-center font-bold text-gray-600">{course.section}</TableCell>
                    <TableCell className="text-muted-foreground">{course.instructor}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-32 text-center text-muted-foreground">
                    No courses enrolled for this semester.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-ec-primary/10 p-6 rounded-2xl border border-ec-primary/20">
          <h3 className="text-lg font-bold text-ec-primary mb-2">Total Credits</h3>
          <p className="text-3xl font-black text-ec-primary">
            {courses.reduce((acc, curr) => acc + curr.credit, 0)}
          </p>
        </div>
        <div className="bg-ec-accent/10 p-6 rounded-2xl border border-ec-accent/20">
          <h3 className="text-lg font-bold text-ec-accent mb-2">Total Courses</h3>
          <p className="text-3xl font-black text-ec-accent">{courses.length}</p>
        </div>
        <div className="bg-ec-secondary/10 p-6 rounded-2xl border border-ec-secondary/20">
          <h3 className="text-lg font-bold text-ec-secondary mb-2">Academic Status</h3>
          <p className="text-3xl font-black text-ec-secondary">Active</p>
        </div>
      </div>
    </div>
  );
}
