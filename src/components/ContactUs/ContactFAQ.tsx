import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I apply for admission?",
    answer: "You can apply through our online portal by clicking the 'Register' button in the navbar. Ensure you have your academic transcripts and identification documents ready.",
  },
  {
    question: "What are the tuition payment deadlines?",
    answer: "Tuition fees are typically due two weeks before the start of each semester. You can find specific dates in the academic calendar on the Tution Fee page.",
  },
  {
    question: "Are scholarships available for international students?",
    answer: "Yes, we offer various merit-based and need-based scholarships for both domestic and international students. Applications open every January.",
  },
  {
    question: "How can I request an official transcript?",
    answer: "Official transcripts can be requested through the Student Dashboard under the 'Documents' section. Processing usually takes 3-5 business days.",
  },
  {
    question: "What support services are available for students?",
    answer: "We provide comprehensive support including academic advising, career counseling, mental health services, and peer tutoring at no extra cost.",
  },
];

export default function ContactFAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-ec-primary">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b-ec-primary/10">
            <AccordionTrigger className="text-left font-semibold hover:text-ec-primary hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
