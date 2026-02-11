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
 * V12 SaaS Page - "The Threshold" (Work View)
 *
 * A lightweight, softer interpretation of the Constructivist Minimalism theme.
 * The SaaS view emphasizes comfort and ease of use with rounded corners,
 * lighter typography, and subtle shadows.
 *
 * Design translation:
 * - Vermillion red: Used sparingly as accent -- active states, notification dots,
 *   primary actions. Softened for less intensity.
 * - Warm cream palette: Light, airy backgrounds for comfortable long sessions.
 * - Soft geometry: Gentle rounded corners (4-8px) instead of sharp edges.
 * - Typography: Light/normal weights throughout for a more delicate feel.
 * - Shadows: Subtle elevation instead of hard borders.
 */

const V12 = {
  cream: "#F7F5F0",
  creamLight: "#FAFAF8",
  white: "#FFFFFF",
  vermillion: "#E63226",
  vermillionSoft: "#E6322610",
  blue: "#3D52D5",
  blueSoft: "#3D52D510",
  graphite: "#2A2A2A",
  graphiteMid: "#5A5A5A",
  graphiteLight: "#8A8A8A",
  warmGray: "#A8A39E",
  warmGrayLight: "#CCC8C3",
  border: "#E8E5DF",
  borderLight: "#F0EDE8",
  success: "#4A8A5A",
  successSoft: "#4A8A5A12",
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
    Active: { bg: V12.vermillionSoft, text: V12.vermillion },
    Review: { bg: V12.blueSoft, text: V12.blue },
    Complete: { bg: V12.successSoft, text: V12.success },
  };
  const c = colors[status] || colors.Active;
  return (
    <span
      className="rounded-full px-3 py-1 font-normal text-[9px] uppercase tracking-[0.12em]"
      style={{ backgroundColor: c.bg, color: c.text }}
    >
      {status}
    </span>
  );
}

