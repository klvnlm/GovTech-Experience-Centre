import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";

export function ComponentsSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <GlassCard className="p-12" delay={0.1}>
        <div className="space-y-6">
          <div>
            <p className="text-sm tracking-wide opacity-60 uppercase mb-2">Layout</p>
            <h2 className="text-gray-900 text-[44px] m-[0px] font-bold">Layout</h2>
          </div>
          <p className="text-gray-700 max-w-3xl">
            Typography alignment, arrangement standards, and positioning for QR codes and interactive screens.
          </p>
        </div>
      </GlassCard>

      {/* Text Placement Guidelines */}
      <GlassCard className="p-12" delay={0.2}>
        <div className="space-y-8">
          <div>
            <h3 className="text-gray-900 text-[32px] mb-2">Text Placement Guidelines</h3>
            <p className="text-gray-600">Height guidelines for text on walls and panels ensuring readability for all visitors</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-l-4 border-blue-500 rounded-2xl p-8">
            <p className="text-sm text-gray-600 mb-2">Universal Design Principle:</p>
            <p className="text-gray-700">
              All text placement must accommodate both able-bodied visitors and wheelchair users. Follow these height specifications to ensure content is accessible to all.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100/50 border-b border-gray-200">
                  <tr>
                    <th className="text-left p-4 text-gray-600 text-sm uppercase tracking-wide">Element Type</th>
                    <th className="text-left p-4 text-gray-600 text-sm uppercase tracking-wide">Height (MM)</th>
                    <th className="text-left p-4 text-gray-600 text-sm uppercase tracking-wide">Recommended For</th>
                    <th className="text-left p-4 text-gray-600 text-sm uppercase tracking-wide">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 text-gray-900">Logos Baseline</td>
                    <td className="p-4 text-gray-900 font-medium">2000mm</td>
                    <td className="p-4 text-gray-700">Branding elements</td>
                    <td className="p-4 text-gray-600 text-sm">Top of wall, high visibility</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900">Max Height for Titles</td>
                    <td className="p-4 text-gray-900 font-medium">1900mm</td>
                    <td className="p-4 text-gray-700">Display, Zone Title</td>
                    <td className="p-4 text-gray-600 text-sm">Upper limit for readability</td>
                  </tr>
                  <tr className="bg-blue-50/30">
                    <td className="p-4 text-gray-900">
                      Max Height for Body Text
                      <span className="ml-2 inline-block px-2 py-0.5 bg-blue-500 text-white text-xs rounded">Eye Level</span>
                    </td>
                    <td className="p-4 text-gray-900 font-medium">1500mm</td>
                    <td className="p-4 text-gray-700">Product Title, Header, Body</td>
                    <td className="p-4 text-gray-600 text-sm">Optimal for standing visitors</td>
                  </tr>
                  <tr className="bg-green-50/30">
                    <td className="p-4 text-gray-900">
                      Min Height for Body Text
                      <span className="ml-2 inline-block px-2 py-0.5 bg-green-600 text-white text-xs rounded">Accessible</span>
                    </td>
                    <td className="p-4 text-gray-900 font-medium">1200mm</td>
                    <td className="p-4 text-gray-700">Product Title, Header, Body</td>
                    <td className="p-4 text-gray-600 text-sm">Minimum for wheelchair users</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900">Mid Height for QR Codes</td>
                    <td className="p-4 text-gray-900 font-medium">1050mm</td>
                    <td className="p-4 text-gray-700">Interactive elements</td>
                    <td className="p-4 text-gray-600 text-sm">Easy reach for all users</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900">Table Height</td>
                    <td className="p-4 text-gray-900 font-medium">760mm</td>
                    <td className="p-4 text-gray-700">Interactive displays</td>
                    <td className="p-4 text-gray-600 text-sm">Standard accessible table height</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-6">
              <h4 className="text-gray-900 text-[18px] mb-4">Standing Visitors</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Average eye level: ~1500mm (comfortable reading zone)</li>
                <li>• Titles can be placed up to 1900mm for visual hierarchy</li>
                <li>• Main content should be between 1200-1500mm</li>
              </ul>
            </div>

            <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-6">
              <h4 className="text-gray-900 text-[18px] mb-4">Wheelchair Users</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Average eye level: ~1200mm (seated position)</li>
                <li>• All body text must be readable from 1200mm minimum</li>
                <li>• Interactive elements should be within 760-1200mm range</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-6">
            <h4 className="text-gray-900 text-[18px] mb-4">Recommended Text Placement by Style</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-start py-2 border-b border-gray-200">
                <span className="text-gray-700 font-medium">Display, Zone Title:</span>
                <span className="text-gray-600 text-sm text-right">Position baseline between 1500-1900mm (viewable from distance)</span>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-gray-200">
                <span className="text-gray-700 font-medium">Product Title:</span>
                <span className="text-gray-600 text-sm text-right">Position baseline between 1400-1500mm (optimal eye level)</span>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-gray-200">
                <span className="text-gray-700 font-medium">Header, Body:</span>
                <span className="text-gray-600 text-sm text-right">Position between 1200-1500mm (accessible to all)</span>
              </div>
              <div className="flex justify-between items-start py-2">
                <span className="text-gray-700 font-medium">Caption:</span>
                <span className="text-gray-600 text-sm text-right">Position between 1200-1400mm (close reading height)</span>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Layout Best Practices */}
      <GlassCard className="p-12" delay={0.3}>
        <div className="space-y-8">
          <div>
            <h3 className="text-gray-900 text-[32px]">Layout Best Practices</h3>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Do's */}
              <div>
                <h4 className="text-white text-[20px] mb-6">Do's</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                    <span>Follow text placement heights (1200-1500mm for body text)</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                    <span>Create clear visual hierarchy with typography styles</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                    <span>Ensure text is readable from appropriate viewing distances</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                    <span>Position QR codes at 1050mm for universal access</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                    <span>Test layouts with mock-ups before installation</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                    <span>Align text consistently for professional appearance</span>
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
                    <span>Don't place body text above 1500mm or below 1200mm</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-red-400 flex-shrink-0 mt-1">✗</span>
                    <span>Avoid using text styles inconsistently</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-red-400 flex-shrink-0 mt-1">✗</span>
                    <span>Don't create overly dense text blocks</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-red-400 flex-shrink-0 mt-1">✗</span>
                    <span>Avoid placing interactive elements outside accessible ranges</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <span className="text-red-400 flex-shrink-0 mt-1">✗</span>
                    <span>Never compromise accessibility for design aesthetics</span>
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
