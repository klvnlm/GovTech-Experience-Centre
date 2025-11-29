import { motion } from "motion/react";
import { Type, Palette, Ruler, LayoutGrid, Compass } from "lucide-react";

interface DesktopNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function DesktopNav({ currentPage, onNavigate }: DesktopNavProps) {
  const navItems = [
    { id: "principles", label: "Design Principles", icon: Compass },
    { id: "typography", label: "Typography", icon: Type },
    { id: "colors", label: "Colours", icon: Palette },
    { id: "spacing", label: "Space", icon: Ruler },
    { id: "layout", label: "Layout", icon: LayoutGrid },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="hidden md:block fixed left-6 top-20 z-50"
    >
      <div className="backdrop-blur-xl bg-white/40 rounded-3xl border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] p-4">
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  relative flex items-center gap-3 px-4 py-3 rounded-2xl
                  transition-all duration-300 group overflow-hidden
                  ${isActive 
                    ? 'bg-white/60 shadow-[0_4px_16px_0_rgba(0,0,0,0.1)]' 
                    : 'hover:bg-white/40'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon 
                  size={20} 
                  className={`
                    transition-colors duration-300
                    ${isActive ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-500'}
                  `}
                />
                <span 
                  className={`
                    text-[14px] font-medium transition-colors duration-300 whitespace-nowrap
                    ${isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}
                  `}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
}
