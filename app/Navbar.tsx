import Link from "next/link";
import { FaBug } from "react-icons/fa";
import React from "react";

const Navbar = () => {
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
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
