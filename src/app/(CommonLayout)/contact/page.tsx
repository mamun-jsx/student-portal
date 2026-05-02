import React from "react";
import Link from "next/link";
import ContactHero from "@/components/ContactUs/ContactHero";
import ContactForm from "@/components/ContactUs/ContactForm";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import ContactFAQ from "@/components/ContactUs/ContactFAQ";
import SuccessChart from "@/components/ContactUs/SuccessChart";
import ResearchChart from "@/components/ContactUs/ResearchChart";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 1: Hero */}
      <ContactHero />

      <main className="flex-grow">
        {/* Section 2: Charts (Success Rate & Research Rate) */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SuccessChart />
              <ResearchChart />
            </div>
          </div>
        </section>

        {/* Section 3: Contact Info & Form */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--ec-primary-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Section 3.1: Contact Info */}
              <div className="h-full">
                <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border-none h-full flex flex-col">
                  <h2 className="text-3xl font-bold mb-6 text-ec-primary">Contact Information</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    We're here to help you navigate your academic path. Reach out through any of our channels for personalized assistance.
                  </p>
                  <div className="flex-grow flex flex-col justify-center">
                    <ContactInfo />
                  </div>
                </div>
              </div>

              {/* Section 4: Contact Form */}
              <div className="h-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 & 6: FAQ and CTA wrapped together and responsive */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Column: FAQ */}
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <ContactFAQ />
              </div>

              {/* Right Column: CTA */}
              <div className="bg-ec-primary text-white rounded-xl p-10 shadow-lg h-full flex flex-col justify-center text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
                  Join thousands of students who have found their future at our university. Admissions are open for the upcoming semester.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-ec-primary px-8 py-3 rounded-md font-bold hover:bg-ec-accent hover:text-white transition-all duration-300">
                    Apply Now
                  </button>
                  <Link 
                    href="/tution-fee"
                    className="inline-flex items-center justify-center bg-transparent border border-white/30 px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-all duration-300"
                  >
                    View Programs
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
