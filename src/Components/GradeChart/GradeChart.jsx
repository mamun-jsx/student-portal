"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { grade: "A+", count: 0 },
  { grade: "A", count: 0 },
  { grade: "A-", count: 0 },
  { grade: "B+", count: 1 },
  { grade: "B", count: 0 },
  { grade: "B-", count: 0 },
  { grade: "C+", count: 0 },
  { grade: "C", count: 2 },
  { grade: "C-", count: 0 },
  { grade: "D", count: 2 },
  { grade: "F", count: 3 },
];

const chartConfig = {
  count: {
    label: "Total Students",
    color: "var(--chart-1)",
  },
};
const GradeChart = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-xl border border-gray-100 mt-13 w-[90%] mx-auto ">
      <h1 className="text-2xl font-bold mb-6 text-sky-500 text-center">
        Grade
      </h1>

      <div className="w-full">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: -20, bottom: 5 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              className="stroke-muted"
            />

            <XAxis
              dataKey="grade"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              className="text-xs font-medium"
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
              className="text-xs"
              tickFormatter={(value) => `${value}.0`}
            />

            <ChartTooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              content={<ChartTooltipContent />}
            />

            <Bar
              dataKey="count"
              fill="var(--color-count)"
              radius={[4, 4, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default GradeChart;
