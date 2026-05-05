import React from "react";

export default function AboutHistory() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-ec-primary text-sm font-bold uppercase tracking-widest mb-2">
              Our Journey
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
              A Legacy of Academic Excellence
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2010, our university has always been at the forefront of educational innovation. The Student Portal was launched in 2020 to meet the growing needs for a centralized digital campus.
              </p>
              <p>
                What started as a simple course registration system has evolved into a comprehensive ecosystem that handles everything from financial transactions to AI-powered academic advising.
              </p>
              <p>
                Today, we serve over 15,000 students across 12 departments, providing them with the tools they need to excel in an increasingly digital world.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             {/* Decorative Elements */}
             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <div className="bg-gradient-to-br from-ec-primary to-ec-accent aspect-video flex items-center justify-center text-white text-4xl font-bold p-12 text-center">
                  Building the Future of Education
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(var(--ec-primary-rgb),0.1)_0%,transparent_70%)] pointer-events-none -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
