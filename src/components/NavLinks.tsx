import React from "react";

interface NavLinksProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLinks({
  href,
  children,
  className,
}: Readonly<NavLinksProps>) {
  return (
    <a
      href={href}
      className={`${className} text-gray-500 hover:text-gray-900 relative group h-full inline-flex items-center `}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </a>
  );
}
