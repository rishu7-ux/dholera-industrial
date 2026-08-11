"use client";

import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden w-full bg-[#0A2E73] text-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">

        {/* Left Side */}
        <div className="flex items-center gap-8">

          <Link
            href="tel:+919217104219"
            className="flex items-center gap-2 text-sm transition hover:text-orange-400"
          >
            <FaPhoneAlt className="text-xs" />
            <span>+91 92171 04219</span>
          </Link>

          <Link
            href="mailto:customercare@omanaprojects.com"
            className="flex items-center gap-2 text-sm transition hover:text-orange-400"
          >
            <FaEnvelope className="text-xs" />
            <span>customercare@omanaprojects.com</span>
          </Link>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          <Link
            href="#"
            className="transition hover:scale-110 hover:text-orange-400"
          >
            <FaFacebookF />
          </Link>

          <Link
            href="#"
            className="transition hover:scale-110 hover:text-orange-400"
          >
            <FaInstagram />
          </Link>

          <Link
            href="#"
            className="transition hover:scale-110 hover:text-orange-400"
          >
            <FaYoutube />
          </Link>

        </div>

      </div>
    </div>
  );
}