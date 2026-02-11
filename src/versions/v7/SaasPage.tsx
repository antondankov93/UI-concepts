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
 * V7 SaaS Page - "The Pictograph" (Work View)
 *
 * A subdued, professional interface for extended use. The warm parchment
 * palette is softened to near-white for readability. The pictographic
 * identity carries through via:
 * - 1px border language (lighter than the landing page's 2px strokes)
 * - Serif typography for headings (scholarly tone)
 * - Terracotta accent color for active states
 * - Warm neutral palette instead of cold grays
 * - Generous whitespace echoing the illustration compositions
 */

const V7 = {
  bg: "#F5F2EC",
  white: "#FDFCFA",
  ink: "#1A1A1A",
  terracotta: "#C05A3D",
  sage: "#4A6741",
  warmGray: "#9B948A",
  warmGrayLight: "#D4CFC7",
  border: "#E3DFD7",
  borderLight: "#EBE8E2",
  cardBg: "#FDFCFA",
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
    Active: { bg: `${V7.terracotta}15`, text: V7.terracotta },
    Review: { bg: `${V7.sage}15`, text: V7.sage },
    Complete: { bg: `${V7.warmGrayLight}`, text: V7.warmGray },
  };
  const c = colors[status] || colors.Active;
  return (
    <span
      className="rounded-sm px-2.5 py-1 font-bold text-[10px] uppercase tracking-[0.1em]"
      style={{ backgroundColor: c.bg, color: c.text }}
    >
      {status}
    </span>
  );
}

