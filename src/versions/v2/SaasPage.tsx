import { Link } from "@tanstack/react-router";
import { HomeWidget } from "../../components/HomeWidget";
import { Home, PieChart, Settings, Users, Bell, Search } from "lucide-react";
import { motion } from "framer-motion";

const V3Colors = {
  bg: "#F3EEE8", // Beige paper
  lines: "#16161D", // Ink
  border: "rgba(22, 22, 29, 0.15)", // Light border
  blue: "#1C5D99", // Classic blue
  red: "#E82C2A", // Vibrant red
  orange: "#EB5E28", // Burnt orange
};

export default function SaasPageV2() {
  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row font-sans selection:bg-black selection:text-white"
      style={{ backgroundColor: V3Colors.bg, color: V3Colors.lines }}
    >
      {/* Sidebar */}
      <aside
        className="w-full md:w-64 border-r flex flex-col relative z-20 sticky top-0 h-screen"
        style={{ borderColor: V3Colors.border, backgroundColor: V3Colors.bg }}
      >
        <div className="p-6">
          <Link
            to="/v2"
            className="text-lg font-bold tracking-tight flex items-center gap-2.5 uppercase"
            style={{ color: V3Colors.lines }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: V3Colors.blue }}
            ></div>
            Laer
          </Link>
        </div>

        <nav className="flex-1 flex flex-col px-3 gap-1">
          {[
            { icon: Home, label: "Dashboard", active: true },
            { icon: PieChart, label: "Analytics" },
            { icon: Users, label: "Team" },
            { icon: Settings, label: "Settings" },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className={`group flex items-center gap-3 px-4 py-2 transition-all duration-300 ease-out border border-transparent rounded-lg hover:border-current ${item.active ? "bg-[#16161D] text-[#F3EEE8]" : "hover:bg-[#16161D]"}`}
              style={item.active ? {} : { color: V3Colors.lines }}
            >
              <item.icon
                className={`w-4 h-4 stroke-[2px] transition-colors ${item.active ? "text-[#F3EEE8]" : "group-hover:text-[#F3EEE8]"}`}
              />
              <span
                className={`font-bold text-xs tracking-wide uppercase transition-colors ${item.active ? "text-[#F3EEE8]" : "group-hover:text-[#F3EEE8]"}`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div
            className="flex items-center gap-3 p-2.5 border rounded-xl"
            style={{ borderColor: V3Colors.border }}
          >
            <div
              className="w-8 h-8 flex items-center justify-center text-[10px] font-bold overflow-hidden rounded-lg"
              style={{ backgroundColor: V3Colors.lines, color: V3Colors.bg }}
            >
              <span>AU</span>
            </div>
            <div>
              <div className="font-bold text-xs uppercase">Admin User</div>
              <div className="text-[10px] opacity-60 font-medium uppercase">Pro Plan</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative">
        {/* Header */}
        <header
          className="h-18 flex items-center justify-between py-2 px-6 md:px-8 border-b sticky top-0 z-30"
          style={{ backgroundColor: V3Colors.bg, borderColor: V3Colors.border }}
        >
          <div className="flex flex-col justify-center">
            <h1 className="text-lg font-bold uppercase tracking-tight">Overview</h1>
            <p className="text-[10px] opacity-60 font-medium uppercase tracking-wider">
              Welcome back, Admin
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div
              className="relative group p-1.5 border rounded-lg transition-colors cursor-pointer hover:bg-[#16161D]"
              style={{ borderColor: V3Colors.border, color: V3Colors.lines }}
            >
              <Search className="w-3.5 h-3.5 transition-colors group-hover:text-[#F3EEE8]" />
            </div>
            <div
              className="relative group p-1.5 border rounded-lg transition-colors cursor-pointer hover:bg-[#16161D]"
              style={{ borderColor: V3Colors.border, color: V3Colors.lines }}
            >
              <Bell className="w-3.5 h-3.5 transition-colors group-hover:text-[#F3EEE8]" />
              <div
                className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: V3Colors.red }}
              ></div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 max-w-[1600px] mx-auto w-full">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                label: "Total Revenue",
                value: "$84,200",
                trend: "+12%",
                trendUp: true,
                color: V3Colors.blue,
              },
              {
                label: "Active Users",
                value: "1,240",
                trend: "+5%",
                trendUp: true,
                color: V3Colors.red,
              },
              {
                label: "Churn Rate",
                value: "2.4%",
                trend: "-0.8%",
                trendUp: true,
                color: V3Colors.orange,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-5 border rounded-xl transition-all duration-300 group hover:-translate-y-1"
                style={{ borderColor: V3Colors.border, backgroundColor: V3Colors.bg }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider opacity-70">
                    {stat.label}
                  </div>
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 border border-current rounded-full"
                    style={{ color: stat.color }}
                  >
                    {stat.trend}
                  </span>
                </div>
                <div className="text-2xl font-bold tracking-tighter">{stat.value}</div>
                <div
                  className="w-full h-1 mt-3 opacity-20"
                  style={{ backgroundColor: stat.color }}
                ></div>
              </motion.div>
            ))}
          </div>

          {/* Main Charts Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Big Chart */}
            <div
              className="lg:col-span-2 p-6 border rounded-2xl"
              style={{ borderColor: V3Colors.border }}
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-base font-bold uppercase tracking-tight">Activity Analysis</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5" style={{ backgroundColor: V3Colors.blue }}></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Current</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 opacity-30"
                      style={{ backgroundColor: V3Colors.lines }}
                    ></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Previous</span>
                  </div>
                </div>
              </div>

              {/* Clean Chart Representation */}
              <div className="h-56 flex items-end justify-between gap-2 sm:gap-4 px-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                  <div key={i} className="w-full h-full flex items-end relative group">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full opacity-100 group-hover:opacity-80 transition-all duration-300 relative z-10 rounded-t-sm"
                      style={{ backgroundColor: V3Colors.blue }}
                    />
                    {/* Ghost bar */}
                    <div
                      className="absolute bottom-0 w-full opacity-10 rounded-t-sm"
                      style={{ height: `${h * 0.6}%`, backgroundColor: V3Colors.lines }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Panel / Donut Chart */}
            <div
              className="p-6 border rounded-2xl flex flex-col items-center justify-center relative overflow-hidden"
              style={{ borderColor: V3Colors.border }}
            >
              <h3 className="w-full text-left text-base font-bold uppercase tracking-tight mb-6 z-10">
                Monthly Targets
              </h3>

              <div className="relative w-48 h-48 z-10">
                <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={V3Colors.lines}
                    strokeOpacity="0.1"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <motion.circle
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 0.85 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={V3Colors.orange}
                    strokeWidth="8"
                    fill="transparent"
                    className=""
                    strokeLinecap="butt"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="text-4xl font-bold tracking-tighter"
                  >
                    85%
                  </motion.span>
                  <span className="text-[10px] opacity-60 font-bold uppercase mt-1">Completed</span>
                </div>
              </div>
              <p className="mt-6 text-center text-xs opacity-70 leading-relaxed px-4 z-10 font-medium">
                Excellent progress. You are well on track to exceed your monthly goals.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Back Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Link
          to="/v2"
          className="px-6 py-2 border font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-[#16161D] hover:text-[#F3EEE8] flex items-center gap-2 rounded-full"
          style={{
            backgroundColor: V3Colors.bg,
            borderColor: V3Colors.lines,
            color: V3Colors.lines,
          }}
        >
          <Home size={14} />
          Back to Landing
        </Link>
      </div>
      <HomeWidget />
    </div>
  );
}
