"use client";

import React, { useState } from "react";
import { adminPreRegRequests, PreRegRequest } from "@/actions/adminApi/PreRegRequests";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, BookOpen } from "lucide-react";
import toast from "react-hot-toast";

export default function AdminPreRegRequests() {
  const [requests, setRequests] = useState<PreRegRequest[]>(adminPreRegRequests);

  const handleAccept = (id: string) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "Accepted" } : req))
    );
    toast.success("Registration request accepted.");
  };

  return (
    <div className="space-y-6">
      <Card className="border-none shadow-md bg-white/50 backdrop-blur-sm overflow-hidden">
        <CardHeader className="bg-ec-primary/5 border-b border-ec-primary/10">
          <CardTitle className="text-2xl font-bold text-ec-primary flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Pre-registration Requests
          </CardTitle>
          <CardDescription className="text-slate-600">
            Review and accept course registration requests from students.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-ec-primary hover:bg-ec-primary border-none">
                  <TableHead className="font-semibold text-white h-12 min-w-[200px]">Student Details</TableHead>
                  <TableHead className="font-semibold text-white h-12 min-w-[200px]">Course Title</TableHead>
                  <TableHead className="font-semibold text-white h-12 text-center whitespace-nowrap">Course Code</TableHead>
                  <TableHead className="font-semibold text-white h-12 text-center whitespace-nowrap">Total Enrolled</TableHead>
                  <TableHead className="font-semibold text-white h-12 text-center min-w-[100px]">Status</TableHead>
                  <TableHead className="font-semibold text-white h-12 text-right pr-6 min-w-[120px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.length > 0 ? (
                  requests.map((request) => (
                    <TableRow key={request.id} className="hover:bg-muted/50 transition-colors border-b">
                      <TableCell className="py-4">
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground">{request.studentName}</span>
                          <span className="text-xs text-muted-foreground">{request.studentId}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-muted-foreground py-4">{request.courseTitle}</TableCell>
                      <TableCell className="text-center text-muted-foreground py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded bg-muted text-xs font-mono text-foreground">
                          {request.courseCode}
                        </span>
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <div className="flex items-center justify-center gap-1.5 text-ec-primary font-medium">
                          <Users className="w-4 h-4" />
                          {request.totalEnrolled}
                        </div>
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            request.status === "Accepted"
                              ? "bg-green-100 text-green-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {request.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right pr-6 py-4">
                        <Button
                          size="sm"
                          variant={request.status === "Accepted" ? "outline" : "default"}
                          disabled={request.status === "Accepted"}
                          onClick={() => handleAccept(request.id)}
                          className={
                            request.status === "Accepted"
                              ? "text-green-600 border-green-200 bg-green-50 hover:bg-green-100"
                              : "bg-ec-primary hover:bg-ec-accent text-white"
                          }
                        >
                          {request.status === "Accepted" ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 mr-1.5" />
                              Accepted
                            </>
                          ) : (
                            "Accept"
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                      No pending requests at this time.
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
