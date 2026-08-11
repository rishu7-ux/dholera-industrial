"use client";

import Link from "next/link";
import {
  FaBuilding,
  FaHome,
  FaIndustry,
  FaStore,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    title: "Commercial Plot",
    description:
      "Commercial Plot, one home at a time. Founded with a vision to contribute to India's next-generation industrial revolution.",
    icon: <FaBuilding size={46} />,
  },
  {
    title: "Residential Plot",
    description:
      "Residential Plot, one home at a time. Founded with a vision to contribute to India's next-generation industrial revolution.",
    icon: <FaHome size={46} />,
  },
  {
    title: "Industrial Plot",
    description:
      "Industrial Plot, one home at a time. Founded with a vision to contribute to India's next-generation industrial revolution.",
    icon: <FaIndustry size={46} />,
  },
  {
    title: "Logistic Plot",
    description:
      "Logistic Plot, one home at a time. Founded with a vision to contribute to India's next-generation industrial revolution.",
    icon: <FaStore size={46} />,
  },
];

export default function LookingFor() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="mb-16">

          <h2 className="text-3xl font-light text-[#081A3A] md:text-5xl">
            What Are You Looking For
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Founded with a vision to contribute to India&apos;s next-generation
            industrial revolution.
          </p>

          <div className="mt-5 flex gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <span
                key={i}
                className="h-2 w-2 rounded-full bg-[#FF7A00]"
              />
            ))}
          </div>

        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {services.map((item, index) => (

            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-transparent hover:bg-linear-to-r hover:from-[#0A2E73] hover:to-[#2563EB] hover:shadow-2xl"
            >

              {/* Icon */}

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF4EC] text-[#FF7A00] transition-all duration-500 group-hover:bg-white/15 group-hover:text-white">

                {item.icon}

              </div>

              {/* Title */}

              <h3 className="mb-4 text-2xl font-bold text-[#081A3A] transition-all duration-300 group-hover:text-white">

                {item.title}

              </h3>

              {/* Description */}

              <p className="mb-8 leading-8 text-gray-600 transition-all duration-300 group-hover:text-white">

                {item.description}

              </p>

              {/* Read More */}

              <Link
                href="#"
                className="inline-flex items-center gap-2 font-semibold text-[#FF7A00] transition-all duration-500 group-hover:text-white"
              >
                Read More

                <FaArrowRight className="transition-transform duration-500 group-hover:translate-x-2" />

              </Link>

            </div>

          ))}

        </div>

        {/* Button */}

        <div className="mt-16 flex justify-center">

          <Link
            href="/properties"
            className="inline-flex items-center gap-3 rounded-lg bg-[#FF7A00] px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#0A2E73]"
          >
            Read More

            <FaArrowRight />

          </Link>

        </div>

      </div>
    </section>
  );
}