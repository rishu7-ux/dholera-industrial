"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import PopupForm from "./PopupForm";

const properties = [
  {
    id: 1,
    title: "samridhi 621 panchi",
    image: "/images/samridhi 621.webp",
    price: "₹ 72,00,000",
    details: ["panchi village", "TP4(Tp-4/b2)", "near city centre, AHM Dholera Expressway, HAC"],
    slug: "samridhi-621-panchi",
    ribbonColor: "#FF3B3B",
  },
  {
    id: 2,
    title: "Samridhi 872/2",
    image: "/images/Sidhi-857.jpg",
    price: "₹ 1,35,00,000",
    details: ["sandida village", "TP4 (Tp-4/b2)", "70 m road metro connected • 4.5 km activation zone"],
    slug: "samridhi-872-2",
    ribbonColor: "#FF3B3B",
  },
  {
    id: 3,
    title: "Samridhi 365 INDUSTRIAL",
    image: "/images/simridhi365industrial.webp",
    price: "₹ 63,00,000",
    details: ["Sandida Village", "Tp-4/b1", "Near activation zone, HAC on 18m Road, both side L-shape plot"],
    slug: "samridhi-365-industrial",
    ribbonColor: "#FF7A00",
  },
];

export default function RecentProperties() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const handleEnquiryClick = (title: string) => {
    setSelectedProperty(title);
    setPopupOpen(true);
  };

  return (
    <section className="bg-[#F7F7F7] py-20">
      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#081A3A] md:text-5xl">
            Our Recent Dholera <span className="text-[#FF7A00]">Property</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Explore premium SCO, Residential & Industrial plots in Dholera Smart City.
          </p>
          <div className="mt-5 flex gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <span
                key={i}
                className="h-2 w-2 rounded-full bg-[#FF7A00] animate-pulse"
                style={{ animationDelay: `${i * 120}ms` }}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-700 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_35px_80px_rgba(10,46,115,0.18)] animate-[fadeUp_0.8s_ease_forwards]"
              style={{ animationDelay: `${index * 180}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-all duration-700 group-hover:border-[#0A2E73]/20" />

              <div className="relative h-82.5 w-full overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover transition-all duration-1200 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-[#081A3A]/70 via-[#081A3A]/10 to-transparent opacity-70 transition-all duration-700 group-hover:opacity-90" />
                <div
                  className="absolute -left-12 top-5 z-20 w-46.25 -rotate-45 py-2 text-center text-sm font-bold tracking-wider text-white shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]"
                  style={{ backgroundColor: item.ribbonColor }}
                >
                  {item.price}
                </div>
                <div className="absolute bottom-5 right-5 text-3xl font-extrabold text-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.55)] transition-all duration-500 group-hover:scale-110">
                  {item.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#FF7A00] transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#0A2E73]">
                  {item.title}
                </h3>

                <div className="mt-5 space-y-3">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-700 transition-all duration-500 group-hover:text-[#081A3A]">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#FF7A00] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#0A2E73]" />
                      <p className="leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleEnquiryClick(item.title)}
                    className="inline-flex items-center justify-center rounded-xl bg-[#FF7A00] px-5 py-3 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#0A2E73] hover:shadow-xl hover:shadow-[#0A2E73]/25"
                  >
                    Enquiry
                  </button>

                  <Link
                    href={`/projects/${item.slug}`}
                    className="group/btn inline-flex items-center gap-2 rounded-xl border-2 border-[#FF7A00] px-5 py-3 text-sm font-semibold text-[#081A3A] transition-all duration-500 hover:-translate-y-1 hover:border-[#0A2E73] hover:bg-[#0A2E73] hover:text-white hover:shadow-xl hover:shadow-[#0A2E73]/25"
                  >
                    Read More
                    <FaArrowRight className="transition-transform duration-500 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PopupForm open={popupOpen} onClose={() => setPopupOpen(false)} propertyTitle={selectedProperty} />
    </section>
  );
}