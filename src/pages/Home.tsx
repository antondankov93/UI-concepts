import { VersionCard } from "../components/VersionCard";
import { useState } from "react";
import { useCompanyName } from "../hooks/useCompanyName";
import CompanySettings from "../components/CompanySettings";
import { Settings } from "lucide-react";

export default function Home() {
  const { companyName } = useCompanyName();
  const [showSettings, setShowSettings] = useState(false);
  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden bg-white p-6 font-sans text-ink">
      <button
        onClick={() => setShowSettings(true)}
        className="fixed top-6 right-6 z-50 rounded-full border-2 border-ink bg-white p-3 shadow-lg transition-colors hover:bg-ink hover:text-white"
        title="Company Settings"
      >
        <Settings className="h-5 w-5" />
      </button>
      <div className="w-full pl-32">
        <h1 className="mb-12 font-bold text-6xl tracking-tighter">
          {companyName} <br />
          <span className="text-primary-blue">DESIGN VERSIONS</span>
        </h1>

        <div className="scrollbar-hide flex items-center gap-8 overflow-x-auto pr-12 pb-12">
          {/* V1 - Ascension */}
          <VersionCard
            version="V1"
            status="New"
            statusBgColor="bg-ai-orange"
            statusTextColor="text-white"
            description="Ascension to Clarity. Staircase motifs, overlapping geometries, and a cleaner, more ethereal composition."
            borderColor="border-primary-blue"
            to="/v1"
            hoverColor="hover:text-ai-orange"
          >
            <div className="pointer-events-none absolute inset-0 opacity-20">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-ink"
                  style={{
                    bottom: `${i * 10}%`,
                    left: `${i * 6}%`,
                    width: "100%",
                    height: "10%",
                    transform: "skewY(-15deg)",
                    transformOrigin: "bottom left",
                  }}
                />
              ))}
              <div className="absolute top-10 right-10 h-20 w-20 rounded-full bg-ai-orange" />
            </div>
          </VersionCard>

          {/* V2 - Vertical Rhythm */}
          <VersionCard
            version="V2"
            status="Latest"
            cardBgColor="bg-[#F3EEE8]"
            statusBgColor="bg-[#1C5D99]"
            statusTextColor="text-white"
            description="The Vertical Rhythm. Stripes, circles, and a vintage poster aesthetic inspired by Bauhaus."
            borderColor="border-primary-red"
            to="/v2"
            hoverColor="hover:text-[#E82C2A]"
            className="text-[#54443F]"
          >
            <div className="pointer-events-none absolute inset-0 flex justify-between px-4 opacity-10">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-full w-1 bg-[#54443F]" />
              ))}
            </div>
            <div className="absolute top-4 left-4 h-12 w-12 rounded-full bg-[#1C5D99] opacity-20" />
            <div className="absolute right-10 bottom-10 h-16 w-16 rounded-full bg-[#E82C2A] opacity-20" />
          </VersionCard>

          {/* V3 - Data Shapes */}
          <VersionCard
            version="V3"
            status="New"
            statusBgColor="bg-blue-600"
            statusTextColor="text-white"
            description="Data Shapes Logic. Geometric grids, primary colors, and bold typography in true Bauhaus fashion."
            borderColor="border-orange-400"
            to="/v3"
            hoverColor="hover:text-blue-600"
            className="rounded-3xl border-slate-100 shadow-sm"
          >
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-bl from-blue-100 to-transparent" />
              <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-tr from-orange-100 to-transparent" />
              <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200" />
            </div>
          </VersionCard>

          {/* V4 - Pure Form */}
          <VersionCard
            version="V4"
            status="Archived"
            cardBgColor="bg-[#EBE5CE]"
            statusBgColor="bg-black"
            statusTextColor="text-white"
            description="Pure Form Logic. Minimalist abstraction, tension between black masses and blue energy. Pasolini inspired."
            borderColor="border-blue-600"
            to="/v4"
            hoverColor="hover:text-blue-600"
          >
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute top-0 right-10 h-full w-4 bg-black" />
              <div className="absolute top-0 right-20 h-full w-4 bg-black" />
              <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600" />
            </div>
          </VersionCard>

          {/* V5 - Library of Mind */}
          <VersionCard
            version="V5"
            status="Archived"
            cardBgColor="bg-[#F2EFE4]"
            statusBgColor="bg-[#141414]"
            statusTextColor="text-[#F2EFE4]"
            description="The Library of Mind. Negative space silhouette emerging from chaotic lines of knowledge."
            borderColor="border-[#A855F7]"
            to="/v5"
            hoverColor="hover:text-[#A855F7]"
          >
            <div className="pointer-events-none absolute inset-0 flex items-end justify-center gap-1 px-2 opacity-10">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 rounded-sm bg-black"
                  style={{ height: `${20 + Math.random() * 60}%` }}
                />
              ))}
            </div>
            <div className="absolute bottom-4 left-0 h-1 w-full bg-purple-500 opacity-20" />
          </VersionCard>

          {/* V6 - Flowing Thought */}
          <VersionCard
            version="V6"
            status="Latest"
            cardBgColor="bg-[#FFFFFF]"
            statusBgColor="bg-black"
            statusTextColor="text-white"
            description="Flowing Thought. Organic, airy line art inspired by wind and waves. Minimalist and fluid."
            borderColor="border-black"
            to="/v6"
            hoverColor="hover:text-black"
            className="font-light"
          >
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <svg className="h-full w-full" viewBox="0 0 400 300">
                {Array.from({ length: 6 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M 0 ${50 + i * 40} Q 100 ${20 + i * 40}, 200 ${50 + i * 40} T 400 ${50 + i * 40}`}
                    fill="transparent"
                    stroke="black"
                    strokeWidth="1"
                  />
                ))}
              </svg>
            </div>
          </VersionCard>

          {/* V7 - The Pictograph */}
          <VersionCard
            version="V7"
            status="New"
            cardBgColor="bg-[#E8E4DB]"
            statusBgColor="bg-[#C05A3D]"
            statusTextColor="text-white"
            description="The Pictograph. Isotype-inspired ink illustrations on warm parchment. Scholarly, human, precise."
            borderColor="border-[#C05A3D]"
            to="/v7"
            hoverColor="hover:text-[#C05A3D]"
            versionClassName="font-serif italic"
            descriptionClassName="font-serif"
            bgImage="/v7/image1.jpeg"
          ></VersionCard>

          {/* V8 - The Moire */}
          <VersionCard
            version="V8"
            status="New"
            cardBgColor="bg-[#EDEDEB]"
            statusBgColor="bg-[#6B7B8F]"
            statusTextColor="text-white"
            description="The Moire. Optical line art, ethereal depth, and quiet mystery. Patterns emerge from parallel lines of inquiry."
            borderColor="border-[#6B7B8F]"
            to="/v8"
            hoverColor="hover:text-[#6B7B8F]"
            versionClassName="font-extralight tracking-[0.2em]"
            descriptionClassName="font-extralight"
            bgImage="/v8/image1.jpeg"
          >
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <svg className="h-full w-full" viewBox="0 0 400 300" fill="none">
                {Array.from({ length: 25 }).map((_, i) => {
                  const y = 10 + i * 12;
                  return (
                    <path
                      key={i}
                      d={`M 0 ${y} C 100 ${y - 20 + i}, 300 ${y + 20 - i}, 400 ${y}`}
                      stroke="#1C1C1C"
                      strokeWidth="0.5"
                      opacity={0.4 + (i % 5) * 0.1}
                    />
                  );
                })}
                <g opacity="0.6">
                  <circle cx="300" cy="150" r="80" stroke="#1C1C1C" strokeWidth="0.3" />
                  <circle cx="300" cy="150" r="70" stroke="#1C1C1C" strokeWidth="0.3" />
                  <circle cx="300" cy="150" r="60" stroke="#1C1C1C" strokeWidth="0.3" />
                  <circle cx="300" cy="150" r="50" stroke="#1C1C1C" strokeWidth="0.3" />
                </g>
              </svg>
            </div>
          </VersionCard>

          {/* V12 - The Threshold */}
          <VersionCard
            version="V9"
            status="New"
            cardBgColor="bg-[#F0EDE6]"
            statusBgColor="bg-[#E63226]"
            statusTextColor="text-white"
            description="The Threshold. Constructivist minimalism -- monumental color planes, solitary figures, and the search for doorways through complexity."
            borderColor="border-[#E63226]"
            to="/v12"
            hoverColor="hover:text-[#E63226]"
            versionClassName="font-light tracking-[0.15em]"
            descriptionClassName="font-normal"
            bgImage="/v12/image1.jpeg"
          >
            <div className="pointer-events-none absolute inset-0 opacity-15">
              <div className="absolute top-0 right-0 h-full w-2/5 bg-[#E63226]" />
              <div className="absolute right-[15%] bottom-[20%] h-4 w-8 bg-[#141414]" />
            </div>
          </VersionCard>
        </div>
      </div>
      {showSettings && <CompanySettings onClose={() => setShowSettings(false)} />}
    </div>
  );
}
