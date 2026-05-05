"use client";

import React from "react";
import { TuitionFee } from "@/actions/studentsApi/TutionFee";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Info, DollarSign } from "lucide-react";

interface Program {
  program_name: string;
  majors?: string;
  credit_hours: string | number;
  duration: string;
  total_program_fees: string | number;
  faculty: string;
}

export default function AllCoursesTable() {
  // Flatten the tuition fee data into a single list of programs
  const allPrograms = Object.entries(TuitionFee).flatMap(([faculty, programs]) => 
    programs.map(program => ({ ...program, faculty } as Program))
  );

  return (
    <Card className="border-none shadow-xl bg-white overflow-hidden animate-in fade-in duration-700">
      <CardHeader className="bg-gray-50/50 border-b px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-[var(--ec-primary)]/10 p-3 rounded-2xl text-[var(--ec-primary)]">
              <BookOpen className="size-8" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">All Academic Programs</CardTitle>
              <CardDescription>Comprehensive list of courses and tuition structures across all faculties.</CardDescription>
            </div>
          </div>
          <div className="bg-green-50 text-green-700 px-4 py-2 rounded-xl border border-green-100 flex items-center gap-2 font-bold text-sm">
            <DollarSign className="size-4" />
            Pricing Updated
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[300px] pl-8 font-bold">Program Name</TableHead>
                <TableHead className="font-bold">Faculty</TableHead>
                <TableHead className="font-bold">Duration</TableHead>
                <TableHead className="font-bold text-center">Credits</TableHead>
                <TableHead className="font-bold text-right pr-8">Total Fee</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allPrograms.map((program, index) => (
                <TableRow key={index} className="hover:bg-gray-50 transition-colors group">
                  <TableCell className="pl-8 py-4">
                    <div className="font-bold text-gray-800">{program.program_name}</div>
                    {program?.majors && (
                      <div className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1 font-semibold uppercase">
                        <Info size={10} className="text-[var(--ec-primary)]" />
                        Majors: {program?.majors?.slice(0, 60)}...
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                      {program.faculty}
                    </span>
                  </TableCell>
                  <TableCell className="font-medium text-gray-600">{program.duration}</TableCell>
                  <TableCell className="text-center font-bold text-gray-700">{program.credit_hours}</TableCell>
                  <TableCell className="text-right pr-8">
                    <span className="font-black text-[var(--ec-primary)]">
                       ৳{typeof program.total_program_fees === 'number' 
                         ? program.total_program_fees.toLocaleString() 
                         : program.total_program_fees}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
