import { Link } from "@tanstack/react-router";
import { Home, PieChart, Users, Settings, Bell, Search, Activity } from "lucide-react";
import { motion } from "framer-motion";

const V5Colors = {
  bg: "#EBE5CE", // Warm Beige Paper
  black: "#0F0F0F", // Deep Black
  orange: "#E8590C", // Not too bright orange
  white: "#FFFCF5", // Cream
};

export default function SaasPageV4() {
  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row font-sans selection:bg-orange-500 selection:text-white overflow-hidden"
      style={{ backgroundColor: V5Colors.bg, color: V5Colors.black }}
    >
      {/* Sidebar - Vertical Rhythm */}
      <aside className="w-full md:w-72 flex flex-col border-r-2 border-black bg-[#EBE5CE] z-20 relative overflow-hidden">
        {/* Background Decoration for Sidebar */}
        <div className="absolute top-0 right-0 w-12 h-full bg-black/5 -z-0 pointer-events-none" />

        <div className="p-8 border-b-2 border-black relative z-10">
          <Link
            to="/v4"
            className="text-4xl font-black tracking-tighter uppercase leading-none hover:scale-105 transition-transform block"
          >
            LAER
          </Link>
          <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">
            Systems v5.0
          </div>
        </div>

        <nav className="flex-1 flex flex-col p-4 gap-2 relative z-10">
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
              className={`group flex items-center justify-between px-4 py-3 border-2 transition-all
                            ${item.active ? "bg-black text-[#EBE5CE] border-black shadow-[4px_4px_0px_0px_rgba(232,89,12,0.3)]" : "border-transparent hover:border-black hover:bg-black/5"}
                        `}
            >
              <div className="flex items-center gap-4">
                <item.icon className={`w-5 h-5 ${item.active ? "text-orange-500" : ""}`} />
                <span className="font-black uppercase tracking-tighter text-sm">{item.label}</span>
              </div>
              {item.active && <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />}
            </Link>
          ))}
        </nav>

        {/* User Profile - Bottom */}
        <div className="p-6 border-t-2 border-black bg-black/5 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-orange-500/20" />
              <Users className="w-6 h-6 relative z-10" />
            </div>
            <div>
              <div className="font-black uppercase text-xs tracking-tight">Admin User</div>
              <div className="text-[10px] font-bold opacity-60 uppercase flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                Enterprise Node
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Background Graphic Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[10%] w-[15%] h-[120%] bg-black/5 -rotate-6" />
          <div className="absolute bottom-[-10%] left-[20%] w-[10%] h-[120%] bg-black/5 -rotate-3" />
        </div>

        {/* Top Bar */}
        <header className="h-20 border-b-2 border-black flex justify-between items-center px-8 relative z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-black uppercase tracking-tighter">Dashboard</h1>
            <div className="hidden md:block h-6 w-[2px] bg-black/20" />
            <div className="hidden md:block text-xs font-bold uppercase tracking-widest opacity-40">
              Operational Status: Optimal
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center border-b-2 border-black pb-1">
              <Search className="w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="SEARCH SYSTEM..."
                className="bg-transparent border-none outline-none text-xs font-black placeholder-black/30 uppercase w-32 focus:w-64 transition-all"
              />
            </div>
            <div className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-[#EBE5CE] transition-all cursor-pointer relative group shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-600 border-2 border-black"></div>
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="flex-1 overflow-y-auto p-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large Card - The Sunset Graph */}
            <div className="lg:col-span-2 min-h-[400px] border-2 border-black bg-white relative flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="p-4 border-b-2 border-black flex justify-between items-center bg-[#FFFCF5]">
                <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                  <Activity className="w-5 h-5 text-orange-600" />
                  Growth Axioms
                </h2>
                <div className="px-3 py-1 bg-black text-[#EBE5CE] text-[10px] font-black uppercase tracking-widest">
                  Live Feed
                </div>
              </div>

              <div className="flex-1 relative overflow-hidden flex items-end justify-center bg-[#FFFCF5]">
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
                <div className="w-full h-32 bg-black z-30 relative overflow-hidden flex items-center border-t-2 border-black">
                  <svg className="w-full h-full absolute top-0" preserveAspectRatio="none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.path
                        key={i}
                        d="M0,15 Q250,45 500,15 T1000,15 V40 H0 Z"
                        fill="none"
                        stroke={i === 0 ? "#E8590C" : "#EBE5CE"}
                        strokeWidth={i === 0 ? "4" : "1"}
                        strokeOpacity={1 - i * 0.1}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: i * 0.1 }}
                        style={{ transform: `translateY(${i * 12}px)` }}
                      />
                    ))}
                  </svg>
                  <div className="absolute bottom-4 left-6 text-[10px] font-black text-[#EBE5CE] uppercase tracking-[0.3em]">
                    Wave Propagation Analysis
                  </div>
                </div>
              </div>
            </div>

            {/* Side Card - Stats */}
            <div className="flex flex-col gap-6">
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
                  className="flex-1 bg-white border-2 border-black p-6 flex flex-col justify-center relative hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
                >
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-4xl font-black tracking-tighter group-hover:text-orange-600 transition-colors">
                    {stat.value}
                  </div>
                  <div
                    className={`absolute top-6 right-6 text-[10px] font-black ${stat.color === "orange" ? "bg-orange-600" : "bg-black"} text-white px-2 py-1`}
                  >
                    {stat.trend}
                  </div>
                  <div className="mt-4 w-full h-[1px] bg-black/10 group-hover:bg-orange-600/30 transition-colors" />
                </motion.div>
              ))}
            </div>

            {/* Wide Bottom Card - Concentric Lines */}
            <div className="lg:col-span-3 min-h-[250px] border-2 border-black bg-white flex flex-col md:flex-row shadow-[8px_8px_0px_0px_rgba(232,89,12,0.5)]">
              <div className="w-full md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-black p-8 flex flex-col justify-center bg-black text-[#EBE5CE] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-orange-600/10 pointer-events-none" />
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 relative z-10">
                  System
                  <br />
                  Integrity
                </h3>
                <p className="opacity-70 font-bold leading-tight text-sm uppercase tracking-tight relative z-10">
                  All logical constructs are verified.
                  <br />
                  Optimization at 99.98% efficiency.
                </p>
              </div>
              <div className="flex-1 p-8 relative overflow-hidden flex items-center justify-center bg-[#FFFCF5]">
                {/* Concentric Rectangles Animation - V5 style */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute border-2 border-black/10"
                    style={{
                      width: `calc(100% - ${i * 40}px)`,
                      height: `calc(100% - ${i * 40}px)`,
                      opacity: 1 - i * 0.1,
                    }}
                    animate={{
                      scale: [1, 1.02, 1],
                      borderColor: i % 2 === 0 ? "rgba(0,0,0,0.1)" : "rgba(232,89,12,0.2)",
                    }}
                    transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
                  />
                ))}
                <div className="relative z-10 bg-black text-[#EBE5CE] font-black px-8 py-4 text-xl uppercase tracking-[0.3em] border-2 border-orange-600 shadow-[4px_4px_0px_0px_rgba(232,89,12,1)]">
                  SECURE
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Back Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Link
          to="/v4"
          className="bg-black text-[#EBE5CE] border-2 border-black px-8 py-3 font-black uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(232,89,12,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-2"
        >
          <Home size={18} />
          Back to Landing
        </Link>
      </div>
    </div>
  );
}
