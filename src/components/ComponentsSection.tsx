import { GlassCard } from "././GlassCard";
import { motion } from "motion/react";
import layoutExample1 from "figma:asset/03b9170f77286e153cba358af9f4c7695ffd4b61.png";
import layoutExample2 from "figma:asset/34d61eee6646c4a9acbd15cf1b0d8b244dde06d3.png";
import layoutExample3 from "figma:asset/e9fe4549c741b61f4119952e76b03e5ba5b04717.png";
import panelGuidelines from "figma:asset/42bcfbfc09d79016a419b28cd0ccfb2c69af423e.png";

export function ComponentsSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <GlassCard className="p-6 md:p-12" delay={0.1}>
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
      <GlassCard className="p-6 md:p-12" delay={0.2}>
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
                    <td className="p-4 text-gray-900">Product Title Baseline</td>
                    <td className="p-4 text-gray-900 font-medium">2,000mm</td>
                    <td className="p-4 text-gray-700">Product Title</td>
                    <td className="p-4 text-gray-600 text-sm">First line sits on this baseline</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900">Max Height for Titles</td>
                    <td className="p-4 text-gray-900 font-medium">1,900mm</td>
                    <td className="p-4 text-gray-700">Display, Zone Title</td>
                    <td className="p-4 text-gray-600 text-sm">Upper limit for readability</td>
                  </tr>
                  <tr className="bg-blue-50/30">
                    <td className="p-4 text-gray-900">
                      Max Height for Body Text
                      <span className="ml-2 inline-block px-2 py-0.5 bg-blue-500 text-white text-xs rounded">Eye Level</span>
                    </td>
                    <td className="p-4 text-gray-900 font-medium">1,500mm</td>
                    <td className="p-4 text-gray-700">Product Title, Header, Body</td>
                    <td className="p-4 text-gray-600 text-sm">Optimal for standing visitors</td>
                  </tr>
                  <tr className="bg-green-50/30">
                    <td className="p-4 text-gray-900">
                      Min Height for Body Text
                      <span className="ml-2 inline-block px-2 py-0.5 bg-green-600 text-white text-xs rounded">Accessible</span>
                    </td>
                    <td className="p-4 text-gray-900 font-medium">900mm</td>
                    <td className="p-4 text-gray-700">Product Title, Header, Body</td>
                    <td className="p-4 text-gray-600 text-sm">Minimum for wheelchair users</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900">Mid Height for QR Codes</td>
                    <td className="p-4 text-gray-900 font-medium">1,050mm</td>
                    <td className="p-4 text-gray-700">Interactive elements</td>
                    <td className="p-4 text-gray-600 text-sm">Easy reach for all users</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-6">
              <h4 className="text-gray-900 text-[18px] mb-4">Standing Visitors</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Average eye level: ~1,500mm (comfortable reading zone)</li>
                <li>• Titles can be placed up to 1,900mm for visual hierarchy</li>
                <li>• Main content should be between 900-1,500mm</li>
              </ul>
            </div>

            <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-6">
              <h4 className="text-gray-900 text-[18px] mb-4">Wheelchair Users</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Average eye level: ~1,200mm (seated position)</li>
                <li>• All body text must be readable from 900mm minimum</li>
                <li>• Interactive elements should be within 760-1,200mm range</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-6">
            <h4 className="text-gray-900 text-[18px] mb-4">Recommended Text Placement by Style</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-start py-2 border-b border-gray-200">
                <span className="text-gray-700 font-medium">Display, Zone Title:</span>
                <span className="text-gray-600 text-sm text-right">Position baseline between 1,500-1,900mm (viewable from distance)</span>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-gray-200">
                <span className="text-gray-700 font-medium">Product Title:</span>
                <span className="text-gray-600 text-sm text-right">Position baseline between 1,400-1,500mm (optimal eye level)</span>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-gray-200">
                <span className="text-gray-700 font-medium">Header, Body:</span>
                <span className="text-gray-600 text-sm text-right">Position between 900-1,500mm (accessible to all)</span>
              </div>
              <div className="flex justify-between items-start py-2">
                <span className="text-gray-700 font-medium">Caption:</span>
                <span className="text-gray-600 text-sm text-right">Position between 900-1,400mm (close reading height)</span>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Layout Best Practices */}
      <GlassCard className="p-6 md:p-12" delay={0.3}>
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
                    <span>Follow text placement heights (900-1,500mm for body text)</span>
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
                    <span>Position QR codes at 1,050mm for universal access</span>
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
                    <span>Don't place body text above 1,500mm or below 900mm</span>
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

      {/* Guidelines for Product Panels */}
      <GlassCard className="p-6 md:p-12" delay={0.45}>
        <div className="space-y-8">
          <div>
            <h3 className="text-gray-900 text-[32px] mb-2">Guidelines for Product Panels</h3>
            <p className="text-gray-600">Five approved panel layouts with character limits and interactive element configurations</p>
          </div>

          <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl overflow-hidden">
            <img 
              src={panelGuidelines} 
              alt="Guidelines for Product Panels showing 5 panel options" 
              className="w-full h-auto"
            />
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-8">
            <h4 className="text-gray-900 mb-4">Panel Configuration Rules</h4>
            <div className="space-y-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <h5 className="text-gray-900 font-medium mb-3">Product Title Character Limits</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <span className="font-medium">Maximum:</span> 3 lines, 60 characters</li>
                  <li>• <span className="font-medium">Ideal range:</span> 45–55 characters</li>
                  <li>• Applies to all 5 panel options</li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <h5 className="text-gray-900 font-medium mb-3">Product Sub-header Character Limits</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <span className="font-medium">Maximum:</span> 3 lines, 118 characters</li>
                  <li>• <span className="font-medium">Ideal range:</span> 90–110 characters</li>
                  <li>• Applies to all 5 panel options</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                  <h5 className="text-gray-900 font-medium mb-3">Panel Option 1</h5>
                  <p className="text-sm text-gray-700 mb-2">Text Only</p>
                  <p className="text-xs text-gray-600"><span className="font-medium">Body text maximum:</span> 1,100 characters</p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                  <h5 className="text-gray-900 font-medium mb-3">Panel Option 2</h5>
                  <p className="text-sm text-gray-700 mb-2">Text + 1 iPad (Video)</p>
                  <p className="text-xs text-gray-600"><span className="font-medium">Body text maximum:</span> 900 characters</p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                  <h5 className="text-gray-900 font-medium mb-3">Panel Option 3</h5>
                  <p className="text-sm text-gray-700 mb-2">Text + 1 iPad (Interaction)</p>
                  <p className="text-xs text-gray-600"><span className="font-medium">Body text maximum:</span> 900 characters</p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                  <h5 className="text-gray-900 font-medium mb-3">Panel Option 4</h5>
                  <p className="text-sm text-gray-700 mb-2">Text + 2 iPads (Video or Interaction)</p>
                  <p className="text-xs text-gray-600"><span className="font-medium">Body text maximum:</span> 700 characters</p>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <h5 className="text-gray-900 font-medium mb-3">Panel Option 5</h5>
                <p className="text-sm text-gray-700 mb-2">Text + 1 iPad (Video) + 1 iPad (Interaction)</p>
                <p className="text-xs text-gray-600"><span className="font-medium">Body text maximum:</span> 500 characters</p>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}