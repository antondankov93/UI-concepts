import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Circle, Square, Triangle } from "lucide-react";
import { HomeWidget } from "../../components/HomeWidget";
import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { useCompanyName } from "../../hooks/useCompanyName";

const V5Colors = {
  bg: "#EBE5CE", // Warm Beige Paper
  black: "#0F0F0F", // Deep Black
  blue: "#2563EB", // Blue 600
  white: "#FFFCF5", // Cream
};

export default function LandingPageV4() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const yMove = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const { companyName } = useCompanyName();

  return (
    <div
      className="min-h-screen w-full relative font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden flex flex-col"
      style={{ backgroundColor: V5Colors.bg, color: V5Colors.black }}
    >
      {/* Navigation - using mix-blend-difference for visibility across sections */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 !py-6 flex justify-between items-start z-50 pointer-events-none text-black">
        <div className="pointer-events-auto">
          <Link
            to="/"
            className="text-3xl font-black tracking-tighter uppercase leading-none block hover:scale-105 transition-transform"
          >
            {companyName}
          </Link>
        </div>

        <div className="pointer-events-auto flex gap-4">
          <Link
            to="/v4/app"
            className={`px-6 py-2 border-2 border-black rounded-full font-bold uppercase bg-[#EBE5CE] hover:bg-black hover:text-[#EBE5CE] transition-all flex items-center gap-2 group`}
          >
            <span>Launch APP</span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </nav>

      {/* SECTION 1: HERO - Sticky to create parallax effect */}
      <section className="sticky top-0 h-screen w-full flex items-center justify-center p-6 md:p-12 pt-32 overflow-hidden z-0">
        {/* Background Graphic Elements - Inspired by the 'Teorema' image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left Diagonal Bar */}
          <motion.div
            initial={{ height: "0%" }}
            animate={{ height: "120%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-[10%] left-[25%] w-[12%] bg-black/10 origin-top -rotate-6"
          />
          {/* Right Diagonal Bar */}
          <motion.div
            initial={{ height: "0%" }}
            animate={{ height: "120%" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-[10%] right-[30%] w-[15%] bg-black/10 origin-bottom -rotate-3 z-10"
          />

          {/* The Blue Circle - The focal point */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6, type: "spring", stiffness: 100 }}
            className="absolute top-[40%] left-[45%] w-24 h-24 md:w-48 md:h-48 rounded-full z-10"
            style={{ backgroundColor: V5Colors.blue, opacity: 0.8 }}
          />

          {/* Parallel vertical lines (Right side) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute top-0 right-0 h-full w-[20%] flex gap-2 md:gap-4 justify-end pr-12 opacity-50"
          >
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="h-full w-2 md:w-4 bg-black/80" />
            ))}
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="relative z-20 w-full max-w-7xl flex flex-col justify-between min-h-[60vh]">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter text-black"
            >
              PURE
              <br />
              FORM
              <br />
              LOGIC
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-[300px] text-left mr-[10%] md:mb-8 text-blue-500"
            >
              <p className="text-xl font-bold leading-tight mb-8">
                We strip away the noise to reveal the underlying geometry of your data. Minimalist
                AI for complex problems.
              </p>

              {/*<Link*/}
              {/*  to="/v4/app"*/}
              {/*  className="inline-block text-2xl font-black border-b-4 border-black pb-1 text-black hover:text-orange-600 hover:border-orange-600 transition-colors"*/}
              {/*>*/}
              {/*  DISCOVER*/}
              {/*</Link>*/}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: AXIOMS - Slides over the hero */}
      <section className="relative z-10 bg-[#0F0F0F] text-[#EBE5CE] py-32 rounded-t-[3rem] mt-[-5vh] shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#EBE5CE]/20 pb-12">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              LEGAL
              <br />
              RESEARCH
            </h2>
            <p className="text-xl md:text-2xl max-w-sm text-right font-medium opacity-80 mt-8 md:mt-0">
              Advancing Corporate and Legal AI through Research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                title: "Research",
                icon: Circle,
                text: "Advancing foundational research in AI for complex legal and corporate challenges.",
              },
              {
                title: "Collaboration",
                icon: Square,
                text: "Co-developing the next-generation of AI solutions by bringing together researchers and practitioners.",
              },
              {
                title: "Education",
                icon: Triangle,
                text: "Committed to equipping legal professionals with the practical knowledge to engage critically with AI.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group border-t border-[#EBE5CE]/20 pt-8 hover:border-blue-600 transition-colors"
              >
                <div className="mb-8 relative">
                  <item.icon className="w-16 h-16 stroke-1 text-blue-600" />
                </div>
                <h3 className="text-4xl font-black tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg opacity-60 leading-relaxed max-w-xs">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE MACHINE */}
      <section className="relative z-20 bg-[#EBE5CE] py-32 overflow-hidden text-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          {/* Background Big Text */}
          <div className="absolute top-0 right-0 -translate-y-1/2 opacity-5 pointer-events-none select-none">
            <span className="text-[20rem] font-black tracking-tighter">DATA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <motion.div
                style={{ rotate }}
                className="w-full aspect-square border border-black/10 relative flex items-center justify-center bg-white/80 shadow-xl"
              >
                <div className="absolute inset-8 border border-blue-600/20 rounded-full" />
                <div className="absolute inset-16 border border-black/10 rotate-45" />
                <div className="absolute inset-24 border border-black/10 rounded-full bg-black/5" />
                <div className="absolute inset-0 border-r border-black/5" />
                <div className="absolute inset-0 border-b border-black/5" />
              </motion.div>
              {/* Floating Label */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600/10 text-blue-600 px-6 py-3 font-black text-xl uppercase tracking-widest border border-blue-600/20">
                Fig 1.0
              </div>
            </div>

            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.9]">
                CONSTRUCTING
                <br />
                <span className="text-blue-600">INTELLIGENCE</span>
              </h2>
              <p className="text-2xl font-bold mb-8 leading-tight">
                Our proprietary engine dismantles unstructured inputs and rebuilds them into
                actionable insights.
              </p>
              <p className="text-lg mb-12 opacity-80 leading-relaxed max-w-md">
                Like a theorem proving itself, {companyName} doesn't just process data—it solves it.
                No hallucinations. Just pure, verified logic flows.
              </p>
              <Link
                to="/v4/app"
                className="inline-flex items-center gap-4 text-xl font-black border border-black/10 px-8 py-4 hover:bg-black hover:text-[#EBE5CE] transition-all"
              >
                <span>ENTER THE SYSTEM</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: RESEARCH & COLLABORATION */}
      <section
        ref={targetRef}
        className="relative z-20 h-[60vh] w-full py-24 bg-[#0F0F0F] text-[#EBE5CE] overflow-hidden border-t border-[#EBE5CE]/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none uppercase mb-8">
                Advancing Corporate and
                <br />
                <span className="text-blue-600">Legal AI through Research</span>
              </h2>
              <Link
                to="/v4/app"
                className="group flex items-center gap-4 text-xl font-black hover:text-blue-600 transition-colors mt-12"
              >
                <span>READY TO BEGIN</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2 flex items-center gap-3">
                  <div className="w-6 h-[1px] bg-blue-600" />
                  Research
                </h3>
                <p className="text-lg opacity-60 leading-relaxed max-w-sm">
                  Advancing foundational research in AI for complex legal and corporate challenges.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2 flex items-center gap-3">
                  <div className="w-6 h-[1px] bg-blue-600" />
                  Collaboration
                </h3>
                <p className="text-lg opacity-60 leading-relaxed max-w-sm">
                  Co-developing the next-generation of AI solutions by bringing together researchers
                  and practitioners.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle background decoration */}
        <motion.div
          style={{ y: yMove }}
          className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -z-0 pointer-events-none"
        />
      </section>

      {/* Footer */}
      <footer className="relative z-30 w-full bg-black text-[#EBE5CE] h-60 pt-12 px-6 overflow-hidden flex items-end">
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-12">
          <h2 className="text-6xl font-black tracking-tighter">{companyName}</h2>
          {/*<div className="flex gap-4">*/}
          {/*  <div className="w-6 h-6 bg-blue-600 rounded-full" />*/}
          {/*  <div className="w-6 h-6 bg-[#EBE5CE] rounded-full" />*/}
          {/*  <div className="w-6 h-6 border-2 border-[#EBE5CE] rounded-full" />*/}
          {/*</div>*/}
          <div className="flex flex-col md:flex-row gap-12 text-lg mb-6 font-bold uppercase tracking-widest text-[#EBE5CE]/60">
            <a href="#" className="hover:text-blue-500 transition-colors">
              Manifesto
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Login
            </a>
          </div>
        </div>
      </footer>
      <HomeWidget />
    </div>
  );
}
