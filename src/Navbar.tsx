import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "./cn";

interface NavbarLink {
  name: string;
  href: string;
}

interface NavbarProps {
  logoSrc: string;
  logoAlt?: string;
  title: string;
  links: NavbarLink[];
  rightContent?: React.ReactNode;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  logoSrc,
  logoAlt = "Logo",
  title,
  links,
  rightContent,
  className = "",
}) => (
  <nav className={cn("bg-gray-800 text-white py-4", className)}>
    <div className="flex flex-col sm:flex-row items-center sm:justify-between px-4">
      <Link
        href="/"
        className="flex items-center space-x-2 mb-2 sm:mb-0 focus:outline-none"
        tabIndex={-1}
      >
        <Image src={logoSrc} alt={logoAlt} width={60} height={60} />
        <span className="text-xl font-bold">{title}</span>
      </Link>
      <div className="hidden sm:block border-l border-gray-700 h-8 mx-4" />
      <div className="hidden sm:block flex-grow" />
      <div className="flex flex-wrap justify-center sm:justify-end space-x-4 text-sm sm:text-base">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-gray-300">
            {link.name}
          </Link>
        ))}
      </div>
      {rightContent && <div className="ml-4">{rightContent}</div>}
    </div>
  </nav>
);

export default Navbar; 