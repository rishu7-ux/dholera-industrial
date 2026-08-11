"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const propertyLinks = [
  { label: "Ridhi 872/1 Sco Plots", href: "/properties/ridhi-872-1" },
  { label: "Ridhi 966/1 SCO Plots", href: "/properties/ridhi-966-1" },
  { label: "Ridhi 249/2 Premium SCO", href: "/properties/ridhi-249-2" },
  { label: "Sidhi 857", href: "/properties/sidhi-857" },
  { label: "Dholera Residential Plot", href: "/" },
];

const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Properties", href: "/properties" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const aboutLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Mission & Vision", href: "/about-us#vision" },
  { label: "Director Message", href: "/director-message" },
  { label: "Managing Director", href: "/managing-director" },
];

export default function Footer() {
  return (
    <footer>

      {/* Main Footer */} 

      <div className="bg-[#F8FAFC]">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Contact */}

            <div>

              <h3 className="mb-8 text-3xl font-bold text-[#0A2E73]">
                Contact Us
              </h3>

              <div className="space-y-6 text-gray-600">

                <div className="group flex gap-4 transition-transform duration-300 ease-out hover:translate-x-1">

                  <FaMapMarkerAlt className="mt-1 text-[#FF7A00] transition-transform duration-300 ease-out group-hover:scale-110" />

                  <p className="transition-colors duration-300 ease-out group-hover:text-[#081A3A]">
                    7th Floor, Plot No 56A/16,
                    <br />
                    C Block, Phase-2,
                    <br />
                    Sector-62, Noida,
                    <br />
                    Uttar Pradesh - 201309
                  </p>

                </div>

                <Link
                  href="mailto:sales@dholeraresidentialplot.com"
                  className="group flex items-center gap-4 transition-transform duration-300 ease-out hover:translate-x-1"
                >

                  <FaEnvelope className="text-[#FF7A00] transition-transform duration-300 ease-out group-hover:scale-110" />

                  <span className="transition-colors duration-300 ease-out group-hover:text-[#081A3A]">
                    sales@dholeraresidentialplot.com
                  </span>

                </Link>

                <Link
                  href="tel:+919217104219"
                  className="group flex items-center gap-4 transition-transform duration-300 ease-out hover:translate-x-1"
                >

                  <FaPhoneAlt className="text-[#FF7A00] transition-transform duration-300 ease-out group-hover:scale-110" />

                  <span className="transition-colors duration-300 ease-out group-hover:text-[#081A3A]">
                    +91 92171 04219
                  </span>

                </Link>

              </div>

              {/* Social */}

              <div className="mt-8 flex gap-3">

                <Link
                  href="https://www.facebook.com/people/Omana-Properties/61572719098180/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded bg-[#1877F2] text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
                >
                  <FaFacebookF />
                </Link>

                <Link
                  href="https://www.instagram.com/omana_projects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
                >
                  <FaInstagram />
                </Link>

                <Link
                  href="https://www.youtube.com/@OmanaProjects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded bg-red-600 text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
                >
                  <FaYoutube />
                </Link>

              </div>

            </div>

            {/* Properties */}

            <div>

              <h3 className="mb-8 text-3xl font-bold text-[#0A2E73]">
                Properties
              </h3>

              <ul className="space-y-4">

                {propertyLinks.map((item) => (

                  <li key={item.label}>

                    <Link
                      href={item.href}
                      className="inline-block text-gray-600 transition-all duration-300 ease-out hover:translate-x-2 hover:text-[#FF7A00]"
                    >
                      {item.label}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* Quick Links */}

            <div>

              <h3 className="mb-8 text-3xl font-bold text-[#0A2E73]">
                Quick Links
              </h3>

              <ul className="space-y-4">

                {quickLinks.map((item) => (

                  <li key={item.label}>

                    <Link
                      href={item.href}
                      className="inline-block text-gray-600 transition-all duration-300 ease-out hover:translate-x-2 hover:text-[#FF7A00]"
                    >
                      {item.label}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* About */}

            <div>

              <h3 className="mb-8 text-3xl font-bold text-[#0A2E73]">
                About Us
              </h3>

              <ul className="space-y-4">

                {aboutLinks.map((item) => (

                  <li key={item.label}>

                    <Link
                      href={item.href}
                      className="inline-block text-gray-600 transition-all duration-300 ease-out hover:translate-x-2 hover:text-[#FF7A00]"
                    >
                      {item.label}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t bg-white">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">

          <p className="text-gray-600">
            © 2026 Omana Projects. All Rights Reserved.
          </p>


        </div>

      </div>

    </footer>
  );
}