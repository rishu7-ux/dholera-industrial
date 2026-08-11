"use client";

import Image from "next/image";

const places = [
  {
    id: 1,
    title: "Bhangadh",
    image: "/images/bhangadh.jpg",
    properties: "47 Properties",
    description:
      "Founded with a vision to contribute to India’s next-generation industrial revolution,",
  },
  {
    id: 2,
    title: "Gujrat",
    image: "/images/gujrat.jpg",
    properties: "24 Properties",
    description:
      "Founded with a vision to contribute to India’s next-generation industrial revolution,",
  },
  {
    id: 3,
    title: "Sandhida",
    image: "/images/sandhida.jpg",
    properties: "64 Properties",
    description:
      "Founded with a vision to contribute to India’s next-generation industrial revolution,",
  },
];

export default function PopularPlaces() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-light text-[#222]">
            Popular <span className="font-medium">Places</span>
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Founded with a vision to contribute to India’s next-generation
            industrial revolution,.
          </p>

          <div className="mt-5 flex gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <span
                key={i}
                className="h-2 w-2 rounded-full bg-[#FFB000]"
              ></span>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {places.map((place) => (

            <div
              key={place.id}
              className="group relative h-95 overflow-hidden rounded-md"
            >

              {/* Image */}
              <Image
                src={place.image}
                alt={place.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Property Count */}
              <div className="absolute right-5 top-5 rounded bg-[#FFB000] px-5 py-3 text-sm font-semibold text-white shadow-lg">
                {place.properties}
              </div>

              {/* Content */}
              <div className="absolute bottom-7 left-6 right-6 text-white">

                <h3 className="mb-3 text-4xl font-semibold">
                  {place.title}
                </h3>

                <p className="text-lg leading-8 text-gray-200">
                  {place.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}