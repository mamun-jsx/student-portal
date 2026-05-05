"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import toast from "react-hot-toast";
import { BookPlus, Save, LayoutGrid } from "lucide-react";

const courseSchema = z.object({
  programName: z.string().min(5, { message: "Program name must be at least 5 characters." }),
  courseCode: z.string().min(3, { message: "Course code is required." }),
  credits: z.string().min(1, { message: "Credits are required." }),
  faculty: z.string().min(2, { message: "Faculty is required." }),
  admissionFee: z.string().min(1, { message: "Admission fee is required." }),
  totalFee: z.string().min(1, { message: "Total fee is required." }),
  description: z.string().optional(),
});

export default function AddCourseForm() {
  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      programName: "",
      courseCode: "",
      credits: "",
      faculty: "",
      admissionFee: "",
      totalFee: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof courseSchema>) {
    console.log("New Course Data:", values);
    toast.success(`Course "${values.programName}" added successfully!`);
    form.reset();
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-2xl border-none bg-white animate-in zoom-in-95 duration-500">
      <CardHeader className="bg-[var(--ec-primary)] text-white rounded-t-2xl p-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
            <BookPlus className="size-8" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold">Add New Program</CardTitle>
            <CardDescription className="text-white/80">Launch a new academic course into the university system.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="programName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-gray-700">Program Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. B.Sc. in Data Science" {...field} className="h-12 border-gray-200 focus-visible:ring-[var(--ec-primary)]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="courseCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-gray-700">Program Code</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. DS101" {...field} className="h-12 border-gray-200 focus-visible:ring-[var(--ec-primary)]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FormField
                control={form.control}
                name="credits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-gray-700">Total Credits</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="148" {...field} className="h-12 border-gray-200 focus-visible:ring-[var(--ec-primary)]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="faculty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-gray-700">Faculty</FormLabel>
                    <FormControl>
                      <Input placeholder="FSIT" {...field} className="h-12 border-gray-200 focus-visible:ring-[var(--ec-primary)]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="admissionFee"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-gray-700">Admission Fee (৳)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="60000" {...field} className="h-12 border-gray-200 focus-visible:ring-[var(--ec-primary)]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="totalFee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-gray-700">Total Program Fee (৳)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="1050000" {...field} className="h-12 border-gray-200 focus-visible:ring-[var(--ec-primary)]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-gray-700">Program Description / Majors</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter program highlights and available majors..." 
                      className="min-h-[120px] border-gray-200 focus-visible:ring-[var(--ec-primary)]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-4 pt-4">
              <Button type="button" variant="outline" className="h-12 px-8 font-bold border-gray-300">
                Cancel
              </Button>
              <Button type="submit" className="h-12 px-10 bg-[var(--ec-primary)] hover:bg-[var(--ec-accent)] text-white font-bold gap-2">
                <Save className="size-5" />
                Save Program
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
