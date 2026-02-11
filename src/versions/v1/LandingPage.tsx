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
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle geometric background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Subtle blue accent */}
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-primary-blue opacity-[0.03] rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-5/12 sticky top-32">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-6 text-ink">
                Advancing
                <span className="block font-semibold text-primary-blue">Legal AI</span>
                through Research
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md border-l-2 border-primary-blue pl-4">
                Bridging the gap between theoretical AI capabilities and practical legal
                application.
              </p>
            </div>

            <div className="md:w-7/12 grid gap-4">
              {/* Item 1: Research */}
              <div className="group cursor-default bg-gray-50 border border-gray-200 p-6 transition-all duration-300 hover:border-primary-blue hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="w-12 h-12 shrink-0 bg-primary-blue/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary-blue group-hover:scale-110">
                    <Box className="w-6 h-6 text-primary-blue group-hover:text-white transition-colors" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-ink mb-2 tracking-tight">Research</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Advancing foundational research in AI for complex legal and corporate
                      challenges.
                    </p>
                  </div>

                  {/* Number */}
                  <div className="text-4xl font-bold text-gray-200 group-hover:text-primary-blue/20 leading-none transition-colors">
                    01
                  </div>
                </div>
              </div>

              {/* Item 2: Collaboration */}
              <div className="group cursor-default bg-gray-50 border border-gray-200 p-6 transition-all duration-300 hover:border-primary-blue hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 bg-primary-blue/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary-blue group-hover:scale-110">
                    <Circle className="w-6 h-6 text-primary-blue group-hover:text-white transition-colors" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-ink mb-2 tracking-tight">
                      Collaboration
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Co-developing the next generation of AI solutions by bringing together
                      researchers and practitioners.
                    </p>
                  </div>

                  <div className="text-4xl font-bold text-gray-200 group-hover:text-primary-blue/20 leading-none transition-colors">
                    02
                  </div>
                </div>
              </div>

              {/* Item 3: Education */}
              <div className="group cursor-default bg-gray-50 border border-gray-200 p-6 transition-all duration-300 hover:border-primary-blue hover:shadow-lg hover:-translate-y-0.5">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 bg-primary-blue/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary-blue group-hover:scale-110">
                    <Triangle className="w-6 h-6 text-primary-blue group-hover:text-white transition-colors" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-ink mb-2 tracking-tight">Education</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Equipping legal professionals with practical knowledge to engage critically
                      with AI systems.
                    </p>
                  </div>

                  <div className="text-4xl font-bold text-gray-200 group-hover:text-primary-blue/20 leading-none transition-colors">
                    03
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
