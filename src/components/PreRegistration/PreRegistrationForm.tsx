"use client";

import React, { useState } from "react";
import { preRegData, Course } from "@/actions/studentsApi/Preregistration";
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
import { FileText } from "lucide-react";
import toast from "react-hot-toast";

export default function PreRegistrationForm() {
  const [selectedSeason, setSelectedSeason] = useState<string>("Summer 2025");

  const courses: Course[] = preRegData[selectedSeason] || [];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-start gap-3">
        <div className="mt-1">
          <FileText className="w-6 h-6 text-slate-700" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            Preregistration <span className="text-slate-500 font-normal">({selectedSeason})</span>
          </h1>
        </div>
      </div>

      {/* Select Box Card */}
      <div className="max-w-xl">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-2">
          <Select
            value={selectedSeason}
            onValueChange={(value) => setSelectedSeason(value)}
          >
            <SelectTrigger className="w-full border-none shadow-none focus:ring-0 focus:ring-offset-0 text-slate-700">
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(preRegData).map((season) => (
                <SelectItem key={season} value={season}>
                  {season}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-ec-primary hover:bg-ec-primary border-none">
                <TableHead className="w-[120px] font-semibold text-white h-12 whitespace-nowrap">Code</TableHead>
                <TableHead className="font-semibold text-white h-12 min-w-[200px]">Title</TableHead>
                <TableHead className="text-center font-semibold text-white h-12 whitespace-nowrap">Credits</TableHead>
                <TableHead className="text-center font-semibold text-white h-12 min-w-[150px]">Faculty</TableHead>
                <TableHead className="text-center font-semibold text-white h-12 min-w-[200px]">Day # Time # Room</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <TableRow key={course.id} className="hover:bg-muted/50 transition-colors border-b">
                    <TableCell className="font-medium text-foreground py-4">{course.code}</TableCell>
                    <TableCell className="text-muted-foreground py-4">{course.title}</TableCell>
                    <TableCell className="text-center text-muted-foreground py-4">{course.credits}</TableCell>
                    <TableCell className="text-center text-muted-foreground py-4">{course.faculty}</TableCell>
                    <TableCell className="text-center text-muted-foreground py-4">{course.schedule}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No courses available for the selected semester.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="p-4 border-t flex justify-end bg-muted/20">
          <Button 
            className="bg-ec-primary hover:bg-ec-accent text-white px-8"
            onClick={() => toast.success("Request submitted successfully!")}
          >
            Confirm Registration
          </Button>
        </div>
      </div>
    </div>
  );
}
