import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const scoFeatures = [
  "Commercial + Residential Use",
  "Retail Shops on Ground Floor",
  "Offices on Upper Floors",
  "High Rental Potential",
];

const whyInvest = [
  "Government Approved Smart City",
  "International Airport",
  "Expressway Connectivity",
  "Long-Term Appreciation",
];

const govInfra = [
  "Integrated residential, commercial & industrial zoning",
  "Airports, expressways & smart infrastructure underway",
  "Strong digital and physical connectivity",
  "Structured master planning with long-term vision",
];

const keyFeatures = [
  "Prime location inside Dholera SIR",
  "Mixed-use flexibility for business & residence",
  "Positioned within planned urban growth corridors",
  "Suitable for investors & end users",
];

const connectivity = [
  "Expressway connectivity to Ahmedabad & major cities",
  "Proximity to upcoming International Airport",
  "Linkage to industrial and activation zones",
  "Growing infrastructure network",
];

const investmentPotential = [
  "Higher rental potential than pure residential plots",
  "Dual income opportunity",
  "Future demand from growing population",
  "Resilient long-term appreciation prospects",
];

const growthDrivers = [
  "Industrial and logistics expansion",
  "Government investment in trunk infrastructure",
  "Budget allocation for roads, airport & utilities",
  "Master-planned zoning for clarity & transparency",
];

const residentialGrowth = [
  "Planned community amenities",
  "Proximity to employment hubs",
  "Clear land documentation framework",
  "Anticipated population growth",
];

const faqs = [
  {
    q: "What makes SCO plots different from regular residential plots?",
    a: "SCO plots allow commercial use on lower floors with residential or office space above, creating diversified income potential.",
  },
  {
    q: "Are these plots legally compliant and approved?",
    a: "Government TP schemes and documentation are available. Buyers should verify approvals and clear titles before purchase.",
  },
  {
    q: "Can I use SCO plots for long-term investment?",
    a: "Yes, SCO plots are suitable for both income generation and capital appreciation over a 5–10+ year horizon.",
  },
  {
    q: "Is this suitable for business owners and end users?",
    a: "Yes — retail outlets, offices, service centers, and mixed residential-commercial setups are possible.",
  },
];

const tips = [
  "Verify plot location within official SIR boundary",
  "Check TP zoning & development maps",
  "Confirm clear title & regulatory approvals",
  "Consider long-term investment horizon",
];

const highlights = [
  "Inside India's First Smart Industrial City, Dholera SIR",
  "A portion of the fully planned and rapidly developing TP-4 and TP-4B-2 zones",
  "Near Activation Area, Dholera's Most Developed Area",
  "Outstanding Access to the Future Dholera International Airport",
  "Robust Road Connectivity through 55M and 75M TP Roads",
  "Close to important commercial hubs, government buildings, and the ABCD building",
  "Encircled by Logistics and Industrial Hubs",
  "Great Access via the Proposed Metro Route and the Expressway",
];

const recentProperties = [
  { title: "Ridhi 872/1 Sco Plots", image: "/images/plots/p1.jpg", size: "398- 521 Sq. Yd.", slug: "ridhi-872-1" },
  { title: "Ridhi 966/1 SCO Plots", image: "/images/plots/p2.jpg", size: "423 - 590 Sq. Yd.", slug: "ridhi-966-1" },
  { title: "Ridhi 249/2 — Premium SCO Plots", image: "/images/plots/Ridhi-249-2.jpg", size: "390 | 578 | 687 Sq. Yards", slug: "ridhi-249-2" },
  { title: "Sidhi 857 — Residential Plot", image: "/images/plots/Sidhi-857.jpg", size: "390 sq. yd. – 450 sq. yd", slug: "sidhi-857" },
];

