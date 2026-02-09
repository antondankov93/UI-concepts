import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

export function HomeWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-8 left-8 z-50"
    >
      <Link
        to="/"
        className="group flex items-center gap-3 bg-white/80 backdrop-blur-md border border-gray-200 opacity-20 hover:opacity-100 p-2 pr-4 rounded-full shadow-lg hover:shadow-xl hover:border-primary-blue transition-all duration-300 text-ink"
      >
        <div className="w-10 h-10 rounded-full bg-primary-blue flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
          <Home size={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold">Home</span>
        </div>
      </Link>
    </motion.div>
  );
}
