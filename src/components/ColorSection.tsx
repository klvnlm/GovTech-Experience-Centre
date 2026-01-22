import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { useState } from "react";

const brandColors = [
  { name: "Cyan", hex: "#00C0F3", role: "Primary", bg: "#00C0F3", pantone: "306 C", cmyk: "70, 0, 0, 0", rgb: "0, 192, 243" },
  { name: "Magenta", hex: "#BA2FA2", role: "Primary", bg: "#BA2FA2", pantone: "246 C", cmyk: "40, 86, 0, 0", rgb: "186, 47, 162" },
  { name: "Red", hex: "#F4333D", role: "Primary", bg: "#F4333D", pantone: "032 C", cmyk: "0, 89, 70, 0", rgb: "244, 51, 61" },
  { name: "Dark Grey", hex: "#3D3D47", role: "Text", bg: "#3D3D47", pantone: "—", cmyk: "—", rgb: "61, 61, 71" },
  { name: "Grey", hex: "#ADADAD", role: "Secondary", bg: "#ADADAD", pantone: "—", cmyk: "—", rgb: "173, 173, 173" },
  { name: "Off-White", hex: "#F7F7F7", role: "", bg: "#F7F7F7", pantone: "—", cmyk: "—", rgb: "247, 247, 247" },
  { name: "Black", hex: "#000000", role: "", bg: "#000000", pantone: "—", cmyk: "—", rgb: "0, 0, 0" },
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
    to: "#F4333D",
    gradient: "linear-gradient(135deg, #BA2FA2, #F4333D)",
    usage: "Secondary gradient for accent panels and highlights"
  }
];

const whiteBackgroundCombos = [
  { color: "#3D3D47", name: "Dark Grey Text", accessibility: "AAA" },
  { color: "#00C0F3", name: "Cyan Accent", accessibility: "AA" },
  { color: "#ADADAD", name: "Grey Text", accessibility: "Large only" },
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
    <div className="space-y-4 md:space-y-8 w-full md:max-w-screen-2xl mx-auto">
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
                role="img"
                aria-label={`${color.name} color swatch, hex value ${color.hex}`}
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
                {color.pantone !== "—" && (
                  <p className="text-xs text-gray-500 mt-2">Pantone {color.pantone}</p>
                )}
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

          <div className="mt-8 space-y-3 bg-gray-50 dark:bg-gray-900/60 rounded-2xl p-4 md:p-6">
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
                  <span>Use Dark Grey (#3D3D47) for primary body text</span>
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