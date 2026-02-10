import { Link } from "@tanstack/react-router";
import {
  Home,
  PieChart,
  Users,
  Settings,
  Bell,
  Search,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useCompanyName } from "../../hooks/useCompanyName";

const BentoColors = {
  bg: "#F8FAFC", // Slate 50
  cardBg: "#FFFFFF",
  textMain: "#1E293B", // Slate 800
  textMuted: "#64748B", // Slate 500
  accent: "#3B82F6", // Blue 500
  border: "#E2E8F0", // Slate 200
};

export default function SaasPageV4() {
  const { companyName } = useCompanyName();

  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row font-sans selection:bg-blue-500 selection:text-white"
      style={{ backgroundColor: BentoColors.bg, color: BentoColors.textMain }}
    >
      {/* Sidebar - Bento Card Style */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-64 p-2 flex flex-col gap-2 shrink-0"
      >
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col gap-4 shadow-sm h-full">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-md">
              <Zap size={20} fill="currentColor" className="text-blue-500" />
            </div>
            <Link
              to="/v4"
              className="text-lg font-black tracking-tight uppercase leading-none hover:opacity-80 transition-opacity"
            >
              {companyName}
            </Link>
          </div>

          {/* Nav */}
          <nav className="flex-1 flex flex-col gap-2">
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
                className={`group flex items-center gap-3 px-3 py-2 rounded-2xl transition-all border
                              ${
                                item.active
                                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                                  : "bg-white text-slate-500 border-transparent hover:bg-slate-50 hover:border-slate-200"
                              }
                          `}
              >
                <item.icon
                  className={`w-4 h-4 ${item.active ? "text-blue-500" : "text-slate-400 group-hover:text-slate-600"}`}
                />
                <span className="font-bold text-xs uppercase tracking-wide">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3 p-2 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-500 shadow-sm">
                <Users size={14} />
              </div>
              <div>
                <div className="font-bold text-[10px] uppercase tracking-wider text-slate-900">
                  Admin User
                </div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  Enterprise
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 p-2 flex flex-col gap-2 min-w-0 overflow-hidden">
        {/* Header - Bento Block */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-16 bg-white rounded-2xl border border-slate-200 px-4 flex justify-between items-center shadow-sm"
        >
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-black uppercase tracking-tight text-slate-800">
              Dashboard
            </h1>
            <div className="hidden md:block h-6 w-[1px] bg-slate-200" />
            <div className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Optimal
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-blue-100 transition-all w-64">
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input
                type="text"
                placeholder="SEARCH SYSTEM..."
                className="bg-transparent border-none outline-none text-xs font-bold placeholder-slate-400 uppercase w-full text-slate-700"
              />
            </div>
            <button className="w-10 h-10 border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50 transition-colors relative group">
              <Bell className="w-4 h-4 text-slate-600 group-hover:text-slate-900" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></div>
            </button>
          </div>
        </motion.header>

        {/* Dashboard Bento Grid */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-20">
            {/* Large Card - The Sunset Graph Refined */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 lg:col-span-3 min-h-[280px] bg-white rounded-2xl border border-slate-200 flex flex-col shadow-sm overflow-hidden relative group"
            >
              <div className="p-4 border-b border-slate-100 flex justify-between items-start z-10 bg-white/50 backdrop-blur-sm">
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight flex items-center gap-2 text-slate-800">
                    <Activity className="w-5 h-5 text-blue-500" />
                    Growth Axioms
                  </h2>
                  <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wide">
                    Live Data Visualization
                  </p>
                </div>
                <div className="px-3 py-1 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-blue-500/20">
                  Live Feed
                </div>
              </div>

              <div className="flex-1 relative overflow-hidden flex items-end justify-center">
                {/* Simplified Grid Background */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Soft Sun */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.6 }}
                  transition={{ duration: 1.5, type: "spring", delay: 0.3 }}
                  className="w-96 h-96 bg-gradient-to-t from-blue-500/40 to-blue-100/0 rounded-full absolute -bottom-20 z-0 blur-3xl"
                />

                {/* Data Lines - Cleaner */}
                <div className="w-full h-48 z-10 relative">
                  <svg className="w-full h-full absolute bottom-0" preserveAspectRatio="none">
                    {[0, 1, 2].map((i) => (
                      <motion.path
                        key={i}
                        d={`M0,${100 + i * 20} Q300,${50 + i * 10} 600,${80 + i * 15} T1200,${60 + i * 10}`}
                        fill="none"
                        stroke={i === 0 ? "#3B82F6" : "#CBD5E1"}
                        strokeWidth={i === 0 ? "3" : "1"}
                        strokeOpacity={i === 0 ? 1 : 0.5}
                        strokeDasharray={i === 0 ? "0" : "5,5"}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: i * 0.2 }}
                      />
                    ))}
                    {/* Area fill for main line */}
                    <motion.path
                      d="M0,100 Q300,50 600,80 T1200,60 V200 H0 Z"
                      fill="url(#gradient-area)"
                      opacity="0.1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                      transition={{ delay: 1, duration: 1 }}
                    />
                    <defs>
                      <linearGradient id="gradient-area" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Side Column - Stats Stacked as Bento Blocks */}
            <div className="flex flex-col gap-2 md:col-span-1 lg:col-span-1">
              {[
                {
                  label: "Revenue Delta",
                  value: "$124.8k",
                  trend: "+12.4%",
                  positive: true,
                },
                {
                  label: "Active Nodes",
                  value: "8,402",
                  trend: "+5.1%",
                  positive: true,
                },
                {
                  label: "Latency",
                  value: "1.2ms",
                  trend: "-2.0%",
                  positive: true,
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex-1 bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-center shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {stat.label}
                    </div>
                    <div
                      className={`text-[9px] font-bold px-2 py-1 rounded-full flex items-center gap-1 ${
                        stat.positive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                      }`}
                    >
                      {stat.positive ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                      {stat.trend}
                    </div>
                  </div>
                  <div className="text-3xl font-black tracking-tighter text-slate-800 group-hover:text-blue-500 transition-colors">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="md:col-span-2 lg:col-span-2 bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-black/0" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                    System Integrity
                  </h3>
                  <p className="text-slate-400 font-medium text-xs uppercase tracking-wide leading-relaxed max-w-[80%]">
                    All logical constructs verified.
                    <br />
                    Optimization at 99.98% efficiency.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-green-400">
                    Secure & Operational
                  </span>
                </div>
              </div>
              {/* Decorative concentric circles */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 border-[20px] border-white/5 rounded-full" />
              <div className="absolute -right-4 -bottom-4 w-32 h-32 border-[20px] border-white/10 rounded-full" />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="md:col-span-1 lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-center items-center text-center shadow-sm overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <PieChart size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Analytics Report</h3>
                <p className="text-xs text-slate-500 mt-2 max-w-[200px] mx-auto">
                  Download the latest performance analysis for this node.
                </p>
                <button className="mt-4 px-6 py-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                  Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Floating Back Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Link
          to="/v4"
          className="bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all flex items-center gap-2 hover:shadow-2xl"
        >
          <Home size={14} />
          Back to Landing
        </Link>
      </div>
    </div>
  );
}
