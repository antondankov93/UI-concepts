import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { HomeWidget } from "../../components/HomeWidget";
import { useEffect, useRef } from "react";
import { useCompanyName } from "../../hooks/useCompanyName";

const V7Colors = {
  bg: "#FFFFFF", // Pure White for "Airy" feel
  ink: "#1A1A1A", // Sharp Black
  accent: "#4F46E5", // Elegant Indigo
};

export default function LandingPageV6() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { companyName } = useCompanyName();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Line configuration
    const lines = 60; // Number of lines

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 1.5;

      time += 0.002;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();

        // Highlight 3-4 lines in accent color
        const isAccent = i === 15 || i === 30 || i === 45;
        ctx.strokeStyle = isAccent ? V7Colors.accent : V7Colors.ink;

        // Distribute lines vertically
        const baseY = (canvas.height / lines) * i;

        // Start point
        ctx.moveTo(0, baseY);

        // Draw bezier curve across width
        for (let x = 0; x <= canvas.width; x += 50) {
          // Noise/Wave function:
          // High frequency low amplitude for "texture"
          // Low frequency high amplitude for "flow"

          const noise1 = Math.sin(x * 0.003 + i * 0.1 + time) * 50;
          const noise2 = Math.cos(x * 0.01 - i * 0.05 + time * 2) * 20;
          const spread = Math.sin(x * 0.001) * (i * 2); // Lines spread out

          const y = baseY + noise1 + noise2 + spread;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="min-h-screen w-full relative font-sans overflow-hidden flex flex-col"
      style={{ backgroundColor: V7Colors.bg, color: V7Colors.ink }}
    >
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-start z-50 pointer-events-none mix-blend-multiply">
        <div className="pointer-events-auto">
          <Link
            to="/"
            className="text-2xl font-light tracking-[0.2em] uppercase leading-none block"
          >
            {companyName}
          </Link>
        </div>

        <div className="pointer-events-auto flex gap-4">
          <Link
            to="/v6/app"
            className="px-8 py-3 rounded-full font-medium text-sm tracking-widest uppercase border border-black hover:bg-black hover:text-white transition-all flex items-center gap-2 group bg-white"
          >
            <span>Launch APP</span>
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center p-6 z-10">
        <div className="max-w-4xl w-full text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-extralight tracking-tighter text-black mix-blend-overlay"
          >
            Knowledge
            <br />
            Flows
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div
              className="h-0.5 w-24 bg-black/30"
              style={{ backgroundColor: V7Colors.accent }}
            ></div>
            <p className="text-lg md:text-xl font-light max-w-lg text-black/70 italic">
              "From chaos comes clarity. The organic structure of wisdom."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="relative z-20 py-24 px-6 md:px-12 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pointer-events-none">
        {[
          { title: "Adaptable", desc: "Molds to your mental models." },
          { title: "Fluid", desc: "Seamless integration of data streams." },
          { title: "Essential", desc: "Distilling complexity into truth." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm border border-black/5 p-8 rounded-2xl shadow-sm pointer-events-auto hover:shadow-md transition-shadow"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest mb-2 opacity-40">
              {0}
              {i + 1}
            </h3>
            <h2 className="text-3xl font-light mb-4">{item.title}</h2>
            <p className="font-light text-black/60">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Research & Impact Section */}
      <section className="relative z-20 pb-24 px-6 md:px-12 w-full max-w-7xl mx-auto space-y-16 pointer-events-none">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center pointer-events-auto"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight max-w-3xl mx-auto">
            Advancing Corporate and Legal AI through Research
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              title: "Research",
              desc: "Advancing foundational research in AI for complex legal and corporate challenges.",
              img: "/v6/image1.png",
            },
            {
              title: "Collaboration",
              desc: "Co-developing the next-generation of AI solutions by bringing together researchers and practitioners.",
              img: "/v6/image2.png",
            },
            {
              title: "Education",
              desc: "Committed to equipping legal professionals with the practical knowledge to engage critically with AI.",
              img: "/v6/image3.png",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.8 }}
              className="flex flex-col gap-6 pointer-events-auto group"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-normal border-b border-black/10 pb-4 inline-block">
                  {item.title}
                </h3>
                <p className="font-light text-black/70 leading-relaxed text-lg">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <HomeWidget />
    </div>
  );
}
