"use client";

import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Industrial Land",
    image: "/images/residential.jpg",
    description:
      "Build your manufacturing unit in the heart of Dholera SIR. World-class infrastructure with seamless connectivity and government support.",
  },
  {
    id: 2,
    title: "Logistic Hub",
    image: "/images/LogisticsHub.jpg",
    description:
      "Invest in plots strategically located along freight corridors and near the upcoming international airport. Perfect for warehousing and logistics.",
  },
  {
    id: 3,
    title: "Green Factory Zone",
    image: "/images/mixed use land.jpg",
    description:
      "Set up eco-friendly manufacturing in India's first Greenfield Smart City with modern infrastructure and sustainable planning.",
  },
];

export default function PropertyType() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="mb-14">

          <h2 className="text-4xl font-bold text-[#081A3A] md:text-5xl">
            Properties By{" "}
            <span className="text-[#FF7A00]">
              Type
            </span>
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Founded with a vision to contribute to India&apos;s next-generation
            industrial revolution.
          </p>

          <div className="mt-5 flex gap-2">
            {[1,2,3,4,5,6,7].map((item)=>(
              <span
                key={item}
                className="h-2 w-2 rounded-full bg-[#FF7A00]"
              />
            ))}
          </div>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {properties.map((item)=>(
            <div
              key={item.id}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative h-65 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="px-8 py-8 text-center">

                <h3 className="mb-4 text-3xl font-bold text-[#081A3A] transition group-hover:text-[#FF7A00]">
                  {item.title}
                </h3>

                <p className="mb-8 text-[17px] leading-8 text-gray-600">
                  {item.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-[#FF7A00] px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-[#0A2E73]"
                >
                  Enquiry Now
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}