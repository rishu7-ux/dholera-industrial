import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const projectSnapshot = [
  ["Project Name", "Ridhi 249/2"],
  ["Location", "Kadipur Village, Dholera SIR, Gujarat"],
  ["TP Scheme", "TP-1"],
  ["Land Type", "SCO (Shop-Cum-Office)"],
  ["Land Use Permission", "Mixed Use (Commercial + Office + Retail)"],
  ["Legal Status", "NA Converted"],
  ["Road Width", "55 Metres"],
  ["Total Area", "5,688 Sq. Yards"],
  ["Available Plot Sizes", "390 | 578 | 687 Sq. Yards"],
  ["Price", "₹20,500 per Sq. Yard"],
  ["Starting From", "₹80,00,000 Lakhs (390 sq. yd.)"],
];

const priceBreakdown = [
  ["390 sq. yd.", "₹20,500", "₹80,00,000 Lakhs", "Small business / investor entry"],
  ["578 sq. yd.", "₹20,500", "₹1.19 Crore+", "Mid-size retail / office"],
  ["687 sq. yd.", "₹20,500", "₹1.41 Crore+", "Large format / corner showroom"],
];

const standoutFactors = [
  "Location inside TP-1 — the zone directly adjacent to Dholera's Activation Area, the most developed and highest-value part of the entire SIR",
  "NA conversion already in place — not promised, not in process, already completed. This means the land is legally ready for commercial and mixed-use development today",
  "55-metre wide TP road frontage — Road hierarchy, a 55m road is a major arterial corridor, guaranteeing maximum commercial visibility, footfall potential, and future vehicle traffic",
  "Mixed-use land permission — the single most flexible and commercially valuable land use designation, allowing retail, office, hospitality, healthcare, education, and more within a single plot",
];

const kadipurValue = [
  "Kadipur is among the top inside-SIR villages for commercial and tech development, along with Dholera Village, Ambli, Gorasu, and Bhadiyad",
  "Planned metro connectivity under Ahmedabad-Dholera MRTS, linking directly to SG Highway",
  "Strong IT park and startup ecosystem potential due to TP-1 positioning and incentives",
  "Close to ABCD Building — the administrative and business hub of Dholera SIR",
  "Direct access to 55-metre wide TP road ensuring high visibility and commercial value",
];

const scoGroundFloor = [
  "Pharmacies, banks, convenience stores, cafes, clinics, telecom outlets, insurance offices — ideal for businesses requiring walk-in visibility",
];
const scoUpperFloors = [
  "Corporate offices, co-working spaces, IT firms, consultancy agencies, government offices, training centres",
  "Higher permissible FSI compared to residential plots — allowing more construction and better rental returns",
  "Proven commercial model — SCO developments in GIFT City and other Gujarat smart cities have shown 3–4x appreciation within 10 years",
];

const mixedUsePoints = [
  "Retail + Office + Residential + Hospitality + Healthcare in one project",
  "Higher income potential due to multiple revenue streams",
  "Lower vacancy risk compared to single-use properties",
  "High demand in planned smart city environments",
];

const buildoutLevels = [
  "Ground floor retail shops",
  "2nd–3rd floor office spaces",
  "4th–5th floor hotel or serviced apartments",
  "Top floors residential units",
];

const dsirdaPoints = [
  "Development must conform to the sanctioned TP-1 scheme — providing legal certainty about land use, road networks, and development rights",
  "All infrastructure around the plot is planned and funded under the government's DICDL (Dholera Industrial City Development Limited) framework",
  "Disputes and regulatory matters are handled by DSIRDA, a statutory authority under the Gujarat SIR Act, 2009 — providing faster, more transparent resolution than standard civil courts",
  "The SIR Act provides specific legal protections for landowners inside the boundary that are not available to peripheral plot buyers",
];

const documentsToVerify = [
  "7/12 Extract (Satbara Utara) — verify at anyror.gujarat.gov.in; seller name must match exactly",
  "NA Conversion Order from District Collector — original document with survey number, area, and permitted use",
  "DSIRDA TP-1 Scheme Confirmation — written letter confirming plot falls within TP Scheme-1 and its designated mixed-use zone",
  "30-Year Encumbrance Certificate from Sub-Registrar — confirming no pending mortgages, litigations, or third-party claims",
  "Full title chain — all sale deeds for minimum 30 years, verified by an independent property lawyer",
  "NOC from Airport Authority of India (AAI) if within the airport approach corridor zone",
];

