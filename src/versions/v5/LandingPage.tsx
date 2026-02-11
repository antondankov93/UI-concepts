import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { HomeWidget } from "../../components/HomeWidget";
import { useEffect, useState } from "react";
import { useCompanyName } from "../../hooks/useCompanyName";

const V6Colors = {
  bg: "#F2EFE4", // Light Cream/Paper
  ink: "#141414", // Soft Black
  lightBlack: "#636363", // Soft Black
  accent: "#f89027", // Pastel Purple Accent
  accentDark: "#f7a655", // Deeper Purple
};

export default function LandingPageV5() {
  const [books, setBooks] = useState<
    { width: number; height: number; gap: number; color: string; rotation: number }[]
  >([]);
  const { companyName } = useCompanyName();

  useEffect(() => {
    // Generate random "books" for the background
    const generateBooks = () => {
      const newBooks = [];

      for (let i = 0; i < 400; i++) {
        let color = V6Colors.lightBlack;
        // if (rand > 0.95) color = accentOptions[0];
        // else if (rand > 0.92) color = accentOptions[1];
        // else if (rand > 0.85) color = '#2A2A2A'; // Subtle variation in black

        newBooks.push({
          width: Math.random() * 12 + 4, // 4px to 16px width (slightly wider)
          height: Math.random() * 25 + 75, // 75% to 100% height
          gap: Math.random() * 4 + 2, // 2px to 6px gap
          color: color,
          rotation: Math.random() * 1.5 - 0.75, // Slightly less jitter
        });
      }
      setBooks(newBooks);
    };
    generateBooks();
  }, []);

  return (
    <div
      className="min-h-screen w-full relative font-sans overflow-x-hidden flex flex-col"
      style={{ backgroundColor: V6Colors.bg, color: V6Colors.ink }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full px-12 py-6 flex justify-between items-center z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <Link
            to="/"
            className="text-3xl font-medium tracking-tighter uppercase leading-none block hover:tracking-[-0.05em] transition-all duration-500 bg-[#F2EFE4]"
          >
            {companyName}
          </Link>
        </div>

        <div className="pointer-events-auto flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-xs font-black uppercase tracking-widest bg-[#F2EFE4]/80 backdrop-blur-md px-8 py-3 rounded-full border border-black/5 shadow-sm">
            <Link to="/" className="hover:text-[#6B21A8] transition-colors">
              Manifesto
            </Link>
            <Link to="/" className="hover:text-[#6B21A8] transition-colors">
              Research
            </Link>
            <Link to="/" className="hover:text-[#6B21A8] transition-colors">
              Lab
            </Link>
          </div>

          <Link
            to="/v5/app"
            className="px-8 py-3 bg-[#141414] text-[#F2EFE4] rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#6B21A8] transition-all flex items-center gap-3 group shadow-xl"
          >
            <span>Launch APP</span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background "Bookshelves" */}
        <div className="absolute inset-0 flex flex-col justify-between py-32 opacity-100 z-10 select-none pointer-events-none">
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className="flex items-end justify-center overflow-hidden h-1/4 w-[120%] -ml-[10%] border-b border-black/10"
            >
              {books.slice(row * 80, (row + 1) * 80).map((book, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${book.height}%` }}
                  transition={{ duration: 1, delay: i * 0.01 + row * 0.2, ease: "easeOut" }}
                  className="rounded-sm shrink-0"
                  style={{
                    backgroundColor: book.color,
                    width: `${book.width}px`,
                    marginRight: `${book.gap}px`,
                    height: `${book.height}%`,
                    transform: `rotate(${book.rotation}deg)`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 flex-1 flex flex-col justify-center items-center text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="backdrop-blur-sm bg-[#F2EFE4] p-10 md:p-10 border border-black/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mb-6"
            >
              <span className="text-sm font-bold tracking-[0.3em] uppercase opacity-40">
                Intelligence Systems
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-7xl font-black tracking-tighter text-[#141414] leading-[0.85] uppercase"
            >
              KNOWLEDGE
              <br />
              <span className="relative inline-block mt-2">
                ARCHITECT
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                  className="absolute -bottom-3 left-0 h-2 bg-gradient-to-r from-purple-800 to-orange-400 -z-10"
                />
              </span>
            </motion.h1>

            {/*<motion.p*/}
            {/*    initial={{ opacity: 0, y: 20 }}*/}
            {/*    animate={{ opacity: 1, y: 0 }}*/}
            {/*    transition={{ delay: 1.4 }}*/}
            {/*    className="mt-8 text-xl md:text-2xl font-medium w-full mx-auto text-black/60 leading-relaxed"*/}
            {/*>*/}
            {/*    Building the structural foundations for <span className="text-[#141414] font-bold">next-generation</span> corporate intelligence.*/}
            {/*</motion.p>*/}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-12 flex flex-wrap justify-center gap-6"
            >
              <div className="h-px w-12 bg-black/20 self-center" />
              <span className="text-xs font-black uppercase tracking-widest opacity-30">
                Est. 2024
              </span>
              <div className="h-px w-12 bg-black/20 self-center" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INFO BLOCKS SECTION */}
      <section className="relative z-20 bg-[#F2EFE4] py-32 px-6 md:px-12 border-t border-black/5">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            {[
              {
                number: "01",
                title: "Research",
                text: "Advancing foundational research in AI for complex legal and corporate challenges.",
              },
              {
                number: "02",
                title: "Collaboration",
                text: "Co-developing the next-generation of AI solutions by bringing together researchers and practitioners.",
              },
              {
                number: "03",
                title: "Education",
                text: "Committed to equipping legal professionals with the practical knowledge to engage critically with AI.",
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-8 group relative"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-black tracking-widest opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    {block.number}
                  </span>
                  <h3 className="text-5xl font-black tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">
                    {block.title}
                  </h3>
                </div>

                <div className="h-px w-full bg-black/10 overflow-hidden relative">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    transition={{ duration: 1.5, delay: i * 0.2 + 0.5 }}
                    className="absolute inset-0 bg-[#6B21A8]"
                  />
                </div>

                <p className="text-xl leading-relaxed font-medium text-black/70">{block.text}</p>

                {/* Read More Arrow */}
                <div className="flex items-center gap-3 font-bold uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-[#6B21A8]">
                  <span className="border-b-2 border-[#6B21A8]/20">Explore Insight</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH IMAGE SECTION */}
      <section className="relative z-20 bg-[#F2EFE4] py-24 px-6 md:px-12 border-t border-black/10">
        <div className="max-w-7xl mx-auto w-3/4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="flex flex-col gap-6 order-2 md:order-1">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-[#6B21A8]" />
                <span className="text-xs font-black tracking-[0.4em] uppercase text-[#6B21A8]">
                  Methodology
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
                Structured
                <br />
                Intelligence
              </h2>

              <p className="text-xl leading-relaxed font-medium text-black/60 max-w-lg">
                We believe that the future of corporate AI lies in the intersection of{" "}
                <span className="text-[#141414]">deep academic research</span> and practical
                implementation.
              </p>

              <div className="flex flex-col gap-2 mt-4">
                <div className="flex justify-between items-center py-3 border-b border-black/5 group cursor-pointer">
                  <span className="text-lg font-bold group-hover:translate-x-2 transition-transform">
                    Legal Ontology
                  </span>
                  <ArrowUpRight className="w-5 h-5 opacity-20 group-hover:opacity-100 group-hover:text-[#6B21A8] transition-all" />
                </div>
                <div className="flex justify-between items-center py-3 border-b border-black/5 group cursor-pointer">
                  <span className="text-lg font-bold group-hover:translate-x-2 transition-transform">
                    Document Architecture
                  </span>
                  <ArrowUpRight className="w-5 h-5 opacity-20 group-hover:opacity-100 group-hover:text-[#6B21A8] transition-all" />
                </div>
              </div>
            </div>

            <div className="relative w-full order-1 md:order-2 flex justify-center">
              <motion.div
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="w-80 h-80 relative z-10 overflow-hidden rounded-[2rem] border border-black/10 aspect-[1/1] shadow-2xl group"
              >
                <img
                  src="/v5/image1.jpeg"
                  alt="Person reading among bookshelves"
                  className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
              </motion.div>

              {/* Decorative background element */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#E9D5FF]/20 rounded-full blur-3xl -z-0" />
            </div>
          </motion.div>
        </div>
      </section>
      <HomeWidget />
    </div>
  );
}