function ChecklistSection({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <h3 className="mt-12 mb-5 text-3xl font-bold">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="font-semibold text-gray-800">
            ✅ {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Page() {
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
          <h1 className="text-5xl font-bold text-white">
            Ridhi 872/1 Mixed Use Land
          </h1>

          <p className="mt-3 text-lg text-white">
            Home / Properties / Ridhi 872/1
          </p>
        </div>
      </section>

      {/* Images + overlapping info card */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="relative">

          <div className="grid grid-cols-3 overflow-hidden rounded-lg">
            <Image
              src="/images/property1.jpg"
              alt="Property"
              width={500}
              height={350}
              className="h-87.5 w-full object-cover"
            />

            <Image
              src="/images/property2.jpg"
              alt="Property"
              width={500}
              height={350}
              className="h-87.5 w-full object-cover"
            />

            <Image
              src="/images/property3.jpg"
              alt="Property"
              width={500}
              height={350}
              className="h-87.5 w-full object-cover"
            />
          </div>

          {/* Overlapping white card */}
          <div className="relative z-10 -mt-20 w-full rounded-lg bg-white p-6 shadow-xl md:mx-6 md:w-[calc(100%-3rem)]">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">

              <div>
                <h2 className="text-2xl font-bold leading-tight text-orange-500 md:text-3xl">
                  RIDHI 872/1 RIDHI 872/1 MIXED USE LAND
                </h2>

                <p className="mt-2 flex items-center gap-1 text-gray-600">
                  <span className="text-orange-500">📍</span>
                  Bhangadh Dholera
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 md:items-end">
                <p className="text-lg font-bold text-orange-500 md:text-xl">
                  Starting Price- 65,00,000 lakhs
                </p>

                <div className="flex flex-wrap gap-2 md:justify-end">
                  <span className="flex items-center gap-1 rounded bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white md:text-sm">
                    🏢 Total area 20,587mtr
                  </span>
                  <span className="rounded bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white md:text-sm">
                    398- 521 Sq. Yd.
                  </span>
                  <span className="rounded bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white md:text-sm">
                    Fp road 70 mtr
                  </span>
                  <span className="rounded bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white md:text-sm">
                    Tp 4, 4b-2
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid items-start gap-10 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <h2 className="mb-8 text-5xl font-bold">
              Ridhi 872/1 SCO Plots in Dholera Smart City
            </h2>

            <p className="text-lg font-medium leading-9 text-gray-800">
              Ridhi 872/1 SCO Plots in Dholera Smart City represent a strategic
              investment in one of India&apos;s most ambitious urban development
              projects.
            </p>

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              Located inside Dholera SIR under the Delhi Mumbai Industrial
              Corridor, this premium mixed-use land parcel is designed for both
              commercial and residential growth.
            </p>

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              Whether you&apos;re looking for high-value plots in Dholera Smart
              City, strong rental income potential, or long-term capital
              appreciation, this project appeals to investors, developers,
              businesses, and end-users alike.
            </p>

            <ChecklistSection title="What Are SCO Plots?" items={scoFeatures} />

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              Dholera Smart City sits within the Dholera Special Investment
              Region (SIR), a planned urban ecosystem backed by government
              infrastructure and industrial policies.
            </p>

            <ChecklistSection title="Why Invest?" items={whyInvest} />
            <ChecklistSection title="Government-Led Infrastructure and Planning" items={govInfra} />
            <ChecklistSection title="Key Features of Ridhi 872/1 SCO Plots" items={keyFeatures} />
            <ChecklistSection title="Connectivity That Drives Value" items={connectivity} />
            <ChecklistSection title="Investment Potential: Commercial + Residential Growth" items={investmentPotential} />
            <ChecklistSection title="Growth Drivers in Dholera Smart City" items={growthDrivers} />
            <ChecklistSection title="Dholera Residential Growth" items={residentialGrowth} />

            {/* FAQ */}
            <h3 className="mt-12 mb-5 text-4xl font-extrabold text-gray-900">
              Common Questions About SCO Plots
            </h3>

            <div className="space-y-6">
              {faqs.map((f, i) => (
                <div key={i}>
                  <h4 className="text-lg font-bold text-orange-500">{f.q}</h4>
                  <p className="mt-1 text-lg font-medium leading-8 text-gray-800">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>

            <ChecklistSection title="Tips Before You Invest in Dholera" items={tips} />

            <h3 className="mt-12 mb-5 text-4xl font-extrabold text-gray-900">Conclusion</h3>
            <p className="text-lg font-medium leading-9 text-gray-800">
              Ridhi 872/1 SCO plots in Dholera Smart City represent a premium
              land opportunity blending commercial utility, mixed-use
              flexibility, and long-term growth potential. With strong
              government backing and planned infrastructure momentum, these
              plots offer a compelling proposition for investors and
              developers alike.
            </p>

            {/* Highlights */}
            <div className="mt-10 rounded-xl bg-black p-8">
              <ul className="space-y-3">
                {highlights.map((h, i) => (
                  <li key={i} className="font-semibold text-white">
                    ● {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Brochure */}
            <div className="mt-10">
              <h3 className="mb-5 text-4xl font-extrabold text-gray-900">Download Brochure</h3>
              <a
                href="/brochures/Ridhi8721.pdf"
                download
                className="inline-block rounded-lg bg-black px-8 py-4 font-bold text-white transition hover:bg-gray-800"
              >
                Download Brochure
              </a>
            </div>

          </div>

          {/* Sidebar: Form + Recent Properties */}
          <div className="sticky top-28 space-y-8 self-start">

            <div className="rounded-xl bg-orange-400 p-8">
              <h3 className="text-center text-3xl font-bold text-white">
                Reach Out To Us
              </h3>

              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border p-3"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border p-3"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full rounded-lg border p-3"
                />

                <textarea
                  rows={5}
                  placeholder="Message"
                  className="w-full rounded-lg border p-3"
                />

                <button
                  type="submit"
                  className="w-full rounded-lg bg-black py-4 font-bold text-white transition hover:bg-gray-800"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Recent Properties — now inside the sidebar, below the form */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-extrabold text-gray-900">Recent Properties</h3>

              <div className="mt-5 space-y-4">
                {recentProperties.map((p, i) => (
                  <Link
                    key={i}
                    href={`/properties/${p.slug}`}
                    className="group flex items-center gap-3 rounded-lg p-2 transition hover:bg-gray-50"
                  >
                    <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold leading-tight text-gray-800 group-hover:text-orange-500">
                        {p.title}
                      </h4>
                      <p className="mt-1 text-xs text-gray-500">{p.size}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}