import { Link } from "@tanstack/react-router";
import { HomeWidget } from "../../components/HomeWidget";
import { Home, Search, Layers, Users, Settings, Bell, Book, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import { useCompanyName } from "../../hooks/useCompanyName";

const V7Colors = {
  bg: "#FFFFFF",
  ink: "#1A1A1A",
  panel: "#FAFAFA",
  accent: "#F0F0F0",
};

export default function SaasPageV6() {
  const { companyName } = useCompanyName();
  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row font-sans selection:bg-black selection:text-white overflow-hidden"
      style={{ backgroundColor: V7Colors.bg, color: V7Colors.ink }}
    >
      {/* Sidebar - "The Stream" */}
      <aside className="w-full md:w-20 lg:w-64 flex flex-col border-r border-black/5 bg-white z-20">
        <div className="p-4 pt-6 flex items-center justify-center lg:justify-start">
          <Link
            to="/v6"
            className="text-lg font-light tracking-[0.2em] uppercase leading-none hover:opacity-50 transition-opacity"
          >
            {companyName}
          </Link>
        </div>

        <nav className="flex-1 flex flex-col py-3 gap-2 px-3">
          {[
            { icon: Home, label: "Flow", active: true },
            { icon: Search, label: "Discover", active: false },
            { icon: Layers, label: "Strata", active: false },
            { icon: Users, label: "Circle", active: false },
            { icon: Settings, label: "Tune", active: false },
          ].map((item, i) => (
            <Link
              key={i}
              to="/v6/app"
              className={`group flex items-center justify-center lg:justify-start gap-3 px-3 py-2 rounded-full transition-all relative overflow-hidden
                            ${item.active ? "bg-black text-white shadow-lg shadow-black/20" : "text-black/50 hover:bg-black/5 hover:text-black"}
                        `}
            >
              <item.icon className="w-4 h-4 shrink-0" strokeWidth={1.5} />
              <span className="font-medium tracking-wide text-sm hidden lg:block">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-3 flex items-center gap-3 justify-center lg:justify-start border-t border-black/5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-100 to-gray-300 flex items-center justify-center border border-black/5">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold">
              A
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="font-bold text-xs">Architect</div>
            <div className="text-[9px] uppercase tracking-wider opacity-40">Pro Plan</div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-[#FAFAFA]">
        {/* Header */}
        <header className="h-18 flex justify-between items-center px-5 bg-white/50 backdrop-blur-sm z-10 sticky top-0">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-light tracking-tight">Daily Insight</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group bg-white rounded-full px-3 py-1.5 border border-black/5 shadow-sm flex items-center gap-2 transition-all hover:shadow-md hover:border-black/10">
              <Search className="w-3.5 h-3.5 opacity-40" />
              <input
                type="text"
                placeholder="Search the stream..."
                className="bg-transparent border-none outline-none text-sm w-32 focus:w-64 transition-all placeholder:font-light"
              />
            </div>
            <button className="relative w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-sm hover:shadow-md transition-all">
              <Bell className="w-3.5 h-3.5 opacity-60" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            </button>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="flex-1 overflow-y-auto p-5 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10">
            {/* Main Metric - "The Wave" Visualization */}
            <div className="col-span-1 md:col-span-8 min-h-[280px] bg-white rounded-2xl p-5 relative flex flex-col shadow-sm border border-black/5 overflow-hidden">
              <div className="flex justify-between items-start mb-5 relative z-10">
                <div>
                  <h2 className="text-xl font-light mb-0.5">Knowledge Ingest</h2>
                  <p className="opacity-40 text-xs font-medium">Real-time data assimilation</p>
                </div>
                <BarChart2 className="w-5 h-5 opacity-20" />
              </div>

              <div className="flex-1 w-full h-full absolute inset-0 top-16 flex items-end justify-between gap-2 px-5 pb-0 opacity-50">
                {/* Organic Bars */}
                {Array.from({ length: 30 }).map((_, i) => {
                  const height = 20 + Math.random() * 60;
                  return (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1.5, delay: i * 0.05, ease: "easeInOut" }}
                      className="w-full bg-black rounded-t-full opacity-[0.03] group hover:opacity-10 transition-opacity"
                    />
                  );
                })}
                {/* Overlay Line Graph Simulation */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0,300 Q100,250 200,300 T400,280 T600,320 T800,250 T1000,300"
                    fill="none"
                    stroke="black"
                    strokeWidth="1.5"
                    className="opacity-20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            </div>

            {/* Stats Column */}
            <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
              {[
                { label: "Active Threads", value: "128", delta: "+12%" },
                { label: "Processing", value: "1.2M", delta: "+5%" },
                { label: "Clarified", value: "99.9%", delta: "+0.1%" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex-1 bg-white rounded-2xl p-5 flex flex-col justify-center relative shadow-sm border border-black/5 hover:shadow-md transition-all group"
                >
                  <div className="text-[10px] font-bold uppercase opacity-30 tracking-widest mb-1">
                    {stat.label}
                  </div>
                  <div className="text-3xl font-extralight tracking-tight group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </div>
                  <div className="absolute top-5 right-5 text-[10px] font-medium bg-black/5 text-black px-2 py-0.5 rounded-full">
                    {stat.delta}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="col-span-1 md:col-span-12 bg-white rounded-2xl p-5 mt-2 shadow-sm border border-black/5">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5">
                <h3 className="text-base font-medium">Recent Streams</h3>
                <button className="text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
                  View All
                </button>
              </div>

              <div className="space-y-1">
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
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAFAFA] transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-full bg-[#FAFAFA] flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-black/5">
                        <Book className="w-4 h-4 opacity-40" />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-black/90">{item.title}</div>
                        <div className="text-[10px] uppercase opacity-40 tracking-wider">
                          {item.type}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 text-xs">
                      <div className="opacity-30 font-light">{item.time}</div>
                      <div
                        className={`px-3 py-1 rounded-full text-[10px] font-medium tracking-wide ${item.status === "Processing" ? "bg-black text-white" : "bg-[#F0F0F0] text-black/60"}`}
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
          to="/v6"
          className="bg-white/80 backdrop-blur-md text-black border border-black/5 px-8 py-2.5 rounded-full font-light uppercase tracking-[0.2em] text-xs shadow-sm hover:shadow-md hover:bg-white transition-all flex items-center gap-2"
        >
          <Home size={14} />
          Back to Landing
        </Link>
      </div>
      <HomeWidget />
    </div>
  );
}
