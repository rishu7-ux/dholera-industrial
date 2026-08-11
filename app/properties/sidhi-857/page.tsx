import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const whatAreSco = [
  "Located in TP-4 (B2 Zone)—a strategically planned business sector",
  "Frontage on a 70-meter-wide road—enhancing visibility and accessibility",
  "Mixed-use zoning — shop or business space below, residential or office above",
  "Flexible development rights — ideal for diverse commercial ventures",
];

const primeLocation = [
  "Government-backed development",
  "Long-term structured urban planning",
  "Rapid infrastructure rollout",
  "Growth corridors for business and industry",
];

const scoStructureUses = [
  "Run retail shops on the ground floor",
  "Set up corporate offices above",
  "Build residential or service spaces on upper levels",
  "House clinics, showrooms, consulting firms, fine dining, and more",
];

const scoBenefits = [
  "Higher rental income potential",
  "Stronger resale value",
  "Broader business flexibility",
  "Long-term appreciation",
];

const roadAdvantage = [
  "Better customer access",
  "Visibility for storefronts and offices",
  "Increased traffic flow and footfall",
  "Enhanced long-term land value",
];

const plotSizeDetails = [
  "Plot Sizes: Approximately 423 to 590 sq. yards",
  "Zoning: Mixed-use (Commercial + Residential)",
  "Road Connectivity: Planned network",
  "Ownership Type: Freehold",
];

const connectivity = [
  "Dholera Expressway links",
  "Proximity to upcoming Dholera International Airport",
  "Access to ABCD Administrative Zone",
  "Near industrial activation areas",
  "Integration under DMIC Corridor",
];

const goodInvestment2026 = [
  "Government-backed mega projects",
  "Industrial and commercial zone planning",
  "Infrastructure expansion underway",
  "Attractive early-stage pricing",
  "Increasing market awareness",
];

const whoShouldBuy = [
  "Business owners planning retail shops",
  "Entrepreneurs seeking mixed-use ventures",
  "Long-term investors",
  "Commercial developers",
  "Professionals planning serviced offices or hospitality spaces",
];

const earlyInvestmentBenefits = [
  "Lower entry pricing",
  "Potential high future margins",
  "Strategic positioning before area densification",
  "Limited inventory advantage",
  "Premium commercial corridors along major roads",
];

const faqs = [
  {
    q: "What is the Ridhi 966/1 SCO Plot in Dholera?",
    a: "A mixed-use shop-cum-office plot located in TP-4 (B2 Zone) of Dholera Smart City.",
  },
  {
    q: "What plot sizes are available?",
    a: "Approximately 423 sq. yards to 590 sq. yards.",
  },
  {
    q: "Is the project inside Dholera SIR?",
    a: "Yes, it is located within the Dholera Special Investment Region.",
  },
  {
    q: "Can I build residential units on SCO plots?",
    a: "Yes, residential use is allowed on upper floors above commercial spaces.",
  },
  {
    q: "Is this a long-term investment?",
    a: "Yes, Dholera is a long-term infrastructure-driven growth opportunity.",
  },
];

const highlights = [
  "Situated inside India's first smart industrial city, Dholera SIR",
  "A portion of TP-4 and TP-4B-2, fully planned and rapidly developing zones",
  "Near the Activation Area, Dholera's Most Developed Area",
  "Superior Access to the Future Dholera International Airport",
  "Robust Road Access through 55M and 75M TP Roads",
  "Close to the ABCD Building, important commercial hubs, and government offices",
  "Encircled by Logistic and Industrial Hubs",
  "Superb Access via the Proposed Metro Route and the Expressway",
];

