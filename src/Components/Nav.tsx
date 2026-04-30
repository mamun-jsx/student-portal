"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, GraduationCap, LogOut } from "lucide-react";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const generalLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/course" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const adminLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Add Course", href: "/dashboard/add-course" },
  { name: "All Courses", href: "/dashboard/all-course" },
  { name: "All Students", href: "/dashboard/all-students" },
];

const studentLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "My Courses", href: "/dashboard/my-courses" },
  { name: "My Reviews", href: "/dashboard/my-reviews" },
];

interface DropdownProps {
  label: string;
  links: { name: string; href: string }[];
  dotColor: string;
}

function Dropdown({ label, links, dotColor }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        id={`nav-dropdown-${label.toLowerCase()}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: dotColor }}
        />
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute top-[calc(100%+8px)] left-0 min-w-[180px] rounded-xl overflow-hidden z-50 border"
          style={{
            background: "rgba(10, 6, 28, 0.96)",
            backdropFilter: "blur(24px)",
            borderColor: dotColor + "33",
            boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${dotColor}22`,
          }}
        >
          <div className="px-3 py-2 border-b" style={{ borderColor: dotColor + "22" }}>
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: dotColor }}>
              {label} Routes
            </span>
          </div>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-white/70 hover:text-white transition-all duration-150 group"
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = dotColor + "18";
                el.style.color = "white";
                el.style.paddingLeft = "20px";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "";
                el.style.color = "";
                el.style.paddingLeft = "";
              }}
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: dotColor }}
              />
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const { user, loading } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    toast.success("Logged out successfully");
    router.push("/login");
    router.refresh();
  };

  return (
    <header
      id="main-nav"
      className="fixed top-0 left-0 right-0 z-40 border-b border-white/8 mb-14"
      style={{
        background: "rgba(9, 5, 26, 0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          id="nav-logo"
          href="/"
          className="flex items-center gap-2.5 font-black text-lg tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          <GraduationCap size={26} className="text-[var(--ec-accent)]" />
          <span>
            Student<span className="text-[var(--ec-accent)]">Portal</span>
          </span>
        </Link>

        {/* Three dropdown sections */}
        <nav id="nav-sections" className="flex items-center gap-1">
          <Dropdown label="General" links={generalLinks} dotColor="#19729f" />
          
          {!loading && user?.role === "admin" && (
            <Dropdown label="Admin" links={adminLinks} dotColor="#5b3d88" />
          )}
          
          {!loading && user?.role === "student" && (
            <Dropdown label="Student" links={studentLinks} dotColor="#c53074" />
          )}

          {!loading && user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white/80 hover:text-white hover:bg-red-500/20 hover:text-red-400 transition-all duration-200"
            >
              <LogOut size={16} />
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
