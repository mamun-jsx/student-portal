"use client";

import { useState, useEffect } from "react";

interface User {
  name: string;
  role: "admin" | "student";
}

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    }
    setLoading(false);
  }, []);
  console.log("user -->  hook", user);
  return { user, loading };
};
