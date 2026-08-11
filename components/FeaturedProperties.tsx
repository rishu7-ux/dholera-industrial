"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaRoad,
} from "react-icons/fa";
import { MdOutlineVilla } from "react-icons/md";
import PopupForm from "@/components/PopupForm";

const properties = [
  {
    id: 1,
    title: "Ridhi 872/1 Mixed Use Land",
    image: "/images/mixed use land.jpg",
    location: "Bhangadh Dholera",
    size: "398 - 521 Sq. Yd.",
    type: "TP 4, 4B-2",
    road: "FP Road 70 Mtr",
    price: "Starting Price - ₹44 Lakhs Onward",
    slug: "ridhi-872-1",
  },

  {
    id: 2,
    title: "Ridhi 966/1 SCO Plots",
    image: "/images/Ridhi 966.jpg",
    location: "Bhangadh Dholera",
    size: "423 - 590 Sq. Yd.",
    type: "TP 4, 4B-2",
    road: "FP Road 70 Mtr",
    price: "Starting Price - ₹44 Lakhs Onward",
    slug: "ridhi-966-1",
  },

  {
    id: 3,
    title: "Ridhi 249/2 Premium SCO Plots",
    image: "/images/Ridhi-249-2.jpg",
    location: "Kadipur Village",
    size: "390 | 578 | 687 Sq. Yd.",
    type: "TP-1",
    road: "55 M Road",
    price: "Starting Price - ₹62.40 Lakhs",
    slug: "ridhi-249-2",
  },

    {
    id: 4,
    title: "Sidhi-857",
    image: "/images/Sidhi-857.jpg",
    location: "TP 4-B2, Bhangadh Village",
    size: "390 - 450 Sq. Yd.",
    type: "TP 4/B2",
    road: "48 M Main Road",
    price: "Starting Price - ₹62.40 Lakhs",
    slug: "sidhi-857",
  },

  {
    id: 5,
    title: "Dholera Estate Residential Plot",
    image: "/images/residential.jpg",
    location: "Aakru Village",
    size: "173 - 235 Sq. Yd.",
    type: "Residential",
    road: "Cheer Road",
    price: "Starting Price - ₹11.5 Lakhs",
    slug: "dholera-estate-residential-plot",
  },
  
];
/**
 * Reveals its children with a fade + rise animation the first time
 * the element scrolls into view. Respects prefers-reduced-motion.
 */
function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function PropertyCard({
  item,
  index,
  onEnquire,
}: {
  item: (typeof properties)[number];
  index: number;
  onEnquire: (title: string) => void;
}) {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
      className={`group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-2xl ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div className="grid lg:grid-cols-[360px_1fr]">

        {/* Image */}
        <div className="relative h-70 overflow-hidden">

          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* subtle gradient so the badges stay readable over any photo */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute left-4 top-4 rounded bg-[#FF7A00] px-4 py-2 text-xs font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-105">
            FOR SALE
          </div>

          <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-4 py-2 text-lg font-semibold text-white backdrop-blur transition-colors duration-300 group-hover:bg-black/70">
            {item.price}
          </div>

        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-8">

          <div>

            <h3 className="text-3xl font-bold text-[#FF7A00] transition-colors duration-300 group-hover:text-[#e96f00]">
              {item.title}
            </h3>

            <div className="mt-4 flex items-center gap-2 text-gray-600">
              <FaMapMarkerAlt className="text-[#FF7A00]" />
              {item.location}
            </div>

            <div className="mt-8 grid gap-5 text-gray-700 md:grid-cols-2 xl:grid-cols-4">

              <div className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                <FaRulerCombined className="text-[#FF7A00]" />
                {item.size}
              </div>

              <div className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                <MdOutlineVilla className="text-[#FF7A00]" />
                {item.type}
              </div>

              <div className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                <FaRoad className="text-[#FF7A00]" />
                {item.road}
              </div>

            </div>

          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button
              type="button"
              onClick={() => onEnquire(item.title)}
              className="rounded-lg bg-[#FF7A00] px-8 py-3 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e96f00] hover:shadow-lg active:translate-y-0"
            >
              Enquiry
            </button>

            <Link
              href={`/properties/${item.slug}`}
              className="rounded-lg border-2 border-[#FF7A00] px-8 py-3 text-center font-semibold text-[#081A3A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF7A00] hover:text-white hover:shadow-lg active:translate-y-0"
            >
              Read More
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default function FeaturedProperties() {
  const { ref: headerRef, visible: headerVisible } =
    useRevealOnScroll<HTMLDivElement>();

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<string | undefined>(
    undefined
  );

  const handleEnquire = (title: string) => {
    setSelectedProperty(title);
    setPopupOpen(true);
  };

  const handleClose = () => {
    setPopupOpen(false);
    setSelectedProperty(undefined);
  };

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4">

        <div
          ref={headerRef}
          className={`mb-14 transition-all duration-700 ease-out ${
            headerVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-[#081A3A] md:text-5xl">
            SCO & Residential Plots in
            <span className="text-[#FF7A00]"> Dholera Smart City</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Building dreams, one property at a time.
          </p>

          <div className="mt-5 flex gap-2">
            {properties.map((_, i) => (
              <span
                key={i}
                className="h-2 w-2 rounded-full bg-[#FF7A00] transition-transform duration-300"
                style={{
                  transitionDelay: headerVisible ? `${i * 80}ms` : "0ms",
                  transform: headerVisible ? "scale(1)" : "scale(0)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {properties.map((item, index) => (
            <PropertyCard
              key={item.id}
              item={item}
              index={index}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

      </div>

      <PopupForm
        open={popupOpen}
        onClose={handleClose}
        propertyTitle={selectedProperty}
      />

    </section>
  );
}