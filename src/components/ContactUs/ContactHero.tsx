import React from "react";

export default function ContactHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-ec-primary">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="container relative mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Get in Touch With Us
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Have questions about admissions, tuition, or campus life? Our dedicated team is here to support your academic journey every step of the way.
        </p>
      </div>
    </section>
  );
}