const buyerProfiles = [
  {
    title: "Commercial investors seeking rental yield (5–10 year horizon)",
    text: "Once Dholera's commercial activity scales — driven by the Tata Semiconductor plant (21,000+ direct jobs), the International Airport opening, and DMIC Phase-2 investments — demand for ground-floor retail and upper-floor office space in planned SCO strips on wide TP roads will grow rapidly. Ridhi 249/2's TP-1 Kadipur location places it directly in the commercial catchment area for this workforce. Investors who buy now are entering before rental markets exist, which is when acquisition price is still rational.",
  },
  {
    title: "Portfolio investors seeking capital appreciation (7–15 year horizon)",
    text: "TP-1 land in Kadipur has already demonstrated consistent appreciation — Phase-1 TP villages command the highest land prices in Dholera SIR. With the expressway operational, the airport runway complete, the semiconductor SEZ gazette-notified in April 2026, and ₹610 crore committed in Gujarat's 2026 budget, the next set of infrastructure milestones are all within a 3–5 year window. SCO plot investors in TP-1 today are positioned for the steepest part of that appreciation curve.",
  },
  {
    title: "Business owners planning to establish in Dholera Smart City",
    text: "If you operate a business — retail, healthcare, finance, professional services, hospitality — that will serve Dholera's growing residential and industrial population, buying your own SCO plot in TP-1 Kadipur secures your commercial presence at current pricing rather than future lease rates. You build to your specification, on your timeline, without being dependent on a landlord.",
  },
  {
    title: "NRI investors",
    text: "NRIs can legally purchase NA-converted SCO plots in Dholera SIR under FEMA regulations using NRE or NRO bank accounts. The process — from virtual site visit through online documentation to registered POA and bank transfer — can be completed entirely remotely. Ridhi 249/2's clear legal status (NA converted, TP-1 inside SIR) makes it one of the more straightforward NRI purchase processes in the Dholera market.",
  },
];

const infraDrivers = [
  {
    title: "Tata Semiconductor SEZ — Gazette Notified April 2026",
    text: "The 66.16-hectare Tata Semiconductor SEZ was officially gazette-notified by the Central Government in April 2026. This single investment — ₹91,000 crore, India's first chip fabrication plant — creates 21,000 direct jobs and tens of thousands of indirect jobs, all of which drive residential and commercial demand in TP-1 zone locations like Kadipur.",
  },
  {
    title: "Dholera International Airport — Runway Complete",
    text: "The airport runway is complete and the terminal is in advanced construction. First flights are anticipated in 2026–27. Airport proximity consistently drives commercial real estate premiums of 30–50% in developing cities — and Kadipur is within the airport influence zone.",
  },
  {
    title: "Ahmedabad-Dholera Expressway — Operational",
    text: "The 109 km, 6-lane expressway connecting Ahmedabad to Dholera is operational, reducing travel time to under 60 minutes. Commercial plots on wide TP roads in TP-1 benefit directly from the expressway's ability to bring daily business traffic from Ahmedabad into Dholera.",
  },
  {
    title: "Metro Rail (MRTS) — Kadipur Station Planned",
    text: "Kadipur is identified as a metro station node in the proposed Dholera-Ahmedabad Metro Rail Transit System. Metro groundwork progress was reported in early 2025. When operational, metro connectivity transforms Kadipur from a drive-in commercial location to a transit-oriented development hub — the highest-value commercial real estate category in any global city.",
  },
  {
    title: "Gujarat Budget 2026 — ₹610 Crore for Dholera Trunk Infrastructure",
    text: "The Government of Gujarat has budgeted ₹610 crore specifically for Dholera SIR trunk infrastructure in 2026–27. This is committed spending, not a promise — and TP-1 locations benefit first as the primary expansion zone from the Activation Area.",
  },
];

