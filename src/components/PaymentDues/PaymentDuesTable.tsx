"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, CreditCard, Receipt, Percent } from "lucide-react";

export default function PaymentDuesTable() {
  const totalCredits = 24;
  const costPerCredit = 4500;
  const waiverPercentage = 20;
  
  const totalTuition = totalCredits * costPerCredit;
  const waiverAmount = (totalTuition * waiverPercentage) / 100;
  const netTuition = totalTuition - waiverAmount;
  
  const registrationFee = 15000;
  const examFee = 3000;
  const labFee = 5000;
  
  const totalSemesterFee = netTuition + registrationFee + examFee + labFee;
  
  const beforeMidtermPay = (netTuition * 0.4) + registrationFee + labFee;
  const afterMidtermPay = (netTuition * 0.6) + examFee;

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[var(--ec-primary)] flex items-center gap-3">
              <CreditCard className="size-8" />
              Fall 2025 Payment Details
            </h1>
            <p className="text-gray-500 mt-2">
              Financial breakdown for the current semester based on enrolled credits.
            </p>
          </div>
          <div className="bg-[var(--ec-accent)]/10 text-[var(--ec-accent)] px-4 py-2 rounded-full font-bold flex items-center gap-2">
            <Percent className="size-4" />
            {waiverPercentage}% Waiver Applied
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Total Credits</p>
            <p className="text-3xl font-black text-[var(--ec-primary)]">{totalCredits}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Total Semester Fee</p>
            <p className="text-3xl font-black text-[var(--ec-primary)]">৳{totalSemesterFee.toLocaleString()}</p>
          </div>
          <div className="bg-[var(--ec-secondary)]/5 p-6 rounded-xl border border-[var(--ec-secondary)]/20">
            <p className="text-sm text-[var(--ec-secondary)] uppercase tracking-wider font-semibold mb-1">Net Tuition Fee</p>
            <p className="text-3xl font-black text-[var(--ec-secondary)]">৳{netTuition.toLocaleString()}</p>
          </div>
        </div>

        <Card className="border-none shadow-md overflow-hidden bg-white mb-8">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Receipt className="size-5 text-[var(--ec-primary)]" />
              Fee Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-gray-50/50">
                <TableRow>
                  <TableHead className="font-bold text-gray-700 pl-6">Description</TableHead>
                  <TableHead className="font-bold text-gray-700">Calculation</TableHead>
                  <TableHead className="text-right font-bold text-gray-700 pr-6">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="pl-6 font-medium">Tuition Fee</TableCell>
                  <TableCell>{totalCredits} Credits × ৳{costPerCredit.toLocaleString()}</TableCell>
                  <TableCell className="text-right pr-6">৳{totalTuition.toLocaleString()}</TableCell>
                </TableRow>
                <TableRow className="text-green-600 bg-green-50/30">
                  <TableCell className="pl-6 font-medium">Scholarship/Waiver</TableCell>
                  <TableCell>{waiverPercentage}% Merit Waiver</TableCell>
                  <TableCell className="text-right pr-6 font-bold">- ৳{waiverAmount.toLocaleString()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-6 font-medium">Registration Fee</TableCell>
                  <TableCell>Per Semester</TableCell>
                  <TableCell className="text-right pr-6">৳{registrationFee.toLocaleString()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-6 font-medium">Lab & Resource Fee</TableCell>
                  <TableCell>Flat Rate</TableCell>
                  <TableCell className="text-right pr-6">৳{labFee.toLocaleString()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-6 font-medium">Semester Final Exam Fee</TableCell>
                  <TableCell>Scheduled</TableCell>
                  <TableCell className="text-right pr-6">৳{examFee.toLocaleString()}</TableCell>
                </TableRow>
                <TableRow className="bg-[var(--ec-primary)]/5">
                  <TableCell colSpan={2} className="pl-6 font-bold text-[var(--ec-primary)]">Total Payable Amount</TableCell>
                  <TableCell className="text-right pr-6 font-black text-2xl text-[var(--ec-primary)]">৳{totalSemesterFee.toLocaleString()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-dashed border-[var(--ec-secondary)]/30 p-6 rounded-2xl relative overflow-hidden group hover:border-[var(--ec-secondary)] transition-colors">
            <div className="absolute top-0 right-0 bg-[var(--ec-secondary)] text-white px-4 py-1 rounded-bl-xl font-bold text-sm">
              Phase 1
            </div>
            <h3 className="text-2xl font-bold text-[var(--ec-secondary)] mb-4">Before Midterm Payment</h3>
            <ul className="space-y-3 mb-6 text-gray-600">
              <li className="flex justify-between"><span>Registration Fee:</span> <span className="font-semibold">৳{registrationFee.toLocaleString()}</span></li>
              <li className="flex justify-between"><span>Lab Fee:</span> <span className="font-semibold">৳{labFee.toLocaleString()}</span></li>
              <li className="flex justify-between"><span>40% of Tuition:</span> <span className="font-semibold">৳{(netTuition * 0.4).toLocaleString()}</span></li>
            </ul>
            <div className="border-t pt-4 flex justify-between items-center">
              <span className="text-gray-500 font-medium">Total Phase 1:</span>
              <span className="text-3xl font-black text-[var(--ec-secondary)]">৳{beforeMidtermPay.toLocaleString()}</span>
            </div>
          </div>

          <div className="bg-white border-2 border-dashed border-[var(--ec-accent)]/30 p-6 rounded-2xl relative overflow-hidden group hover:border-[var(--ec-accent)] transition-colors">
            <div className="absolute top-0 right-0 bg-[var(--ec-accent)] text-white px-4 py-1 rounded-bl-xl font-bold text-sm">
              Phase 2
            </div>
            <h3 className="text-2xl font-bold text-[var(--ec-accent)] mb-4">After Midterm Payment</h3>
            <ul className="space-y-3 mb-6 text-gray-600">
              <li className="flex justify-between"><span>60% of Tuition:</span> <span className="font-semibold">৳{(netTuition * 0.6).toLocaleString()}</span></li>
              <li className="flex justify-between"><span>Exam Fee:</span> <span className="font-semibold">৳{examFee.toLocaleString()}</span></li>
            </ul>
            <div className="border-t pt-4 flex justify-between items-center">
              <span className="text-gray-500 font-medium">Total Phase 2:</span>
              <span className="text-3xl font-black text-[var(--ec-accent)]">৳{afterMidtermPay.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
          <Info className="size-5 text-blue-500 mt-0.5 shrink-0" />
          <p className="text-sm text-blue-700">
            <strong>Important:</strong> All payments must be cleared before the final exams to avoid late fees or enrollment suspension. If you have questions regarding your waiver, please contact the scholarship office.
          </p>
        </div>
      </div>
    </div>
  );
}
