import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DesignPrinciplesSection } from "./components/DesignPrinciplesSection";
import { TypographySection } from "./components/TypographySection";
import { ColorSection } from "./components/ColorSection";
import { ComponentsSection } from "./components/ComponentsSection";
import { SpacingSection } from "./components/SpacingSection";
import { GlassCard } from "./components/GlassCard";
import { DesktopNav } from "./components/DesktopNav";
import { MobileNav } from "./components/MobileNav";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
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
            className="relative z-10 max-w-7xl mx-auto px-2 md:px-8 py-16"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16"
            >
              <div className="space-y-4">
                <p className="text-[16px] text-gray-700">
                  Experience Centre Gallery<br />and Exhibition Design System
                </p>
                <h1 className="text-[48px] md:text-[64px] leading-none text-[#3d3d3d] font-[Inter] font-bold font-normal" style={{ letterSpacing: '-0.01em' }}>
                  GovTech<br />Experience Centre
                </h1>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="mb-12">
              <div className="md:fixed md:bottom-[-80px] md:left-0 md:right-0 flex flex-col md:flex-row md:h-[420px] md:items-end gap-4 md:gap-0 px-2 md:px-8 max-w-7xl md:mx-auto">
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
                      className="w-full md:w-[30%] h-auto md:h-full relative rounded-[2rem] flex flex-col items-start justify-start pt-8 pl-8 pr-8 pb-8 md:pb-8 backdrop-blur-xl border overflow-hidden bg-white/40 text-gray-700 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)] border-white/30 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50"
                      style={{ marginLeft: index === 0 ? 0 : window.innerWidth >= 768 ? '-3%' : 0 }}
                    >
                      {/* Background Icon - Playful */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      >
                        <Icon 
                          className="w-64 h-64 text-gray-400/10"
                          style={{ transform: 'rotate(-15deg)' }}
                        />
                      </motion.div>
                      
                      {/* Foreground Content */}
                      <div className="relative z-10 flex flex-col items-start gap-2 text-left">
                        <Icon className="w-6 h-6" />
                        <div className="flex flex-col gap-1 items-start">
                          <span className="font-semibold text-lg text-left">{section.name}</span>
                          <p className="text-sm text-gray-600 leading-tight text-left">{section.description}</p>
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
                className="backdrop-blur-xl bg-white/40 rounded-2xl border border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] p-3"
              >
                <Home size={24} className="text-gray-700" />
              </motion.button>
            </motion.div>

            {/* Navigation Components */}
            <DesktopNav currentPage={activeSection} onNavigate={setActiveSection} />
            <MobileNav currentPage={activeSection} onNavigate={setActiveSection} />

            {/* Section Content */}
            <div className="max-w-[1600px] mx-auto px-2 md:px-8 py-16 md:pl-64">
              {ActiveComponent && <ActiveComponent />}
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-[1600px] mx-auto px-2 md:px-8 pb-16 md:pl-64"
            >
              <GlassCard className="p-10">
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-500">
                    Version 1.0
                  </p>
                  <p className="text-sm text-gray-500">
                    Last updated: 17 December 2024
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}