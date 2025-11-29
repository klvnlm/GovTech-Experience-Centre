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
      size: "108/120",
      weight: "Medium (500)",
      charLimit: "Max 3 lines; 80 chars",
      usage: "Product panel titles",
      color: "bg-red-500"
    },
    {
      category: "PRODUCT",
      styleName: "Header",
      size: "72/90",
      weight: "Regular (400)",
      charLimit: "Max 4 lines; 135 chars",
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
    "Use only the 6 approved text styles (Display, Zone Title, Product Title, Header, Body, Caption)",
    "Follow character limits: Product Title (max 3 lines; 80 chars), Header (max 4 lines; 135 chars), Body (max 17 lines; 2 col 1,500 chars / 1 col 750 chars)",
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
        <GlassCard className="p-3 md:p-10" delay={0.1}>
          <div className="space-y-4">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Medium</p>
            <div className="text-[48px] leading-none text-gray-900 font-medium">Aa</div>
            <div className="space-y-1">
              <p className="text-gray-900 font-medium">Neue Haas Unica Pro Medium</p>
              <p className="text-sm text-gray-600">For display, zone, and product titles</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-3 md:p-10" delay={0.2}>
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

      <GlassCard className="p-3 md:p-10" delay={0.3}>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 bg-gray-100 rounded-lg px-4 py-3">
            <span className="font-medium">Note:</span> Neue Haas Unica Pro is the exclusive typeface for the GovTech Experience Centre. Do not substitute with other typefaces or create additional text styles.
          </p>
        </div>
      </GlassCard>

      {/* Complete Type Scale */}
      <GlassCard className="p-3 md:p-12" delay={0.4}>
        <div className="space-y-6">
          <div>
            <h2 className="text-gray-900 mb-2 text-[44px] font-bold m-[0px]">Typography</h2>
            <p className="text-gray-600">Official text styles for GovTech Experience Centre – do not create additional styles</p>
          </div>

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
      <GlassCard className="p-3 md:p-12" delay={0.5}>
        <div className="space-y-6">
          <div>
            <h2 className="text-gray-900 mb-2 text-[44px] font-bold m-[0px]">Primary Typeface</h2>
            <p className="text-gray-600">Neue Haas Unica Pro for all exhibition text</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-gray-900">Why Neue Haas Unica Pro?</h3>
              <p className="text-gray-700 leading-relaxed">
                Whilst digital screen typefaces (such as Inter, Roboto, or SF Pro) are optimised for pixel rendering on screens, Neue Haas Unica Pro excels in the <span className="font-medium text-gray-900">physical exhibition environment</span> where different considerations apply:
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-gray-900">Typographic Characteristics</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="text-gray-400">•</span>
                  <div>
                    <span className="font-medium text-gray-900">Neo-grotesque construction:</span> Geometric precision with uniform stroke weights creates exceptional clarity at all scales, from 12px captions to 200px+ display text
                  </div>
                </li>
                <li className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="text-gray-400">•</span>
                  <div>
                    <span className="font-medium text-gray-900">Generous apertures:</span> Open counters in letters like 'a', 'e', and 'c' maintain legibility even when viewed at oblique angles or from significant distances
                  </div>
                </li>
                <li className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="text-gray-400">•</span>
                  <div>
                    <span className="font-medium text-gray-900">Distinctive letterforms:</span> Clear differentiation between similar characters (I/l/1, 0/O) reduces reading errors in technical content and product specifications
                  </div>
                </li>
                <li className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="text-gray-400">•</span>
                  <div>
                    <span className="font-medium text-gray-900">Optimal x-height ratio:</span> Taller lowercase letters improve readability in paragraph text whilst maintaining elegant proportions for headlines
                  </div>
                </li>
                <li className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="text-gray-400">•</span>
                  <div>
                    <span className="font-medium text-gray-900">Neutral yet human:</span> Balances the clinical precision of grotesque sans-serifs with subtle humanist touches, creating an approachable yet authoritative voice
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-gray-900">Physical Exhibition Advantages</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="text-gray-400">•</span>
                  <div>
                    <span className="font-medium text-gray-900">Large-scale legibility:</span> Designed for reading at varying distances (1-10m), from wayfinding signage to detailed content panels
                  </div>
                </li>
                <li className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="text-gray-400">•</span>
                  <div>
                    <span className="font-medium text-gray-900">Print & physical production:</span> Optimised for vinyl, acrylic, and dimensional lettering where clarity of letterforms matters more than pixel-grid alignment
                  </div>
                </li>
                <li className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="text-gray-400">•</span>
                  <div>
                    <span className="font-medium text-gray-900">Ambient lighting resilience:</span> Performs well under varied exhibition lighting conditions (spotlights, ambient, backlighting) where screen-optimised fonts may appear too delicate
                  </div>
                </li>
                <li className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="text-gray-400">•</span>
                  <div>
                    <span className="font-medium text-gray-900">Multi-surface versatility:</span> Maintains legibility across diverse materials (matte/gloss finishes, textured substrates, translucent panels) better than typefaces optimised for backlit LCD displays
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-gray-900">Strategic Fit</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="text-gray-400">•</span>
                  <div>
                    <span className="font-medium text-gray-900">Brand consistency:</span> Aligns with GovTech's visual identity across both physical and digital touchpoints, creating a cohesive experience
                  </div>
                </li>
                <li className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="text-gray-400">•</span>
                  <div>
                    <span className="font-medium text-gray-900">Timeless professionalism:</span> Neo-grotesque design maintains a clean, authoritative presence appropriate for government communications without the tech-forward associations of UI typefaces
                  </div>
                </li>
                <li className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="text-gray-400">•</span>
                  <div>
                    <span className="font-medium text-gray-900">Accessibility compliance:</span> Meets WCAG readability standards with high contrast ratios and clear character differentiation, supporting inclusive design for all visitors
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Typography Guidelines */}
      <GlassCard className="p-3 md:p-12" delay={0.6}>
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