const recentProperties = [
  { title: "Ridhi 872/1 Sco Plots", image: "/images/plots/p1.jpg", size: "398- 521 Sq. Yd.", slug: "ridhi-872-1" },
  { title: "Ridhi 966/1 SCO Plots", image: "/images/Ridhi 966.jpg", size: "423 - 590 Sq. Yd.", slug: "ridhi-966-1" },
  { title: "Ridhi 249/2 — Premium SCO Plots", image: "/images/plots/Ridhi-249-2.jpg", size: "390 | 578 | 687 Sq. Yards", slug: "ridhi-249-2" },
  { title: "Sidhi 857 — Residential Plot", image: "/images/plots/Sidhi-857.jpg", size: "390 sq. yd. – 450 sq. yd", slug: "sidhi-857" },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="font-semibold leading-8 text-gray-800">
          ✅ {item}
        </li>
      ))}
    </ul>
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
          <h1 className="text-5xl font-extrabold text-white">
            Ridhi 966/1 SCO Plots
          </h1>

          <p className="mt-3 text-lg text-white">
            Home / Properties / Ridhi 966/1
          </p>
        </div>
      </section>

      {/* Images + overlapping info card */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="relative">

          <div className="grid grid-cols-3 overflow-hidden rounded-lg">
            <Image
              src="/images/Ridhi 966.jpg"
              alt="Ridhi 966/1"
              width={500}
              height={350}
              className="h-87.5 w-full object-cover"
            />
            <Image
              src="/images/Ridhi 966.jpg"
              alt="Ridhi 966/1"
              width={500}
              height={350}
              className="h-87.5 w-full object-cover"
            />
            <Image
              src="/images/Ridhi 966.jpg"
              alt="Ridhi 966/1"
              width={500}
              height={350}
              className="h-87.5 w-full object-cover"
            />
          </div>

          <div className="relative z-10 -mt-20 w-full rounded-lg bg-white p-6 shadow-xl md:mx-6 md:w-[calc(100%-3rem)]">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-extrabold leading-tight text-orange-500 md:text-3xl">
                  RIDHI 966/1 SCO PLOTS
                </h2>
                <p className="mt-2 flex items-center gap-1 text-gray-600">
                  <span className="text-orange-500">📍</span>
                  Bhangadh Dholera
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 md:items-end">
                <p className="text-lg font-bold text-orange-500 md:text-xl">
                  Starting Price - ₹44 Lakhs Onward
                </p>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <span className="rounded bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white md:text-sm">
                    Total area 17492 sq yd
                  </span>
                  <span className="rounded bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white md:text-sm">
                    423 - 590 Sq. Yd.
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

            <h2 className="mb-8 text-4xl font-extrabold text-gray-900">
              Ridhi 966/1 SCO Plots in Dholera Smart City — A Premium
              Mixed-Use Investment Opportunity
            </h2>

            <p className="text-lg font-medium leading-9 text-gray-800">
              Prime commercial land in India&apos;s fastest-emerging smart
              city doesn&apos;t come often—and{" "}
              <strong>Ridhi 966/1 SCO plots in Dholera Smart City</strong>{" "}
              are exactly the kind of opportunity that investors, business
              owners, and developers have been waiting for.
            </p>

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              Located in Dholera SIR&apos;s <strong>TP-4 (B2 Zone)</strong>,
              this project stands out not just for its strategic positioning
              but also for its flexible mixed-use potential. Whether
              you&apos;re planning a retail business, office space, or a
              combined commercial-residential venture, Ridhi 966/1 is
              designed to support growth, visibility, and long-term value.
            </p>

            <h3 className="mt-10 mb-4 text-2xl font-extrabold text-gray-900">
              What Are Ridhi 966/1 SCO Plots in Dholera?
            </h3>

            <p className="text-lg font-medium leading-9 text-gray-800">
              Ridhi 966/1 SCO plots are <strong>Shop-Cum-Office (SCO)</strong>{" "}
              plots—mixed-use land parcels that allow a combination of
              commercial and residential usage. These plots sit within
              Dholera Smart City, India&apos;s first planned greenfield
              smart industrial city under the Dholera Special Investment
              Region (SIR).
            </p>

            <BulletList items={whatAreSco} />

            <h2 className="mt-12 mb-5 text-3xl font-extrabold text-gray-900">
              Why Invest in Ridhi 966/1 SCO Plots?
            </h2>

            <h3 className="mt-6 text-xl font-extrabold text-orange-500">
              1. Prime Location Inside Dholera SIR
            </h3>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              Being inside the Dholera Special Investment Region places this
              project at the core of India&apos;s planned industrial
              expansion, including the Delhi-Mumbai Industrial Corridor
              (DMIC).
            </p>

            <BulletList items={primeLocation} />

            <h3 className="mt-10 text-xl font-extrabold text-orange-500">
              Understanding SCO Plots &amp; Their Profitability
            </h3>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              A Shop-Cum-Office (SCO) structure allows you to:
            </p>

            <BulletList items={scoStructureUses} />

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              <strong>Benefits include:</strong>
            </p>

            <BulletList items={scoBenefits} />

            <h3 className="mt-10 text-xl font-extrabold text-orange-500">
              The Advantage of a 70-Meter Wide Road
            </h3>

            <BulletList items={roadAdvantage} />

            <h3 className="mt-10 text-xl font-extrabold text-orange-500">
              Plot Sizes &amp; Ownership Details
            </h3>

            <BulletList items={plotSizeDetails} />

            <h3 className="mt-10 text-xl font-extrabold text-orange-500">
              Connectivity &amp; Infrastructure
            </h3>

            <BulletList items={connectivity} />

            <h3 className="mt-10 text-xl font-extrabold text-orange-500">
              Is Dholera a Good Investment in 2026?
            </h3>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              Yes—especially for long-term investors. Dholera is a
              government-planned smart city with phased development
              milestones and large-scale infrastructure growth.
            </p>

            <BulletList items={goodInvestment2026} />

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              This is a long-term land banking opportunity with a 5–10+
              year horizon.
            </p>

            <h3 className="mt-10 text-xl font-extrabold text-orange-500">
              Who Should Consider Buying?
            </h3>

            <BulletList items={whoShouldBuy} />

            <h3 className="mt-10 text-xl font-extrabold text-orange-500">
              Benefits of Investing Early in TP-4 Zone
            </h3>

            <BulletList items={earlyInvestmentBenefits} />

            {/* FAQ */}
            <h2 className="mt-12 mb-5 text-4xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((f, i) => (
                <div key={i}>
                  <h4 className="text-lg font-extrabold text-orange-500">{f.q}</h4>
                  <p className="mt-1 text-lg font-medium leading-8 text-gray-800">{f.a}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-extrabold text-gray-900">Final Thoughts</h3>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              Ridhi 966/1 SCO plots represent an early-stage opportunity in
              one of India&apos;s most ambitious smart city developments.
              With wide-road connectivity, flexible mixed-use zoning, and
              integration under the DMIC corridor, these plots offer strong
              capital appreciation potential along with operational income
              opportunities.
            </p>

            {/* Highlights */}
            <div className="mt-10 rounded-xl bg-black p-8">
              <ul className="space-y-3">
                {highlights.map((h, i) => (
                  <li key={i} className="text-white/90">
                    ● {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Brochure */}
            <div className="mt-10">
              <h3 className="mb-5 text-3xl font-extrabold text-gray-900">Download Brochure</h3>
              <a
                href="/brochures/Ridhi9661.pdf"
                download
                className="inline-block rounded-lg bg-black px-8 py-4 font-bold text-white transition hover:bg-gray-800"
              >
                Download Brochure
              </a>
            </div>

          </div>

          {/* Form + Recent Properties (sidebar) */}
          <div className="sticky top-28 space-y-8 self-start">

            <div className="rounded-xl bg-orange-400 p-8 shadow-lg">
              <h3 className="text-center text-3xl font-extrabold text-white">
                Reach Out To Us
              </h3>

              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border-0 bg-white/95 p-3 text-sm placeholder:text-gray-400 outline-none ring-2 ring-transparent transition focus:ring-black/40"
                />
                <input
                  type="email"
                  placeholder="Your Email"
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