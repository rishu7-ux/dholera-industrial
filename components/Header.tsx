"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PROPERTIES", href: "/properties" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/">
          <Image
            src="/images/ omanlogo.png"
            alt="Omana Projects"
            width={75}
            height={75}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 lg:flex">

          {navLinks.map((link, index) => (

            <Link
              key={link.label}
              href={link.href}
              className={`group relative text-[17px] font-medium uppercase transition-all duration-300
                ${
                  index === 0
                    ? "text-[#FF7A00]"
                    : "text-[#3B3B3B] hover:text-[#FF7A00]"
                }`}
            >
              {link.label}

              <span
                className={`absolute -bottom-2 left-0 h-0.5 bg-[#FF7A00] transition-all duration-300
                ${
                  index === 0
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>

            </Link>

          ))}

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="text-[#081A3A] lg:hidden"
        >
          {open ? (
            <HiX size={32} />
          ) : (
            <HiMenuAlt3 size={32} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden bg-white transition-all duration-500 lg:hidden ${
          open ? "max-h-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col">

          {navLinks.map((link) => (

            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 px-6 py-4 font-medium text-[#3B3B3B] transition-all duration-300 hover:bg-[#F8FAFC] hover:text-[#FF7A00]"
            >
              {link.label}
            </Link>

          ))}

        </nav>

      </div>

    </header>
  );
}