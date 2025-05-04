import * as React from "react";
import { cn } from "./cn";

interface FooterProps {
  copyright?: string;
  links?: { name: string; href: string }[];
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  copyright = `© ${new Date().getFullYear()} Pegasus. All rights reserved.`,
  links = [],
  className = "",
}) => (
  <footer className={cn("bg-gray-800 text-white py-4 mt-8 text-center", className)}>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <span>{copyright}</span>
      {links.length > 0 && (
        <span className="flex gap-2">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gray-300 underline">
              {link.name}
            </a>
          ))}
        </span>
      )}
    </div>
  </footer>
);

export default Footer; 