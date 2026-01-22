import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "./DarkModeContext";

export function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 rounded-2xl border border-white/60 dark:border-gray-700/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDarkMode ? (
          <Sun size={24} className="text-yellow-400" />
        ) : (
          <Moon size={24} className="text-gray-700" />
        )}
      </motion.div>
    </motion.button>
  );
}
