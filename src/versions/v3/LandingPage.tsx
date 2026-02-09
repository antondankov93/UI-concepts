import { motion } from "framer-motion";
import { ArrowRight, Circle, Triangle, Square } from "lucide-react";
import { HomeWidget } from "../../components/HomeWidget";
import { Link } from "@tanstack/react-router";

const V4Colors = {
  bg: "#FFFFFF", // White
  text: "#0F172A", // Slate 900
  blue: "#3B82F6", // Blue 500
  orange: "#FB923C", // Orange 400 (Softer)
  lightBlue: "#EFF6FF",
  lightOrange: "#FFF7ED",
};

export default function LandingPageV3() {
  return (
    <div
      className="min-h-screen w-full relative font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden"
      style={{ backgroundColor: V4Colors.bg, color: V4Colors.text }}
    >
      {/* Navigation */}
      <nav className="fixed top-2 left-0 w-full p-6 py-3 flex justify-between items-center z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <Link to="/" className="text-3xl font-bold tracking-tight text-slate-900">
          LAER
        </Link>
        <Link
          to="/v3/app"
          className="px-6 py-2 rounded-full bg-slate-900 text-white font-bold uppercase text-sm hover:bg-blue-600 transition-colors"
        >
          Launch APP
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full min-h-screen flex flex-col lg:flex-row pt-24 lg:pt-0">
        {/* Left Side: Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 z-10 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 text-slate-900">
              Data <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-400">
                Shapes
              </span>{" "}
              <br />
              Logic
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-md mb-8 leading-relaxed">
              Transforming unstructured chaos into precision through advanced AI analysis.
            </p>

            <Link
              to="/v3/app"
              className="inline-flex items-center gap-3 text-base font-bold bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-400/30"
            >
              <span>Start Analysis</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Abstract Composition */}
        <div className="w-full lg:w-1/2 min-h-[50vh] lg:h-auto relative overflow-hidden flex items-center justify-center bg-slate-50">
          {/* Gradient blobs background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-100 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-orange-100 to-transparent"></div>
          </div>

          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
            {/* Main Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-slate-200"
            />

            {/* Overlapping Bubbles */}
            <div className="relative w-full h-full">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl shadow-blue-500/20 z-10"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute top-[20%] right-[10%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-orange-300 to-orange-400 shadow-2xl shadow-orange-400/20 z-20 mix-blend-multiply"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.8 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-slate-200 z-0 backdrop-blur-xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute bottom-[20%] right-[20%] w-[25%] h-[25%] rounded-full z-40 bg-white shadow-xl flex items-center justify-center"
              >
                <div className="w-3 h-3 rounded-full bg-orange-400"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Marquee Strip */}
      <div className="w-full bg-slate-900 py-6 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex gap-16 text-slate-400 text-lg font-medium tracking-wide uppercase"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Modern Analytics v4.0
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              Data Driven Logic
            </span>
          ))}
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Analysis",
                icon: Circle,
                color: V4Colors.blue,
                delay: 0,
                tag: "Real-time",
                description:
                  "Our neural engine processes millions of data points per second to identify patterns invisible to the human eye.",
              },
              {
                title: "Dynamic Structure",
                icon: Square,
                color: V4Colors.orange,
                delay: 0.2,
                tag: "Automated",
                description:
                  "Automatically organize unstructured information into high-fidelity knowledge graphs and relational schemas.",
              },
              {
                title: "Precision Execution",
                icon: Triangle,
                color: V4Colors.text,
                delay: 0.4,
                tag: "Deployment",
                description:
                  "Deploy insights directly into your workflow with our integrated API and custom logic triggers.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="p-8 bg-white rounded-3xl hover:-translate-y-2 transition-all duration-300 group border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
              >
                {/* Background Detail Pattern */}
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <item.icon className="w-32 h-32 -mr-8 -mt-8" />
                </div>

                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12 shadow-inner">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">{item.description}</p>

                {/* Mini Abstract Data Visualization */}
                <div className="flex items-end gap-1 h-8 mt-4 border-b border-slate-100 pb-1">
                  {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4].map((h, j) => (
                    <motion.div
                      key={j}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h * 100}%` }}
                      transition={{ delay: item.delay + j * 0.05 }}
                      className="w-full bg-slate-200 rounded-t-sm group-hover:bg-blue-400/30 transition-colors"
                    />
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((user) => (
                      <div
                        key={user}
                        className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"
                      />
                    ))}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400">99.9% ACCURACY</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-600 py-12 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">LAER.AI</h2>
              <p className="text-sm text-slate-500">© 2026 All rights reserved</p>
            </div>

            <div className="flex gap-8 text-sm font-medium">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
      <HomeWidget />
    </div>
  );
}
