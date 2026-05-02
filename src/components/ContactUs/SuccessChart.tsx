"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const data = [
  { year: "2010", rate: 72 },
  { year: "2011", rate: 74 },
  { year: "2012", rate: 75 },
  { year: "2013", rate: 78 },
  { year: "2014", rate: 80 },
  { year: "2015", rate: 82 },
  { year: "2016", rate: 85 },
  { year: "2017", rate: 84 },
  { year: "2018", rate: 87 },
  { year: "2019", rate: 89 },
  { year: "2020", rate: 88 },
  { year: "2021", rate: 91 },
  { year: "2022", rate: 93 },
  { year: "2023", rate: 95 },
  { year: "2024", rate: 96 },
  { year: "2025", rate: 97 },
  { year: "2026", rate: 98 },
];

export default function SuccessChart() {
  return (
    <Card className="border-none shadow-xl bg-background/50 backdrop-blur-sm overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-ec-primary">Academic Success Rate</CardTitle>
        <CardDescription>Consistent growth in student graduation and placement success from 2010 to 2026.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#000000" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#000000" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.1)" />
              <XAxis 
                dataKey="year" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                domain={[60, 100]}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))', 
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                itemStyle={{ color: 'hsl(var(--primary))', fontWeight: 'bold' }}
              />
              <Area
                type="monotone"
                dataKey="rate"
                stroke="var(--ec-primary)"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorRate)"
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
