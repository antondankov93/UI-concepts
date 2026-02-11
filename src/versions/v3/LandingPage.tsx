import { motion } from "framer-motion";
import { ArrowRight, Circle, Triangle, Square, Shield, Award, Globe } from "lucide-react";
import { HomeWidget } from "../../components/HomeWidget";
import { Link } from "@tanstack/react-router";
import { useCompanyName } from "../../hooks/useCompanyName";

const V4Colors = {
  bg: "#FFFFFF", // White
  text: "#0F172A", // Slate 900
  blue: "#3B82F6", // Blue 500
  orange: "#FB923C", // Orange 400 (Softer)
  lightBlue: "#EFF6FF",
  lightOrange: "#FFF7ED",
};

export default function LandingPageV3() {
  const { companyName } = useCompanyName();
  return (
    <div
      className="min-h-screen w-full relative font-serif selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden"
      style={{ backgroundColor: V4Colors.bg, color: V4Colors.text }}
    >
      {/* Navigation */}
      <nav className="fixed top-2 left-0 w-full p-6 py-3 flex justify-between items-center z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
          {companyName}
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            to="/v3/app"
            className="px-6 py-2 rounded-full bg-slate-900 text-white font-bold uppercase text-sm hover:bg-blue-600 transition-colors"
          >
            Launch APP
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Full-width container */}
        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Compact Typography */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1] tracking-tight mb-6">
                <span className="block text-slate-900">Data</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-400">
                  Shapes
                </span>
                <span className="block text-slate-900">Logic</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-md mb-6 leading-relaxed">
                Transforming unstructured chaos into precision through advanced AI analysis.
              </p>

              <div className="flex gap-3">
                <Link
                  to="/v3/app"
                  className="inline-flex items-center gap-2 text-sm font-bold bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>Start Analysis</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                >
                  <span>Watch Demo</span>
                </button>
              </div>
            </motion.div>

            {/* Right Side: Enhanced Abstract Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 rounded-3xl" />

              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent),
                  linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, .05) 25%, rgba(0, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, .05) 75%, rgba(0, 0, 0, .05) 76%, transparent 77%, transparent)`,
                  backgroundSize: "50px 50px",
                }}
              />

              {/* 3D Composition */}
              <div className="relative w-full h-full max-w-[500px] flex items-center justify-center p-12">
                {/* Main sphere */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 shadow-2xl shadow-blue-500/40 z-20"
                />

                {/* Secondary sphere */}
                <motion.div
                  animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[20%] right-[15%] w-40 h-40 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 shadow-2xl shadow-orange-400/40 z-30 mix-blend-multiply"
                />

                {/* Accent sphere */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-[25%] left-[20%] w-24 h-24 rounded-full bg-white shadow-xl z-40 flex items-center justify-center"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-500" />
                </motion.div>

                {/* Floating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-slate-300 opacity-40"
                  style={{ width: "120%", height: "120%", margin: "-10%" }}
                />

                {/* Data particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                    className="absolute w-2 h-2 rounded-full bg-blue-600"
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${30 + (i % 3) * 20}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Trust Indicators */}
      <section className="w-full bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 py-24 relative overflow-hidden">
        {/* Animated background grid */}
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, .1) 25%, rgba(59, 130, 246, .1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, .1) 75%, rgba(59, 130, 246, .1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, .1) 25%, rgba(59, 130, 246, .1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, .1) 75%, rgba(59, 130, 246, .1) 76%, transparent 77%, transparent)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Dynamic glow effects */}
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-blue-500" />
              <span className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
                Enterprise Grade
              </span>
              <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Trusted by Industry Leaders
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Built with enterprise-grade security and compliance at its core
            </p>
          </motion.div>

          {/* Trust Cards - Unique Asymmetric Layout */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Large Feature Card - Enterprise Security */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:row-span-2 group relative cursor-default overflow-hidden"
              >
                {/* Gradient background with animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-900 to-slate-900 group-hover:from-blue-600/30 transition-all duration-500" />

                {/* Geometric accent */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                />

                <div className="relative p-10 h-full flex flex-col border-2 border-slate-800 group-hover:border-blue-500/30 transition-colors duration-300">
                  {/* Large icon */}
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-blue-500/10 flex items-center justify-center border-2 border-blue-500/20 group-hover:border-blue-500/40 group-hover:scale-110 transition-all duration-300">
                      <Shield className="w-10 h-10 text-blue-400" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">
                      Enterprise
                      <span className="block text-blue-400">Security</span>
                    </h3>
                    <p className="text-slate-300 text-base leading-relaxed mb-6">
                      Bank-grade encryption and security protocols protecting your most sensitive
                      data with military-level safeguards.
                    </p>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                      />
                    </div>
                    <span className="text-blue-400 text-sm font-bold">ACTIVE</span>
                  </div>
                </div>
              </motion.div>

              {/* Compact Card - ISO Certified */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative cursor-default overflow-hidden bg-slate-900 border border-slate-800 hover:border-orange-500/30 transition-colors duration-300"
              >
                {/* Diagonal stripe */}
                <div className="absolute -right-12 top-0 w-32 h-full bg-gradient-to-br from-orange-500/10 to-transparent group-hover:from-orange-500/20 transition-all duration-500 rotate-12" />

                <div className="relative p-8 flex items-start gap-6">
                  <div className="w-16 h-16 bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-orange-400" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                        ISO 27001
                      </h3>
                      <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Certified international security management standards
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Compact Card - GDPR */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative cursor-default overflow-hidden bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-colors duration-300"
              >
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity"
                  style={{
                    backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, .3) 25%, rgba(16, 185, 129, .3) 26%, transparent 27%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, .3) 25%, rgba(16, 185, 129, .3) 26%, transparent 27%, transparent)`,
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="relative p-8 flex items-start gap-6">
                  <div className="w-16 h-16 bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-emerald-400" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                        GDPR
                      </h3>
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Full data protection and privacy compliance
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-12 pt-12 border-t border-slate-800"
          >
            {[
              { value: "500+", label: "Enterprise Clients" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "24/7", label: "Support" },
              { value: "SOC 2", label: "Type II" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

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
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                {companyName}
              </h2>
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
