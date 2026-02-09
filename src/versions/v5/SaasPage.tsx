import { Link } from "@tanstack/react-router";
import { HomeWidget } from "../../components/HomeWidget";
import { Home, Search, Layers, Users, Settings, Bell, Book, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

const V6Colors = {
  bg: "#F2EFE4", // Light Cream/Paper
  ink: "#141414", // Soft Black
  hover: "#EAE5D1", // Slightly darker cream
};

export default function SaasPageV5() {
  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row font-sans selection:bg-black selection:text-[#F2EFE4] overflow-hidden"
      style={{ backgroundColor: V6Colors.bg, color: V6Colors.ink }}
    >
      {/* Sidebar - "The Stack" */}
      <aside className="w-full md:w-16 lg:w-56 flex flex-col border-r border-black/5 bg-[#F2EFE4] z-20">
        <div className="p-4 md:p-5 flex items-center justify-center lg:justify-start">
          <Link
            to="/v5"
            className="text-xl font-black tracking-tighter uppercase leading-none hover:scale-105 transition-transform"
          >
            LAER
          </Link>
        </div>

        <nav className="flex-1 flex flex-col py-4 gap-1">
          {[
            { icon: Home, label: "Library", active: true },
            { icon: Search, label: "Discovery", active: false },
            { icon: Layers, label: "Corpus", active: false },
            { icon: Users, label: "Scholars", active: false },
            { icon: Settings, label: "System", active: false },
          ].map((item, i) => (
            <Link
              key={i}
              to="/v5/app"
              className={`group flex items-center justify-center lg:justify-start gap-3 px-4 py-3 transition-all relative overflow-hidden
                            ${item.active ? "text-black" : "opacity-40 hover:opacity-100"}
                        `}
            >
              {/* Hover/Active Background imitating a book slide out */}
              {item.active && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-black/80"
                />
              )}
              <item.icon className="w-5 h-5 shrink-0" strokeWidth={2} />
              <span className="font-bold uppercase tracking-wide text-xs hidden lg:block">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-black/5 flex items-center gap-3 justify-center lg:justify-start">
          <div className="w-8 h-8 rounded-full bg-black text-[#F2EFE4] flex items-center justify-center font-bold border border-black/10 text-sm">
            A
          </div>
          <div className="hidden lg:block">
            <div className="font-bold text-xs">ARCHITECT</div>
            <div className="text-[9px] uppercase tracking-wider opacity-60">Pro Plan</div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="h-16 flex justify-between items-center px-5 bg-[#F2EFE4]/80 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-black uppercase tracking-tight">Digital Archive</h1>
            <span className="text-black/20 font-light">/</span>
            <span className="font-medium opacity-60 text-sm">Overview</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
              <input
                type="text"
                placeholder="Find..."
                className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-full opacity-0 cursor-pointer focus:w-48 focus:opacity-100 focus:bg-[#F2EFE4] focus:cursor-text focus:pr-4 focus:outline-none transition-all border-b border-black/20 text-sm"
              />
            </div>
            <button className="relative hover:scale-110 transition-transform">
              <Bell className="w-5 h-5" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-black rounded-full border border-[#F2EFE4]"></div>
            </button>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="flex-1 overflow-y-auto p-5 relative">
          {/* Background Grid Lines - Subtle notebook feel */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10">
            {/* Main Metric - The "Open Book" Visualization */}
            <div className="col-span-1 md:col-span-8 min-h-[280px] border border-black/10 bg-white/50 relative flex flex-col p-5 overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-300 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-black uppercase mb-1">Knowledge Growth</h2>
                  <p className="opacity-60 font-medium text-xs">
                    Daily ingest volume vs. processing depth
                  </p>
                </div>
                <BarChart2 className="w-5 h-5 opacity-40" />
              </div>

              <div className="flex-1 flex items-end justify-between gap-1 h-full px-2">
                {/* Generative Bars resembling books on a shelf */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const height = 30 + Math.random() * 60;
                  return (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: i * 0.05 }}
                      className="w-full bg-black relative group/bar hover:bg-opacity-80 transition-colors cursor-pointer rounded-t-lg"
                    >
                      {/* Spine detail */}
                      <div className="absolute top-1 left-[10%] right-[10%] h-[2px] bg-white/20"></div>
                      <div className="absolute bottom-2 left-[30%] right-[30%] h-8 bg-white/10 opacity-0 group-hover/bar:opacity-100 transition-opacity flex items-center justify-center text-[8px] text-white font-mono vertical-lr writing-vertical-lr">
                        VOL.{i + 1}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Stats Column */}
            <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
              {[
                { label: "Active Nodes", value: "8,249", delta: "+12%" },
                { label: "Queries Processed", value: "1.2M", delta: "+5%" },
                { label: "Accuracy Rate", value: "99.8%", delta: "+0.1%" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex-1 border border-black/10 bg-white/50 p-4 flex flex-col justify-center relative hover:translate-x-1 hover:-translate-y-1 transition-transform cursor-default rounded-2xl"
                >
                  <div className="text-[10px] font-black uppercase opacity-40 tracking-widest mb-1">
                    {stat.label}
                  </div>
                  <div className="text-3xl font-black tracking-tighter">{stat.value}</div>
                  <div className="absolute top-4 right-4 text-[10px] font-bold bg-black/80 text-[#F2EFE4] px-2 py-1 rounded-lg">
                    {stat.delta}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity - "The Stack" */}
            <div className="col-span-1 md:col-span-12 border border-black/10 bg-[#F2EFE4] p-5 mt-2 rounded-2xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5">
                <h3 className="text-base font-black uppercase">Recent Extractions</h3>
                <button className="text-[10px] font-bold uppercase underline decoration-2 underline-offset-4 hover:decoration-black/50">
                  View All Archive
                </button>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "Corporate Liability Analysis 2024",
                    type: "PDF Analysis",
                    time: "2m ago",
                    status: "Complete",
                  },
                  {
                    title: "Merger Agreement - Alpha Corp",
                    type: "Contract Review",
                    time: "15m ago",
                    status: "Processing",
                  },
                  {
                    title: "Intellectual Property Dispute v.2",
                    type: "Case Law Research",
                    time: "1h ago",
                    status: "Complete",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 border border-black/5 hover:border-black/20 bg-white transition-all hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] group cursor-pointer rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-black/60 text-white flex items-center justify-center rounded-lg">
                        <Book className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-sm group-hover:underline decoration-2">
                          {item.title}
                        </div>
                        <div className="text-[10px] uppercase opacity-60 font-medium">
                          {item.type}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 text-xs font-bold">
                      <div className="opacity-40">{item.time}</div>
                      <div
                        className={`px-2 py-1 border border-black/5 text-[10px] uppercase rounded-lg ${item.status === "Processing" ? "bg-black/60 text-white animate-pulse" : "bg-[#F2EFE4]"}`}
                      >
                        {item.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Back Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Link
          to="/v5"
          className="bg-black text-[#F2EFE4] px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-2 border border-black/10"
        >
          <Home size={14} />
          Back to Landing
        </Link>
      </div>
      <HomeWidget />
    </div>
  );
}
