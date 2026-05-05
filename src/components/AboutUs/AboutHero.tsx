import React from "react";

export default function AboutHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-ec-primary text-white">
      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ec-accent rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
          About Our <span className="text-ec-accent">Student Portal</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          We are dedicated to providing a seamless, efficient, and empowering digital experience for students and faculty alike. Our mission is to bridge the gap between academic resources and student success.
        </p>
      </div>
    </section>
  );
}
