import React from "react";
import AdminPreRegRequests from "@/components/Admin/AdminPreRegRequests";

export default function AdminPreRegistrationReqPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Teacher Portal</h1>
        <p className="text-muted-foreground mt-2">
          Manage and review course preregistration requests from students.
        </p>
      </div>
      
      <AdminPreRegRequests />
    </div>
  );
}
