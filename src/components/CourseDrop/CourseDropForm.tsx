"use client";

import React, { useState } from "react";
import { dropCourseData, DroppableCourse } from "@/actions/studentsApi/CourseDrop";
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
import { Trash2, AlertTriangle, Info } from "lucide-react";
import toast from "react-hot-toast";
import { Card, CardContent } from "@/components/ui/card";

export default function CourseDropForm() {
  const [selectedSeason, setSelectedSeason] = useState<string>("Summer 2025");
  // We use local state to manage UI updates for dropped courses
  const [data, setData] = useState(dropCourseData);

  const courses: DroppableCourse[] = data[selectedSeason] || [];

  const handleDrop = (courseId: string) => {
    setData((prev) => ({
      ...prev,
      [selectedSeason]: prev[selectedSeason].map((course) =>
        course.id === courseId ? { ...course, status: "Pending Approval" } : course
      ),
    }));
    toast.success("Course drop request submitted for approval.");
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-start gap-3">
        <div className="mt-1">
          <Trash2 className="w-6 h-6 text-slate-700" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            Course Drop <span className="text-slate-500 font-normal">({selectedSeason})</span>
          </h1>
          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
            <AlertTriangle className="w-4 h-4" />
            Warning: Dropping a course may affect your graduation timeline.
          </p>
        </div>
      </div>

      {/* Select Box Card */}
      <div className="max-w-xl">
        <Card className="bg-card rounded-lg shadow-sm border p-2">
          <Select
            value={selectedSeason}
            onValueChange={(value) => setSelectedSeason(value)}
          >
            <SelectTrigger className="w-full border-none shadow-none focus:ring-0 focus:ring-offset-0 text-foreground font-medium">
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(data).map((season) => (
                <SelectItem key={season} value={season}>
                  {season}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Card>
      </div>

      {/* Info Notice */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3">
        <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
        <p className="text-sm text-blue-700">
          Only courses with a failing grade (F) or those eligible for withdrawal are listed below. All drops require academic advisor approval.
        </p>
      </div>

      {/* Table Section */}
      <Card className="bg-card rounded-lg shadow-sm border overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-ec-primary hover:bg-ec-primary border-none">
                  <TableHead className="w-[120px] font-semibold text-white h-12 whitespace-nowrap">Course Code</TableHead>
                  <TableHead className="font-semibold text-white h-12 min-w-[200px]">Course Title</TableHead>
                  <TableHead className="font-semibold text-white h-12 min-w-[200px]">Teacher</TableHead>
                  <TableHead className="text-center font-semibold text-white h-12 whitespace-nowrap">Grade</TableHead>
                  <TableHead className="text-center font-semibold text-white h-12 min-w-[150px]">Status</TableHead>
                  <TableHead className="text-right font-semibold text-white h-12 pr-6 min-w-[120px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.length > 0 ? (
                  courses.map((course) => (
                    <TableRow key={course.id} className="hover:bg-muted/50 transition-colors border-b">
                      <TableCell className="font-medium text-foreground py-4">{course.code}</TableCell>
                      <TableCell className="text-muted-foreground py-4">{course.title}</TableCell>
                      <TableCell className="text-muted-foreground py-4">{course.teacher}</TableCell>
                      <TableCell className="text-center py-4">
                        <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded font-bold bg-red-100 text-red-700 font-mono">
                          {course.grade}
                        </span>
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            course.status === "Pending Approval"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {course.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right pr-6 py-4">
                        <Button
                          size="sm"
                          variant={course.status === "Pending Approval" ? "outline" : "destructive"}
                          disabled={course.status === "Pending Approval"}
                          onClick={() => handleDrop(course.id)}
                          className={
                            course.status === "Pending Approval"
                              ? "bg-slate-50 text-slate-500 border-slate-200"
                              : "bg-red-500 hover:bg-red-600 text-white"
                          }
                        >
                          {course.status === "Pending Approval" ? "Pending..." : "Drop Course"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                      <div className="flex flex-col items-center gap-2">
                        <div className="p-3 bg-muted rounded-full">
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                        </div>
                        <p>No droppable courses found for the selected semester.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Ensure CheckCircle2 is imported
import { CheckCircle2 } from "lucide-react";
