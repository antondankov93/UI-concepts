import { Link } from "@tanstack/react-router";
import { ArrowRight, Box, Circle, Triangle } from "lucide-react";
import { HomeWidget } from "../../components/HomeWidget";
import { useCompanyName } from "../../hooks/useCompanyName";

export default function LandingPageV1() {
  const { companyName } = useCompanyName();
  return (
    <div className="min-h-screen bg-paper text-ink overflow-hidden font-sans selection:bg-ink selection:text-paper">
      {/* Navigation - Minimalist */}
      <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-end mix-blend-difference text-white/90">
        <Link to="/" className="text-4xl font-bold tracking-tighter">
          {companyName}
        </Link>
        <div className="flex gap-8 text-sm font-bold tracking-widest uppercase items-center">
          <Link
            to="/v1/app"
            className="bg-white text-ink px-6 py-2 hover:bg-ink hover:text-white transition-colors"
          >
            Launch APP
          </Link>
        </div>
      </nav>

      {/* Hero Section - Stairs & Circles */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/images/stairs-art.jpeg"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 mix-blend-multiply"
            alt="Background"
          />
        </div>

        <div className="relative z-30 container mx-auto">
          <h1 className="text-6xl md:text-[10rem] font-medium leading-[0.8] tracking-tighter text-black/90 drop-shadow-md">
            ASCEND
            <br />
            TO
            <br />
            <span className="text-white">CLARITY</span>
          </h1>

          <div className="mt-12 ml-2 md:ml-32 max-w-lg">
            <p className="text-xl font-medium bg-paper p-4 border-2 border-ink inline-block shadow-[8px_8px_0px_0px_var(--color-primary-blue)] text-ink">
              Navigate the complexity of legal data with structural precision. Precision-engineered
              for complex discovery.
            </p>
            <div className="mt-8">
              <Link
                to="/v1/app"
                className="bg-primary-blue text-white px-8 py-4 text-xl font-bold hover:bg-ink transition-colors inline-flex items-center gap-2 shadow-[8px_8px_0px_0px_var(--color-ink)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none border-2 border-ink"
              >
                START CLIMBING <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Strategic Discovery Section - Professional */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-b from-blue-50 to-transparent opacity-60 blur-3xl" />
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-t from-gray-200 to-transparent opacity-30 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <div className="md:w-5/12 sticky top-32">
              <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-8 text-ink">
                Advancing
                <span className="block font-semibold text-primary-blue">Legal AI</span>
                through Research
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-md border-l-4 border-primary-blue pl-6">
                We are bridging the gap between theoretical AI capabilities and practical legal
                application.
              </p>
            </div>

            <div className="md:w-7/12 grid gap-6">
              {/* Item 1: Research */}
              <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group translate-x-0 hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                    <Box className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-ink mb-3 group-hover:text-primary-blue transition-colors">
                      Research
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Advancing foundational research in AI for complex legal and corporate
                      challenges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2: Collaboration */}
              <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group translate-x-0 hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                    <Circle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-ink mb-3 group-hover:text-primary-blue transition-colors">
                      Collaboration
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Co-developing the next-generation of AI solutions by bringing together
                      researchers and practitioners.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3: Education */}
              <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group translate-x-0 hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                    <Triangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-ink mb-3 group-hover:text-primary-blue transition-colors">
                      Education
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Committed to equipping legal professionals with the practical knowledge to
                      engage critically with AI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 text-ink pt-20 border-t border-gray-200">
        <div className=" mx-auto px-6 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h3 className="text-9xl font-medium leading-none tracking-wider text-ink">
              {companyName}
            </h3>
          </div>
          <div className="flex mb-4 gap-4 opacity-50">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </footer>
      <HomeWidget />
    </div>
  );
}
