import { Link } from "@tanstack/react-router";
import { HomeWidget } from "../../components/HomeWidget";
import {
  Home,
  Search,
  Layers,
  Users,
  Settings,
  Bell,
  Book,
  BarChart2,
  FileText,
  Scale,
  ChevronRight,
  Plus,
  Filter,
} from "lucide-react";
import { motion } from "framer-motion";
import { useCompanyName } from "../../hooks/useCompanyName";

/**
 * V8 SaaS Page - "The Moire" (Work View)
 *
 * A clean, functional dashboard that maintains the moire identity
 * while prioritizing readability and usability for extended work sessions.
 *
 * Contrast philosophy:
 * - The landing page is ethereal and mysterious; the SaaS page is clear and practical
 * - Borders are visible (not invisible) -- they define structure
 * - Text uses normal/medium weights for body, light for headings only
 * - Icons are visible at rest, not just on hover
 * - Interactive elements are clearly distinguishable from static content
 * - The moire identity carries through via spacing rhythm, accent color,
 *   and subtle decorative SVG -- not through low contrast
 */

const V8 = {
  bg: "#EEEEED",
  bgCard: "#FFFFFF",
  bgWhite: "#FFFFFF",
  graphite: "#1C1C1C",
  graphiteMid: "#3D3D3D",
  graphiteLight: "#6B6B69",
  mist: "#9E9E9A",
  mistLight: "#C8C8C4",
  accent: "#566A7E",
  accentSoft: "#566A7E14",
  border: "#D4D3D0",
  borderLight: "#E2E1DE",
  success: "#3D7A4A",
  successSoft: "#3D7A4A14",
};

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Search, label: "Research", active: false },
  { icon: FileText, label: "Documents", active: false },
  { icon: Scale, label: "Cases", active: false },
  { icon: Layers, label: "Collections", active: false },
  { icon: Users, label: "Team", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const recentCases = [
  {
    title: "Corporate Liability Analysis - Q4 2024",
    type: "Investigation",
    time: "3m ago",
    status: "Active",
    progress: 78,
  },
  {
    title: "Merger Agreement - Alpha Corp / Beta Inc",
    type: "Due Diligence",
    time: "22m ago",
    status: "Review",
    progress: 92,
  },
  {
    title: "Intellectual Property Dispute v.3",
    type: "Case Research",
    time: "1h ago",
    status: "Complete",
    progress: 100,
  },
  {
    title: "Regulatory Compliance Audit - EU Markets",
    type: "Compliance",
    time: "3h ago",
    status: "Active",
    progress: 45,
  },
];

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    Active: { bg: `${V8.accent}18`, text: V8.accent },
    Review: { bg: `${V8.success}18`, text: V8.success },
    Complete: { bg: `${V8.graphiteLight}15`, text: V8.graphiteLight },
  };
  const c = colors[status] || colors.Active;
  return (
    <span
      className="px-2.5 py-1 font-medium text-[9px] uppercase tracking-[0.1em]"
      style={{ backgroundColor: c.bg, color: c.text }}
    >
      {status}
    </span>
  );
}

/**
 * Very subtle decorative moire lines for empty card spaces
 */
