import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { useState } from "react";

const brandColors = [
  { name: "Cyan", hex: "#00C0F3", role: "Primary", bg: "#00C0F3" },
  { name: "Magenta", hex: "#BA2FA2", role: "Secondary", bg: "#BA2FA2" },
  { name: "Red", hex: "#FA3330", role: "Accent", bg: "#FA3330" },
  { name: "Dark Grey", hex: "#303D47", role: "Text", bg: "#303D47" },
  { name: "Grey", hex: "#A0A0A0", role: "Secondary", bg: "#A0A0A0" },
];

const gradients = [
  {
    name: "Cyan to Magenta",
    from: "#00C0F3",
    to: "#BA2FA2",
    gradient: "linear-gradient(135deg, #00C0F3, #BA2FA2)",
    usage: "Primary gradient for hero elements and zone headers"
  },
  {
    name: "Magenta to Red",
    from: "#BA2FA2",
    to: "#FA3330",
    gradient: "linear-gradient(135deg, #BA2FA2, #FA3330)",
    usage: "Secondary gradient for accent panels and highlights"
  }
];

const whiteBackgroundCombos = [
  { color: "#303D47", name: "Dark Grey Text", accessibility: "AAA" },
  { color: "#00C0F3", name: "Cyan Accent", accessibility: "AA" },
  { color: "#A0A0A0", name: "Grey Text", accessibility: "Large only" },
];

const darkBackgroundCombos = [
  { color: "#FFFFFF", name: "White Text", accessibility: "AAA" },
  { color: "#00C0F3", name: "Cyan Accent", accessibility: "AAA" },
  { color: "#BA2FA2", name: "Magenta Accent", accessibility: "AAA" },
];

