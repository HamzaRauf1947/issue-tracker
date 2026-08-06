'use client'
import Link from "next/link";
import { FaBug } from "react-icons/fa";
import React from "react";
import { usePathname } from "next/navigation";
import classnames from "classnames"

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  
  const links = [
    { label: "dashboard", href: "/" },
    { label: "issues", href: "/issues" },
  ];
  return (
    <nav className="flex gap-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex gap-6">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={classnames({
              "text-zinc-900":link.href === currentPath,
              "text-zinc-500":link.href != currentPath,
              "hover:text-zinc-800 transition-colors":true
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
