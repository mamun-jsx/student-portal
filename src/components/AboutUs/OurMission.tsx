import React from "react";
import { Target, Users, Zap, ShieldCheck } from "lucide-react";

const missions = [
  {
    icon: <Target className="size-8 text-ec-primary" />,
    title: "Our Mission",
    description: "To streamline university life by providing central access to all academic, administrative, and social resources.",
  },
  {
    icon: <Users className="size-8 text-ec-accent" />,
    title: "Student-Centric",
    description: "Built by students, for students. Every feature is designed to solve real problems in the campus community.",
  },
  {
    icon: <Zap className="size-8 text-ec-secondary" />,
    title: "Efficiency",
    description: "Reduce administrative hurdles and save time with automated registration, fee payments, and results management.",
  },
  {
    icon: <ShieldCheck className="size-8 text-green-600" />,
    title: "Secure & Reliable",
    description: "Ensuring that your academic data is protected with state-of-the-art security measures and 99.9% uptime.",
  },
];

export default function OurMission() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-ec-primary text-sm font-bold uppercase tracking-widest mb-2">
            Why We Exist
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">
            Empowering Your Academic Journey
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((item, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-muted/50 border border-border hover:border-ec-primary/30 transition-all duration-300 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-ec-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