function SubtleMoire() {
  return (
    <svg
      viewBox="0 0 300 100"
      fill="none"
      className="pointer-events-none absolute right-0 bottom-0 h-20 w-40 opacity-[0.03]"
    >
      {Array.from({ length: 8 }).map((_, i) => {
        const y = 10 + i * 11;
        return (
          <path
            key={i}
            d={`M 0 ${y} Q 75 ${y - 8 + i * 2}, 150 ${y + 3} T 300 ${y}`}
            stroke={V8.graphite}
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
}

export default function SaasPageV8() {
  const { companyName } = useCompanyName();

  return (
    <div
      className="flex min-h-screen w-full flex-col overflow-hidden font-sans md:flex-row"
      style={{ backgroundColor: V8.bg, color: V8.graphite }}
    >
      {/* ========== SIDEBAR ========== */}
      <aside
        className="z-20 flex w-full flex-col border-r md:w-14 lg:w-52"
        style={{ backgroundColor: V8.bgWhite, borderColor: V8.border }}
      >
        {/* Logo */}
        <div
          className="flex items-center justify-center border-b p-4 lg:justify-start"
          style={{ borderColor: V8.borderLight }}
        >
          <Link to="/v8" className="transition-opacity duration-300 hover:opacity-60">
            <span className="font-medium text-[11px] uppercase tracking-[0.25em]">
              {companyName}
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-0.5 px-2 py-4">
          {sidebarItems.map((item, i) => (
            <Link
              key={i}
              to="/v8/app"
              className="group flex items-center justify-center gap-3 px-3 py-2.5 transition-all duration-200 lg:justify-start"
              style={{
                backgroundColor: item.active ? `${V8.accent}12` : "transparent",
                color: item.active ? V8.accent : V8.graphiteLight,
              }}
              onMouseEnter={(e) => {
                if (!item.active) {
                  e.currentTarget.style.backgroundColor = `${V8.graphite}06`;
                  e.currentTarget.style.color = V8.graphite;
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = V8.graphiteLight;
                }
              }}
            >
              <item.icon className="h-4 w-4 shrink-0" strokeWidth={item.active ? 2 : 1.5} />
              <span className="hidden font-medium text-[10px] uppercase tracking-[0.1em] lg:block">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* User */}
        <div
          className="flex items-center justify-center gap-3 border-t px-3 pt-3 pb-10  lg:justify-start"
          style={{ borderColor: V8.borderLight }}
        >
          <div
            className="flex h-7 w-7 items-center justify-center font-semibold text-[10px]"
            style={{ backgroundColor: `${V8.accent}14`, color: V8.accent }}
          >
            A
          </div>
          <div className="hidden lg:block">
            <div className="font-medium text-[11px]">Analyst</div>
            <div
              className="font-normal text-[9px] uppercase tracking-[0.1em]"
              style={{ color: V8.mist }}
            >
              Pro Plan
            </div>
          </div>
        </div>
      </aside>

      {/* ========== MAIN CONTENT ========== */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Header Bar */}
        <header
          className="sticky top-0 z-10 flex items-center justify-between border-b px-6 py-3"
          style={{ backgroundColor: V8.bgWhite, borderColor: V8.borderLight }}
        >
          <div className="flex items-center gap-3">
            <h1 className="font-light text-sm tracking-tight">Dashboard</h1>
            <ChevronRight className="h-3 w-3" style={{ color: V8.mistLight }} />
            <span className="font-normal text-xs" style={{ color: V8.graphiteLight }}>
              Overview
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div
              className="flex items-center gap-2 border px-3 py-1.5 transition-all duration-200 focus-within:border-current"
              style={{ borderColor: V8.borderLight, backgroundColor: `${V8.bg}80` }}
            >
              <Search className="h-3.5 w-3.5" style={{ color: V8.mist }} />
              <input
                type="text"
                placeholder="Search cases, documents..."
                className="w-36 border-none bg-transparent font-normal text-xs outline-none placeholder:font-light placeholder:text-xs focus:w-52"
                style={{
                  transition: "width 0.4s",
                  color: V8.graphite,
                }}
              />
            </div>

            {/* Notifications */}
            <button
              className="relative flex h-8 w-8 items-center justify-center border transition-all duration-200"
              style={{ borderColor: V8.borderLight }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = V8.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = V8.borderLight;
              }}
            >
              <Bell className="h-3.5 w-3.5" style={{ color: V8.graphiteLight }} />
              <div
                className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: V8.accent }}
              />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-7xl space-y-5">
            {/* Quick Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  className="flex items-center gap-2 border px-4 py-2 font-medium text-[11px] uppercase tracking-[0.1em] transition-all duration-200"
                  style={{
                    borderColor: V8.graphite,
                    backgroundColor: V8.graphite,
                    color: V8.bgWhite,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = V8.accent;
                    e.currentTarget.style.borderColor = V8.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = V8.graphite;
                    e.currentTarget.style.borderColor = V8.graphite;
                  }}
                >
                  <Plus className="h-3.5 w-3.5" />
                  New Case
                </button>
                <button
                  className="flex items-center gap-2 border px-4 py-2 font-medium text-[11px] uppercase tracking-[0.1em] transition-all duration-200"
                  style={{ borderColor: V8.border, color: V8.graphiteMid }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = V8.graphiteLight;
                    e.currentTarget.style.color = V8.graphite;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = V8.border;
                    e.currentTarget.style.color = V8.graphiteMid;
                  }}
                >
                  <Filter className="h-3.5 w-3.5" />
                  Filter
                </button>
              </div>
              <span
                className="font-normal text-[10px] uppercase tracking-[0.12em]"
                style={{ color: V8.mist }}
              >
                Last updated: 3 min ago
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {[
                {
                  label: "Active Cases",
                  value: "24",
                  icon: Scale,
                  delta: "+3 this week",
                },
                {
                  label: "Documents",
                  value: "1,847",
                  icon: FileText,
                  delta: "+128 today",
                },
                {
                  label: "Queries",
                  value: "342",
                  icon: Search,
                  delta: "+45 today",
                },
                {
                  label: "Team",
                  value: "12",
                  icon: Users,
                  delta: "2 online",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="relative overflow-hidden border p-5 transition-colors duration-200"
                  style={{
                    backgroundColor: V8.bgCard,
                    borderColor: V8.borderLight,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = V8.border;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = V8.borderLight;
                  }}
                >
                  <SubtleMoire />
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="font-semibold text-[10px] uppercase tracking-[0.12em]"
                      style={{ color: V8.mist }}
                    >
                      {stat.label}
                    </span>
                    <stat.icon
                      className="h-4 w-4"
                      style={{ color: V8.mistLight }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="mb-1 font-light text-2xl tracking-tight">{stat.value}</div>
                  <div className="font-medium text-[10px]" style={{ color: V8.success }}>
                    {stat.delta}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
              {/* Chart Area */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="border p-5 md:col-span-8"
                style={{ backgroundColor: V8.bgCard, borderColor: V8.borderLight }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="font-light text-sm tracking-tight">Research Activity</h2>
                    <p className="font-normal text-[10px]" style={{ color: V8.graphiteLight }}>
                      Document processing over time
                    </p>
                  </div>
                  <BarChart2
                    className="h-4 w-4"
                    style={{ color: V8.mistLight }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Minimalist chart */}
                <div
                  className="flex h-44 items-end justify-between gap-1.5 border-b pb-4"
                  style={{ borderColor: V8.borderLight }}
                >
                  {Array.from({ length: 24 }).map((_, i) => {
                    const height = 15 + Math.sin(i * 0.5 + 1) * 30 + ((i * 7 + 13) % 25);
                    return (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.025,
                          ease: "easeOut",
                        }}
                        className="w-full transition-colors duration-200"
                        style={{
                          backgroundColor: i >= 20 ? V8.accent : `${V8.graphite}12`,
                          minWidth: "4px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = V8.accent;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            i >= 20 ? V8.accent : `${V8.graphite}12`;
                        }}
                      />
                    );
                  })}
                </div>

                <div className="mt-2 flex justify-between">
                  {["Jan", "Jun", "Dec"].map((m) => (
                    <span key={m} className="font-normal text-[9px]" style={{ color: V8.mist }}>
                      {m}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Quick Research Panel */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="flex flex-col border p-5 md:col-span-4"
                style={{ backgroundColor: V8.bgCard, borderColor: V8.borderLight }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="font-light text-sm tracking-tight">Quick Research</h2>
                  <Book className="h-4 w-4" style={{ color: V8.mistLight }} strokeWidth={1.5} />
                </div>

                <div className="flex-1 space-y-2">
                  {[
                    { label: "Case Law Search", desc: "Query legal precedents" },
                    {
                      label: "Document Analysis",
                      desc: "AI-powered review",
                    },
                    {
                      label: "Entity Extraction",
                      desc: "Identify key parties",
                    },
                  ].map((item) => (
                    <button
                      key={item.label}
                      className="group flex w-full items-center justify-between border p-3 text-left transition-all duration-200"
                      style={{ borderColor: V8.borderLight }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = V8.accent;
                        e.currentTarget.style.backgroundColor = `${V8.accent}06`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = V8.borderLight;
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <div>
                        <div className="font-medium text-xs">{item.label}</div>
                        <div
                          className="font-normal text-[10px]"
                          style={{ color: V8.graphiteLight }}
                        >
                          {item.desc}
                        </div>
                      </div>
                      <ChevronRight
                        className="h-3.5 w-3.5 transition-all duration-200 group-hover:translate-x-0.5"
                        style={{ color: V8.mistLight }}
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Cases Table */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="border p-5 md:col-span-12"
                style={{ backgroundColor: V8.bgCard, borderColor: V8.borderLight }}
              >
                <div
                  className="mb-4 flex items-center justify-between border-b pb-4"
                  style={{ borderColor: V8.borderLight }}
                >
                  <h2 className="font-light text-sm tracking-tight">Recent Cases</h2>
                  <button
                    className="font-semibold text-[10px] uppercase tracking-[0.12em] transition-opacity duration-200 hover:opacity-60"
                    style={{ color: V8.accent }}
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-0">
                  {recentCases.map((item, i) => (
                    <div
                      key={i}
                      className="group flex cursor-pointer items-center justify-between border-b px-1 py-3.5 transition-all duration-200 last:border-b-0"
                      style={{ borderColor: V8.borderLight }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = V8.bg;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-9 w-9 items-center justify-center border"
                          style={{ borderColor: V8.borderLight }}
                        >
                          <FileText
                            className="h-4 w-4"
                            style={{ color: V8.mist }}
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <div className="font-normal text-sm">{item.title}</div>
                          <div
                            className="font-medium text-[10px] uppercase tracking-[0.08em]"
                            style={{ color: V8.graphiteLight }}
                          >
                            {item.type}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        {/* Progress bar */}
                        <div className="hidden items-center gap-2.5 md:flex">
                          <div
                            className="h-1.5 w-24 overflow-hidden rounded-full"
                            style={{ backgroundColor: V8.borderLight }}
                          >
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{
                                width: `${item.progress}%`,
                                backgroundColor: item.progress === 100 ? V8.success : V8.accent,
                              }}
                            />
                          </div>
                          <span
                            className="font-medium text-[10px]"
                            style={{ color: V8.graphiteLight }}
                          >
                            {item.progress}%
                          </span>
                        </div>

                        <span className="font-normal text-[10px]" style={{ color: V8.mist }}>
                          {item.time}
                        </span>

                        <StatusBadge status={item.status} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Back Button */}
      <div className="fixed right-8 bottom-8 z-50">
        <Link
          to="/v8"
          className="flex items-center gap-2 border px-5 py-2 font-light text-[9px] uppercase tracking-[0.2em] shadow-sm transition-all duration-300 hover:shadow-md"
          style={{
            backgroundColor: V8.bgWhite,
            borderColor: V8.border,
            color: V8.graphite,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = V8.graphite;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = V8.border;
          }}
        >
          <Home size={11} />
          Back to Landing
        </Link>
      </div>

      <HomeWidget />
    </div>
  );
}
