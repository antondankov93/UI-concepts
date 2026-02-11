import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HomeWidget } from "../../components/HomeWidget";
import { useCompanyName } from "../../hooks/useCompanyName";

/**
 * V8 - "The Moire"
 *
 * Design Philosophy:
 * Inspired by the "Animals in Moire" poster series by Andrea Minini and
 * optical illusion line art. Organic forms emerge from dense parallel lines
 * that bend and flow to create volumetric depth -- the visual equivalent
 * of uncovering hidden structure in complex data.
 *
 * The aesthetic is lightweight and mysterious: forms appear to materialize
 * from emptiness, lines converge to reveal shapes that weren't immediately
 * apparent. This mirrors the investigative process -- hidden connections
 * become visible through careful analysis.
 *
 * Color: Near-monochrome. Cool pale gray background with graphite lines.
 * A single muted indigo accent provides quiet emphasis without breaking
 * the meditative quality.
 *
 * Typography: Jost at very light weights for ethereal headings.
 * Generous letter-spacing creates breathing room.
 *
 * Borders: 1px maximum, often at very low opacity. Some elements
 * use no border at all, relying on subtle background shifts.
 */

const V8 = {
  bg: "#EDEDEB",
  bgLight: "#F4F3F1",
  bgWhite: "#FAFAF9",
  graphite: "#1C1C1C",
  graphiteMid: "#4A4A4A",
  graphiteLight: "#8A8A88",
  mist: "#C5C5C1",
  mistLight: "#DDDDD9",
  indigo: "#4A5568",
  indigoDeep: "#2D3748",
  accent: "#6B7B8F",
  borderSoft: "#E0DFDC",
  borderFaint: "#EAEAE7",
};

/**
 * Moire wave decoration -- flowing parallel lines that create depth.
 * Used as background ornament on sections.
 */
function MoireWaves({
  lineCount = 18,
  amplitude = 40,
  className = "",
  strokeColor = V8.graphite,
  opacity = 0.06,
}: {
  lineCount?: number;
  amplitude?: number;
  className?: string;
  strokeColor?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 1200 600"
      fill="none"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity }}
    >
      {Array.from({ length: lineCount }).map((_, i) => {
        const yBase = (600 / (lineCount + 1)) * (i + 1);
        const shift = i * 3;
        const amp = amplitude + (i % 5) * 6;
        return (
          <path
            key={i}
            d={`M 0 ${yBase} C 200 ${yBase - amp + shift}, 400 ${yBase + amp - shift}, 600 ${yBase + shift * 0.5} C 800 ${yBase - amp * 0.6 + shift}, 1000 ${yBase + amp * 0.8 - shift}, 1200 ${yBase}`}
            stroke={strokeColor}
            strokeWidth={0.6 + (i % 3) * 0.2}
          />
        );
      })}
    </svg>
  );
}

/**
 * Concentric moire ring -- layered ellipses that create optical depth.
 */
function MoireOrb({
  rings = 20,
  className = "",
  opacity = 0.05,
}: {
  rings?: number;
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity }}
    >
      {Array.from({ length: rings }).map((_, i) => {
        const r = 20 + i * 8;
        const wobbleX = Math.sin(i * 0.7) * 8;
        const wobbleY = Math.cos(i * 0.9) * 6;
        return (
          <ellipse
            key={i}
            cx={200 + wobbleX}
            cy={200 + wobbleY}
            rx={r}
            ry={r * (0.85 + Math.sin(i * 0.3) * 0.15)}
            stroke={V8.graphite}
            strokeWidth={0.5 + (i % 4) * 0.15}
          />
        );
      })}
    </svg>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