export function ColorSection() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="space-y-4 md:space-y-8 w-[98vw] md:w-full md:max-w-screen-2xl mx-auto">
      <GlassCard className="p-6 md:p-12" delay={0.1}>
        <div className="space-y-6">
          <div>
            <h2 className="text-gray-900 mb-2 text-[44px] font-bold m-[0px]">Colours</h2>
            <p className="text-gray-600">Official colours from GovTech Brand Guidelines. Click any colour swatch to copy its hex value.</p>
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {brandColors.map((color, index) => (
          <motion.div
            key={color.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.15 + index * 0.05,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <GlassCard 
              className="p-0 overflow-hidden cursor-pointer group"
              delay={0}
              onClick={() => copyToClipboard(color.hex)}
            >
              <div 
                className="h-32 md:h-40 relative transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: color.bg }}
              >
                {copiedColor === color.hex && (
                  <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 space-y-1">
                <p className="text-gray-900 font-medium">{color.name}</p>
                <p className="text-sm font-mono text-gray-600">{color.hex}</p>
                <p className="text-xs text-gray-500">{color.role}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <GlassCard className="p-6 md:p-12" delay={0.4}>
        <div className="space-y-6">
          <div>
            <h2 className="text-gray-900 mb-2 text-[44px] font-bold m-[0px]">Brand Gradients</h2>
            <p className="text-gray-600">Official gradient combinations for large format graphics and feature walls</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            {gradients.map((gradient, index) => (
              <motion.div
                key={gradient.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="cursor-pointer"
                onClick={() => copyToClipboard(`${gradient.from} → ${gradient.to}`)}
              >
                <div className="space-y-4">
                  <div 
                    className="h-32 md:h-40 rounded-3xl shadow-xl relative overflow-hidden group"
                    style={{ background: gradient.gradient }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
                    {copiedColor === `${gradient.from} → ${gradient.to}` && (
                      <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                        <div className="bg-white rounded-full p-2 shadow-lg">
                          <Check className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-900 font-medium">{gradient.name}</p>
                    <p className="text-sm font-mono text-gray-600">{gradient.from} → {gradient.to}</p>
                    <p className="text-sm text-gray-600">{gradient.usage}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 space-y-3 bg-gray-50 rounded-2xl p-4 md:p-6">
            <h4 className="text-gray-900 font-medium">Gradient Application Guidelines</h4>
            <ul className="space-y-2">
              <li className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                <span className="text-gray-400">•</span>
                <span>Use 135° angle (diagonal top-right to bottom-left) for consistency</span>
              </li>
              <li className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                <span className="text-gray-400">•</span>
                <span>Apply to large-format graphics, feature walls, and zone identifiers</span>
              </li>
              <li className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                <span className="text-gray-400">•</span>
                <span>Ensure sufficient contrast when placing white text over gradients</span>
              </li>
              <li className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                <span className="text-gray-400">•</span>
                <span>Can be used as background for welcome signage and zone dividers</span>
              </li>
            </ul>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="p-6 md:p-12" delay={0.6}>
        <div className="space-y-6">
          <div>
            <h2 className="text-gray-900 mb-2 text-[44px] font-bold m-[0px]">Text & Graphics Combinations</h2>
            <p className="text-gray-600">Recommended colour combinations for signage and labels</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            {/* On White Backgrounds */}
            <div className="space-y-4">
              <h4 className="text-gray-900">On White Backgrounds</h4>
              <div className="bg-white rounded-3xl border-2 border-gray-200 p-4 md:p-6 space-y-3">
                {whiteBackgroundCombos.map((combo, index) => (
                  <motion.div
                    key={combo.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="flex items-center justify-between p-3 md:p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm"
                        style={{ backgroundColor: combo.color }}
                      />
                      <div>
                        <p className="text-gray-900 font-medium text-sm md:text-base">{combo.name}</p>
                        <p className="text-xs text-gray-500 font-mono">{combo.color}</p>
                      </div>
                    </div>
                    <span className={`px-2 md:px-3 py-1 rounded-md text-xs md:text-sm ${
                      combo.accessibility === 'AAA' 
                        ? 'bg-green-100 text-green-800' 
                        : combo.accessibility === 'AA'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {combo.accessibility}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* On Dark Backgrounds */}
            <div className="space-y-4">
              <h4 className="text-gray-900">On Dark Backgrounds</h4>
              <div className="bg-[#303D47] rounded-3xl p-4 md:p-6 space-y-3">
                {darkBackgroundCombos.map((combo, index) => (
                  <motion.div
                    key={combo.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="flex items-center justify-between p-3 md:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm"
                        style={{ backgroundColor: combo.color }}
                      />
                      <div>
                        <p className="text-white font-medium text-sm md:text-base">{combo.name}</p>
                        <p className="text-xs text-white/60 font-mono">{combo.color}</p>
                      </div>
                    </div>
                    <span className="px-2 md:px-3 py-1 rounded-md text-xs md:text-sm bg-green-500 text-white">
                      {combo.accessibility}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="p-6 md:p-12" delay={0.7}>
        <div className="space-y-6">
          <div>
            <h2 className="text-gray-900 mb-2 text-[44px] font-bold m-[0px]">Exhibition Space Colours</h2>
            <p className="text-gray-600">Paint and material specifications for walls and floors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* White Walls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <GlassCard className="p-0 overflow-hidden" delay={0}>
                <div className="h-32 md:h-40 bg-white border-b-2 border-gray-100" />
                <div className="p-4 md:p-6 space-y-2">
                  <h4 className="text-gray-900">White Walls</h4>
                  <p className="text-sm text-gray-600 font-medium">Primary wall colour</p>
                  <p className="text-sm text-gray-500">Clean backdrop for colourful graphics</p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Light Grey Walls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
            >
              <GlassCard className="p-0 overflow-hidden" delay={0}>
                <div className="h-32 md:h-40 bg-gray-100" />
                <div className="p-4 md:p-6 space-y-2">
                  <h4 className="text-gray-900">Light Grey Walls</h4>
                  <p className="text-sm text-gray-600 font-medium">Secondary wall option</p>
                  <p className="text-sm text-gray-500">Subtle contrast for specific zones</p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Gradient Feature Walls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <GlassCard className="p-0 overflow-hidden" delay={0}>
                <div 
                  className="h-32 md:h-40"
                  style={{ background: "linear-gradient(90deg, #BA2FA2, #00C0F3)" }}
                />
                <div className="p-4 md:p-6 space-y-2">
                  <h4 className="text-gray-900">Gradient Feature Walls</h4>
                  <p className="text-sm text-gray-600 font-medium">Accent wall option</p>
                  <p className="text-sm text-gray-500">For zone entrances and hero moments</p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="p-6 md:p-12" delay={0.8}>
        <div className="space-y-6">
          <div>
            <h2 className="text-gray-900 mb-2 text-[44px] font-bold m-[0px]">Colour Application Guidelines</h2>
          </div>

          <div className="bg-gray-900 rounded-3xl p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Do's */}
            <div className="space-y-4">
              <h3 className="text-white">Do's</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-white/90 text-sm leading-relaxed">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Use brand colours consistently throughout the exhibition</span>
                </li>
                <li className="flex gap-3 text-white/90 text-sm leading-relaxed">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Apply gradients to large format graphics and feature walls</span>
                </li>
                <li className="flex gap-3 text-white/90 text-sm leading-relaxed">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Maintain sufficient contrast for accessibility</span>
                </li>
                <li className="flex gap-3 text-white/90 text-sm leading-relaxed">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Use Dark Grey (#303D47) for primary body text</span>
                </li>
                <li className="flex gap-3 text-white/90 text-sm leading-relaxed">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Test colours under exhibition lighting conditions</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="space-y-4">
              <h3 className="text-white">Don'ts</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-white/90 text-sm leading-relaxed">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Do not introduce colours outside the approved palette</span>
                </li>
                <li className="flex gap-3 text-white/90 text-sm leading-relaxed">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Avoid using multiple gradients in close proximity</span>
                </li>
                <li className="flex gap-3 text-white/90 text-sm leading-relaxed">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Don't use low-contrast combinations for text</span>
                </li>
                <li className="flex gap-3 text-white/90 text-sm leading-relaxed">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Avoid altering brand colour values or opacity</span>
                </li>
                <li className="flex gap-3 text-white/90 text-sm leading-relaxed">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Don't use gradients for small text or detailed graphics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}