const faqs = [
  {
    q: "What is Ridhi 249/2 in Dholera SIR?",
    a: "Ridhi 249/2 is an NA-converted SCO (Shop-Cum-Office) mixed-use plot development in Kadipur Village, inside Dholera Special Investment Region's Town Planning Scheme-1 (TP-1). It offers three plot sizes — 390, 578, and 687 sq. yards — on a 55-metre wide TP road, with mixed-use land permission for commercial, office, retail, and institutional development. Total project area is 5,688 sq. yards, priced at ₹20,500 per sq. yard.",
  },
  {
    q: "What is the price of SCO plots in Ridhi 249/2, Kadipur, Dholera SIR?",
    a: "SCO plots in Ridhi 249/2 are priced at ₹20,500 per sq. yard as of April 2026. The starting investment for a 390 sq. yard plot is ₹80.00 lakhs. A 578 sq. yard plot is priced at ₹1.19 crore. The largest available option at 687 sq. yard starts at approximately ₹1.41 crore. Contact the sales team for current pricing and available inventory.",
  },
  {
    q: "Is Kadipur TP-1 a good location for SCO plot investment in Dholera SIR?",
    a: "Yes. Kadipur is one of the 22 villages inside the notified Dholera SIR boundary and falls within TP-1 — the zone adjacent to the Activation Area and among the highest-priced inside-SIR locations. It is identified as a planned metro station node, a tech and IT park cluster, and has one of the strongest land price appreciation histories within the SIR. Phase-1 TP villages including Kadipur command ₹60–85 lakh per bigha — the highest range in Dholera SIR.",
  },
  {
    q: "What is the legal status of Ridhi 249/2 — is it NA converted?",
    a: "Yes. Ridhi 249/2 carries a confirmed NA (Non-Agricultural) legal status — the conversion order has been issued by the District Collector. The land is inside the notified Dholera SIR boundary within TP-1, under full DSIRDA jurisdiction, with mixed-use land permission. Buyers should independently verify the NA order, 7/12 extract, 30-year encumbrance certificate, and title chain through an independent property lawyer before purchase.",
  },
  {
    q: "What is mixed-use land permission in Dholera SIR?",
    a: "Mixed-use land permission is the broadest land use designation available in Dholera SIR. It allows a single plot to accommodate retail, office, residential, institutional, hospitality, and healthcare uses — all within one development. For SCO plots like Ridhi 249/2, this means a buyer can build ground-floor retail, upper-floor offices, serviced apartments, and more within a single 390–687 sq. yard plot — maximising rental income potential and minimising vacancy risk.",
  },
  {
    q: "Can NRIs buy SCO plots in Ridhi 249/2, Dholera SIR?",
    a: "Yes. NRIs can legally purchase NA-converted SCO and commercial plots in Dholera SIR under FEMA regulations using NRE or NRO bank accounts. The entire process — from virtual site visit through online documentation, registered Power of Attorney, and bank transfer — can be completed remotely. Ridhi 249/2's clear NA status and TP-1 inside-SIR location make it one of the more legally straightforward NRI purchase options in the Dholera market.",
  },
  {
    q: "What infrastructure is planned near Kadipur TP-1 that will drive appreciation?",
    a: "Kadipur TP-1 is positioned to benefit from: (1) Tata Semiconductor SEZ — gazette-notified April 2026, 21,000+ direct jobs; (2) Dholera International Airport — runway complete, terminal in construction, first flights 2026–27; (3) Operational Ahmedabad-Dholera Expressway; (4) Planned metro station at Kadipur on the Dholera-Ahmedabad MRTS; and (5) Gujarat Budget 2026 committing ₹610 crore to Dholera SIR trunk infrastructure. All five drivers directly benefit TP-1 commercial land values.",
  },
];

