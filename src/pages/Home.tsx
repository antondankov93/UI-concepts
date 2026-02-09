import { VersionCard } from "../components/VersionCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans flex items-center justify-center p-6 overflow-x-hidden">
      <div className="w-full pl-32">
        <h1 className="text-6xl font-bold mb-12 tracking-tighter">
          LAER <br />
          <span className="text-primary-blue">DESIGN VERSIONS</span>
        </h1>

        <div className="flex items-center gap-8 overflow-x-auto pb-12 pr-12 scrollbar-hide">
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
            <div className="absolute inset-0 pointer-events-none opacity-20">
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
              <div className="absolute top-10 right-10 w-20 h-20 bg-ai-orange rounded-full" />
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
            <div className="absolute inset-0 pointer-events-none flex justify-between px-4 opacity-10">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-1 h-full bg-[#54443F]" />
              ))}
            </div>
            <div className="absolute top-4 left-4 w-12 h-12 bg-[#1C5D99] rounded-full opacity-20" />
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#E82C2A] rounded-full opacity-20" />
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
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-100 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-orange-100 to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-slate-200 rounded-full" />
            </div>
          </VersionCard>

          {/* V4 - Pure Form */}
          <VersionCard
            version="V4"
            status="Archived"
            cardBgColor="bg-[#EBE5CE]"
            statusBgColor="bg-black"
            statusTextColor="text-white"
            description="Pure Form Logic. Minimalist abstraction, tension between black masses and red energy. Pasolini inspired."
            borderColor="border-orange-600"
            to="/v4"
            hoverColor="hover:text-orange-600"
          >
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-0 right-10 w-4 h-full bg-black" />
              <div className="absolute top-0 right-20 w-4 h-full bg-black" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-orange-600 rounded-full" />
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
            <div className="absolute inset-0 pointer-events-none opacity-10 flex items-end justify-center gap-1 px-2">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-black w-2 rounded-sm"
                  style={{ height: `${20 + Math.random() * 60}%` }}
                />
              ))}
            </div>
            <div className="absolute bottom-4 left-0 w-full h-1 bg-purple-500 opacity-20" />
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
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300">
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
        </div>
      </div>
    </div>
  );
}
