import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { HomeWidget } from "../../components/HomeWidget";
import { useCompanyName } from "../../hooks/useCompanyName";

/**
 * V7 - "The Pictograph"
 *
 * Design Philosophy:
 * Inspired by Isotype visual language (Otto Neurath / Gerd Arntz) and
 * Paul Klee's pedagogical sketches. Hand-drawn pictographic illustrations
 * are used sparingly as accent pieces -- one per section -- integrated
 * into the layout rather than showcased as a collection.
 *
 * Abstract geometric elements (scattered dots, fine lines, arcs) provide
 * visual texture without the literal figuration of human pictographs.
 *
 * Typography: Serif-dominant headings for scholarly gravitas,
 * clean sans-serif body for modern readability.
 *
 * Color: Monochrome ink on warm parchment with terracotta and sage accents.
 */

const V7 = {
  parchment: "#E8E4DB",
  parchmentLight: "#F0EDE6",
  ink: "#1A1A1A",
  terracotta: "#C05A3D",
  sage: "#4A6741",
  warmGray: "#9B948A",
  cardBg: "#F5F2EC",
};

// Abstract geometric background -- scattered dots and fine lines
function AbstractField() {
  // Deterministic pseudo-random using golden ratio
  const phi = 1.618033988749;
  const dots: Array<{ cx: number; cy: number; r: number }> = [];
  for (let i = 0; i < 40; i++) {
    const t = i * phi;
    dots.push({
      cx: (t * 137.5) % 100,
      cy: (t * 83.7 + 17) % 100,
      r: 1 + (i % 5) * 0.4,
    });
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {/* Scattered dots */}
        {dots.map((d, i) => (
          <circle key={`d-${i}`} cx={`${d.cx}%`} cy={`${d.cy}%`} r={d.r} fill={V7.ink} />
        ))}
        {/* A few fine diagonal lines */}
        <line x1="15%" y1="0" x2="45%" y2="100%" stroke={V7.ink} strokeWidth="0.5" />
        <line x1="70%" y1="0" x2="85%" y2="100%" stroke={V7.ink} strokeWidth="0.5" />
        <line
          x1="40%"
          y1="0"
          x2="20%"
          y2="100%"
          stroke={V7.ink}
          strokeWidth="0.3"
          strokeDasharray="6 12"
        />
        {/* Arcs */}
        <path d="M 0 60% Q 25% 45% 50% 60%" fill="none" stroke={V7.ink} strokeWidth="0.5" />
        <path d="M 50% 30% Q 75% 15% 100% 30%" fill="none" stroke={V7.ink} strokeWidth="0.5" />
      </svg>
    </div>
  );
}