export default function LandingPageV8() {
  const { companyName } = useCompanyName();

  const pillars = [
    {
      title: "Research",
      desc: "Advancing foundational research in AI for complex legal and corporate challenges. Our team publishes peer-reviewed work that shapes the field.",
      img: "/v8/image1.jpeg",
      number: "01",
    },
    {
      title: "Collaboration",
      desc: "Co-developing the next generation of AI solutions by bringing together researchers, engineers, and legal practitioners in open partnership.",
      img: "/v8/image2.jpeg",
      number: "02",
    },
    {
      title: "Education",
      desc: "Committed to equipping legal professionals with the practical knowledge to engage critically and creatively with AI.",
      img: "/v8/image3.jpeg",
      number: "03",
    },
  ];

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden font-sans"
      style={{ backgroundColor: V8.bg, color: V8.graphite }}
    >
      {/* ========== NAVIGATION ========== */}
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-6 md:px-14">
        <Link to="/" className="group relative">
          <span
            className="font-light text-base uppercase tracking-[0.35em]"
            style={{ color: V8.graphite }}
          >
            {companyName}
          </span>
          <span
            className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
            style={{ backgroundColor: V8.accent }}
          />
        </Link>

        <div className="flex items-center gap-8">
          {["Research", "Platform", "About"].map((item) => (
            <span
              key={item}
              className="hidden cursor-pointer font-light text-xs uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-50 md:inline"
              style={{ color: V8.graphiteLight }}
            >
              {item}
            </span>
          ))}
          <Link
            to="/v8/app"
            className="group flex items-center gap-2 border px-6 py-2 font-light text-xs uppercase tracking-[0.2em] transition-all duration-500"
            style={{
              borderColor: V8.mist,
              color: V8.graphite,
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = V8.accent;
              e.currentTarget.style.color = V8.bgLight;
              e.currentTarget.style.borderColor = V8.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = V8.graphite;
              e.currentTarget.style.borderColor = V8.mist;
            }}
          >
            <span>Open Platform</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        {/* Background moire waves -- very subtle */}
        <MoireWaves
          className="inset-0 h-full w-full"
          lineCount={22}
          amplitude={50}
          opacity={0.04}
        />

        {/* Faint orb in the background */}
        <MoireOrb
          className="-right-32 -bottom-32 h-[500px] w-[500px] md:h-[700px] md:w-[700px]"
          rings={25}
          opacity={0.035}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="mx-auto mb-10 h-px w-20"
            style={{ backgroundColor: V8.mist }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 font-light text-[11px] uppercase tracking-[0.4em]"
            style={{ color: V8.graphiteLight }}
          >
            {companyName} Research Institute
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
            className="mb-10 font-extralight text-4xl leading-[1.15] tracking-tight md:text-6xl lg:text-[5.5rem]"
          >
            Advancing Corporate
            <br />
            <span style={{ color: V8.accent }}>& Legal AI</span>
            <br />
            through Research
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mx-auto max-w-xl font-extralight text-base leading-relaxed md:text-lg"
            style={{ color: V8.graphiteLight }}
          >
            Where rigorous scholarship meets intelligent technology. Hidden patterns in complex data
            become visible through careful, systematic analysis.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-20 flex flex-col items-center gap-3"
          >
            <span
              className="font-light text-[9px] uppercase tracking-[0.4em]"
              style={{ color: V8.mist }}
            >
              Discover
            </span>
            <div
              className="h-10 w-px animate-[scroll-bounce_2.5s_ease-in-out_infinite]"
              style={{ backgroundColor: V8.mist }}
            />
          </motion.div>
          <style>
            {`
              @keyframes scroll-bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(8px); }
              }
            `}
          </style>
        </div>
      </section>

      {/* ========== THREE PILLARS SECTION ========== */}
      <section className="relative z-10 py-24 md:py-36">
        {/* Section Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.9 }}
          className="mx-auto mb-24 max-w-3xl px-6 text-center"
        >
          <span
            className="mb-5 inline-block font-light text-xs uppercase tracking-[0.5em]"
            style={{ color: V8.accent }}
          >
            Our Mission
          </span>
          <h2 className="font-extralight text-4xl leading-snug tracking-tight md:text-5xl">
            Three pillars of progress
          </h2>
          <div className="mx-auto mt-8 h-px w-12" style={{ backgroundColor: V8.mist }} />
        </motion.div>

        {/* Pillar Sections -- each has its reference image as an atmospheric background */}
        <div className="mx-auto max-w-[1400px]">
          {pillars.map((pillar, i) => {
            const isReversed = i % 2 !== 0;
            // Each image is positioned on the opposite side from the text
            const imagePosition = isReversed ? "left" : "right";

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2 }}
                className="group relative overflow-hidden border-b"
                style={{ borderColor: V8.borderFaint }}
              >
                {/* Background reference image -- massively scaled, barely perceptible */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    maskImage:
                      imagePosition === "right"
                        ? "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 45%, transparent 75%)"
                        : "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 45%, transparent 75%)",
                    WebkitMaskImage:
                      imagePosition === "right"
                        ? "linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 45%, transparent 75%)"
                        : "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 45%, transparent 75%)",
                  }}
                >
                  {/* Oversized wrapper -- 200% of container, centered on the image side */}
                  <div
                    className="absolute"
                    style={{
                      width: "200%",
                      height: "200%",
                      top: "-50%",
                      left: imagePosition === "right" ? "-20%" : "-80%",
                    }}
                  >
                    <img
                      src={pillar.img}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-contain"
                      style={{
                        opacity: 1,
                        filter: "grayscale(100%) contrast(1.2)",
                      }}
                    />
                  </div>
                </div>

                {/* Content overlay */}
                <div
                  className={`relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center px-6 py-20 md:grid-cols-12 md:px-12 md:py-28`}
                >
                  {/* Text content -- positioned on the opposite side from the image */}
                  <div
                    className={`space-y-6 ${
                      isReversed ? "md:col-span-6 md:col-start-7 md:text-right" : "md:col-span-6"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 ${isReversed ? "md:flex-row-reverse" : ""}`}
                    >
                      <span
                        className="font-extralight text-xs tracking-[0.3em]"
                        style={{ color: V8.mist }}
                      >
                        {pillar.number}
                      </span>
                      <div className="h-px flex-1" style={{ backgroundColor: V8.borderSoft }} />
                    </div>

                    <h3 className="font-extralight text-3xl tracking-tight md:text-4xl">
                      {pillar.title}
                    </h3>

                    <p
                      className="max-w-lg font-extralight text-base leading-relaxed md:text-lg"
                      style={{ color: V8.graphiteMid }}
                    >
                      {pillar.desc}
                    </p>

                    <div
                      className={`flex items-center gap-3 pt-2 ${isReversed ? "md:flex-row-reverse" : ""}`}
                    >
                      <div
                        className="h-px w-0 transition-all duration-700 group-hover:w-10"
                        style={{ backgroundColor: V8.accent }}
                      />
                      <span
                        className="font-light text-xs uppercase tracking-[0.25em] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                        style={{ color: V8.accent }}
                      >
                        Learn more
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========== PHILOSOPHY SECTION ========== */}
      <section
        className="relative z-10 overflow-hidden py-24 md:py-36"
        style={{ backgroundColor: V8.bgLight }}
      >
        {/* Background flowing lines */}
        <MoireWaves
          className="inset-0 h-full w-full"
          lineCount={14}
          amplitude={30}
          strokeColor={V8.graphite}
          opacity={0.025}
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            {/* Left -- text */}
            <motion.div {...fadeUp} transition={{ duration: 0.9 }} className="space-y-8">
              <span
                className="font-light text-xs uppercase tracking-[0.5em]"
                style={{ color: V8.accent }}
              >
                Our Philosophy
              </span>

              <h2 className="font-extralight text-4xl leading-snug tracking-tight md:text-5xl">
                Technology that reveals
                <br />
                what others overlook
              </h2>

              <div
                className="space-y-5 font-extralight text-base leading-relaxed"
                style={{ color: V8.graphiteLight }}
              >
                <p>
                  Legal practice demands precision, nuance, and deep contextual understanding. Our
                  AI systems are built from the ground up to honor these requirements -- trained on
                  rigorous research, refined through practitioner collaboration, and validated
                  through continuous education.
                </p>
                <p>
                  Like the moire patterns that inspired our visual identity, the most profound
                  insights emerge when parallel lines of inquiry converge. What seems like noise
                  resolves into structure. Complexity becomes clarity.
                </p>
              </div>

              <div className="h-px w-20" style={{ backgroundColor: V8.borderSoft }} />

              <div className="flex flex-wrap gap-10">
                {[
                  { label: "Research Papers", value: "200+" },
                  { label: "Partner Firms", value: "85" },
                  { label: "Legal Domains", value: "40+" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-extralight text-4xl tracking-tight">{stat.value}</div>
                    <div
                      className="font-light text-xs uppercase tracking-[0.2em]"
                      style={{ color: V8.graphiteLight }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right -- abstract moire visual */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Large moire orb as visual centerpiece */}
              <svg
                viewBox="0 0 500 500"
                fill="none"
                className="h-80 w-80 md:h-[420px] md:w-[420px]"
                style={{ opacity: 0.12 }}
              >
                {Array.from({ length: 30 }).map((_, i) => {
                  const r = 15 + i * 7.5;
                  const wobbleX = Math.sin(i * 0.6) * 10;
                  const wobbleY = Math.cos(i * 0.8) * 8;
                  return (
                    <ellipse
                      key={i}
                      cx={250 + wobbleX}
                      cy={250 + wobbleY}
                      rx={r}
                      ry={r * (0.8 + Math.sin(i * 0.25) * 0.2)}
                      stroke={V8.graphite}
                      strokeWidth={0.6 + (i % 5) * 0.12}
                    />
                  );
                })}
              </svg>

              {/* Small accent dot */}
              <div
                className="absolute right-12 bottom-12 h-2 w-2 rounded-full"
                style={{ backgroundColor: V8.accent }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== APPROACH SECTION ========== */}
      <section className="relative z-10 py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.div {...fadeUp} transition={{ duration: 0.9 }} className="mb-20 text-center">
            <span
              className="mb-5 inline-block font-light text-xs uppercase tracking-[0.5em]"
              style={{ color: V8.accent }}
            >
              How We Work
            </span>
            <h2 className="font-extralight text-4xl tracking-tight md:text-5xl">
              From noise to signal
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-1 gap-px md:grid-cols-3"
            style={{ backgroundColor: V8.borderSoft }}
          >
            {[
              {
                step: "01",
                title: "Ingest",
                desc: "Feed millions of documents into our analysis engine. Raw information enters as undifferentiated noise.",
              },
              {
                step: "02",
                title: "Analyze",
                desc: "Parallel lines of AI inquiry converge on the data. Patterns emerge. Connections form between disparate sources.",
              },
              {
                step: "03",
                title: "Reveal",
                desc: "Hidden structures become visible. Actionable insights surface from the complexity, presented with precision and clarity.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.8 }}
                className="group relative p-10 transition-colors duration-500"
                style={{ backgroundColor: V8.bgWhite }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = V8.bgLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = V8.bgWhite;
                }}
              >
                <span
                  className="mb-6 block font-light text-xs tracking-[0.4em]"
                  style={{ color: V8.mist }}
                >
                  {item.step}
                </span>

                <h3 className="mb-4 font-extralight text-2xl tracking-tight">{item.title}</h3>

                <p
                  className="font-extralight text-base leading-relaxed"
                  style={{ color: V8.graphiteLight }}
                >
                  {item.desc}
                </p>

                {/* Hover reveal line */}
                <div
                  className="mt-8 h-px w-0 transition-all duration-700 group-hover:w-16"
                  style={{ backgroundColor: V8.accent }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section
        className="relative z-10 overflow-hidden py-28 md:py-40"
        style={{
          backgroundColor: V8.graphite,
          color: V8.bgLight,
        }}
      >
        {/* Inverted moire waves */}
        <MoireWaves
          className="inset-0 h-full w-full"
          lineCount={16}
          amplitude={35}
          strokeColor={V8.bgLight}
          opacity={0.04}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.9 }} className="space-y-8">
            <span
              className="font-light text-xs uppercase tracking-[0.5em]"
              style={{ color: V8.accent }}
            >
              Get Started
            </span>

            <h2 className="font-extralight text-4xl leading-snug tracking-tight md:text-5xl">
              Ready to uncover what
              <br />
              lies beneath the surface?
            </h2>

            <p
              className="mx-auto max-w-lg font-extralight text-base leading-relaxed"
              style={{ color: V8.graphiteLight }}
            >
              Join hundreds of firms already using {companyName} to accelerate their investigations,
              streamline due diligence, and reveal insights that matter.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <Link
                to="/v8/app"
                className="group inline-flex items-center gap-2 border px-8 py-3 font-light text-xs uppercase tracking-[0.2em] transition-all duration-500"
                style={{
                  borderColor: V8.bgLight,
                  color: V8.graphite,
                  backgroundColor: V8.bgLight,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = V8.accent;
                  e.currentTarget.style.borderColor = V8.accent;
                  e.currentTarget.style.color = V8.bgLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = V8.bgLight;
                  e.currentTarget.style.borderColor = V8.bgLight;
                  e.currentTarget.style.color = V8.graphite;
                }}
              >
                <span>Launch Platform</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <button
                className="border px-8 py-3 font-light text-xs uppercase tracking-[0.2em] transition-all duration-500"
                style={{
                  borderColor: V8.graphiteLight,
                  color: V8.graphiteLight,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = V8.bgLight;
                  e.currentTarget.style.color = V8.bgLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = V8.graphiteLight;
                  e.currentTarget.style.color = V8.graphiteLight;
                }}
              >
                Request Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="relative z-10 px-6 py-12 md:px-14" style={{ backgroundColor: V8.bgLight }}>
        <div
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row"
          style={{ borderColor: V8.borderSoft }}
        >
          <div className="flex items-center gap-4">
            <span
              className="font-light text-xs uppercase tracking-[0.35em]"
              style={{ color: V8.graphite }}
            >
              {companyName}
            </span>
            <span className="hidden h-3 w-px md:block" style={{ backgroundColor: V8.mist }} />
            <span className="font-extralight text-xs" style={{ color: V8.graphiteLight }}>
              Research Institute
            </span>
          </div>

          <div className="flex items-center gap-8">
            {["Research", "Platform", "About", "Careers", "Contact"].map((item) => (
              <span
                key={item}
                className="cursor-pointer font-light text-xs uppercase tracking-[0.15em] transition-opacity duration-300 hover:opacity-40"
                style={{ color: V8.graphiteLight }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>

      <HomeWidget />
    </div>
  );
}
