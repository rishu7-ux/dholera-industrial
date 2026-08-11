import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
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
          <h1 className="text-5xl font-bold text-white">Contact us</h1>
          <p className="mt-3 text-lg text-white">Home || Contact us</p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-[#081A3A]">CONTACT US</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Planning to invest in India&apos;s first smart city? Let our
              team assist you with Dholera land deals, property documents,
              and project insights. Get personalized assistance for your
              plot selection, legal support, and site visits.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">

            {/* Form */}
            <div className="rounded-2xl border-2 border-[#FF7A00] bg-white p-8 shadow-sm lg:col-span-2">
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-gray-200 bg-white p-4 text-sm text-gray-700 placeholder:text-gray-400 outline-none ring-2 ring-transparent transition focus:border-[#FF7A00] focus:ring-[#FF7A00]/20"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-md border border-gray-200 bg-white p-4 text-sm text-gray-700 placeholder:text-gray-400 outline-none ring-2 ring-transparent transition focus:border-[#FF7A00] focus:ring-[#FF7A00]/20"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-md border border-gray-200 bg-white p-4 text-sm text-gray-700 placeholder:text-gray-400 outline-none ring-2 ring-transparent transition focus:border-[#FF7A00] focus:ring-[#FF7A00]/20"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <select
                    defaultValue=""
                    className="w-full rounded-md border border-gray-200 bg-white p-4 text-sm text-gray-400 outline-none ring-2 ring-transparent transition focus:border-[#FF7A00] focus:ring-[#FF7A00]/20"
                  >
                    <option value="" disabled>
                      -- What are you searching for --
                    </option>
                    <option value="residential-plot">Residential Plot</option>
                    <option value="sco-plot">SCO Plot</option>
                    <option value="industrial-plot">Industrial Plot</option>
                    <option value="dholera-estates">Dholera Estates</option>
                  </select>

                  <select
                    defaultValue=""
                    className="w-full rounded-md border border-gray-200 bg-white p-4 text-sm text-gray-400 outline-none ring-2 ring-transparent transition focus:border-[#FF7A00] focus:ring-[#FF7A00]/20"
                  >
                    <option value="" disabled>
                      -- Select Budget --
                    </option>
                    <option value="below-20-lakhs">Below ₹20 Lakhs</option>
                    <option value="20-50-lakhs">₹20 - ₹50 Lakhs</option>
                    <option value="50-lakhs-1-crore">₹50 Lakhs - ₹1 Crore</option>
                    <option value="above-1-crore">Above ₹1 Crore</option>
                  </select>
                </div>

                <textarea
                  rows={6}
                  placeholder="Comments"
                  className="w-full rounded-md border border-gray-200 bg-white p-4 text-sm text-gray-700 placeholder:text-gray-400 outline-none ring-2 ring-transparent transition focus:border-[#FF7A00] focus:ring-[#FF7A00]/20"
                />

                <label className="flex items-start gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#FF7A00] focus:ring-[#FF7A00]"
                  />
                  I agree and give you permission to use my information
                  solely for marketing
                </label>

                <button
                  type="submit"
                  className="rounded-lg bg-[#FF7A00] px-10 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e96f00] hover:shadow-lg active:translate-y-0"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Info card */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="space-y-8">

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#FF7A00]">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-[#081A3A]">Office Address:</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      7th floor, plot no 56a/16, C Block, Phase 2, Industrial
                      Area, Sector 62, Noida, Uttar Pradesh 201309
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#FF7A00]">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-[#081A3A]">Phone Number :</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      +91 9217104219
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FF7A00] text-white">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-[#081A3A]">Email Address:</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      customercare@omanaprojects.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}