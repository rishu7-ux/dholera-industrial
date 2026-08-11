"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import {
  FaPercent,
  FaHome,
  FaUserTie,
  FaBriefcase,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaPercent size={36} />,
    number: 967,
    title: "Listings For Sale",
  },
  {
    icon: <FaHome size={36} />,
    number: 1276,
    title: "Listings For Rent",
  },
  {
    icon: <FaUserTie size={36} />,
    number: 396,
    title: "Agents",
  },
  {
    icon: <FaBriefcase size={36} />,
    number: 177,
    title: "Brokers",
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="relative overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/stats-bg.jpg"
          alt="Stats Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Deep blue gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#020B24]/90 via-[#0A2E73]/80 to-[#0F3FA0]/70" />

      {/* Decorative glow orbs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#3B82F6]/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#60A5FA]/25 blur-[100px]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24">

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

          {stats.map((item, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-3 hover:border-[#60A5FA]/50 hover:bg-white/15 hover:shadow-[0_20px_50px_rgba(59,130,246,0.35)]"
            >

              {/* Subtle inner top sheen */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-3xl bg-linear-to-b from-white/20 to-transparent" />

              {/* Icon Circle */}
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center">

                {/* Glow ring, fades in on hover */}
                <div className="absolute inset-0 rounded-full bg-[#3B82F6] opacity-0 blur-xl transition-opacity duration-500 ease-out group-hover:opacity-50" />

                {/* Pulsing ring */}
                <div className="absolute inset-0 scale-100 rounded-full ring-2 ring-[#60A5FA]/0 transition-all duration-500 ease-out group-hover:scale-110 group-hover:ring-[#60A5FA]/60" />

                {/* Glass icon holder */}
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-inner backdrop-blur-md transition-all duration-500 ease-out group-hover:scale-110 group-hover:border-[#60A5FA]/60 group-hover:bg-white/20 group-hover:shadow-[0_0_35px_rgba(96,165,250,0.55)]">

                  <div className="animate-float text-[#93C5FD] transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110 group-hover:text-white">
                    {item.icon}
                  </div>

                </div>

              </div>

              {/* Counter */}
              <h3 className="relative mt-6 text-4xl font-bold text-white transition-colors duration-500 ease-out group-hover:text-[#93C5FD] md:text-5xl">

                {inView && (
                  <CountUp end={item.number} duration={3} separator="," />
                )}

              </h3>

              {/* Title */}
              <p className="relative mt-3 text-base font-medium text-white/70 transition-colors duration-500 ease-out group-hover:text-white/95 md:text-lg">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}