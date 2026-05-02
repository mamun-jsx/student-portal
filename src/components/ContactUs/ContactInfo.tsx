import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const infoItems = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our support team is available 24/7.",
    content: "support@university.edu",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 8am to 5pm.",
    content: "+1 (555) 000-0000",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Main campus admissions office.",
    content: "123 Education Lane, Knowledge City",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Clock,
    title: "Working Hours",
    description: "Office hours for walk-ins.",
    content: "9:00 AM - 6:00 PM",
    color: "bg-orange-500/10 text-orange-500",
  },
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {infoItems.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                <Icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              <p className="text-ec-primary font-semibold">{item.content}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
