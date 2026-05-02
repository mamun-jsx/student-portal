"use client";

import React, { useState } from "react";
import { myReviewCourses, ReviewCourse } from "@/actions/studentsApi/Reviews";
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
import { Star, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";

const StarRating = ({
  rating,
  onRatingChange,
  disabled,
}: {
  rating: number;
  onRatingChange: (rating: number) => void;
  disabled: boolean;
}) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={disabled}
          className={`focus:outline-none ${disabled ? "cursor-not-allowed opacity-80" : "hover:scale-110 transition-transform"}`}
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => !disabled && setHover(star)}
          onMouseLeave={() => !disabled && setHover(0)}
        >
          <Star
            className={`w-6 h-6 ${
              star <= (hover || rating)
                ? "fill-amber-400 text-amber-400"
                : "fill-transparent text-slate-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default function ReviewTable() {
  const [courses, setCourses] = useState<ReviewCourse[]>(myReviewCourses);

  const handleRatingChange = (id: string, newRating: number) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id ? { ...course, rating: newRating } : course
      )
    );
  };

  const handleSubmit = (id: string) => {
    const course = courses.find((c) => c.id === id);
    if (!course?.rating) {
      toast.error("Please select a rating before submitting.");
      return;
    }

    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "Submitted" } : c))
    );
    toast.success("Review submitted successfully!");
  };

  return (
    <Card className="border-none shadow-md bg-card overflow-hidden">
      <CardHeader className="bg-ec-primary/5 border-b">
        <CardTitle className="text-2xl font-bold text-ec-primary">
          Course Evaluations
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Provide feedback for your completed courses.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-ec-primary hover:bg-ec-primary border-none">
                <TableHead className="w-[120px] font-semibold text-white h-12 whitespace-nowrap">Course Code</TableHead>
                <TableHead className="font-semibold text-white h-12 min-w-[200px]">Course Title</TableHead>
                <TableHead className="font-semibold text-white h-12 min-w-[150px]">Teacher</TableHead>
                <TableHead className="text-center font-semibold text-white h-12 min-w-[180px]">Rating</TableHead>
                <TableHead className="text-right font-semibold text-white h-12 pr-6 min-w-[120px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <TableRow key={course.id} className="hover:bg-muted/50 transition-colors border-b">
                    <TableCell className="font-medium text-foreground py-4">
                      {course.courseCode}
                    </TableCell>
                    <TableCell className="text-muted-foreground py-4">
                      {course.courseTitle}
                    </TableCell>
                    <TableCell className="text-muted-foreground py-4">
                      {course.teacher}
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex justify-center">
                        <StarRating
                          rating={course.rating || 0}
                          onRatingChange={(r) => handleRatingChange(course.id, r)}
                          disabled={course.status === "Submitted"}
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-right pr-6 py-4">
                      <Button
                        size="sm"
                        variant={course.status === "Submitted" ? "outline" : "default"}
                        disabled={course.status === "Submitted" || !course.rating}
                        onClick={() => handleSubmit(course.id)}
                        className={
                          course.status === "Submitted"
                            ? "text-green-600 border-green-200 bg-green-50 hover:bg-green-100"
                            : "bg-ec-primary hover:bg-ec-accent text-white"
                        }
                      >
                        {course.status === "Submitted" ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 mr-1.5" />
                            Submitted
                          </>
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">
                    No courses require review at this time.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
