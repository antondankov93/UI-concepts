import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HomeWidget } from "../../components/HomeWidget";
import { useCompanyName } from "../../hooks/useCompanyName";

/**
 * V12 - "The Threshold"
 *
 * Design Philosophy:
 * Inspired by the editorial illustration tradition of Eiko Ojala and Andrea
 * De Santis -- minimalist collage art where tiny human silhouettes confront
 * monumental geometric color planes. Walls of vermillion red, voids of black,
 * horizons of Klein blue create an architectural language of thresholds,
 * passages, and discovery.
 *
 * This is Constructivist Minimalism: the bold graphic certainty of El Lissitzky
 * and Rodchenko married to contemporary editorial restraint. Massive scale
 * contrasts -- enormous color blocks against solitary figures -- mirror the
 * platform's purpose: navigating vast legal complexity to find the crucial
 * opening, the path forward.
 *
 * Palette:
 *   - Warm cream (#F0EDE6) -- the infinite ground plane
 *   - Vermillion (#E63226) -- the monumental structure, urgency, the wall
 *   - Klein Blue (#3D52D5) -- the horizon, possibility, the opening
 *   - Graphite (#141414) -- the figure, the shadow, typography
 *   - Warm gray (#9A9590) -- secondary text, borders
 *
 * Typography: Jost at light/extralight weights for massive display headings.
 * Generous letter-spacing. Body text at normal weight for readability.
 *
 * Layout: Asymmetric compositions. Enormous negative space. Images treated
 * as architectural elements -- not decorations. Each section tells a story
 * of scale: the individual vs. the structure, the doorway vs. the wall.
 */

