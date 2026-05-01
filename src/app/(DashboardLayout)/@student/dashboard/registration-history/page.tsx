"use client"

import { rHistory } from "@/actions/studentsApi/RegistationHistory";
import { useState } from "react";

const RegistrationHistory = () => {
  const data = rHistory;
  const [users, setUsers] = useState([]);
  console.log(users);
  console.log(data);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Registration History</h1>
      <h1 className="text-red-500 font-bold text-2xl">
        Md Hasan Ali I have taken this page i shall work on it
      </h1>
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
        <p className="text-gray-400">View your previous course registrations here.</p>

      </div>
    </div>
  );
};

export default RegistrationHistory;
