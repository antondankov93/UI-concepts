import { motion } from "framer-motion";
import { ArrowRight, Circle, Square, Triangle } from "lucide-react";
import { HomeWidget } from "../../components/HomeWidget";
import { Link } from "@tanstack/react-router";
import { useCompanyName } from "../../hooks/useCompanyName";

const V3Colors = {
  bg: "#F3EEE8", // Beige paper
  lines: "#16161D", // Ink
  brown: "#54443F", // Classic brown
  border: "rgba(22, 22, 29, 0.15)", // Light border
  blue: "#1C5D99", // Classic blue
  red: "#fd4e4c", // Vibrant red
  orange: "#EB5E28", // Burnt orange
};

export default function LandingPageV2() {
  const { companyName } = useCompanyName();
  return (
    <div
      className="min-h-screen w-full relative overflow-x-hidden font-sans selection:bg-black selection:text-white"
      style={{ backgroundColor: V3Colors.bg, color: V3Colors.lines }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-multiply">
        <Link to="/" className="text-2xl font-bold tracking-tighter uppercase">
          {companyName}
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            to="/v2/app"
            className="px-6 py-2 border-2 border-[#16161D] rounded-full font-bold uppercase text-sm hover:bg-[#16161D] hover:text-[#F3EEE8] transition-colors"
          >
            Launch APP
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-20">
        {/* The Graphic Element - Vertical Lines */}
        <div className="relative w-full max-w-md h-[600px] flex justify-between items-stretch px-4 md:px-0">
          {/* Generate vertical lines */}
          {Array.from({ length: 28 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: i * 0.02, ease: "circOut" }}
              className="w-2 h-full"
              style={{ backgroundColor: V3Colors.brown }}
            />
          ))}

          {/* Blue Circle (Top Left) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
            className="absolute top-20 left-10 w-32 h-32 rounded-full z-10 flex items-center justify-center"
            style={{ backgroundColor: V3Colors.blue, border: `12px solid ${V3Colors.bg}` }}
          />

          {/* Red Circle (Bottom Right) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "backOut" }}
            className="absolute bottom-40 right-10 w-40 h-40 rounded-full z-10"
            style={{ backgroundColor: V3Colors.red, border: `12px solid ${V3Colors.bg}` }}
          />

          {/* Text "VERTICAL LOGIC" */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-[#F3EEE8] py-2 inline-block border-4"
              style={{ borderColor: V3Colors.bg }}
            >
              <h1
                className="text-5xl md:text-7xl font-bold tracking-widest uppercase text-center whitespace-nowrap"
                style={{ color: V3Colors.brown }}
              >
                LEGAL DISCOVERY
              </h1>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center z-10 mb-20">
          <p className="mb-6 text-lg font-medium tracking-wide uppercase opacity-80">
            Automated document analysis for complex litigation
          </p>
          <Link
            to="/v2/app"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border rounded-xl overflow-hidden transition-colors"
            style={{ borderColor: V3Colors.border, color: V3Colors.brown }}
          >
            <div className="absolute inset-0 bg-[#54443F] translate-y-full group-hover:translate-y-0  transition-transform duration-300" />
            <span className="relative z-10 font-bold tracking-wider group-hover:text-[#F3EEE8] transition-colors">
              GET STARTED
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:text-[#F3EEE8] transition-colors" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-32 border-t relative" style={{ borderColor: V3Colors.border }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F3EEE8] px-4">
          <div
            className="w-12 h-12 rounded-xl border"
            style={{ borderColor: V3Colors.border }}
          ></div>
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight max-w-4xl mx-auto">
              Advancing Corporate and Legal AI through Research
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Circle,
                title: "Research",
                color: V3Colors.blue,
                desc: "Advancing foundational research in AI for complex legal and corporate challenges.",
              },
              {
                icon: Square,
                title: "Collaboration",
                color: V3Colors.red,
                desc: "Co-developing the next-generation of AI solutions by bringing together researchers and practitioners.",
              },
              {
                icon: Triangle,
                title: "Education",
                color: V3Colors.orange,
                desc: "Committed to equipping legal professionals with the practical knowledge to engage critically with AI.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 transition-all duration-500 overflow-hidden bg-white/40 backdrop-blur-sm border-y border-amber-800/20 hover:bg-white/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 flex flex-col items-start"
              >
                {/* Corner Accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 rounded-bl-[80px]"
                  style={{ backgroundColor: feature.color }}
                />

                <div className="relative mb-6 p-3 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow duration-500">
                  <feature.icon
                    className="w-6 h-6"
                    style={{ color: feature.color }}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-lg font-bold uppercase tracking-widest mb-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  {feature.title}
                </h3>

                <p className="text-xs leading-relaxed font-medium opacity-60 group-hover:opacity-80 transition-opacity">
                  {feature.desc}
                </p>

                <div className="mt-auto pt-8 flex items-center gap-2 group/link cursor-pointer">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 group-hover/link:opacity-100 transition-opacity">
                    Learn More
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/Statement Section */}
      <section className="w-full py-32 bg-[#16161D] text-[#F3EEE8] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
            "Truth is not what you find, it's what you build with evidence."
          </h2>
          <p className="mt-8 text-xl tracking-widest opacity-60 uppercase">
            — Litigation Strategy (Adapted)
          </p>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-[#F3EEE8] opacity-10"></div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 rounded-full bg-[#F3EEE8] opacity-5"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: V3Colors.border }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold tracking-tighter uppercase mb-2">{companyName}</div>
          </div>

          <div className="flex gap-6 font-bold uppercase tracking-wider text-sm">
            <a href="#" className="hover:text-[#1C5D99] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#E82C2A] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[#EB5E28] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
      <HomeWidget />
    </div>
  );
}
