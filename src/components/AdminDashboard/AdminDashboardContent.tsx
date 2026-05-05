"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  TrendingUp, 
  CheckCircle2, 
  Star,
  Users2,
  Calendar
} from "lucide-react";

const passingRateData = [
  { semester: "Spring 23", rate: 85 },
  { semester: "Summer 23", rate: 88 },
  { semester: "Fall 23", rate: 82 },
  { semester: "Spring 24", rate: 91 },
  { semester: "Summer 24", rate: 89 },
  { semester: "Fall 24", rate: 93 },
];

const reviewData = [
  { category: "Expertise", score: 92 },
  { category: "Response", score: 85 },
  { category: "Support", score: 88 },
  { category: "Materials", score: 90 },
  { category: "Punctuality", score: 94 },
];

const COLORS = ["var(--ec-primary)", "var(--ec-accent)", "var(--ec-secondary)", "#10b981", "#f59e0b"];

export default function AdminDashboardContent() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground">
            Admin <span className="text-[var(--ec-primary)]">Overview</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Managing the future of education. Here's your institution's performance.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border">
          <div className="bg-[var(--ec-primary)]/10 p-2 rounded-lg">
            <Calendar className="size-5 text-[var(--ec-primary)]" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Academic Session</p>
            <p className="font-bold">2024 - 2025</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Students" 
          value="15,420" 
          icon={<Users className="text-blue-500" />} 
          trend="+12% from last year"
        />
        <StatCard 
          title="Faculty Members" 
          value="450" 
          icon={<GraduationCap className="text-[var(--ec-primary)]" />} 
          description="98.5% Teacher Response"
        />
        <StatCard 
          title="Active Courses" 
          value="254" 
          icon={<BookOpen className="text-[var(--ec-secondary)]" />} 
          description="12 New this semester"
        />
        <StatCard 
          title="Average Passing Rate" 
          value="89.4%" 
          icon={<TrendingUp className="text-green-500" />} 
          trend="+2.1% improvement"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Passing Rate Chart */}
        <Card className="lg:col-span-2 shadow-lg border-none bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <CheckCircle2 className="size-5 text-[var(--ec-primary)]" />
              Student Passing Rate (%)
            </CardTitle>
            <CardDescription>Academic success rate over the last 6 semesters</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={passingRateData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="semester" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#888', fontSize: 12 }}
                />
                <YAxis 
                  domain={[0, 100]} 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#888', fontSize: 12 }}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(var(--ec-primary-rgb), 0.05)' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar 
                  dataKey="rate" 
                  fill="var(--ec-primary)" 
                  radius={[6, 6, 0, 0]} 
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Teacher Reviews / Good Reviews Rate */}
        <Card className="shadow-lg border-none bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Star className="size-5 text-yellow-500 fill-yellow-500" />
              Faculty Performance
            </CardTitle>
            <CardDescription>Student feedback & review metrics</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-6 py-4">
             <div className="w-full space-y-4">
                {reviewData.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span>{item.category}</span>
                      <span className="text-[var(--ec-primary)]">{item.score}%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-[var(--ec-primary)] h-full transition-all duration-1000" 
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
             </div>

             <div className="pt-6 w-full text-center">
                <div className="bg-[var(--ec-accent)]/5 p-4 rounded-xl border border-[var(--ec-accent)]/10">
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Good Review Rate</p>
                  <p className="text-4xl font-black text-[var(--ec-accent)]">94.2%</p>
                </div>
             </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <Card className="shadow-lg border-none bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Credit Completion Rate</CardTitle>
            </CardHeader>
            <CardContent className="h-[250px]">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Completed', value: 78 },
                        { name: 'On Track', value: 15 },
                        { name: 'Behind', value: 7 },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {COLORS.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
               </ResponsiveContainer>
               <div className="flex justify-center gap-6 text-xs font-bold">
                  <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-[var(--ec-primary)]"/> Completed (78%)</div>
                  <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-[var(--ec-accent)]"/> On Track (15%)</div>
                  <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-[var(--ec-secondary)]"/> Behind (7%)</div>
               </div>
            </CardContent>
         </Card>

         <Card className="shadow-lg border-none bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Users2 className="size-5 text-[var(--ec-secondary)]" />
                Student Status Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
               <div className="space-y-4">
                  <StatusItem label="Good Results (CGPA > 3.5)" value="4,200 Students" percentage={27} color="bg-green-500" />
                  <StatusItem label="Full Attendance (> 90%)" value="8,900 Students" percentage={58} color="bg-[var(--ec-primary)]" />
                  <StatusItem label="Graduation Ready" value="1,200 Students" percentage={8} color="bg-[var(--ec-accent)]" />
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, description, trend }: any) {
  return (
    <Card className="border-none shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-gray-50 rounded-2xl">
            {icon}
          </div>
          {trend && (
            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full uppercase tracking-wider">
              {trend}
            </span>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">{title}</p>
          <p className="text-3xl font-black text-foreground">{value}</p>
        </div>
        <p className="text-xs text-muted-foreground mt-2 font-medium">{description}</p>
      </CardContent>
    </Card>
  );
}

function StatusItem({ label, value, percentage, color }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors">
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-bold">{label}</span>
          <span className="text-sm font-black text-gray-800">{value}</span>
        </div>
        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
          <div 
            className={`${color} h-full transition-all duration-1000`} 
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
