"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const galleryImages = [
  "/images/plots/p1.jpg",
  "/images/plots/p2.jpg",
  "/images/plots/p3.jpg",
];

const services = [
  "Residential plot sales in Dholera SIR",
  "Investment consulting for smart city properties",
  "Legal verification and documentation support",
  "Site visit coordination",
  "Plot location analysis and future growth insights",
];

const whyInvest = [
  "India's first planned greenfield smart industrial city",
  "Part of the Delhi–Mumbai Industrial Corridor (DMIC)",
  "Development of Dholera International Airport",
  "Modern infrastructure, including expressways and metro connectivity",
  "Government-planned industrial and residential zones",
];

const journeyExpansion = [
  "Property Investment Consulting",
  "Customized land solutions",
  "Investor support services",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="font-bold leading-8 text-gray-800">
          ● {item}
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  const [current, setCurrent] = useState(0);

  const goPrev = () =>
    setCurrent((c) => (c === 0 ? galleryImages.length - 1 : c - 1));
  const goNext = () =>
    setCurrent((c) => (c === galleryImages.length - 1 ? 0 : c + 1));

  return (
    <>
      <TopBar />
      <Header />

      {/* Banner */}
      <section className="relative overflow-hidden bg-[#f7a600] py-24">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-full w-125 translate-x-32 rotate-12 bg-yellow-500 opacity-40"></div>
          <div className="absolute right-32 top-0 h-full w-87.5 rotate-12 bg-yellow-400 opacity-40"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-extrabold text-white">About Us</h1>
          <p className="mt-3 text-lg text-white">Home / About Us</p>
        </div>
      </section>

      {/* Image carousel */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "400px",
            overflow: "hidden",
            borderRadius: "0.5rem",
            backgroundColor: "#e5e7eb",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={galleryImages[current]}
            alt="Dholera Residential Plot"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Prev arrow */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "44px",
              height: "44px",
            }}
            className="flex items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-orange-500 shadow-lg transition hover:bg-orange-500 hover:text-white"
          >
            ‹
          </button>

          {/* Next arrow */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "44px",
              height: "44px",
            }}
            className="flex items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-orange-500 shadow-lg transition hover:bg-orange-500 hover:text-white"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === current ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid items-start gap-10 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <h2 className="mb-6 text-4xl font-extrabold text-gray-900">Our Company History</h2>

            <p className="font-bold leading-9 text-gray-800">
              <strong>Dholera Residential Plot</strong> was founded in 2024
              as a part of Omana Projects with the goal of helping investors
              and homebuyers find reliable residential land opportunities
              in <strong>Dholera Smart City</strong>. Our platform focuses
              on offering verified plots, expert investment guidance, and
              transparent real-estate services in one of India&apos;s
              fastest-growing smart city projects.
            </p>

            <p className="mt-6 font-bold leading-9 text-gray-800">
              As the first planned greenfield smart city under the
              Delhi–Mumbai Industrial Corridor, <strong>Dholera SIR</strong>{" "}
              is attracting investors, developers, and industries from
              across India and abroad. Our mission is to simplify property
              investment in this emerging region by providing trusted
              information and secure property options.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-extrabold text-gray-900">
              What Does Dholera Residential Plot Do?
            </h3>

            <p className="font-bold leading-9 text-gray-800">
              Dholera Residential Plot helps investors buy verified
              residential plots in Dholera with professional guidance.
            </p>

            <p className="mt-4 font-bold leading-9 text-gray-800">Our services include:</p>

            <BulletList items={services} />

            <p className="mt-6 font-bold leading-9 text-gray-800">
              We focus on making the property buying process transparent,
              secure, and profitable.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-extrabold text-gray-900">
              Why Invest in Dholera Smart City?
            </h3>

            <p className="font-bold leading-9 text-gray-800">
              Investing in Dholera Smart City offers several advantages for
              long-term property buyers.
            </p>

            <p className="mt-4 font-bold leading-9 text-gray-800">Key reasons include:</p>

            <BulletList items={whyInvest} />

            <p className="mt-6 font-bold leading-9 text-gray-800">
              These developments make Dholera one of the most promising real
              estate investment destinations in India.
            </p>

            <h3 className="mt-10 text-2xl font-extrabold text-gray-900">Our Journey</h3>

            <p className="mt-4 font-bold leading-9 text-gray-800">
              We began with a small portfolio of residential plots and
              gradually built strong connections with local developers,
              landowners, and investors. Our commitment to transparency,
              verified land documentation, and professional advisory
              services helped us earn the trust of buyers from across the
              country.
            </p>

            <p className="mt-4 font-bold leading-9 text-gray-800">
              Over time, we expanded our services to include:
            </p>

            <BulletList items={journeyExpansion} />

            <p className="mt-6 font-bold leading-9 text-gray-800">
              Today, our platform helps both first-time buyers and
              experienced investors explore opportunities in Dholera SIR.
            </p>

            <h3 className="mt-10 text-2xl font-extrabold text-gray-900">Our Vision</h3>

            <p className="mt-4 font-bold leading-9 text-gray-800">
              Our vision is to become a trusted platform for residential
              property investment in Dholera Smart City by providing
              reliable information, genuine plots, and expert real estate
              guidance.
            </p>

            <p className="mt-4 font-bold leading-9 text-gray-800">
              As Dholera continues to grow into a global hub for smart
              infrastructure, manufacturing, and urban living, we aim to
              help our clients benefit from the city&apos;s long-term growth
              and investment potential.
            </p>

          </div>

          {/* Reach Out to Us — sticky sidebar */}
          <div className="sticky top-28 self-start">
            <div className="rounded-xl bg-orange-400 p-8 shadow-lg">
              <h3 className="text-center text-3xl font-extrabold text-white">
                Reach Out to Us
              </h3>

              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg border-0 bg-white/95 p-3 text-sm placeholder:text-gray-400 outline-none ring-2 ring-transparent transition focus:ring-black/40"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg border-0 bg-white/95 p-3 text-sm placeholder:text-gray-400 outline-none ring-2 ring-transparent transition focus:ring-black/40"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full rounded-lg border-0 bg-white/95 p-3 text-sm placeholder:text-gray-400 outline-none ring-2 ring-transparent transition focus:ring-black/40"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-lg border-0 bg-white/95 p-3 text-sm placeholder:text-gray-400 outline-none ring-2 ring-transparent transition focus:ring-black/40"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-black py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>

      </section>

      <CTASection />
      <Footer />
    </>
  );
}