import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { TrendingUp, Repeat } from "lucide-react";

export function SpacingSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <GlassCard className="p-6 md:p-12" delay={0.1}>
        <div className="space-y-6">
          <div>
            <p className="text-sm tracking-wide opacity-60 uppercase mb-2">Spatial Guidelines</p>
            <h2 className="text-gray-900 text-[44px] font-bold m-[0px]">Space</h2>
          </div>
          <p className="text-gray-700 max-w-3xl">
            Exhibition spaces must accommodate diverse visitors with varying needs. 
            These measurements ensure accessibility, comfort, and optimal viewing experiences.
          </p>
        </div>
      </GlassCard>

      {/* Viewing Distances */}
      <GlassCard className="p-6 md:p-12" delay={0.2}>
        <div className="space-y-8">
          <div>
            <h3 className="text-gray-900 text-[32px] mb-2">Viewing Distances</h3>
            <p className="text-gray-600">Minimum distances from wall to allow comfortable viewing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { distance: "800mm", type: "Wall Panels", dimension: "Text panels & printed graphics" },
              { distance: "1,200mm", type: "Screens on Wall Panels", dimension: "Digital displays on walls" },
              { distance: "2,000mm", type: "Projection Screens", dimension: "Large format projections" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-center"
              >
                <p className="text-[36px] text-gray-900 mb-2">{item.distance}</p>
                <p className="text-gray-700 mb-1">{item.type}</p>
                <p className="text-sm text-gray-500">{item.dimension}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <p className="text-gray-700">
              <span className="font-semibold">Rule of thumb:</span> Viewing distance should be approximately 1.5× to 2× the diagonal dimension of the display for optimal viewing experience.
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Circulation & Accessibility */}
      <GlassCard className="p-6 md:p-12" delay={0.3}>
        <div className="space-y-8">
          <div>
            <h3 className="text-gray-900 text-[32px] mb-2">Circulation & Accessibility</h3>
            <p className="text-gray-600">Visitor pathways and accessibility compliance for the 100sqm GovTech Experience Centre (capacity: 20-30 visitors)</p>
          </div>

          <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-8">
            <h4 className="text-gray-900 text-[24px] mb-6">Pathway Widths</h4>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-4">
                  <TrendingUp className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h5 className="text-gray-900 text-[20px] mb-2">Minimum Width: 1,550mm</h5>
                  <p className="text-gray-600">Required for wheelchair passage and turning radius</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-4">
                  <Repeat className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h5 className="text-gray-900 text-[20px] mb-2">Comfortable Width: 2,400-3,000mm</h5>
                  <p className="text-gray-600">Allows two-way traffic and comfortable viewing distance (suitable for low-traffic environments)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Note:</span> Given the compact 100sqm space and low visitor capacity (20-30 people), high-traffic pathways and dedicated seating areas are not required. Focus on maintaining clear circulation routes that meet accessibility standards whilst maximising usable exhibition space.
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Lighting Zones */}
      <GlassCard className="p-6 md:p-12" delay={0.4}>
        <div className="space-y-8">
          <div>
            <h3 className="text-gray-900 text-[32px] mb-2">Lighting Zones</h3>
            <p className="text-gray-600">Light levels for different exhibition areas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-2xl p-8"
            >
              <p className="text-sm text-gray-600 mb-2">Low Light Zones</p>
              <p className="text-[40px] text-gray-900 mb-3">150 lux</p>
              <p className="text-gray-700 mb-2">Sensitive displays, interactive screens</p>
              <p className="text-sm text-gray-600">Reduced glare for digital content</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8"
            >
              <p className="text-sm text-gray-600 mb-2">Standard Zones</p>
              <p className="text-[40px] text-gray-900 mb-3">300-400 lux</p>
              <p className="text-gray-700 mb-2">General exhibition areas</p>
              <p className="text-sm text-gray-600">Comfortable viewing conditions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8"
            >
              <p className="text-sm text-gray-600 mb-2">Feature Zones</p>
              <p className="text-[40px] text-gray-900 mb-3">500+ lux</p>
              <p className="text-gray-700 mb-2">Highlight areas, demonstrations</p>
              <p className="text-sm text-gray-600">Enhanced visibility for activities</p>
            </motion.div>
          </div>

          <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-8">
            <h4 className="text-gray-900 text-[20px] mb-4">Lighting Best Practices</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
              <p className="text-gray-700 text-sm">• Use LED sources for energy efficiency</p>
              <p className="text-gray-700 text-sm">• Avoid direct lighting on interactive screens</p>
              <p className="text-gray-700 text-sm">• 30° angle from vertical for track lighting</p>
              <p className="text-gray-700 text-sm">• Adjust intensity based on zone function</p>
              <p className="text-gray-700 text-sm">• Use dimmers for flexibility</p>
              <p className="text-gray-700 text-sm">• Regular monitoring with light metres</p>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Interactive Display Zones */}
      <GlassCard className="p-6 md:p-12" delay={0.5}>
        <div className="space-y-8">
          <div>
            <h3 className="text-gray-900 text-[32px] mb-2">Interactive Display Zones</h3>
            <p className="text-gray-600">Specifications for touchscreens and interactive installations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-8">
              <h4 className="text-gray-900 text-[20px] mb-6">Touchscreen Mounting</h4>
              <div className="space-y-4">
                {[
                  { label: "Screen centre height", value: "1,050mm" },
                  { label: "Accessible height range", value: "900-1,200mm" },
                  { label: "Tilt angle", value: "10-15° from vertical" },
                  { label: "Clearance in front", value: "1,524mm minimum" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="text-gray-900 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-8">
              <h4 className="text-gray-900 text-[20px] mb-6">Interactive Table Specs</h4>
              <div className="space-y-4">
                {[
                  { label: "Table height", value: "760-810mm" },
                  { label: "Wheelchair clearance", value: "685mm minimum" },
                  { label: "Table depth", value: "600-750mm" },
                  { label: "Space around table", value: "1,524mm clearance" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="text-gray-900 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Spatial Best Practices */}
      <GlassCard className="p-6 md:p-12" delay={0.6}>
        <div className="space-y-8">
          <div>
            <h3 className="text-gray-900 text-[32px]">Spatial Best Practices</h3>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Do's */}
              <div>
                <h4 className="text-white text-[20px] mb-6">Do's</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                    <span>Create clear sight lines to featured displays</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                    <span>Group related content logically by theme or zone</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                    <span>Provide adequate space around interactive elements</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                    <span>Consider visitor flow and natural progression</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                    <span>Maintain minimum pathway widths (1,524mm for accessibility)</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                    <span>Allow proper viewing distances based on display size</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                    <span>Maintain all measurements in millimetres (mm)</span>
                  </li>
                </ul>
              </div>

              {/* Don'ts */}
              <div>
                <h4 className="text-white text-[20px] mb-6">Don'ts</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-red-400 flex-shrink-0 mt-1">✗</span>
                    <span>Don't overcrowd zones with too many elements</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-red-400 flex-shrink-0 mt-1">✗</span>
                    <span>Avoid placing displays in direct traffic paths</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-red-400 flex-shrink-0 mt-1">✗</span>
                    <span>Don't create bottlenecks at popular interactive stations</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-red-400 flex-shrink-0 mt-1">✗</span>
                    <span>Avoid placing seating that blocks display views</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-red-400 flex-shrink-0 mt-1">✗</span>
                    <span>Never compromise safety for aesthetic preferences</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-red-400 flex-shrink-0 mt-1">✗</span>
                    <span>Don't mix metric and imperial measurements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}