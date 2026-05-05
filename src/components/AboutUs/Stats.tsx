import React from "react";

const stats = [
  { label: "Active Students", value: "15,000+" },
  { label: "Available Courses", value: "250+" },
  { label: "Expert Faculty", value: "400+" },
  { label: "Success Rate", value: "98%" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-muted/30 border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-extrabold text-ec-primary">
                {stat.value}
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