export default function SaasPageV12() {
  const { companyName } = useCompanyName();

  return (
    <div
      className="flex min-h-screen w-full flex-col overflow-hidden font-sans md:flex-row"
      style={{ backgroundColor: V12.cream, color: V12.graphite }}
    >
      {/* ========== SIDEBAR ========== */}
      <aside
        className="z-20 flex w-full flex-col border-r md:w-14 lg:w-52"
        style={{ backgroundColor: V12.white, borderColor: V12.borderLight }}
      >
        {/* Logo */}
        <div
          className="flex items-center justify-center border-b p-4 lg:justify-start"
          style={{ borderColor: V12.borderLight }}
        >
          <Link to="/v12" className="transition-opacity duration-300 hover:opacity-60">
            <span className="font-normal text-[11px] uppercase tracking-[0.25em]">
              {companyName}
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-1 px-2 py-4">
          {sidebarItems.map((item, i) => (
            <Link
              key={i}
              to="/v12/app"
              className="group flex items-center justify-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 lg:justify-start"
              style={{
                backgroundColor: item.active ? V12.vermillionSoft : "transparent",
                color: item.active ? V12.vermillion : V12.graphiteLight,
              }}
              onMouseEnter={(e) => {
                if (!item.active) {
                  e.currentTarget.style.backgroundColor = V12.creamLight;
                  e.currentTarget.style.color = V12.graphite;
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = V12.graphiteLight;
                }
              }}
            >
              <item.icon className="h-4 w-4 shrink-0" strokeWidth={item.active ? 1.5 : 1.5} />
              <span className="hidden font-normal text-[10px] uppercase tracking-[0.1em] lg:block">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* User */}
        <div
          className="flex items-center justify-center gap-3 border-t px-3 pt-3 pb-10 lg:justify-start"
          style={{ borderColor: V12.borderLight }}
        >
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full font-normal text-[10px]"
            style={{ backgroundColor: V12.vermillionSoft, color: V12.vermillion }}
          >
            A
          </div>
          <div className="hidden lg:block">
            <div className="font-normal text-[11px]">Analyst</div>
            <div
              className="font-normal text-[9px] uppercase tracking-[0.1em]"
              style={{ color: V12.warmGray }}
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
          className="sticky top-0 z-10 flex items-center justify-between border-b px-6 py-4 shadow-sm"
          style={{ backgroundColor: V12.white, borderColor: V12.borderLight }}
        >
          <div className="flex items-center gap-3">
            <h1 className="font-light text-sm tracking-tight">Dashboard</h1>
            <ChevronRight className="h-3 w-3" style={{ color: V12.warmGrayLight }} />
            <span className="text-xs" style={{ color: V12.graphiteLight }}>
              Overview
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div
              className="flex items-center gap-2 rounded-lg border px-3 py-2 shadow-sm transition-all duration-200 focus-within:border-current focus-within:shadow"
              style={{ borderColor: V12.borderLight, backgroundColor: V12.creamLight }}
            >
              <Search className="h-3.5 w-3.5" style={{ color: V12.warmGray }} />
              <input
                type="text"
                placeholder="Search cases, documents..."
                className="w-36 border-none bg-transparent text-xs outline-none placeholder:text-xs focus:w-52"
                style={{
                  transition: "width 0.4s",
                  color: V12.graphite,
                }}
              />
            </div>

            {/* Notifications */}
            <button
              className="relative flex h-9 w-9 items-center justify-center rounded-lg border shadow-sm transition-all duration-200"
              style={{ borderColor: V12.borderLight, backgroundColor: V12.white }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = V12.border;
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = V12.borderLight;
                e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
              }}
            >
              <Bell className="h-3.5 w-3.5" style={{ color: V12.graphiteLight }} />
              <div
                className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: V12.vermillion }}
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
                  className="flex items-center gap-2 rounded-lg px-4 py-2 font-normal text-[11px] uppercase tracking-[0.1em] shadow-sm transition-all duration-200"
                  style={{
                    backgroundColor: V12.vermillion,
                    color: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                    e.currentTarget.style.boxShadow = "0 2px 6px rgba(230, 50, 38, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
                  }}
                >
                  <Plus className="h-3.5 w-3.5" />
                  New Case
                </button>
                <button
                  className="flex items-center gap-2 rounded-lg border px-4 py-2 font-normal text-[11px] uppercase tracking-[0.1em] shadow-sm transition-all duration-200"
                  style={{
                    borderColor: V12.borderLight,
                    color: V12.graphiteMid,
                    backgroundColor: V12.white,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = V12.border;
                    e.currentTarget.style.color = V12.graphite;
                    e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = V12.borderLight;
                    e.currentTarget.style.color = V12.graphiteMid;
                    e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
                  }}
                >
                  <Filter className="h-3.5 w-3.5" />
                  Filter
                </button>
              </div>
              <span
                className="text-[10px] uppercase tracking-[0.12em]"
                style={{ color: V12.warmGray }}
              >
                Last updated: 3 min ago
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {[
                { label: "Active Cases", value: "24", icon: Scale, delta: "+3 this week" },
                { label: "Documents", value: "1,847", icon: FileText, delta: "+128 today" },
                { label: "Queries", value: "342", icon: Search, delta: "+45 today" },
                { label: "Team", value: "12", icon: Users, delta: "2 online" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-xl border p-5 shadow-sm transition-all duration-200"
                  style={{
                    backgroundColor: V12.white,
                    borderColor: V12.borderLight,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = V12.border;
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = V12.borderLight;
                    e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
                  }}
                >
                  {/* Subtle vermillion top accent line */}
                  <div
                    className="absolute top-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: V12.vermillion }}
                  />
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="font-normal text-[10px] uppercase tracking-[0.12em]"
                      style={{ color: V12.warmGray }}
                    >
                      {stat.label}
                    </span>
                    <stat.icon
                      className="h-4 w-4"
                      style={{ color: V12.warmGrayLight }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="mb-1 font-light text-2xl tracking-tight">{stat.value}</div>
                  <div className="font-normal text-[10px]" style={{ color: V12.success }}>
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
                className="rounded-xl border p-6 shadow-sm md:col-span-8"
                style={{ backgroundColor: V12.white, borderColor: V12.borderLight }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="font-light text-sm tracking-tight">Research Activity</h2>
                    <p className="text-[10px]" style={{ color: V12.graphiteLight }}>
                      Document processing over time
                    </p>
                  </div>
                  <BarChart2
                    className="h-4 w-4"
                    style={{ color: V12.warmGrayLight }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Bar chart */}
                <div
                  className="flex h-44 items-end justify-between gap-1.5 border-b pb-4"
                  style={{ borderColor: V12.borderLight }}
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
                        className="w-full rounded-t-sm transition-colors duration-200"
                        style={{
                          backgroundColor: i >= 20 ? V12.vermillion : `${V12.graphite}10`,
                          minWidth: "4px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = V12.vermillion;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            i >= 20 ? V12.vermillion : `${V12.graphite}10`;
                        }}
                      />
                    );
                  })}
                </div>

                <div className="mt-2 flex justify-between">
                  {["Jan", "Jun", "Dec"].map((m) => (
                    <span key={m} className="text-[9px]" style={{ color: V12.warmGray }}>
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
                className="flex flex-col rounded-xl border p-6 shadow-sm md:col-span-4"
                style={{ backgroundColor: V12.white, borderColor: V12.borderLight }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="font-light text-sm tracking-tight">Quick Research</h2>
                  <Book
                    className="h-4 w-4"
                    style={{ color: V12.warmGrayLight }}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="flex-1 space-y-2">
                  {[
                    { label: "Case Law Search", desc: "Query legal precedents" },
                    { label: "Document Analysis", desc: "AI-powered review" },
                    { label: "Entity Extraction", desc: "Identify key parties" },
                  ].map((item) => (
                    <button
                      key={item.label}
                      className="group flex w-full items-center justify-between rounded-lg border p-3 text-left shadow-sm transition-all duration-200"
                      style={{ borderColor: V12.borderLight, backgroundColor: V12.white }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = V12.vermillion;
                        e.currentTarget.style.backgroundColor = V12.vermillionSoft;
                        e.currentTarget.style.boxShadow = "0 2px 6px rgba(230, 50, 38, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = V12.borderLight;
                        e.currentTarget.style.backgroundColor = V12.white;
                        e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
                      }}
                    >
                      <div>
                        <div className="font-normal text-xs">{item.label}</div>
                        <div className="text-[10px]" style={{ color: V12.graphiteLight }}>
                          {item.desc}
                        </div>
                      </div>
                      <ChevronRight
                        className="h-3.5 w-3.5 transition-all duration-200 group-hover:translate-x-0.5"
                        style={{ color: V12.warmGrayLight }}
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
                className="rounded-xl border p-6 shadow-sm md:col-span-12"
                style={{ backgroundColor: V12.white, borderColor: V12.borderLight }}
              >
                <div
                  className="mb-4 flex items-center justify-between border-b pb-4"
                  style={{ borderColor: V12.borderLight }}
                >
                  <h2 className="font-light text-sm tracking-tight">Recent Cases</h2>
                  <button
                    className="font-normal text-[10px] uppercase tracking-[0.12em] transition-opacity duration-200 hover:opacity-60"
                    style={{ color: V12.vermillion }}
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-0">
                  {recentCases.map((item, i) => (
                    <div
                      key={i}
                      className="group flex cursor-pointer items-center justify-between rounded-lg border-b px-2 py-4 transition-all duration-200 last:border-b-0"
                      style={{ borderColor: V12.borderLight }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = V12.creamLight;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-lg border"
                          style={{ borderColor: V12.borderLight, backgroundColor: V12.creamLight }}
                        >
                          <FileText
                            className="h-4 w-4"
                            style={{ color: V12.warmGray }}
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <div className="font-normal text-sm">{item.title}</div>
                          <div
                            className="font-normal text-[10px] uppercase tracking-[0.08em]"
                            style={{ color: V12.graphiteLight }}
                          >
                            {item.type}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        {/* Progress bar */}
                        <div className="hidden items-center gap-2.5 md:flex">
                          <div
                            className="h-2 w-24 overflow-hidden rounded-full"
                            style={{ backgroundColor: V12.borderLight }}
                          >
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{
                                width: `${item.progress}%`,
                                backgroundColor:
                                  item.progress === 100 ? V12.success : V12.vermillion,
                              }}
                            />
                          </div>
                          <span
                            className="font-normal text-[10px]"
                            style={{ color: V12.graphiteLight }}
                          >
                            {item.progress}%
                          </span>
                        </div>

                        <span className="text-[10px]" style={{ color: V12.warmGray }}>
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
          to="/v12"
          className="flex items-center gap-2 rounded-full border px-5 py-2.5 text-[9px] uppercase tracking-[0.2em] shadow-md transition-all duration-300 hover:shadow-lg"
          style={{
            backgroundColor: V12.white,
            borderColor: V12.borderLight,
            color: V12.graphite,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = V12.vermillion;
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(230, 50, 38, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = V12.borderLight;
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
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