// Smaller, section-level abstract decoration
function AbstractAccent({ variant = "dots" }: { variant?: "dots" | "lines" | "arcs" }) {
  if (variant === "lines") {
    return (
      <svg viewBox="0 0 200 200" fill="none" className="h-full w-full opacity-[0.07]">
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1={20 + i * 22}
            y1={10 + (i % 3) * 15}
            x2={30 + i * 18}
            y2={180 - (i % 4) * 20}
            stroke={V7.ink}
            strokeWidth={0.5 + (i % 3) * 0.3}
          />
        ))}
        <circle cx="45" cy="90" r="20" stroke={V7.ink} strokeWidth="0.8" />
        <circle cx="155" cy="60" r="12" stroke={V7.ink} strokeWidth="0.6" />
      </svg>
    );
  }

  if (variant === "arcs") {
    return (
      <svg viewBox="0 0 200 200" fill="none" className="h-full w-full opacity-[0.07]">
        <path d="M10 160 Q60 40 120 100" stroke={V7.ink} strokeWidth="0.8" />
        <path d="M40 180 Q100 60 180 120" stroke={V7.ink} strokeWidth="0.6" />
        <path d="M80 190 Q130 80 190 140" stroke={V7.ink} strokeWidth="0.5" />
        <circle cx="30" cy="50" r="3" fill={V7.ink} />
        <circle cx="170" cy="40" r="2" fill={V7.ink} />
        <circle cx="100" cy="30" r="1.5" fill={V7.ink} />
        <circle cx="150" cy="170" r="2.5" fill={V7.ink} />
      </svg>
    );
  }

  // dots (default)
  return (
    <svg viewBox="0 0 200 200" fill="none" className="h-full w-full opacity-[0.08]">
      {Array.from({ length: 20 }).map((_, i) => {
        const phi2 = 1.618033988749;
        const t = i * phi2;
        return (
          <circle
            key={i}
            cx={((t * 83.7) % 180) + 10}
            cy={((t * 137.5 + 30) % 180) + 10}
            r={1.2 + (i % 4) * 0.6}
            fill={V7.ink}
          />
        );
      })}
      <rect
        x="60"
        y="60"
        width="80"
        height="80"
        stroke={V7.ink}
        strokeWidth="0.5"
        strokeDasharray="4 6"
      />
    </svg>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// Hero layout variant type
type HeroVariant = "centered" | "asymmetric";

export default function LandingPageV7() {
  const { companyName } = useCompanyName();
  const [heroVariant, setHeroVariant] = useState<HeroVariant>("centered");

  const pillars = [
    {
      title: "Research",
      desc: "Advancing foundational research in AI for complex legal and corporate challenges. Our team publishes peer-reviewed work that shapes the field.",
      img: "/v7/image1.jpeg",
      accent: V7.terracotta,
    },
    {
      title: "Collaboration",
      desc: "Co-developing the next generation of AI solutions by bringing together researchers, engineers, and legal practitioners.",
      img: "/v7/image3.jpeg",
      accent: V7.sage,
    },
    {
      title: "Education",
      desc: "Committed to equipping legal professionals with the practical knowledge to engage critically and creatively with AI.",
      img: "/v7/image5.jpeg",
      accent: V7.terracotta,
    },
  ];

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden font-sans"
      style={{ backgroundColor: V7.parchment, color: V7.ink }}
    >
      <AbstractField />

      {/* ========== NAVIGATION ========== */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-6 md:px-12">
        <Link to="/" className="group relative">
          <span
            className="font-bold font-serif text-xl uppercase tracking-[0.25em]"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {companyName}
          </span>
          <span
            className="absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
            style={{ backgroundColor: V7.terracotta }}
          />
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/v7/app"
            className="group flex items-center gap-2 border px-6 py-2.5 font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:shadow-lg"
            style={{
              borderColor: V7.ink,
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = V7.ink;
              e.currentTarget.style.color = V7.parchment;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = V7.ink;
            }}
          >
            <span>Launch App</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Layout variant switcher */}
        <div className="absolute top-24 right-8 z-30 md:right-12">
          <div className="flex items-center gap-0 border" style={{ borderColor: `${V7.ink}25` }}>
            {(["centered", "asymmetric"] as const).map((v, i) => {
              const isActive = heroVariant === v;
              return (
                <button
                  key={v}
                  onClick={() => setHeroVariant(v)}
                  className="relative px-3 py-1.5 transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? V7.ink : "transparent",
                    color: isActive ? V7.parchment : V7.warmGray,
                  }}
                >
                  <span
                    className="font-bold text-[11px] tracking-[0.08em]"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {heroVariant === "centered" ? (
            /* ---- VERSION 1: Centered full-viewport ---- */
            <motion.div
              key="centered"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex min-h-screen w-full flex-col items-center justify-center px-6"
            >
              {/* Abstract geometric background */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  fill="none"
                  className="h-[80vh] max-h-[600px] w-[80vh] max-w-[600px] opacity-[0.04]"
                >
                  <path d="M60 340 Q200 40 340 340" stroke={V7.ink} strokeWidth="1" />
                  <path d="M100 320 Q200 100 300 320" stroke={V7.ink} strokeWidth="0.8" />
                  <path d="M140 300 Q200 140 260 300" stroke={V7.ink} strokeWidth="0.6" />
                  <line
                    x1="200"
                    y1="60"
                    x2="200"
                    y2="360"
                    stroke={V7.ink}
                    strokeWidth="0.5"
                    strokeDasharray="4 8"
                  />
                  <line x1="120" y1="160" x2="280" y2="160" stroke={V7.ink} strokeWidth="0.6" />
                  <line x1="140" y1="240" x2="260" y2="240" stroke={V7.ink} strokeWidth="0.5" />
                  <circle cx="200" cy="120" r="24" stroke={V7.ink} strokeWidth="0.8" />
                  <circle cx="200" cy="120" r="8" stroke={V7.ink} strokeWidth="0.6" />
                  <circle cx="120" cy="180" r="3" fill={V7.ink} />
                  <circle cx="280" cy="180" r="3" fill={V7.ink} />
                  <circle cx="160" cy="280" r="2.5" fill={V7.ink} />
                  <circle cx="240" cy="280" r="2.5" fill={V7.ink} />
                  <circle cx="200" cy="200" r="2" fill={V7.ink} />
                  <line x1="80" y1="100" x2="120" y2="140" stroke={V7.ink} strokeWidth="0.5" />
                  <line x1="280" y1="100" x2="320" y2="140" stroke={V7.ink} strokeWidth="0.5" />
                  <rect
                    x="170"
                    y="300"
                    width="60"
                    height="30"
                    stroke={V7.ink}
                    strokeWidth="0.5"
                    rx="2"
                  />
                </svg>
              </div>

              <div className="relative z-10 max-w-5xl text-center">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="mx-auto mb-8 h-[2px] w-24"
                  style={{ backgroundColor: V7.terracotta }}
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-6 font-semibold text-sm uppercase tracking-[0.3em]"
                  style={{ color: V7.warmGray }}
                >
                  {companyName} Research Institute
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mb-8 font-light text-5xl leading-[1.1] tracking-tight md:text-7xl lg:text-8xl"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Advancing Corporate
                  <br />
                  <span className="italic" style={{ color: V7.terracotta }}>
                    & Legal AI
                  </span>
                  <br />
                  through Research
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mx-auto max-w-2xl font-light text-lg leading-relaxed md:text-xl"
                  style={{ color: V7.warmGray }}
                >
                  Where rigorous scholarship meets intelligent technology. We believe the future of
                  legal practice is built on a foundation of deep research, open collaboration, and
                  continuous education.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="mt-16 flex flex-col items-center gap-2"
                >
                  <span
                    className="font-semibold text-[10px] uppercase tracking-[0.3em]"
                    style={{ color: V7.warmGray }}
                  >
                    Scroll
                  </span>
                  <div
                    className="h-8 w-[1.5px] animate-[scroll-bounce-v7_2s_ease-in-out_infinite]"
                    style={{ backgroundColor: V7.warmGray }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* ---- VERSION 2: Asymmetric 7/5 grid ---- */
            <motion.div
              key="asymmetric"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex min-h-screen w-full items-center px-6 md:px-12"
            >
              <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
                {/* Left -- headline content */}
                <div className="relative z-10 md:col-span-7">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="mb-8 h-[2px] w-24 origin-left"
                    style={{ backgroundColor: V7.terracotta }}
                  />

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-6 font-semibold text-sm uppercase tracking-[0.3em]"
                    style={{ color: V7.warmGray }}
                  >
                    {companyName} Research Institute
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-8 font-light text-5xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    Advancing Corporate
                    <br />
                    <span className="italic" style={{ color: V7.terracotta }}>
                      & Legal AI
                    </span>
                    <br />
                    through Research
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="max-w-lg font-light text-lg leading-relaxed"
                    style={{ color: V7.warmGray }}
                  >
                    Where rigorous scholarship meets intelligent technology. We believe the future
                    of legal practice is built on a foundation of deep research, open collaboration,
                    and continuous education.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-14 flex items-center gap-3"
                  >
                    <div
                      className="h-8 w-[1.5px] animate-[scroll-bounce-v7_2s_ease-in-out_infinite]"
                      style={{ backgroundColor: V7.warmGray }}
                    />
                    <span
                      className="font-semibold text-[10px] uppercase tracking-[0.3em]"
                      style={{ color: V7.warmGray }}
                    >
                      Scroll to explore
                    </span>
                  </motion.div>
                </div>

                {/* Right -- reference image in bordered frame */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                  className="relative flex items-center justify-center md:col-span-5"
                >
                  {/* Abstract geometric frame behind the image */}
                  <div className="pointer-events-none absolute -inset-6">
                    <AbstractAccent variant="arcs" />
                  </div>

                  <div
                    className="relative border p-8 md:p-12"
                    style={{ borderColor: V7.ink, backgroundColor: V7.parchmentLight }}
                  >
                    <img
                      src="/v7/image4.jpeg"
                      alt="Knowledge in motion"
                      className="h-56 w-56 object-contain md:h-64 md:w-64"
                      style={{ filter: "contrast(1.05)" }}
                    />
                    <div
                      className="absolute -right-2 -bottom-2 h-4 w-4 rounded-full"
                      style={{ backgroundColor: V7.terracotta }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ========== THREE PILLARS SECTION ========== */}
      <section className="relative z-10 py-24 md:py-32">
        {/* Section Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-3xl px-6 text-center md:px-12"
        >
          <span
            className="mb-4 inline-block font-bold text-xs uppercase tracking-[0.4em]"
            style={{ color: V7.terracotta }}
          >
            Our Mission
          </span>
          <h2
            className="font-light text-3xl leading-snug tracking-tight md:text-5xl"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Three pillars of progress
          </h2>
          <div className="mx-auto mt-6 h-[2px] w-16" style={{ backgroundColor: V7.ink }} />
        </motion.div>

        {/* Pillar Cards */}
        <div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-0 border-t md:grid-cols-3"
          style={{ borderColor: V7.ink }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
              className="group relative flex flex-col border-b md:border-r md:last:border-r-0"
              style={{ borderColor: V7.ink }}
            >
              {/* Illustration area -- one image per pillar */}
              <div
                className="relative flex items-center justify-center overflow-hidden px-8 py-12"
                style={{ backgroundColor: V7.parchmentLight }}
              >
                {/* Large number watermark */}
                <span
                  className="pointer-events-none absolute top-2 right-4 select-none font-bold font-serif text-[120px] leading-none opacity-[0.04]"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Reference image */}
                <div className="relative h-48 w-48 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={pillar.img}
                    alt={pillar.title}
                    className="h-full w-full object-contain"
                    style={{ filter: "contrast(1.05)" }}
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: pillar.accent }}
                  />
                  <h3
                    className="font-normal text-2xl tracking-tight"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    {pillar.title}
                  </h3>
                </div>
                <p
                  className="flex-1 font-light text-base leading-relaxed"
                  style={{ color: V7.warmGray }}
                >
                  {pillar.desc}
                </p>

                {/* Decorative bottom line */}
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="h-[2px] w-0 transition-all duration-500 group-hover:w-12"
                    style={{ backgroundColor: pillar.accent }}
                  />
                  <span className="translate-x-0 font-semibold text-xs uppercase tracking-[0.2em] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-60">
                    Explore
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== PHILOSOPHY SECTION ========== */}
      <section className="relative z-10 border-t py-24 md:py-32" style={{ borderColor: V7.ink }}>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            {/* Left -- single featured illustration in bordered frame */}
            <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="relative">
              {/* Abstract lines behind */}
              <div className="pointer-events-none absolute -inset-8 opacity-60">
                <AbstractAccent variant="lines" />
              </div>

              <div
                className="relative border p-10 md:p-14"
                style={{ borderColor: V7.ink, backgroundColor: V7.parchmentLight }}
              >
                <img
                  src="/v7/image7.jpeg"
                  alt="Integration of knowledge and systems"
                  className="mx-auto h-64 w-64 object-contain md:h-80 md:w-80"
                  style={{ filter: "contrast(1.05)" }}
                />

                {/* Small accent details on the frame */}
                <div
                  className="absolute -top-1.5 left-8 h-[3px] w-12"
                  style={{ backgroundColor: V7.terracotta }}
                />
                <div
                  className="absolute right-8 -bottom-1.5 h-[3px] w-12"
                  style={{ backgroundColor: V7.sage }}
                />
              </div>
            </motion.div>

            {/* Right -- text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-8"
            >
              <span
                className="font-bold text-xs uppercase tracking-[0.4em]"
                style={{ color: V7.terracotta }}
              >
                Our Philosophy
              </span>

              <h2
                className="font-light text-3xl leading-snug tracking-tight md:text-4xl"
                style={{ fontFamily: "Merriweather, serif" }}
              >
                Technology that speaks
                <br />
                the language of law
              </h2>

              <div
                className="space-y-4 font-light text-base leading-relaxed"
                style={{ color: V7.warmGray }}
              >
                <p>
                  Legal practice demands precision, nuance, and deep contextual understanding. Our
                  AI systems are built from the ground up to honor these requirements -- trained on
                  rigorous research, refined through practitioner collaboration, and validated
                  through continuous education.
                </p>
                <p>
                  Like the pictographic tradition that inspired our visual identity, we believe
                  complex ideas deserve clear, human-centered expression. Every tool we build makes
                  sophisticated legal analysis more accessible without sacrificing depth.
                </p>
              </div>

              <div className="h-[2px] w-24" style={{ backgroundColor: V7.ink }} />

              <div className="flex flex-wrap gap-8">
                {[
                  { label: "Research Papers", value: "200+" },
                  { label: "Partner Firms", value: "85" },
                  { label: "Legal Domains", value: "40+" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="font-light text-3xl tracking-tight"
                      style={{ fontFamily: "Merriweather, serif" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="font-semibold text-xs uppercase tracking-[0.15em]"
                      style={{ color: V7.warmGray }}
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

      {/* ========== CTA SECTION ========== */}
      <section
        className="relative z-10 overflow-hidden border-t py-24 md:py-32"
        style={{
          borderColor: V7.ink,
          backgroundColor: V7.ink,
          color: V7.parchment,
        }}
      >
        {/* Abstract geometric decoration for dark section */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]">
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            {/* Sparse dots */}
            {Array.from({ length: 15 }).map((_, i) => {
              const phi = 1.618033988749;
              const t = i * phi;
              return (
                <circle
                  key={i}
                  cx={`${((t * 97.3) % 90) + 5}%`}
                  cy={`${((t * 61.8 + 20) % 80) + 10}%`}
                  r={1.5 + (i % 3)}
                  fill={V7.parchment}
                />
              );
            })}
            {/* Thin crossing lines */}
            <line x1="10%" y1="0" x2="40%" y2="100%" stroke={V7.parchment} strokeWidth="0.4" />
            <line x1="80%" y1="0" x2="60%" y2="100%" stroke={V7.parchment} strokeWidth="0.3" />
            {/* Arc */}
            <path
              d="M 0 70% Q 50% 30% 100% 70%"
              fill="none"
              stroke={V7.parchment}
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* Small reference image, offset to the side */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute right-8 bottom-6 hidden lg:block"
        >
          <img
            src="/v7/image6.jpeg"
            alt=""
            className="h-36 w-36 object-contain"
            style={{ filter: "contrast(1.1) invert(1)" }}
          />
        </motion.div>

        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="space-y-8">
            <span
              className="font-bold text-xs uppercase tracking-[0.4em]"
              style={{ color: V7.terracotta }}
            >
              Get Started
            </span>

            <h2
              className="font-light text-3xl leading-snug tracking-tight md:text-5xl"
              style={{ fontFamily: "Merriweather, serif", color: V7.parchment }}
            >
              Ready to transform your
              <br />
              legal research workflow?
            </h2>

            <p
              className="mx-auto max-w-xl font-light text-base leading-relaxed"
              style={{ color: V7.warmGray }}
            >
              Join hundreds of firms already using {companyName} to accelerate their investigations,
              streamline due diligence, and uncover insights that matter.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/v7/app"
                className="group inline-flex items-center gap-2 border px-8 py-3 font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-300"
                style={{
                  borderColor: V7.parchment,
                  color: V7.ink,
                  backgroundColor: V7.parchment,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = V7.terracotta;
                  e.currentTarget.style.borderColor = V7.terracotta;
                  e.currentTarget.style.color = V7.parchment;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = V7.parchment;
                  e.currentTarget.style.borderColor = V7.parchment;
                  e.currentTarget.style.color = V7.ink;
                }}
              >
                <span>Launch Platform</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <button
                className="border px-8 py-3 font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-300"
                style={{
                  borderColor: V7.warmGray,
                  color: V7.warmGray,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = V7.parchment;
                  e.currentTarget.style.color = V7.parchment;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = V7.warmGray;
                  e.currentTarget.style.color = V7.warmGray;
                }}
              >
                Request Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer
        className="relative z-10 border-t px-6 py-12 md:px-12"
        style={{ borderColor: `${V7.ink}20`, backgroundColor: V7.parchmentLight }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <span
              className="font-bold font-serif text-sm uppercase tracking-[0.25em]"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              {companyName}
            </span>
            <span
              className="hidden h-4 w-[1px] md:block"
              style={{ backgroundColor: V7.warmGray }}
            />
            <span className="font-light text-xs" style={{ color: V7.warmGray }}>
              Research Institute
            </span>
          </div>

          <div className="flex items-center gap-8">
            {["Research", "Platform", "About", "Careers", "Contact"].map((item) => (
              <span
                key={item}
                className="cursor-pointer font-semibold text-xs uppercase tracking-[0.15em] transition-colors duration-200 hover:opacity-60"
                style={{ color: V7.warmGray }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>

      <HomeWidget />

      <style>
        {`
          @keyframes scroll-bounce-v7 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(8px); }
          }
        `}
      </style>
    </div>
  );
}
