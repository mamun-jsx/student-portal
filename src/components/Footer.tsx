"use client";

import Link from "next/link";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useState } from "react";

const menu = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Tution Fee", url: "/tution-fee" },
  { title: "Contact", url: "/contact" },
  { title: "Privacy Policy", url: "/privacy-policy" },
];

const socials = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }
    // Simulate API call
    toast.success("Email sent successfully!");
    setEmail("");
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo & Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-ec-primary to-ec-accent bg-clip-text text-transparent">
                Student Portal
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Empowering students with seamless access to academic resources,
              tuition details, and university announcements. Your one-stop
              destination for a better campus experience.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {menu.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-sm text-muted-foreground hover:text-ec-primary transition-colors w-fit"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Socials & Subscription */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Follow Us
              </h3>
              <div className="flex flex-col space-y-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-ec-primary transition-colors w-fit"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground">
                Stay Updated
              </h3>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-muted border-none focus-visible:ring-1 focus-visible:ring-ec-primary"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-ec-primary hover:bg-ec-accent shrink-0"
                >
                  <Send className="size-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} University Name. All rights reserved.
          </p>
          <p className="font-medium text-ec-primary/80">
            Excellence in Education
          </p>
        </div>
      </div>
    </footer>
  );
}
