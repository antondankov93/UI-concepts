import { Link } from "@tanstack/react-router";
import { Home, PieChart, Settings, Users, Bell, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useCompanyName } from "../../hooks/useCompanyName";

const V4Colors = {
  bg: "#FFFFFF", // White
  text: "#0F172A", // Slate 900
  blue: "#3B82F6", // Blue 500
  orange: "#FB923C", // Orange 400
  lightBlue: "#EFF6FF",
  lightOrange: "#FFF7ED",
  slate50: "#F8FAFC",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
};

export default function SaasPageV3() {
  const { companyName } = useCompanyName();
  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row font-serif selection:bg-blue-100 selection:text-blue-900 overflow-hidden"
      style={{ backgroundColor: V4Colors.bg, color: V4Colors.text }}
    >
      {/* Sidebar */}
      <aside className="w-full md:w-56 bg-slate-50 flex flex-col relative z-20 border-r border-slate-200">
        <div className="p-4 border-b border-slate-200">
          <Link
            to="/v3"
            className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2"
          >
            {companyName}
          </Link>
        </div>

        <nav className="flex-1 flex flex-col p-2 gap-1">
          {[
            { icon: Home, label: "Dashboard", color: V4Colors.blue },
            { icon: PieChart, label: "Analytics", color: V4Colors.orange },
            { icon: Users, label: "Team", color: V4Colors.blue },
            { icon: Settings, label: "Settings", color: V4Colors.text },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-100 relative overflow-hidden text-slate-600 hover:text-blue-600"
            >
              <item.icon className="w-3.5 h-3.5 transition-colors" />
              <span className="font-semibold tracking-tight text-sm">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="p-3 m-3 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold text-base backdrop-blur-sm">
              A
            </div>
            <div>
              <div className="font-bold text-xs tracking-tight">Admin User</div>
              <div className="text-[9px] font-medium opacity-80 uppercase tracking-wider">
                Pro Plan
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative bg-white">
        {/* Header */}
        <header className="h-14 flex items-center justify-between px-6 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold tracking-tight text-slate-900">Overview</h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg hover:bg-slate-50 text-slate-500 hover:text-blue-600 transition-colors cursor-pointer border border-slate-100">
              <Search className="w-3.5 h-3.5" />
            </div>
            <div className="p-1.5 rounded-lg hover:bg-slate-50 text-slate-500 hover:text-blue-600 transition-colors cursor-pointer border border-slate-100 relative">
              <Bell className="w-3.5 h-3.5" />
              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-orange-400 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 overflow-y-auto flex-1 relative">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                label: "Total Revenue",
                value: "$84.2K",
                color: V4Colors.blue,
                trend: "+12%",
                delay: 0,
              },
              {
                label: "Active Users",
                value: "1,240",
                color: V4Colors.orange,
                trend: "+5%",
                delay: 0.1,
              },
              { label: "Growth", value: "18%", color: V4Colors.blue, trend: "+8%", delay: 0.2 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay }}
                className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {stat.label}
                    </div>
                    <div className="text-[9px] font-bold bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {stat.trend}
                    </div>
                  </div>
                  <div className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </div>

                  <div className="mt-3 flex items-center gap-1">
                    {[0.4, 0.6, 0.5, 0.8, 0.5].map((h, j) => (
                      <div key={j} className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${h * 100}%` }}
                          transition={{ delay: stat.delay + j * 0.1 }}
                          className="h-full bg-slate-200 group-hover:bg-blue-400 transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Abstract Detail */}
                <div className="absolute -right-3 -top-3 w-20 h-20 rounded-full bg-slate-50 group-hover:bg-blue-50 transition-colors -z-0"></div>
              </motion.div>
            ))}
          </div>

          {/* Main Charts Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[320px]">
            {/* Big Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
              <div className="p-4 border-b border-slate-50 flex justify-between items-center">
                <h3 className="text-base font-bold tracking-tight text-slate-900">
                  Activity Analysis
                </h3>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                </div>
              </div>

              <div className="flex-1 p-6 flex items-end justify-between gap-2 relative">
                {/* Subtle Grid Lines */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                ></div>

                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                  <div key={i} className="flex-1 h-full flex items-end">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="w-full rounded-t-lg bg-slate-100 hover:bg-blue-500 transition-all cursor-pointer relative group"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}%
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Chart */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
              <div className="p-4 border-b border-slate-50">
                <h3 className="text-base font-bold tracking-tight text-slate-900">Targets</h3>
              </div>

              <div className="flex-1 p-5 flex flex-col items-center justify-center relative">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  {/* Rotating Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-slate-100"
                  />

                  {/* Progress Circles */}
                  <div className="absolute inset-3 rounded-full border-[8px] border-slate-50"></div>
                  <svg className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray="240"
                      strokeDashoffset="35"
                      className="text-blue-600"
                    />
                  </svg>

                  <div className="relative flex flex-col items-center">
                    <div className="text-3xl font-extrabold tracking-tight text-slate-900">85%</div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      Efficiency
                    </div>
                  </div>
                </div>

                <div className="mt-6 w-full space-y-2.5">
                  {[
                    { label: "Data Quality", val: 92, color: "bg-blue-500" },
                    { label: "AI Precision", val: 78, color: "bg-orange-400" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">
                        {row.label}
                      </span>
                      <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${row.val}%` }}
                          className={`h-full ${row.color}`}
                        />
                      </div>
                      <span className="text-[9px] font-bold text-slate-900">{row.val}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Back Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Link
          to="/v3"
          className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-tight shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-2"
        >
          <Home size={16} />
          Back to Landing
        </Link>
      </div>
    </div>
  );
}
