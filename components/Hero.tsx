"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src=""
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#081A3A]/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[4px] text-[#FF7A00]">
              Welcome To Dholera Residential Plot
            </p>

            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Invest in
              <br />
              Tomorrow&apos;s Smart City
            </h1>

            <div className="mt-6 h-1 w-28 rounded-full bg-[#FF7A00]"></div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
              Discover premium residential plots in Dholera Smart City.
              Secure your future with trusted investments and world-class
              infrastructure.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="/projects"
                className="rounded-full bg-[#0A2E73] px-8 py-4 font-semibold text-white transition hover:bg-[#081A3A]"
              >
                Explore Projects →
              </a>

              <a
                href="/contact"
                className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#081A3A]"
              >
                Contact Us →
              </a>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}