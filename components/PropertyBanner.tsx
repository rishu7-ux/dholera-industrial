"use client";

import Link from "next/link";

interface PropertyBannerProps {
  title: string;
}

export default function PropertyBanner({
  title,
}: PropertyBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#F5A400]">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        {/* Large Triangle */}
        <div
          className="absolute right-0 top-0 h-full w-[45%] bg-[#E8A000]"
          style={{
            clipPath: "polygon(25% 0%,100% 0%,100% 100%,70% 100%)",
          }}
        />

        {/* Small Triangle */}
        <div
          className="absolute right-[10%] top-0 h-full w-[18%] bg-[#F2B11A]"
          style={{
            clipPath: "polygon(50% 0%,100% 0%,55% 100%,0% 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex h-41.25 max-w-7xl items-center px-6 lg:px-8">
        <div>
          <h1 className="text-5xl font-light text-white">
            {title}
          </h1>

          <div className="mt-3 flex items-center gap-3 text-lg text-white">
            <Link href="/" className="hover:text-white/80">
              Home
            </Link>

            <span>||</span>

            <span>{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}