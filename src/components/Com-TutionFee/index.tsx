"use client";

import React, { useState, useMemo } from "react";
import { TuitionFee } from "@/actions/studentsApi/TutionFee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Search, Info } from "lucide-react";

interface Program {
  program_name: string;
  majors?: string;
  credit_hours: string | number;
  duration: string;
  payable_during_admission: number;
  average_semester_fees: number;
  tuition_fees: string | number;
  total_program_fees: string | number;
}

const ComTutionFee = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [feeRange, setFeeRange] = useState([0, 1500000]); // Max range based on data

  // Helper to get numeric fee for filtering
  const getNumericFee = (fee: string | number): number => {
    if (typeof fee === "number") return fee;
    const match = fee.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const filteredData = useMemo(() => {
    const result: Record<string, Program[]> = {};
    
    Object.entries(TuitionFee).forEach(([faculty, programs]) => {
      const filtered = (programs as Program[]).filter((program) => {
        const matchesSearch = program.program_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        
        const totalFee = getNumericFee(program.total_program_fees);
        const matchesFee = totalFee <= feeRange[1];

        return matchesSearch && matchesFee;
      });

      if (filtered.length > 0) {
        result[faculty] = filtered;
      }
    });

    return result;
  }, [searchTerm, feeRange]);


  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24 px-6 md:px-12 mb-12">
        <div className="max-w-7xl mx-auto text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Program <span className="text-[var(--ec-accent)]">Tuition</span> & Fees
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Invest in your future. Explore our comprehensive fee structures across
            various faculties and find the program that fits your goals and budget.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-12 -mt-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            {/* Search */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Search size={16} className="text-[var(--ec-primary)]" />
                Search by Subject
              </label>
              <Input
                placeholder="e.g. Computer Science, BBA..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12 border-gray-200 focus-visible:ring-[var(--ec-primary)]"
              />
            </div>

            {/* Fee Slider */}
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-700">
                  Max Tuition Fee: <span className="text-[var(--ec-secondary)] font-bold">৳{feeRange[1].toLocaleString()}</span>
                </label>
                <span className="text-xs text-gray-400">Range: 0 - 1.5M</span>
              </div>
              <Slider
                defaultValue={[1500000]}
                max={1500000}
                step={50000}
                onValueChange={(value) => setFeeRange([0, value[0]])}
                className="py-4"
              />
            </div>
          </div>
        </div>

        {/* Data Display - Accordion & Tables */}
        <div className="space-y-6">
          {Object.keys(filteredData).length > 0 ? (
            <Accordion type="single" collapsible defaultValue={Object.keys(filteredData)[0]} className="space-y-4">
              {Object.entries(filteredData).map(([faculty, programs]) => (
                <AccordionItem
                  key={faculty}
                  value={faculty}

                  className="border rounded-xl bg-white overflow-hidden shadow-sm hover:border-[var(--ec-primary)] transition-colors"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <span className="text-lg font-bold text-gray-800 group-hover:text-[var(--ec-primary)] transition-colors">
                      {faculty}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pt-0">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader className="bg-gray-50">
                          <TableRow>
                            <TableHead className="w-[300px] pl-6">Program Name</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Credit Hours</TableHead>
                            <TableHead>Admission Fee</TableHead>
                            <TableHead className="text-right pr-6">Total Fee</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {programs.map((program, pIndex) => (
                            <TableRow key={pIndex} className="hover:bg-gray-50/50">
                              <TableCell className="font-medium pl-6 py-4">
                                <div>{program.program_name}</div>
                                {program.majors && (
                                  <div className="text-xs text-gray-500 mt-1 flex items-start gap-1">
                                    <Info size={12} className="mt-0.5 shrink-0" />
                                    <span>Majors: {program.majors}</span>
                                  </div>
                                )}
                              </TableCell>
                              <TableCell>{program.duration}</TableCell>
                              <TableCell>{program.credit_hours}</TableCell>
                              <TableCell>৳{program.payable_during_admission.toLocaleString()}</TableCell>
                              <TableCell className="text-right pr-6 font-bold text-[var(--ec-primary)]">
                                {typeof program.total_program_fees === 'number' 
                                  ? `৳${program.total_program_fees.toLocaleString()}`
                                  : `৳${program.total_program_fees}`}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed">
              <p className="text-gray-500 text-lg">No programs found matching your criteria.</p>
              <button 
                onClick={() => {setSearchTerm(""); setFeeRange([0, 1500000]);}}
                className="mt-4 text-[var(--ec-primary)] font-semibold hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComTutionFee;
