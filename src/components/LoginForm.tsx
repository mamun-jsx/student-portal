"use client";

import React, { useState } from "react";
import { ShieldCheck, UserCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function LoginForm() {
  const [loadingRole, setLoadingRole] = useState<"admin" | "student" | null>(null);
  const router = useRouter();

  const handleLogin = async (role: "admin" | "student") => {
    setLoadingRole(role);
    const userData =
      role === "admin"
        ? { name: "admin", role: "admin" }
        : { name: "Mr. Rahim", role: "student" };

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Set localStorage
    localStorage.setItem("user", JSON.stringify(userData));

    // Set cookie
    document.cookie = `user=${encodeURIComponent(
      JSON.stringify(userData)
    )}; path=/; max-age=86400;`; // 1 day

    toast.success(`Welcome back, ${userData.name}!`);
    setLoadingRole(null);
    
    // Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-ec-primary to-ec-accent bg-clip-text text-transparent">
          Welcome Back
        </h1>
        <p className="text-gray-400 mt-2">Please select your role to continue</p>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => handleLogin("student")}
          disabled={!!loadingRole}
          className="group relative flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-ec-secondary/10 to-ec-primary/10 border border-ec-secondary/20 hover:border-ec-secondary/50 transition-all duration-300 cursor-pointer overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ec-secondary/5 to-ec-primary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          <div className="relative flex items-center gap-4">
            <div className="p-3 rounded-lg bg-ec-secondary/20 text-ec-secondary group-hover:scale-110 transition-transform">
              {loadingRole === "student" ? (
                <Loader2 size={24} className="animate-spin" />
              ) : (
                <UserCircle size={24} />
              )}
            </div>
            <div className="text-left">
              <span className="block text-lg font-semibold text-white">
                Student Portal
              </span>
              <span className="text-sm text-gray-400">
                {loadingRole === "student" ? "Logging in..." : "Access your courses"}
              </span>
            </div>
          </div>
          <div className="relative h-2 w-2 rounded-full bg-ec-secondary animate-pulse" />
        </button>

        <button
          onClick={() => handleLogin("admin")}
          disabled={!!loadingRole}
          className="group relative flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-ec-primary/10 to-ec-accent/10 border border-ec-primary/20 hover:border-ec-primary/50 transition-all duration-300 cursor-pointer overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ec-primary/5 to-ec-accent/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          <div className="relative flex items-center gap-4">
            <div className="p-3 rounded-lg bg-ec-primary/20 text-ec-primary group-hover:scale-110 transition-transform">
              {loadingRole === "admin" ? (
                <Loader2 size={24} className="animate-spin" />
              ) : (
                <ShieldCheck size={24} />
              )}
            </div>
            <div className="text-left">
              <span className="block text-lg font-semibold text-white">
                Admin Panel
              </span>
              <span className="text-sm text-gray-400">
                {loadingRole === "admin" ? "Logging in..." : "Manage institution"}
              </span>
            </div>
          </div>
          <div className="relative h-2 w-2 rounded-full bg-ec-primary animate-pulse" />
        </button>
      </div>

      <div className="text-center text-xs text-gray-500 pt-4 border-t border-white/10">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </div>
    </div>
  );
}
