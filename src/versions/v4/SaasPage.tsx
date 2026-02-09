import { Link } from "@tanstack/react-router";
import { Home, PieChart, Users, Settings, Bell, Search, Activity } from "lucide-react";
import { motion } from "framer-motion";

const V5Colors = {
  bg: "#FFFFFF", // White
  black: "#404040", // Softer Black
  orange: "#D9480F", // Slightly deeper, less vibrant orange
  cream: "#FFFCF5", // Cream
};

export default function SaasPageV4() {
  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row font-sans selection:bg-orange-500 selection:text-white overflow-hidden"
      style={{ backgroundColor: V5Colors.bg, color: V5Colors.black }}
    >
      {/* Sidebar - Vertical Rhythm */}
      <aside className="w-full md:w-60 flex flex-col border-r border-black/20 bg-[#FFFFFF] z-20 relative overflow-hidden">
        {/* Background Decoration for Sidebar */}
        <div className="absolute top-0 right-0 w-8 h-full bg-black/5 -z-0 pointer-events-none" />

        <div className="h-12 pl-4 border-b border-black/20 relative z-10 flex items-center">
          <Link
            to="/v4"
            className="text-2xl font-black tracking-tighter uppercase leading-none hover:scale-105 transition-transform block"
          >
            LAER
          </Link>
        </div>

        <nav className="flex-1 flex flex-col p-3 gap-1 relative z-10">
          {[
            { icon: Home, label: "Overview", active: true },
            { icon: PieChart, label: "Analytics", active: false },
            { icon: Activity, label: "Realtime", active: false },
            { icon: Users, label: "Team", active: false },
            { icon: Settings, label: "Settings", active: false },
          ].map((item, i) => (
            <Link
              key={i}
              to="/v4/app"
              className={`group flex items-center justify-between px-3 py-2 border transition-all
                            ${item.active ? "bg-black text-[#FFFFFF] border-black shadow-[2px_2px_0px_0px_rgba(217,72,15,0.3)]" : "border-transparent hover:border-black/20 hover:bg-black/5"}
                        `}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`w-4 h-4 ${item.active ? "text-orange-500" : ""}`} />
                <span className="font-bold uppercase tracking-tighter text-xs">{item.label}</span>
              </div>
              {item.active && <div className="w-1 h-1 bg-orange-500 rounded-full" />}
            </Link>
          ))}
        </nav>

        {/* User Profile - Bottom */}
        <div className="h-12 pl-4 flex items-center border-t border-black/20 bg-black/5 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-black/20 bg-white flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-orange-500/10" />
              <Users className="w-4 h-4 relative z-10" />
            </div>
            <div>
              <div className="font-bold uppercase text-[10px] tracking-tight">Admin User</div>
              <div className="text-[9px] font-bold opacity-60 uppercase flex items-center gap-1">
                <div className="w-1 h-1 bg-green-600 rounded-full" />
                Enterprise Node
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/*/!* Background Graphic Elements *!/*/}
        {/*<div className="absolute inset-0 pointer-events-none overflow-hidden">*/}
        {/*  <div className="absolute top-[-10%] right-[10%] w-[15%] h-[120%] bg-black/5 -rotate-6" />*/}
        {/*  <div className="absolute bottom-[-10%] left-[20%] w-[10%] h-[120%] bg-black/5 -rotate-3" />*/}
        {/*</div>*/}

        {/* Top Bar */}
        <header className="h-12 flex justify-between items-center px-6 relative z-10">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-black uppercase tracking-tighter">Dashboard</h1>
            <div className="hidden md:block h-4 w-[1px] bg-black/20" />
            <div className="hidden md:block text-[10px] font-bold uppercase tracking-widest opacity-40">
              Operational Status: Optimal
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border-b border-black/30 pb-0.5">
              <Search className="w-3.5 h-3.5 mr-2" />
              <input
                type="text"
                placeholder="SEARCH SYSTEM..."
                className="bg-transparent border-none outline-none text-[10px] font-bold placeholder-black/20 uppercase w-24 focus:w-48 transition-all"
              />
            </div>
            <div className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-[#FFFFFF] transition-all cursor-pointer relative group shadow-[1px_1px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]">
              <Bell className="w-4 h-4" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange-600 border border-black"></div>
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="flex-1 overflow-y-auto p-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Card - The Sunset Graph */}
            <div className="lg:col-span-2 min-h-[320px] border border-black/40 bg-white relative flex flex-col shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
              <div className="p-3 border-b border-black/20 flex justify-between items-center bg-[#FFFFFF]">
                <h2 className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
                  <Activity className="w-4 h-4 text-orange-600" />
                  Growth Axioms
                </h2>
                <div className="px-2 py-0.5 bg-black text-[#FFFCF5] text-[9px] font-black uppercase tracking-widest">
                  Live Feed
                </div>
              </div>

              <div className="flex-1 relative overflow-hidden flex items-end justify-center bg-[#FFFFFF]">
                {/* Graphic background */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* The Sun */}
                <motion.div
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.8 }}
                  transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
                  className="w-64 h-64 bg-orange-600 rounded-full absolute -bottom-12 z-10 mix-blend-multiply"
                />

                {/* Vertical Lines (Rays) - Consistent with Landing Page */}
                <div className="absolute inset-0 flex justify-center gap-6 z-20 pointer-events-none opacity-20">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="w-[2px] h-full bg-black"></div>
                  ))}
                </div>

                {/* Wavy Lines (Sea/Graph) */}
                <div className="w-full h-24 bg-black z-30 relative overflow-hidden flex items-center border-t border-black/20">
                  <svg className="w-full h-full absolute top-0" preserveAspectRatio="none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.path
                        key={i}
                        d="M0,15 Q250,45 500,15 T1000,15 V40 H0 Z"
                        fill="none"
                        stroke={i === 0 ? "#D9480F" : "#FFFFFF"}
                        strokeWidth={i === 0 ? "3" : "1"}
                        strokeOpacity={1 - i * 0.1}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: i * 0.1 }}
                        style={{ transform: `translateY(${i * 8}px)` }}
                      />
                    ))}
                  </svg>
                  <div className="absolute bottom-3 left-4 text-[9px] font-black text-[#FFFFFF] uppercase tracking-[0.2em]">
                    Wave Propagation Analysis
                  </div>
                </div>
              </div>
            </div>

            {/* Side Card - Stats */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Revenue Delta", value: "$124.8k", trend: "+12.4%", color: "orange" },
                { label: "Active Nodes", value: "8,402", trend: "+5.1%", color: "black" },
                { label: "Latency", value: "1.2ms", trend: "-2.0%", color: "black" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 bg-white border border-black/40 p-4 flex flex-col justify-center relative hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] transition-all group"
                >
                  <div className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-2xl font-black tracking-tighter group-hover:text-orange-600 transition-colors">
                    {stat.value}
                  </div>
                  <div
                    className={`absolute top-4 right-4 text-[9px] font-black ${stat.color === "orange" ? "bg-orange-600" : "bg-black"} text-white px-1.5 py-0.5`}
                  >
                    {stat.trend}
                  </div>
                  <div className="mt-2 w-full h-[1px] bg-black/5 group-hover:bg-orange-600/20 transition-colors" />
                </motion.div>
              ))}
            </div>

            {/* Wide Bottom Card - Concentric Lines */}
            <div className="lg:col-span-3 min-h-[180px] border border-black/40 bg-white flex flex-col md:flex-row shadow-[4px_4px_0px_0px_rgba(217,72,15,0.2)]">
              <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-black/20 p-6 flex flex-col justify-center bg-black text-[#FFFFFF] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-orange-600/10 pointer-events-none" />
                <h3 className="text-xl font-black uppercase tracking-tighter mb-2 relative z-10">
                  System
                  <br />
                  Integrity
                </h3>
                <p className="opacity-70 font-bold leading-tight text-[10px] uppercase tracking-tight relative z-10">
                  All logical constructs are verified.
                  <br />
                  Optimization at 99.98% efficiency.
                </p>
              </div>
              <div
                className="flex-1 p-6 relative overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: V5Colors.cream }}
              >
                {/* Concentric Rectangles Animation - V5 style */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute border border-black/5"
                    style={{
                      width: `calc(100% - ${i * 30}px)`,
                      height: `calc(100% - ${i * 30}px)`,
                      opacity: 1 - i * 0.1,
                    }}
                    animate={{
                      scale: [1, 1.01, 1],
                      borderColor: i % 2 === 0 ? "rgba(0,0,0,0.05)" : "rgba(217,72,15,0.1)",
                    }}
                    transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
                  />
                ))}
                <div className="relative z-10 bg-black text-[#FFFFFF] font-black px-6 py-3 text-lg uppercase tracking-[0.2em] border border-orange-600/50 shadow-[2px_2px_0px_0px_rgba(217,72,15,0.5)]">
                  SECURE
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Back Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Link
          to="/v4"
          className="bg-black text-[#FFFFFF] border border-black px-6 py-2 text-sm font-black uppercase tracking-tighter shadow-[2px_2px_0px_0px_rgba(217,72,15,0.5)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-2"
        >
          <Home size={14} />
          Back to Landing
        </Link>
      </div>
    </div>
  );
}
