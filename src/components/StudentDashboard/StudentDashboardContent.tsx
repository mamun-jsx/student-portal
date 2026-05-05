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
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { 
  GraduationCap, 
  BookOpen, 
  Trophy, 
  Clock, 
  TrendingUp,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const gpaData = [
  { semester: "Spring 23", gpa: 3.5 },
  { semester: "Summer 23", gpa: 3.7 },
  { semester: "Fall 23", gpa: 3.4 },
  { semester: "Spring 24", gpa: 3.8 },
  { semester: "Summer 24", gpa: 3.9 },
  { semester: "Fall 24", gpa: 3.75 },
];

const creditsData = [
  { name: "Completed", value: 100, color: "var(--ec-primary)" },
  { name: "Remaining", value: 30, color: "var(--ec-accent)" },
];

export default function StudentDashboardContent() {
  const totalCredits = 130;
  const completedCredits = 100;
  const progressPercentage = (completedCredits / totalCredits) * 100;

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground">
            Student <span className="text-[var(--ec-primary)]">Dashboard</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's an overview of your academic progress.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border">
          <div className="bg-[var(--ec-primary)]/10 p-2 rounded-lg">
            <CalendarIcon className="size-5 text-[var(--ec-primary)]" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Current Semester</p>
            <p className="font-bold">Fall 2024</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Current CGPA" 
          value="3.75" 
          icon={<Trophy className="text-yellow-500" />} 
          description="Top 10% of class"
          trend="+0.05 from last sem"
        />
        <StatCard 
          title="Credits Completed" 
          value={`${completedCredits}/${totalCredits}`} 
          icon={<GraduationCap className="text-[var(--ec-primary)]" />} 
          description={`${totalCredits - completedCredits} credits remaining`}
          progress={progressPercentage}
        />
        <StatCard 
          title="Enrolled Courses" 
          value="5" 
          icon={<BookOpen className="text-[var(--ec-secondary)]" />} 
          description="15 Credits this semester"
        />
        <StatCard 
          title="Attendance" 
          value="92%" 
          icon={<Clock className="text-[var(--ec-accent)]" />} 
          description="Excellent consistency"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* GPA Trend Chart */}
        <Card className="lg:col-span-2 shadow-lg border-none bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="size-5 text-[var(--ec-primary)]" />
              GPA Progress Trend
            </CardTitle>
            <CardDescription>Your performance over the last 6 semesters</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={gpaData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="semester" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#888', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  domain={[0, 4]} 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#888', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="gpa" 
                  stroke="var(--ec-primary)" 
                  strokeWidth={4} 
                  dot={{ r: 6, fill: 'var(--ec-primary)', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Graduation Progress */}
        <Card className="shadow-lg border-none bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Graduation Path</CardTitle>
            <CardDescription>Credits required for graduation</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-8 py-8">
            <div className="relative size-48">
              <svg className="size-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-100 stroke-current"
                  strokeWidth="10"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-[var(--ec-primary)] stroke-current transition-all duration-1000 ease-out"
                  strokeWidth="10"
                  strokeDasharray={`${progressPercentage * 2.51} 251`}
                  strokeLinecap="round"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-[var(--ec-primary)]">{Math.round(progressPercentage)}%</span>
                <span className="text-xs text-muted-foreground font-bold uppercase">Complete</span>
              </div>
            </div>
            
            <div className="w-full space-y-4">
              <ProgressItem label="Core Courses" current={75} total={80} color="bg-[var(--ec-primary)]" />
              <ProgressItem label="Electives" current={15} total={30} color="bg-[var(--ec-secondary)]" />
              <ProgressItem label="General Ed" current={10} total={20} color="bg-[var(--ec-accent)]" />
            </div>

            <div className="pt-4 w-full">
               <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center gap-3">
                  <AlertCircle className="size-5 text-blue-500 shrink-0" />
                  <p className="text-xs text-blue-700 font-medium">
                    You need 30 more credits to apply for graduation. Keep it up!
                  </p>
               </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity / Next Classes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <Card className="shadow-lg border-none bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <DeadlineItem title="Database Project Phase 2" date="Oct 25, 2024" type="Assignment" color="text-red-500" />
                <DeadlineItem title="Algorithm Midterm Exam" date="Oct 28, 2024" type="Exam" color="text-[var(--ec-accent)]" />
                <DeadlineItem title="Software Engineering Quiz" date="Nov 02, 2024" type="Quiz" color="text-[var(--ec-secondary)]" />
              </div>
            </CardContent>
         </Card>

         <Card className="shadow-lg border-none bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Recent Results</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="space-y-4">
                  <ResultItem subject="Computer Networks" grade="A" score="92/100" />
                  <ResultItem subject="Operating Systems" grade="A-" score="88/100" />
                  <ResultItem subject="Discrete Mathematics" grade="B+" score="84/100" />
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, description, trend, progress }: any) {
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
        {progress !== undefined ? (
          <div className="mt-4 w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-[var(--ec-primary)] h-full transition-all duration-1000" 
              style={{ width: `${progress}%` }}
            />
          </div>
        ) : (
          <p className="text-xs text-muted-foreground mt-2 font-medium">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}

function ProgressItem({ label, current, total, color }: any) {
  const percent = (current / total) * 100;
  return (
    <div className="w-full space-y-1">
      <div className="flex justify-between text-xs font-bold">
        <span>{label}</span>
        <span className="text-muted-foreground">{current}/{total}</span>
      </div>
      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
        <div 
          className={`${color} h-full transition-all duration-1000`} 
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function DeadlineItem({ title, date, type, color }: any) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3">
        <div className={`size-2 rounded-full ${color.replace('text', 'bg')}`} />
        <div>
          <p className="text-sm font-bold">{title}</p>
          <p className="text-[10px] text-muted-foreground font-semibold uppercase">{type}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-foreground">{date}</p>
        <p className="text-[10px] text-muted-foreground font-semibold uppercase">Deadline</p>
      </div>
    </div>
  );
}

function ResultItem({ subject, grade, score }: any) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50">
      <div className="flex items-center gap-3">
        <div className="bg-white size-10 rounded-lg flex items-center justify-center shadow-sm">
          <CheckCircle2 className="size-5 text-green-500" />
        </div>
        <p className="text-sm font-bold">{subject}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-xs font-bold text-muted-foreground uppercase">{score}</p>
        </div>
        <div className="bg-white size-10 rounded-lg flex items-center justify-center border font-black text-[var(--ec-primary)] shadow-sm">
          {grade}
        </div>
      </div>
    </div>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
      <line x1="16" x2="16" y1="2" y2="6"/>
      <line x1="8" x2="8" y1="2" y2="6"/>
      <line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  );
}
