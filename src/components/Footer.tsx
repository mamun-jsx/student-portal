import Link from "next/link";
import { GitBranch, X, Globe, Mail } from "lucide-react";

const socials = [
  { icon: GitBranch, href: "#", label: "GitHub" },
  { icon: X, href: "#", label: "Twitter" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <div className="text-center border-t-2 border-black">
      footer area
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ex!
      </p>
    </div>
  );
}
