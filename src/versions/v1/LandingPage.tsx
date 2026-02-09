import { Link } from "@tanstack/react-router";
import { ArrowRight, Box, Circle, Triangle } from "lucide-react";
import { HomeWidget } from "../../components/HomeWidget";

export default function LandingPageV1() {
  return (
    <div className="min-h-screen bg-paper text-ink overflow-hidden font-sans selection:bg-ink selection:text-paper">
      {/* Navigation - Minimalist */}
      <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-end mix-blend-difference text-white/90">
        <Link to="/" className="text-4xl font-bold tracking-tighter">
          LAER
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
          <h1 className="text-8xl md:text-[10rem] font-bold leading-[0.8] tracking-tighter text-black/90 drop-shadow-md">
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

      {/* Strategic Discovery Section - Lightweight */}
      <section className="min-h-screen bg-paper py-32 relative overflow-hidden flex items-center">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent opacity-50 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">
              Advancing
              <br />
              Corporate and Legal AI
              <br />
              <span className="font-semibold text-primary-blue">through Research</span>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {/* Item 1: Research */}
            <div className="bg-white p-8 border-l-2 border-gray-200 hover:border-primary-blue transition-colors group">
              <div className="flex items-start gap-6">
                <Box className="w-8 h-8 text-gray-400 group-hover:text-primary-blue transition-colors mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-3 group-hover:text-primary-blue transition-colors">
                    Research
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Advancing foundational research in AI for complex legal and corporate
                    challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2: Collaboration */}
            <div className="bg-white p-8 border-l-2 border-gray-200 hover:border-primary-blue transition-colors group">
              <div className="flex items-start gap-6">
                <Circle className="w-8 h-8 text-gray-400 group-hover:text-primary-blue transition-colors mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-3 group-hover:text-primary-blue transition-colors">
                    Collaboration
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Co-developing the next-generation of AI solutions by bringing together
                    researchers and practitioners.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3: Education */}
            <div className="bg-white p-8 border-l-2 border-gray-200 hover:border-primary-blue transition-colors group">
              <div className="flex items-start gap-6">
                <Triangle className="w-8 h-8 text-gray-400 group-hover:text-primary-blue transition-colors mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-3 group-hover:text-primary-blue transition-colors">
                    Education
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Committed to equipping legal professionals with the practical knowledge to
                    engage critically with AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 text-ink py-20 border-t border-gray-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h3 className="text-9xl font-medium leading-none tracking-wider text-ink">LAER</h3>
          </div>
          <div className="flex gap-4 opacity-50">
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
