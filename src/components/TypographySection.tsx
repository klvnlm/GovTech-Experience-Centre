import { GlassCard } from "./GlassCard";
import { Check, X } from "lucide-react";

export function TypographySection() {
  const typeScale = [
    {
      category: "GALLERY",
      styleName: "Display",
      size: "960/960",
      weight: "Medium (500)",
      charLimit: "—",
      usage: "Main entrance only",
      color: "bg-cyan-500"
    },
    {
      category: "GALLERY",
      styleName: "Zone Title",
      size: "192/210",
      weight: "Medium (500)",
      charLimit: "—",
      usage: "Zone identifiers",
      color: "bg-fuchsia-500"
    },
    {
      category: "PRODUCT",
      styleName: "Product Title",
      size: "96/120",
      weight: "Medium (500)",
      charLimit: "Max 3 lines; 60 chars",
      usage: "Product panel titles",
      color: "bg-red-500"
    },
    {
      category: "PRODUCT",
      styleName: "Product Header",
      size: "48/60",
      weight: "Regular (400)",
      charLimit: "Max 5 lines; 135 chars",
      usage: "Product introductions",
      color: "bg-gray-300"
    },
    {
      category: "PRODUCT",
      styleName: "Body",
      size: "24/30",
      weight: "Regular (400)",
      charLimit: "Max 17 lines; 2 col 1,500 chars / 1 col 750 chars",
      usage: "Primary body text",
      color: "bg-gray-300"
    },
    {
      category: "PRODUCT",
      styleName: "Caption",
      size: "18/24",
      weight: "Regular (400)",
      charLimit: "—",
      usage: "Captions, metadata",
      color: "bg-gray-300"
    }
  ];

  const dos = [
    "Use only the 6 approved text styles (Display, Zone Title, Product Title, Product Header, Body, Caption)",
    "Follow character limits: Product Title (max 3 lines; 60 chars), Product Header (max 5 lines; 135 chars), Body (max 17 lines; 2 col 1,500 chars / 1 col 750 chars)",
    "Refer to Layout section for text placement heights on walls and panels",
    "Use Neue Haas Unica Pro exclusively across all materials",
    "Maintain exact size/line-height ratios as specified"
  ];

  const donts = [
    "Never create custom text styles beyond the 6 approved styles",
    "Don't modify size or line-height values from the approved scale",
    "Never substitute Neue Haas Unica Pro with other typefaces",
    "Don't use Bold or Light weights (only Medium and Regular)",
    "Don't place text outside the accessibility height range (see Layout)"
  ];

  return (
    <div className="space-y-4 md:space-y-8 md:pt-0 w-[98vw] md:w-full md:max-w-screen-2xl mx-auto mt-[32px] mr-[-9px] mb-[0px] ml-[0px] pt-[0px] pr-[10px] pb-[0px] pl-[0px]">
      {/* Font Weights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <GlassCard className="p-6 md:p-10" delay={0.1}>
          <div className="space-y-4">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Medium</p>
            <div className="text-[48px] leading-none text-gray-900 font-medium">Aa</div>
            <div className="space-y-1">
              <p className="text-gray-900 font-medium">Neue Haas Unica Pro Medium</p>
              <p className="text-sm text-gray-600">For display, zone, and product titles</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6 md:p-10" delay={0.2}>
          <div className="space-y-4">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Regular</p>
            <div className="text-[48px] leading-none text-gray-900">Aa</div>
            <div className="space-y-1">
              <p className="text-gray-900 font-medium">Neue Haas Unica Pro Regular</p>
              <p className="text-sm text-gray-600">For headers, body text, and captions</p>
            </div>
          </div>
        </GlassCard>
      </div>

      <GlassCard className="p-6 md:p-10" delay={0.3}>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 bg-gray-100 rounded-lg px-4 py-3">
            <span className="font-medium">Note:</span> Neue Haas Unica Pro is the exclusive typeface for the GovTech Experience Centre. Do not substitute with other typefaces or create additional text styles.
          </p>
        </div>
      </GlassCard>

      {/* Complete Type Scale */}
      <GlassCard className="p-6 md:p-12" delay={0.4}>
        <div className="space-y-6">
          <div>
            <h2 className="text-gray-900 mb-2 text-[44px] font-bold m-[0px]">Typography</h2>
            <p className="text-gray-600">Official text styles for GovTech Experience Centre – do not create additional styles</p>
          </div>

          <p className="text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
            <span className="font-medium">Note:</span> Sizes are shown in pixels (px) for Figma and points (pt) for Adobe Illustrator. Working scale: 1px = 1mm (Figma) and 1pt = 1mm (Illustrator). Font sizes remain identical across both applications.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-500 font-medium">Category</th>
                  <th className="text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-500 font-medium">Style Name</th>
                  <th className="text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-500 font-medium">Size / Line Height (px)</th>
                  <th className="text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-500 font-medium">Weight</th>
                  <th className="text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-500 font-medium">Character Limit</th>
                  <th className="text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-500 font-medium">Usage</th>
                </tr>
              </thead>
              <tbody>
                {typeScale.map((style, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4">
                      <span className={`inline-block px-3 py-1 rounded-md text-xs uppercase tracking-wide text-white ${style.color}`}>
                        {style.category}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-900 font-medium">{style.styleName}</td>
                    <td className="py-4 px-4 text-gray-700">{style.size}</td>
                    <td className="py-4 px-4 text-gray-700">{style.weight}</td>
                    <td className="py-4 px-4 text-gray-700">{style.charLimit}</td>
                    <td className="py-4 px-4 text-gray-700">{style.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </GlassCard>

      {/* Primary Typeface */}
      <GlassCard className="p-6 md:p-12" delay={0.5}>
        <div className="space-y-6">
          <div>
            <h2 className="text-gray-900 mb-2 text-[44px] font-bold m-[0px]">Primary Typeface</h2>
            <p className="text-gray-600">Neue Haas Unica Pro for all exhibition text</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-gray-900 mb-4">Why Neue Haas Unica Pro?</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Designed specifically for large-scale physical environments, Neue Haas Unica Pro excels where digital typefaces fall short.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-gray-900 mb-3">Exhibition Advantages</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Clear at varying distances (1-10m)</li>
                  <li>• Optimised for vinyl, acrylic & dimensional lettering</li>
                  <li>• Performs well under exhibition lighting</li>
                  <li>• Legible across diverse materials & finishes</li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-gray-900 mb-3">Typographic Features</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Geometric precision for all scales</li>
                  <li>• Open counters for oblique viewing angles</li>
                  <li>• Clear character differentiation (I/l/1, 0/O)</li>
                  <li>• Neutral yet approachable personality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Typography Guidelines */}
      <GlassCard className="p-6 md:p-12" delay={0.6}>
        <div className="space-y-6">
          <div>
            <h2 className="text-gray-900 mb-2 text-[44px] font-bold m-[0px]">Typography Guidelines</h2>
            <p className="text-gray-600">Essential rules for exhibition typography</p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Do's */}
            <div className="space-y-4">
              <h3 className="text-white">Do's</h3>
              <ul className="space-y-3">
                {dos.map((item, index) => (
                  <li key={index} className="flex gap-3 text-white/90 text-sm leading-relaxed">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts */}
            <div className="space-y-4">
              <h3 className="text-white">Don'ts</h3>
              <ul className="space-y-3">
                {donts.map((item, index) => (
                  <li key={index} className="flex gap-3 text-white/90 text-sm leading-relaxed">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}