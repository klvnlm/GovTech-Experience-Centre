import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DarkModeProvider } from "./components/DarkModeContext";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { DesktopNav } from "./components/DesktopNav";
import { MobileNav } from "./components/MobileNav";
import { GlassCard } from "./components/GlassCard";
import { DesignPrinciplesSection } from "./components/DesignPrinciplesSection";
import { TypographySection } from "./components/TypographySection";
import { ColorSection } from "./components/ColorSection";
import { SpacingSection } from "./components/SpacingSection";
import { ComponentsSection } from "./components/ComponentsSection";
import { Type, Palette, Ruler, LayoutGrid, Sparkles, Home, Compass } from "lucide-react";

const sections = [
  { id: "principles", name: "Design Principles", icon: Compass, component: DesignPrinciplesSection, description: "Core design philosophy guiding exhibition experiences. Visitor engagement, accessibility standards, and storytelling approaches" },
  { id: "typography", name: "Typography", icon: Type, component: TypographySection, description: "Typographic hierarchy and scale systems. Font families, sizes, and spacing optimised for large-format viewing" },
  { id: "colors", name: "Colours", icon: Palette, component: ColorSection, description: "Brand colour palette and guidelines. Contrast ratios, accessibility compliance, and application across exhibition touchpoints" },
  { id: "spacing", name: "Space", icon: Ruler, component: SpacingSection, description: "Spatial planning standards. Visitor flow widths, reach distances, viewing zones, and lighting requirements" },
  { id: "layout", name: "Layout", icon: LayoutGrid, component: ComponentsSection, description: "Wall panel design and text placement guidelines. Typography alignment, arrangement standards, and positioning for QR codes and interactive screens" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Scroll to top whenever activeSection changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);
  
  const ActiveComponent = sections.find(s => s.id === activeSection)?.component;

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
        {/* Dark Mode Toggle - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="fixed bottom-6 left-6 z-50"
        >
          <DarkModeToggle />
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-pink-400/30 to-orange-400/30 rounded-full blur-3xl"
          />
        </div>

        <AnimatePresence mode="wait">
          {!activeSection ? (
            // Homepage
            <motion.div
              key="homepage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-16"
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-20 md:mb-16"
              >
                <div className="space-y-4">
                  <p className="text-[16px] text-gray-700 dark:text-gray-200 transition-colors">
                    Experience Centre Gallery<br />and Exhibition Design System
                  </p>
                  <h1 className="text-[48px] md:text-[64px] leading-none text-[#3d3d3d] dark:text-white font-[Inter] font-bold font-normal transition-colors" style={{ letterSpacing: '-0.01em' }}>
                    GovTech<br />Experience Centre
                  </h1>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="mb-12">
                <div className="md:fixed md:bottom-[-80px] md:left-0 md:right-0 flex flex-col md:flex-row md:h-[420px] md:items-end gap-4 md:gap-0 px-6 md:px-8 max-w-7xl md:mx-auto">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    
                    // Calculate if this card is adjacent to the hovered card
                    const isAdjacent = hoveredIndex !== null && 
                      (index === hoveredIndex - 1 || index === hoveredIndex + 1);
                    
                    // Calculate y offset for adjacent cards
                    const adjacentY = isAdjacent ? -15 : 0;
                    
                    return (
                      <motion.button
                        key={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: window.innerWidth >= 768 ? adjacentY : 0 }}
                        transition={{ 
                          delay: 0.1 + index * 0.05,
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }}
                        onClick={() => setActiveSection(section.id)}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        whileHover={{ scale: 1.02, y: window.innerWidth >= 768 ? -60 : 0 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full md:w-[30%] h-auto md:h-full relative rounded-[2rem] flex flex-col items-start justify-start pt-8 pl-8 pr-8 pb-8 md:pb-8 backdrop-blur-xl border overflow-hidden bg-white/40 dark:bg-gray-800/40 text-gray-700 dark:text-gray-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)] border-white/30 dark:border-gray-700/30 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        style={{ marginLeft: index === 0 ? 0 : window.innerWidth >= 768 ? '-3%' : 0 }}
                        aria-label={`Navigate to ${section.name}`}
                      >
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-start gap-4 text-left">
                          <Icon className="w-8 h-8 text-gray-900 dark:text-white" />
                          <div className="flex flex-col gap-2 items-start">
                            <span className="font-semibold text-xl text-gray-900 dark:text-white text-left">{section.name}</span>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-left">{section.description}</p>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ) : (
            // Section Page
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 min-h-screen"
            >
              {/* Home Button */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="fixed top-6 left-6 z-50"
              >
                <motion.button
                  onClick={() => setActiveSection(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 rounded-2xl border border-white/60 dark:border-gray-700/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  aria-label="Return to homepage"
                >
                  <Home size={24} className="text-gray-700 dark:text-gray-200" />
                </motion.button>
              </motion.div>

              {/* Navigation Components */}
              <DesktopNav currentPage={activeSection} onNavigate={setActiveSection} />
              <MobileNav currentPage={activeSection} onNavigate={setActiveSection} />

              {/* Section Content */}
              <div className="max-w-[1600px] mx-auto px-6 md:px-8 py-16 md:pl-64">
                {ActiveComponent && <ActiveComponent />}
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="max-w-[1600px] mx-auto px-6 md:px-8 pb-16 md:pl-64"
              >
                <GlassCard className="p-10">
                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Version 1.0
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Last updated: 21 January 2026
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DarkModeProvider>
  );
}