export default function SaasPageV7() {
  const { companyName } = useCompanyName();

  return (
    <div
      className="flex min-h-screen w-full flex-col overflow-hidden font-sans md:flex-row"
      style={{ backgroundColor: V7.bg, color: V7.ink }}
    >
      {/* ========== SIDEBAR ========== */}
      <aside
        className="z-20 flex w-full flex-col border-r md:w-16 lg:w-56"
        style={{ backgroundColor: V7.white, borderColor: V7.border }}
      >
        {/* Logo */}
        <div
          className="flex items-center justify-center border-b p-4 lg:justify-start"
          style={{ borderColor: V7.border }}
        >
          <Link to="/v7" className="transition-opacity hover:opacity-60">
            <span
              className="font-bold text-sm uppercase tracking-[0.2em]"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              {companyName}
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-0.5 px-2 py-3">
          {sidebarItems.map((item, i) => (
            <Link
              key={i}
              to="/v7/app"
              className="group flex items-center justify-center gap-3 rounded-sm px-3 py-2.5 transition-all lg:justify-start"
              style={{
                backgroundColor: item.active ? `${V7.terracotta}10` : "transparent",
                color: item.active ? V7.terracotta : V7.warmGray,
              }}
              onMouseEnter={(e) => {
                if (!item.active) {
                  e.currentTarget.style.backgroundColor = `${V7.ink}05`;
                  e.currentTarget.style.color = V7.ink;
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = V7.warmGray;
                }
              }}
            >
              <item.icon className="h-4 w-4 shrink-0" strokeWidth={item.active ? 2 : 1.5} />
              <span className="hidden font-semibold text-xs uppercase tracking-[0.1em] lg:block">
                {item.label}
              </span>
              {item.active && (
                <div
                  className="ml-auto hidden h-1.5 w-1.5 rounded-full lg:block"
                  style={{ backgroundColor: V7.terracotta }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* User Profile */}
        <div
          className="flex items-center justify-center gap-3 border-t px-3 py-4 lg:justify-start"
          style={{ borderColor: V7.border }}
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-sm font-bold text-xs"
            style={{ backgroundColor: `${V7.terracotta}15`, color: V7.terracotta }}
          >
            A
          </div>
          <div className="hidden lg:block">
            <div className="font-bold text-xs">Analyst</div>
            <div
              className="font-semibold text-[9px] uppercase tracking-[0.1em]"
              style={{ color: V7.warmGray }}
            >
              Pro Plan
            </div>
          </div>
        </div>
      </aside>

      {/* ========== MAIN CONTENT ========== */}
      <main className="flex flex-1 flex-col overflow-hidden" style={{ backgroundColor: V7.bg }}>
        {/* Header Bar */}
        <header
          className="sticky top-0 z-10 flex items-center justify-between px-5 py-3"
          style={{ backgroundColor: V7.white, borderColor: V7.border }}
        >
          <div className="flex items-center gap-3">
            <h1
              className="font-normal text-base tracking-tight"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              Dashboard
            </h1>
            <ChevronRight className="h-3 w-3 opacity-30" />
            <span className="font-light text-xs" style={{ color: V7.warmGray }}>
              Overview
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div
              className="flex items-center gap-2 rounded-sm border px-3 py-1.5 transition-all focus-within:border-current"
              style={{ borderColor: V7.borderLight }}
            >
              <Search className="h-3.5 w-3.5 opacity-40" />
              <input
                type="text"
                placeholder="Search cases, documents..."
                className="w-40 border-none bg-transparent text-xs outline-none placeholder:font-light focus:w-56"
                style={{ transition: "width 0.3s" }}
              />
            </div>

            {/* Notifications */}
            <button
              className="relative flex h-8 w-8 items-center justify-center rounded-sm border transition-colors"
              style={{ borderColor: V7.borderLight }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = V7.warmGrayLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = V7.borderLight;
              }}
            >
              <Bell className="h-3.5 w-3.5 opacity-50" />
              <div
                className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: V7.terracotta }}
              />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className="mx-auto max-w-7xl space-y-5">
            {/* Quick Actions Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  className="flex items-center gap-2 rounded-sm border px-4 py-2 font-semibold text-xs uppercase tracking-[0.1em] transition-all"
                  style={{
                    borderColor: V7.ink,
                    backgroundColor: V7.ink,
                    color: V7.white,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = V7.terracotta;
                    e.currentTarget.style.borderColor = V7.terracotta;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = V7.ink;
                    e.currentTarget.style.borderColor = V7.ink;
                  }}
                >
                  <Plus className="h-3.5 w-3.5" />
                  New Case
                </button>
                <button
                  className="flex items-center gap-2 rounded-sm border px-4 py-2 font-semibold text-xs uppercase tracking-[0.1em] transition-colors"
                  style={{ borderColor: V7.borderLight, color: V7.warmGray }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = V7.warmGrayLight;
                    e.currentTarget.style.color = V7.ink;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = V7.borderLight;
                    e.currentTarget.style.color = V7.warmGray;
                  }}
                >
                  <Filter className="h-3.5 w-3.5" />
                  Filter
                </button>
              </div>
              <span
                className="font-semibold text-[10px] uppercase tracking-[0.15em]"
                style={{ color: V7.warmGray }}
              >
                Last updated: 3 min ago
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {[
                { label: "Active Cases", value: "24", icon: Scale, delta: "+3 this week" },
                {
                  label: "Documents Processed",
                  value: "1,847",
                  icon: FileText,
                  delta: "+128 today",
                },
                { label: "Research Queries", value: "342", icon: Search, delta: "+45 today" },
                { label: "Team Members", value: "12", icon: Users, delta: "2 online" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group border p-5 transition-all"
                  style={{ backgroundColor: V7.cardBg, borderColor: V7.borderLight }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = V7.warmGrayLight;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = V7.borderLight;
                  }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="font-bold text-[10px] uppercase tracking-[0.15em]"
                      style={{ color: V7.warmGray }}
                    >
                      {stat.label}
                    </span>
                    <stat.icon className="h-4 w-4 opacity-20" />
                  </div>
                  <div
                    className="mb-1 font-light text-3xl tracking-tight"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-medium text-[10px]" style={{ color: V7.sage }}>
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
                transition={{ delay: 0.3, duration: 0.6 }}
                className="border p-5 md:col-span-8"
                style={{ backgroundColor: V7.cardBg, borderColor: V7.borderLight }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2
                      className="font-normal text-base tracking-tight"
                      style={{ fontFamily: "Merriweather, serif" }}
                    >
                      Research Activity
                    </h2>
                    <p className="font-medium text-[10px]" style={{ color: V7.warmGray }}>
                      Document processing over time
                    </p>
                  </div>
                  <BarChart2 className="h-4 w-4 opacity-20" />
                </div>

                {/* Minimalist chart visualization */}
                <div
                  className="flex h-44 items-end justify-between gap-1.5 border-b pb-4"
                  style={{ borderColor: V7.border }}
                >
                  {Array.from({ length: 24 }).map((_, i) => {
                    const height = 15 + Math.sin(i * 0.5 + 1) * 30 + Math.random() * 25;
                    return (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: i * 0.03, ease: "easeOut" }}
                        className="w-full transition-colors duration-200"
                        style={{
                          backgroundColor: i >= 20 ? V7.terracotta : `${V7.ink}10`,
                          minWidth: "4px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = V7.terracotta;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            i >= 20 ? V7.terracotta : `${V7.ink}10`;
                        }}
                      />
                    );
                  })}
                </div>

                <div className="mt-2 flex justify-between">
                  <span className="font-medium text-[9px]" style={{ color: V7.warmGray }}>
                    Jan
                  </span>
                  <span className="font-medium text-[9px]" style={{ color: V7.warmGray }}>
                    Jun
                  </span>
                  <span className="font-medium text-[9px]" style={{ color: V7.warmGray }}>
                    Dec
                  </span>
                </div>
              </motion.div>

              {/* Quick Research Panel */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col border p-5 md:col-span-4"
                style={{ backgroundColor: V7.cardBg, borderColor: V7.border }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h2
                    className="font-normal text-base tracking-tight"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    Quick Research
                  </h2>
                  <Book className="h-4 w-4 opacity-20" />
                </div>

                <div className="flex-1 space-y-3">
                  {[
                    { label: "Case Law Search", desc: "Query legal precedents" },
                    { label: "Document Analysis", desc: "AI-powered review" },
                    { label: "Entity Extraction", desc: "Identify key parties" },
                  ].map((item) => (
                    <button
                      key={item.label}
                      className="group flex w-full items-center justify-between border p-3 text-left transition-all"
                      style={{ borderColor: V7.border }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = V7.terracotta;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = V7.border;
                      }}
                    >
                      <div>
                        <div className="font-semibold text-xs">{item.label}</div>
                        <div className="font-light text-[10px]" style={{ color: V7.warmGray }}>
                          {item.desc}
                        </div>
                      </div>
                      <ChevronRight className="h-3.5 w-3.5 opacity-30 transition-all group-hover:translate-x-0.5 group-hover:opacity-60" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Cases Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="border p-5 md:col-span-12"
                style={{ backgroundColor: V7.cardBg, borderColor: V7.border }}
              >
                <div
                  className="mb-4 flex items-center justify-between border-b pb-4"
                  style={{ borderColor: V7.border }}
                >
                  <h2
                    className="font-normal text-base tracking-tight"
                    style={{ fontFamily: "Merriweather, serif" }}
                  >
                    Recent Cases
                  </h2>
                  <button
                    className="font-bold text-[10px] uppercase tracking-[0.15em] transition-opacity hover:opacity-60"
                    style={{ color: V7.terracotta }}
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-0">
                  {recentCases.map((item, i) => (
                    <div
                      key={i}
                      className="group flex cursor-pointer items-center justify-between border-b px-1 py-3 transition-colors last:border-b-0"
                      style={{ borderColor: V7.border }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${V7.bg}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-sm border transition-colors"
                          style={{ borderColor: V7.border }}
                        >
                          <FileText className="h-4 w-4 opacity-40" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{item.title}</div>
                          <div
                            className="font-semibold text-[10px] uppercase tracking-[0.1em]"
                            style={{ color: V7.warmGray }}
                          >
                            {item.type}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        {/* Progress bar */}
                        <div className="hidden items-center gap-2 md:flex">
                          <div
                            className="h-1.5 w-24 overflow-hidden rounded-full"
                            style={{ backgroundColor: V7.border }}
                          >
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${item.progress}%`,
                                backgroundColor: item.progress === 100 ? V7.sage : V7.terracotta,
                              }}
                            />
                          </div>
                          <span className="font-medium text-[10px]" style={{ color: V7.warmGray }}>
                            {item.progress}%
                          </span>
                        </div>

                        <span className="font-light text-[10px]" style={{ color: V7.warmGray }}>
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
      <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
        <Link
          to="/v7"
          className="flex items-center gap-2 border px-6 py-2 font-bold text-[10px] uppercase tracking-[0.2em] shadow-sm transition-all hover:shadow-md"
          style={{
            backgroundColor: V7.white,
            borderColor: V7.border,
            color: V7.ink,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = V7.ink;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = V7.border;
          }}
        >
          <Home size={12} />
          Back to Landing
        </Link>
      </div>

      <HomeWidget />
    </div>
  );
}