const V12 = {
  cream: "#F0EDE6",
  creamDark: "#E5E1D9",
  creamLight: "#F7F5F0",
  vermillion: "#E63226",
  vermillionDark: "#C42A20",
  blue: "#3D52D5",
  blueSoft: "#3D52D518",
  graphite: "#141414",
  graphiteMid: "#3A3A3A",
  graphiteLight: "#6B6B6B",
  warmGray: "#9A9590",
  warmGrayLight: "#C5C0BA",
  border: "#D8D4CD",
  borderLight: "#E5E1D9",
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

export default function LandingPageV12() {
  const { companyName } = useCompanyName();

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden font-sans"
      style={{ backgroundColor: V12.cream, color: V12.graphite }}
    >
      {/* ========== NAVIGATION ========== */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-6 md:px-14">
        <Link to="/" className="group relative">
          <span
            className="font-medium text-sm uppercase tracking-[0.3em]"
            style={{ color: V12.graphite }}
          >
            {companyName}
          </span>
          <span
            className="absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
            style={{ backgroundColor: V12.vermillion }}
          />
        </Link>

        <div className="flex items-center gap-8">
          {["Research", "Platform", "About"].map((item) => (
            <span
              key={item}
              className="hidden cursor-pointer text-xs uppercase tracking-[0.18em] transition-colors duration-300 hover:opacity-50 md:inline"
              style={{ color: V12.graphiteLight }}
            >
              {item}
            </span>
          ))}
          <Link
            to="/v12/app"
            className="group flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-500"
            style={{
              backgroundColor: V12.graphite,
              color: V12.cream,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = V12.vermillion;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = V12.graphite;
            }}
          >
            <span>Open Platform</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      {/* image1: Solitary figure facing a vast red wall with a dark doorway */}
      <section className="relative flex min-h-screen w-full items-end overflow-hidden pb-20 md:items-center md:pb-0">
        {/* Background image -- the monumental red wall */}
        <div className="absolute inset-0 z-0 flex items-center justify-end">
          <img
            src="/v12/image1.jpeg"
            alt=""
            aria-hidden="true"
            className="h-[85%] w-auto object-contain"
          />
          {/* Cream gradient overlay from the left for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${V12.cream}F2 0%, ${V12.cream}CC 35%, ${V12.cream}66 55%, transparent 75%)`,
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-40"
            style={{
              background: `linear-gradient(to top, ${V12.cream} 0%, transparent 100%)`,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-14">
          <div className="max-w-2xl">
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-8 h-[3px] w-16"
              style={{ backgroundColor: V12.vermillion }}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 text-[11px] uppercase tracking-[0.5em]"
              style={{ color: V12.warmGray }}
            >
              {companyName} Research Institute
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 1 }}
              className="mb-8 font-light text-5xl leading-[1.1] tracking-tight md:text-7xl lg:text-[5.5rem]"
            >
              Beyond the
              <br />
              <span style={{ color: V12.vermillion }}>threshold</span>
              <br />
              of complexity
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mb-12 max-w-md text-base leading-relaxed md:text-lg"
              style={{ color: V12.graphiteLight }}
            >
              Where others see an impenetrable wall, we find the doorway. Advancing corporate and
              legal AI through rigorous research, open collaboration, and purposeful education.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/v12/app"
                className="group inline-flex items-center gap-3 px-8 py-3.5 text-xs uppercase tracking-[0.18em] transition-all duration-500"
                style={{
                  backgroundColor: V12.vermillion,
                  color: "#fff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = V12.vermillionDark;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = V12.vermillion;
                }}
              >
                <span>Enter the Platform</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <button
                className="border px-8 py-3.5 text-xs uppercase tracking-[0.18em] transition-all duration-500"
                style={{
                  borderColor: V12.graphite,
                  color: V12.graphite,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = V12.graphite;
                  e.currentTarget.style.color = V12.cream;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = V12.graphite;
                }}
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.4em]" style={{ color: V12.warmGray }}>
              Scroll
            </span>
            <div
              className="h-10 w-px animate-[threshold-pulse_2.5s_ease-in-out_infinite]"
              style={{ backgroundColor: V12.warmGray }}
            />
          </div>
          <style>
            {`@keyframes threshold-pulse {
              0%, 100% { transform: translateY(0); opacity: 1; }
              50% { transform: translateY(10px); opacity: 0.3; }
            }`}
          </style>
        </motion.div>
      </section>

      {/* ========== RESEARCH SECTION (image2) ========== */}
      {/* image2: Figure crushed under a tilted red bar -- the weight of the problem */}
      <section className="relative z-10 overflow-hidden py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-8 md:px-14">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
            {/* Left: Text */}
            <motion.div {...fadeUp} transition={{ duration: 0.9 }} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[3px] w-8" style={{ backgroundColor: V12.vermillion }} />
                <span
                  className="text-[11px] uppercase tracking-[0.4em]"
                  style={{ color: V12.warmGray }}
                >
                  01 / Research
                </span>
              </div>

              <h2 className="font-light text-4xl leading-[1.15] tracking-tight md:text-5xl">
                Bearing the weight
                <br />
                <span style={{ color: V12.vermillion }}>of complexity</span>
              </h2>

              <p
                className="max-w-md text-base leading-relaxed"
                style={{ color: V12.graphiteLight }}
              >
                Legal and corporate challenges impose crushing structural demands. Our foundational
                research confronts this weight directly -- developing AI systems that can parse,
                interpret, and navigate through the most overwhelming volumes of regulatory and
                legal data.
              </p>

              <div className="h-px w-20" style={{ backgroundColor: V12.border }} />

              <div className="flex gap-12">
                {[
                  { value: "200+", label: "Research Papers" },
                  { value: "40+", label: "Legal Domains" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="font-light text-3xl tracking-tight"
                      style={{ color: V12.graphite }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-[10px] uppercase tracking-[0.15em]"
                      style={{ color: V12.warmGray }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2, duration: 1.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative overflow-hidden" style={{ maxHeight: "560px" }}>
                <img
                  src="/v12/image2.jpeg"
                  alt="Abstract illustration of a figure bearing a tilted red bar"
                  className="h-auto w-full max-w-sm object-contain"
                />
              </div>
              {/* Decorative red square accent */}
              <div
                className="absolute -bottom-4 -left-4 h-8 w-8"
                style={{ backgroundColor: V12.vermillion }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== COLLABORATION SECTION (image3) ========== */}
      {/* image3: Grid of red panels with figures in between -- the structure, the collective */}
      <section
        className="relative z-10 overflow-hidden py-28 md:py-40"
        style={{ backgroundColor: V12.creamLight }}
      >
        <div className="mx-auto max-w-7xl px-8 md:px-14">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
            {/* Left: Image (reversed order from previous section) */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2, duration: 1.2 }}
              className="relative order-2 flex items-center justify-center md:order-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/v12/image3.jpeg"
                  alt="Abstract illustration of figures navigating a red grid structure"
                  className="h-auto w-full max-w-lg object-contain"
                />
              </div>
              {/* Blue accent */}
              <div
                className="absolute -top-4 -right-4 h-6 w-6"
                style={{ backgroundColor: V12.blue }}
              />
            </motion.div>

            {/* Right: Text */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.9 }}
              className="order-1 space-y-8 md:order-2"
            >
              <div className="flex items-center gap-4">
                <div className="h-[3px] w-8" style={{ backgroundColor: V12.blue }} />
                <span
                  className="text-[11px] uppercase tracking-[0.4em]"
                  style={{ color: V12.warmGray }}
                >
                  02 / Collaboration
                </span>
              </div>

              <h2 className="font-light text-4xl leading-[1.15] tracking-tight md:text-5xl">
                Building the
                <br />
                <span style={{ color: V12.blue }}>structure together</span>
              </h2>

              <p
                className="max-w-md text-base leading-relaxed"
                style={{ color: V12.graphiteLight }}
              >
                No single mind can map the entire architecture. We co-develop next-generation AI
                solutions by bringing together researchers, engineers, and legal practitioners --
                each contributing their expertise to construct systems that serve the collective
                need.
              </p>

              <div className="h-px w-20" style={{ backgroundColor: V12.border }} />

              <div className="flex gap-12">
                {[
                  { value: "85", label: "Partner Firms" },
                  { value: "12", label: "Countries" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="font-light text-3xl tracking-tight"
                      style={{ color: V12.graphite }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-[10px] uppercase tracking-[0.15em]"
                      style={{ color: V12.warmGray }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== EDUCATION SECTION (image5) ========== */}
      {/* image5: Figure at the boundary of blue and cream -- the horizon of knowledge */}
      <section className="relative z-10 overflow-hidden py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-8 md:px-14">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
            {/* Left: Text */}
            <motion.div {...fadeUp} transition={{ duration: 0.9 }} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[3px] w-8" style={{ backgroundColor: V12.blue }} />
                <span
                  className="text-[11px] uppercase tracking-[0.4em]"
                  style={{ color: V12.warmGray }}
                >
                  03 / Education
                </span>
              </div>

              <h2 className="font-light text-4xl leading-[1.15] tracking-tight md:text-5xl">
                Expanding
                <br />
                <span style={{ color: V12.blue }}>the horizon</span>
              </h2>

              <p
                className="max-w-md text-base leading-relaxed"
                style={{ color: V12.graphiteLight }}
              >
                At the boundary between what is known and what is possible, we equip legal
                professionals with the practical knowledge to engage critically with AI. Not just
                tools -- understanding. Not just answers -- the capacity to question.
              </p>

              <div className="h-px w-20" style={{ backgroundColor: V12.border }} />

              <div className="flex gap-12">
                {[
                  { value: "5K+", label: "Professionals Trained" },
                  { value: "30+", label: "Programs" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="font-light text-3xl tracking-tight"
                      style={{ color: V12.graphite }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-[10px] uppercase tracking-[0.15em]"
                      style={{ color: V12.warmGray }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2, duration: 1.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/v12/image5.jpeg"
                  alt="Abstract illustration of a figure at the boundary of blue and cream"
                  className="h-auto w-full max-w-sm object-contain"
                />
              </div>
              {/* Decorative blue square */}
              <div
                className="absolute -right-3 -bottom-3 h-6 w-6"
                style={{ backgroundColor: V12.blue }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== APPROACH / PROCESS SECTION ========== */}
      <section
        className="relative z-10 overflow-hidden py-28 md:py-40"
        style={{ backgroundColor: V12.graphite, color: V12.cream }}
      >
        <div className="mx-auto max-w-7xl px-8 md:px-14">
          <motion.div {...fadeUp} transition={{ duration: 0.9 }} className="mb-20">
            <div className="flex items-center gap-4">
              <div className="h-[3px] w-8" style={{ backgroundColor: V12.vermillion }} />
              <span
                className="text-[11px] uppercase tracking-[0.4em]"
                style={{ color: V12.warmGray }}
              >
                Our Approach
              </span>
            </div>

            <h2 className="mt-6 max-w-xl font-light text-4xl leading-[1.15] tracking-tight md:text-5xl">
              The path through
              <br />
              complexity is never straight
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-px md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Confront",
                desc: "We face the full scale of the challenge. Millions of documents, decades of precedent, layers of regulatory structure -- nothing is abstracted away.",
              },
              {
                step: "02",
                title: "Navigate",
                desc: "Our AI charts a path through the labyrinth. Not a shortcut -- a systematic traversal that honors every relevant connection and context.",
              },
              {
                step: "03",
                title: "Emerge",
                desc: "On the other side of complexity lies clarity. Actionable insights surface, defensible conclusions form, and the way forward becomes visible.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.8 }}
                className="group border-t p-10 transition-colors duration-500"
                style={{
                  borderColor: `${V12.cream}15`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${V12.cream}08`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <span
                  className="mb-8 block text-[11px] tracking-[0.4em]"
                  style={{ color: V12.warmGray }}
                >
                  {item.step}
                </span>

                <h3 className="mb-5 font-light text-2xl tracking-tight">{item.title}</h3>

                <p className="text-sm leading-relaxed" style={{ color: V12.warmGray }}>
                  {item.desc}
                </p>

                {/* Hover reveal -- expanding vermillion line */}
                <div
                  className="mt-8 h-[2px] w-0 transition-all duration-700 group-hover:w-16"
                  style={{ backgroundColor: V12.vermillion }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION (image4) ========== */}
      {/* image4: Figure on a zigzag path toward light in the darkness */}
      <section className="relative z-10 overflow-hidden py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-8 md:px-14">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-20">
            {/* Left: image4 */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2, duration: 1.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/v12/image4.jpeg"
                  alt="Abstract illustration of a figure walking a zigzag path toward light"
                  className="h-auto w-full max-w-md object-contain"
                />
              </div>
            </motion.div>

            {/* Right: CTA text */}
            <motion.div {...fadeUp} transition={{ duration: 0.9 }} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[3px] w-8" style={{ backgroundColor: V12.vermillion }} />
                <span
                  className="text-[11px] uppercase tracking-[0.4em]"
                  style={{ color: V12.warmGray }}
                >
                  Get Started
                </span>
              </div>

              <h2 className="font-light text-4xl leading-[1.15] tracking-tight md:text-5xl">
                The path is
                <br />
                <span style={{ color: V12.vermillion }}>already illuminated</span>
              </h2>

              <p
                className="max-w-md text-base leading-relaxed"
                style={{ color: V12.graphiteLight }}
              >
                Every investigation has its turning points. Every complex case has a thread that,
                once pulled, unravels the whole. Join hundreds of firms already using {companyName}{" "}
                to find that thread -- and follow it to resolution.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/v12/app"
                  className="group inline-flex items-center gap-3 px-8 py-3.5 text-xs uppercase tracking-[0.18em] transition-all duration-500"
                  style={{
                    backgroundColor: V12.vermillion,
                    color: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = V12.vermillionDark;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = V12.vermillion;
                  }}
                >
                  <span>Launch Platform</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <button
                  className="border px-8 py-3.5 text-xs uppercase tracking-[0.18em] transition-all duration-500"
                  style={{
                    borderColor: V12.graphite,
                    color: V12.graphite,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = V12.graphite;
                    e.currentTarget.style.color = V12.cream;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = V12.graphite;
                  }}
                >
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER (image6 in left bottom corner) ========== */}
      {/* image6: Red geometric form with figure -- the signature mark */}
      <footer className="relative z-10 overflow-hidden px-8 py-16 md:px-14">
        {/* image6 absolutely positioned in the very bottom left corner */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-auto md:h-83">
          <img
            src="/v12/image6.jpeg"
            alt="Geometric red form"
            className="h-full w-auto object-contain object-left-bottom"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Top row: branding + nav */}
          <div
            className="flex flex-col items-start justify-between gap-10 border-b pb-12 ml-36 md:flex-row md:items-center"
            style={{ borderColor: V12.border }}
          >
            <div>
              <span
                className="font-medium text-sm uppercase tracking-[0.3em]"
                style={{ color: V12.graphite }}
              >
                {companyName}
              </span>
              <p className="mt-2 max-w-sm text-sm leading-relaxed" style={{ color: V12.warmGray }}>
                Advancing corporate and legal AI through research, collaboration, and education.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              {["Research", "Platform", "About", "Careers", "Contact"].map((item) => (
                <span
                  key={item}
                  className="cursor-pointer text-xs uppercase tracking-[0.15em] transition-opacity duration-300 hover:opacity-40"
                  style={{ color: V12.graphiteLight }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom row: copyright */}
          <div className="relative flex items-end justify-end pt-10">
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-6" style={{ backgroundColor: V12.vermillion }} />
                <span
                  className="text-[10px] uppercase tracking-[0.15em]"
                  style={{ color: V12.warmGray }}
                >
                  {companyName} {new Date().getFullYear()}
                </span>
              </div>
              <span className="text-[9px] tracking-[0.1em]" style={{ color: V12.warmGrayLight }}>
                All rights reserved
              </span>
            </div>
          </div>
        </div>
      </footer>

      <HomeWidget />
    </div>
  );
}
