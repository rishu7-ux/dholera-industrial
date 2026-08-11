"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUserAlt, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image: "/images/blog/blog1.jpg",
    title:
      "Tata Semiconductor Plant in Dholera: How the ₹91,000 Crore Fab Will Change Your Plot's Value",
    author: "Admin",
    date: "Apr 07, 2026",
    slug: "/blog/tata-semiconductor-plant",
  },
  {
    id: 2,
    image: "/images/blog/blog2.jpg",
    title: "G+5 SCO Building on a Dholera Plot?",
    author: "Admin",
    date: "Jul 17, 2026",
    slug: "/blog/g5-sco-building",
  },
  {
    id: 3,
    image: "/images/blog/blog3.jpg",
    title: "Why Dholera Smart City is India's Biggest Investment Opportunity",
    author: "Admin",
    date: "Jul 20, 2026",
    slug: "/blog/dholera-investment",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="mb-14">

          <h2 className="text-5xl font-light text-[#081A3A]">
            Our <span className="font-semibold text-[#FF7A00]">Blog</span>
          </h2>

          <p className="mt-5 max-w-3xl text-xl text-gray-600">
            Founded with a vision to contribute to India’s next-generation
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

        {/* Blog Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {blogs.map((blog)=>(

            <div
              key={blog.id}
              className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative h-70 overflow-hidden">

                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-linear-to-t from-[#0A2E73]/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="line-clamp-2 text-3xl font-semibold leading-snug text-[#081A3A] transition duration-300 group-hover:text-[#FF7A00]">

                  {blog.title}

                </h3>

                <div className="mt-6 flex items-center gap-6 text-gray-500">

                  <div className="flex items-center gap-2">

                    <FaUserAlt className="text-[#FF7A00]" />

                    <span>{blog.author}</span>

                  </div>

                  <div className="flex items-center gap-2">

                    <FaCalendarAlt className="text-[#FF7A00]" />

                    <span>{blog.date}</span>

                  </div>

                </div>

                <Link
                  href={blog.slug}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0A2E73] transition hover:text-[#FF7A00]"
                >
                  Read More
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}