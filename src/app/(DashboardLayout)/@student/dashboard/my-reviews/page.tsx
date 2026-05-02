import React from "react";
import ReviewTable from "@/components/MyReviews/ReviewTable";

export default function MyReviewsPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          My Reviews <span className="text-muted-foreground font-normal text-2xl">(Fall 2025)</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Please rate the courses you have completed. Your feedback helps improve our academic standards.
        </p>
      </div>
      
      <ReviewTable />
    </div>
  );
}
