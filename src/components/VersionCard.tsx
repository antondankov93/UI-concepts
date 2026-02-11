import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface VersionCardProps {
  version: string;
  status: string;
  description: string;
  to: string;
  cardBgColor?: string;
  statusBgColor: string;
  statusTextColor?: string;
  borderColor: string;
  hoverColor: string;
  className?: string;
  children?: React.ReactNode;
  versionClassName?: string;
  descriptionClassName?: string;
  bgImage?: string;
}

export function VersionCard({
  version,
  description,
  to,
  cardBgColor = "bg-white",
  borderColor,
  hoverColor,
  className = "",
  children,
  versionClassName = "font-bold",
  descriptionClassName = "font-normal",
  bgImage,
}: VersionCardProps) {
  return (
    <div
      className={`relative ${cardBgColor} h-72 min-w-[400px] p-8 group transition-shadow overflow-hidden ${className}`}
    >
      {bgImage && (
        <div
          className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
      )}
      {children}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <h2 className={`text-4xl text-black ${versionClassName}`}>{version}</h2>
        </div>
        <p
          className={`mb-8 text-lg opacity-80 border-l-4 ${borderColor} pl-4 line-clamp-3 ${descriptionClassName}`}
        >
          {description}
        </p>
        <div className="mt-auto">
          <Link
            to={to}
            className={`inline-flex items-center gap-4 font-bold ${hoverColor} transition-colors`}
          >
            <span className={versionClassName === "font-serif" ? "font-serif" : ""}>
              EXPLORE VERSION
            </span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
