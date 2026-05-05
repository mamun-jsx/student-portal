"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/Components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chartConfig = {
  gpa: {
    label: "GPA",
    color: "#3b82f6",
  },
  credits: {
    label: "Credits",
    color: "#22c55e",
  },
  cgpa: {
    label: "CGPA",
    color: "#f59e0b",
  },
};

const defaultData = [
  { semester: "Summer 2025", gpa: 6.0, credits: 0, cgpa: 6.5 },
  { semester: "Fall 2025", gpa: 11.8, credits: 0, cgpa: 9.5 },
];

export default function ResultChart({ data = defaultData }) {
  return (
    <Card className="max-w-[90%] mx-auto mt-13 rounded-2xl border border-slate-100 shadow-lg">
      <CardHeader className="pb-2 pt-6 text-center">
        <CardTitle className="text-xl font-bold text-sky-500">
          Result Summary
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[380px] w-full">
          <LineChart
            data={data}
            margin={{ top: 20, right: 60, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="4 4" vertical={false} />

            <XAxis
              dataKey="semester"
              tickLine={false}
              axisLine={{ stroke: "#cbd5e1" }}
              tick={{ fontSize: 13 }}
              dy={9}
            />

            <YAxis
              yAxisId="left"
              domain={[0, 12]}
              ticks={[0.0, 3.0, 6.0, 9.0, 12.0]}
              tickLine={false}
              axisLine={false}
              label={{
                value: "Semester Wise Credit",
                angle: -90,
                position: "insideLeft",
                offset: -5,
                style: { fontSize: 12, fill: "#64748b" },
              }}
            />

            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 2.0]}
              tickFormatter={(v) => v.toFixed(2)}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#f59e0b", fontSize: 12 }}
            />

            {data.map((entry) => (
              <ReferenceLine
                key={entry.semester}
                yAxisId="left"
                x={entry.semester}
                stroke="#22d3ee"
                strokeWidth={1.5}
              />
            ))}

            <ChartTooltip content={<ChartTooltipContent />} />

            <ChartLegend content={<ChartLegendContent />} />

            <Line
              yAxisId="left"
              type="monotone"
              dataKey="gpa"
              stroke="var(--color-gpa)"
              strokeWidth={2.5}
              dot={{ r: 5, fill: "var(--color-gpa)", strokeWidth: 0 }}
              activeDot={{ r: 7 }}
            />

            <Line
              yAxisId="left"
              type="monotone"
              dataKey="credits"
              stroke="var(--color-credits)"
              strokeWidth={2.5}
              dot={{ r: 5, fill: "var(--color-credits)", strokeWidth: 0 }}
              activeDot={{ r: 7 }}
            />

            <Line
              yAxisId="right"
              type="monotone"
              dataKey="cgpa"
              stroke="var(--color-cgpa)"
              strokeWidth={2.5}
              dot={{ r: 5, fill: "var(--color-cgpa)", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
