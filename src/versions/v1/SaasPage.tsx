import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { HomeWidget } from "../../components/HomeWidget";
import { useCompanyName } from "../../hooks/useCompanyName";

export default function SaasPageV1() {
  const { companyName } = useCompanyName();
  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-primary-blue selection:text-white">
      <div className="h-screen flex flex-col">
        {/* Header */}
        <div className="h-18 border-b border-gray-200 flex items-center justify-between px-6 bg-white/50 backdrop-blur-sm z-20">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight">{companyName}</h1>
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium">
              APP
            </span>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* Sidebar */}
          <div className="md:col-span-2 border-r border-gray-200 p-4 space-y-1 bg-white/30">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-9 flex items-center px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-white hover:text-primary-blue hover:shadow-sm transition-all cursor-pointer border border-transparent hover:border-gray-100"
              >
                Option {i}
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="md:col-span-7 p-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-8 text-ink">Analytics Dashboard</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Widget A */}
                <div className="bg-white p-6 rounded-none border border-gray-200 hover:border-primary-blue transition-colors group relative">
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-300 group-hover:text-primary-blue/50">
                    WIDGET_A
                  </div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                    Efficiency
                  </div>
                  <div className="text-4xl font-light text-ink">84%</div>

                  <div className="w-full bg-gray-100 h-1 mt-8">
                    <div className="h-full w-[84%] bg-primary-blue"></div>
                  </div>
                </div>

                {/* Widget B */}
                <div className="bg-white p-6 rounded-none border border-gray-200 hover:border-primary-blue transition-colors group relative">
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-300 group-hover:text-primary-blue/50">
                    WIDGET_B
                  </div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                    Volume
                  </div>
                  <div className="text-4xl font-light text-ink">12.5k</div>
                  <div className="flex gap-1 mt-8 items-end h-10">
                    {[40, 60, 30, 80, 50, 90, 45, 70].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="flex-1 bg-gray-200 hover:bg-primary-blue transition-colors"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="md:col-span-3 border-l border-gray-200 p-6 bg-white/30">
            <div className="uppercase tracking-widest text-xs font-bold text-gray-400 mb-6">
              Activity Log
            </div>
            <div className="space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-200"></div>

              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex gap-4 items-start group relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-300 mt-1.5 group-hover:border-primary-blue transition-colors z-10"></div>
                  <div>
                    <div className="text-sm font-medium text-ink group-hover:text-primary-blue transition-colors">
                      Update {i}
                    </div>
                    <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                      2026-01-23 12:4{i}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Back Button - Bottom of the screen */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Link
          to="/v1"
          className="bg-primary-blue text-white px-8 py-3 rounded-none font-bold uppercase tracking-widest text-xs shadow-[4px_4px_0px_0px_var(--color-ink)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-2 border-2 border-ink"
        >
          <Home size={14} />
          Back to Landing
        </Link>
      </div>
      <HomeWidget />
    </div>
  );
}
