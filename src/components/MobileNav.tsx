import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Type, Palette, Ruler, LayoutGrid, Compass } from "lucide-react";

interface MobileNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function MobileNav({ currentPage, onNavigate }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "principles", label: "Design Principles", icon: Compass },
    { id: "typography", label: "Typography", icon: Type },
    { id: "colors", label: "Colours", icon: Palette },
    { id: "spacing", label: "Space", icon: Ruler },
    { id: "layout", label: "Layout", icon: LayoutGrid },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 z-50 backdrop-blur-xl bg-white/40 rounded-2xl border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] p-3"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X size={24} className="text-gray-700" />
        ) : (
          <Menu size={24} className="text-gray-700" />
        )}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed top-20 right-6 left-6 z-50"
            >
              <div className="backdrop-blur-xl bg-white/40 rounded-3xl border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] p-4">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentPage === item.id;
                    
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className={`
                          flex items-center gap-3 px-4 py-3 rounded-2xl
                          transition-all duration-300
                          ${isActive 
                            ? 'bg-white/60 shadow-[0_4px_16px_0_rgba(0,0,0,0.1)]' 
                            : 'hover:bg-white/40 active:bg-white/50'
                          }
                        `}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon 
                          size={20} 
                          className={`
                            transition-colors duration-300
                            ${isActive ? 'text-blue-600' : 'text-gray-600'}
                          `}
                        />
                        <span 
                          className={`
                            text-[14px] font-medium transition-colors duration-300
                            ${isActive ? 'text-gray-900' : 'text-gray-700'}
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
          </>
        )}
      </AnimatePresence>
    </>
  );
}
