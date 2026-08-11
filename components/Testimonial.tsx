"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sudha Sharma",
    image: "/images/user.png",
    review:
      "Dholera Real Estate impressed me with their transparency and professionalism. From the first enquiry to final registration, they handled everything smoothly. I secured a great deal on a residential plot and would highly recommend them.",
  },
  {
    id: 2,
    name: "Rajeev Malhotra",
    image: "/images/user.png",
    review:
      "I am very satisfied with their services. Dholera Real Estate provided excellent support and guidance throughout the process. I got a very good deal on residential plots, and their professionalism and transparency made the experience smooth and stress-free.",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}
        <div className="mb-14">

          <h2 className="text-4xl font-bold uppercase text-[#081A3A] md:text-5xl">
            OUR <span className="text-[#FF7A00]">TESTIMONIAL</span>
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

        {/* Testimonial Cards */}
        <div className="grid gap-8 lg:grid-cols-2">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="group rounded-lg bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:bg-linear-to-r hover:from-[#0A2E73] hover:to-[#2563EB] hover:shadow-2xl"
            >

              {/* Quote Icon */}
              <FaQuoteLeft className="mb-6 text-4xl text-[#0A2E73] transition-all duration-300 group-hover:text-[#FF7A00]" />

              {/* Review */}
              <p className="text-lg leading-9 text-gray-700 transition-all duration-300 group-hover:text-white">
                {item.review}
              </p>

              {/* User */}
              <div className="mt-10 flex items-center gap-5">

                <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-[#FF7A00] bg-white shadow-lg">

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <div>

                  <h4 className="text-2xl font-bold text-[#081A3A] transition-all duration-300 group-hover:text-white">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-200">
                    Happy Client
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}