const recentProperties = [
  { title: "Ridhi 872/1 mixed use land", image: "/images/plots/p1.jpg", size: "398- 521 Sq. Yd.", slug: "ridhi-872-1" },
  { title: "Ridhi 966/1 Sco Plots", image: "/images/plots/p2.jpg", size: "423sq yd - 590sq yd", slug: "ridhi-966-1" },
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

function DataTable({ rows, headers }: { rows: string[][]; headers?: string[] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full border-collapse text-left">
        {headers && (
          <thead>
            <tr className="bg-orange-500 text-white">
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-3 text-sm font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 text-sm ${
                    j === 0 ? "font-semibold text-gray-800" : "font-medium text-gray-800"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
            Ridhi 249/2 — Premium SCO Plots in Kadipur, Dholera SIR TP-1
          </h1>

          <p className="mt-3 text-lg text-white">
            Home / Properties / Ridhi 249/2
          </p>
        </div>
      </section>

      {/* Images + overlapping info card */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="relative">

          <div className="grid grid-cols-3 overflow-hidden rounded-lg">
            <Image
              src="/images/plots/Ridhi-249-2.jpg"
              alt="Ridhi 249/2"
              width={500}
              height={350}
              className="h-87.5 w-full object-cover"
            />
            <Image
              src="/images/property2.jpg"
              alt="Ridhi 249/2"
              width={500}
              height={350}
              className="h-87.5 w-full object-cover"
            />
            <Image
              src="/images/property3.jpg"
              alt="Ridhi 249/2"
              width={500}
              height={350}
              className="h-87.5 w-full object-cover"
            />
          </div>

          <div className="relative z-10 -mt-20 w-full rounded-lg bg-white p-6 shadow-xl md:mx-6 md:w-[calc(100%-3rem)]">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold leading-tight text-orange-500 md:text-3xl">
                  RIDHI 249/2 — PREMIUM SCO PLOTS
                </h2>
                <p className="mt-2 flex items-center gap-1 text-gray-600">
                  <span className="text-orange-500">📍</span>
                  Kadipur Village, Dholera SIR, Gujarat
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 md:items-end">
                <p className="text-lg font-bold text-orange-500 md:text-xl">
                  Starting Price- 80,00,000 lakhs
                </p>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <span className="rounded bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white md:text-sm">
                    Survey No : 585/2
                  </span>
                  <span className="rounded bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white md:text-sm">
                    Total area 5,688 sq yd
                  </span>
                  <span className="rounded bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white md:text-sm">
                    390 | 578 | 687 Sq. Yards
                  </span>
                  <span className="rounded bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white md:text-sm">
                    55 Metres (Wide TP Road)
                  </span>
                  <span className="rounded bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white md:text-sm">
                    Town Planning Scheme – 1 (TP-1)
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

            <p className="text-lg font-medium leading-9 text-gray-800">
              There are moments in real estate where the right location, the
              right land type, and the right timing all converge. In India&apos;s
              emerging smart city landscape of 2026, that convergence has a
              name: Ridhi 249/2, Kadipur, Dholera SIR.
            </p>

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              If you have been researching SCO plots or commercial land for
              sale in Dholera Smart City, this guide gives you everything you
              need — project specifics, location analysis, TP-1 zone context,
              price breakdown, legal status, and an honest assessment of who
              this investment is right for and why.
            </p>

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              No marketing language. No inflated promises. Just the complete
              picture of one of the most strategically positioned SCO plot
              projects available in Dholera SIR today.
            </p>

            <h2 className="mt-12 mb-5 text-4xl font-bold">
              Ridhi 249/2 — Complete Project Specifications at a Glance
            </h2>

            <p className="text-lg font-medium leading-9 text-gray-800">
              Before diving into the detail, here is the complete snapshot of
              everything Ridhi 249/2 offers:
            </p>

            <DataTable rows={projectSnapshot} headers={["Project at a Glance", "Ridhi 249/2 — Kadipur, TP-1, Dholera SIR"]} />

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              <strong>Key distinction:</strong> Ridhi 249/2 sits inside the
              notified Dholera SIR boundary, in TP Scheme-1 — the zone
              closest to the Activation Area. This is not a peripheral plot.
              It is in the heart of India&apos;s first greenfield smart
              city&apos;s primary development corridor.
            </p>

            <h2 className="mt-12 mb-5 text-3xl font-bold">
              What Is Ridhi 249/2 and What Makes It Stand Out Among SCO Plots
              in Dholera Smart City?
            </h2>

            <p className="text-lg font-medium leading-9 text-gray-800">
              Ridhi 249/2 is a mixed-use SCO (Shop-Cum-Office) plot
              development covering a total area of 5,688 sq. yards in
              Kadipur Village, inside Dholera Special Investment
              Region&apos;s Town Planning Scheme-1. The project offers three
              plot size options — 390, 578, and 687 sq. yards — giving
              buyers flexibility to match their investment budget and
              business vision.
            </p>

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              What sets this project apart from the dozens of plot offerings
              currently in the market is its combination of four critical
              factors that serious investors prioritise:
            </p>

            <BulletList items={standoutFactors} />

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              Together, these four factors make Ridhi 249/2 one of the most
              investment-ready SCO plot opportunities currently available in
              Dholera SIR — particularly for buyers who understand the
              relationship between TP-1 location and long-term commercial
              value.
            </p>

            <h2 className="mt-12 mb-5 text-3xl font-bold">
              Why Is Kadipur in TP-1 One of the Best Locations for SCO Plots
              in Dholera SIR?
            </h2>

            <p className="text-lg font-medium leading-9 text-gray-800">
              Location within Dholera SIR is not simply about geography. It
              depends on the Town Planning (TP) zone, as each zone has a
              different development stage, infrastructure readiness, and
              appreciation timeline. Understanding Kadipur&apos;s position in
              TP-1 is key to evaluating the real value of this investment.
            </p>

            <h3 className="mt-8 text-xl font-bold text-orange-500">
              What Is TP-1 in Dholera SIR?
            </h3>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              Dholera SIR is divided into six Town Planning Schemes — TP-1 to
              TP-6. TP-1 is the zone located immediately next to the
              Activation Area (22.5 sq. km core), where major infrastructure
              is already operational.
            </p>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              TP-1 is considered one of the most premium zones in the entire
              SIR, positioned directly in the path of infrastructure
              expansion. Along with TP-2, it is best suited for residential
              and mixed-use development due to proximity to administrative
              hubs, road networks, and social infrastructure.
            </p>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              In contrast, TP-3 and TP-4 are mainly industrial zones, making
              TP-1 the primary area where commercial and residential growth
              begins.
            </p>

            <h3 className="mt-8 text-xl font-bold text-orange-500">
              What Makes Kadipur Village Specifically Valuable?
            </h3>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              Kadipur is one of the 22 villages inside the officially
              notified Dholera SIR boundary. It is not a peripheral location
              but a core TP-1 zone village with full infrastructure
              entitlement.
            </p>

            <BulletList items={kadipurValue} />

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              Land price trends clearly show Kadipur&apos;s premium position.
              TP-1 Phase villages, including Kadipur, command the highest
              land values in Dholera SIR, reflecting both infrastructure
              readiness and long-term growth potential.
            </p>

            <h2 className="mt-12 mb-5 text-3xl font-bold">
              What Is an SCO Plot with Mixed-Use Permission — and Why Does It
              Matter for Dholera Investors?
            </h2>

            <p className="text-lg font-medium leading-9 text-gray-800">
              The combination of SCO land type and mixed-use land permission
              is one of the most flexible and commercially powerful plot
              designations available in Dholera SIR. Understanding how this
              works in practice is essential to evaluating the full
              investment potential of projects like Ridhi 249/2.
            </p>

            <h3 className="mt-8 text-xl font-bold text-orange-500">
              SCO (Shop-Cum-Office) — Maximum Commercial Flexibility
            </h3>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              An SCO plot allows construction of a building that combines
              ground-floor retail space with upper-floor office or
              institutional use within a single land parcel. In planned
              cities like Dholera, SCO plots on wide roads act as the
              backbone of daily commercial activity.
            </p>

            <BulletList items={scoGroundFloor} />
            <BulletList items={scoUpperFloors} />

            <h3 className="mt-8 text-xl font-bold text-orange-500">
              Mixed-Use Land Permission — The Broadest Development Rights
            </h3>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              Mixed-use permission goes beyond standard commercial zoning. It
              allows multiple property uses within a single development,
              including retail, office, residential, hospitality,
              institutional, and healthcare.
            </p>

            <BulletList items={mixedUsePoints} />

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              For Ridhi 249/2, this means a buyer can develop a multi-level
              building with:
            </p>

            <BulletList items={buildoutLevels} />

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              This level of flexibility directly results in higher rental
              income, diversified usage, reduced vacancy risk, and stronger
              long-term resale value.
            </p>

            <h2 className="mt-12 mb-5 text-3xl font-bold">
              What Is the Price of SCO Plots in Ridhi 249/2? Complete 2026
              Pricing Breakdown
            </h2>

            <p className="text-lg font-medium leading-9 text-gray-800">
              Here is the transparent, zone-specific pricing for all three
              available plot sizes in Ridhi 249/2:
            </p>

            <DataTable
              rows={priceBreakdown}
              headers={["Plot Size (Sq. Yd.)", "Rate (per Sq. Yd.)", "Total Price", "Best For"]}
            />

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              Note: All prices are as of April 2026 at ₹20,500 per sq. yard.
              Prices are subject to change as infrastructure milestones are
              completed. Contact the sales team for current inventory,
              confirmed pricing, and available payment plans.
            </p>

            <h2 className="mt-12 mb-5 text-3xl font-bold">
              Is Ridhi 249/2 Legally Safe? Understanding the NA Conversion
              and TP-1 Legal Framework
            </h2>

            <p className="text-lg font-medium leading-9 text-gray-800">
              Legal clarity is the single most important factor in any
              Dholera plot purchase — and Ridhi 249/2&apos;s legal status is
              one of its strongest selling points.
            </p>

            <h3 className="mt-8 text-xl font-bold text-orange-500">
              NA Conversion — Already Completed
            </h3>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              Non-Agricultural (NA) conversion is the legal process by which
              agricultural land is officially reclassified for residential,
              commercial, or industrial use, through an order issued by the
              District Collector. Without valid NA conversion, construction
              on land is illegal in Gujarat — regardless of what a developer
              claims.
            </p>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              Ridhi 249/2 carries a confirmed NA legal status. This means the
              conversion order has already been issued by the competent
              authority, the land is legally classified for mixed-use
              commercial development, and construction can proceed without
              waiting for a future approval that may or may not come.
            </p>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              This is not a minor detail — it is the single most critical
              document that separates a legally safe plot from a legally
              risky one in Dholera SIR.
            </p>

            <h3 className="mt-8 text-xl font-bold text-orange-500">
              TP-1 Inside Notified SIR — Full DSIRDA Governance
            </h3>

            <p className="mt-4 text-lg font-medium leading-9 text-gray-800">
              As a plot within TP Scheme-1 inside the notified 920 sq. km
              Dholera SIR boundary, Ridhi 249/2 falls under the full
              jurisdiction of DSIRDA (Dholera Special Investment Region
              Development Authority). This means:
            </p>

            <BulletList items={dsirdaPoints} />

            <h3 className="mt-8 text-xl font-bold text-orange-500">
              What Documents to Verify Before Purchase
            </h3>

            <BulletList items={documentsToVerify} />

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              Always hire an independent property lawyer — not one
              recommended by the developer — to conduct title verification
              and issue a Title Clearance Certificate before signing any
              sale agreement.
            </p>

            <h2 className="mt-12 mb-5 text-3xl font-bold">
              Who Should Buy SCO Plots in Ridhi 249/2, Kadipur, Dholera SIR?
            </h2>

            <p className="text-lg font-medium leading-9 text-gray-800">
              There is no universal answer — the right investor profile
              depends on what you are trying to achieve. Here is an honest
              breakdown of who Ridhi 249/2 is best suited for.
            </p>

            <div className="mt-8 space-y-8">
              {buyerProfiles.map((b, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold text-orange-500">{b.title}</h3>
                  <p className="mt-3 text-lg font-medium leading-9 text-gray-800">{b.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 mb-5 text-3xl font-bold">
              What Infrastructure Drives Appreciation for Ridhi 249/2 in
              Kadipur, Dholera SIR?
            </h2>

            <p className="text-lg font-medium leading-9 text-gray-800">
              The appreciation case for any Dholera SIR plot is built on
              infrastructure milestones. For Ridhi 249/2 in TP-1 Kadipur,
              the following are the specific drivers that will move
              commercial land values upward:
            </p>

            <div className="mt-8 space-y-8">
              {infraDrivers.map((d, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold text-orange-500">{d.title}</h3>
                  <p className="mt-3 text-lg font-medium leading-9 text-gray-800">{d.text}</p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="mt-12 mb-5 text-4xl font-extrabold text-gray-900">
              Frequently Asked Questions About Ridhi 249/2 SCO Plots in
              Kadipur, Dholera SIR
            </h2>

            <div className="mt-6 space-y-8">
              {faqs.map((f, i) => (
                <div key={i}>
                  <h4 className="text-lg font-bold text-orange-500">
                    Q{i + 1}: {f.q}
                  </h4>
                  <p className="mt-2 text-lg font-medium leading-8 text-gray-800">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 mb-5 text-3xl font-bold">
              Ready to Explore Ridhi 249/2 SCO Plots in Kadipur, Dholera SIR?
            </h2>

            <p className="text-lg font-medium leading-9 text-gray-800">
              Ridhi 249/2 represents a rare combination in Dholera&apos;s
              current market: an NA-converted, mixed-use SCO project on a
              55-metre TP road, inside TP-1 Kadipur — one of the
              highest-value village locations in the entire SIR — available
              at a clear, documented price with three flexible plot size
              options.
            </p>

            <p className="mt-6 text-lg font-medium leading-9 text-gray-800">
              The window at current pricing is narrowing. Every
              infrastructure milestone completed — the semiconductor SEZ
              notification in April 2026, the airport terminal approaching
              operational status, the metro groundwork advancing — moves
              TP-1 commercial land values higher. The investors who look
              back at 2026 with satisfaction will be the ones who acted
              while the early-mover window was still open.
            </p>

          </div>

          {/* Form + Recent Properties (sidebar) */}
          <div className="sticky top-28 space-y-8 self-start">

            <div className="rounded-xl bg-orange-400 p-8 shadow-lg">
              <h3 className="text-center text-3xl font-bold text-white">
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

            {/* Recent Properties — sidebar list */}
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