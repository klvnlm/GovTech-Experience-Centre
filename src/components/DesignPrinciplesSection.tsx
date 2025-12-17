import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { Lightbulb, Users, Sparkles, Target, Eye, Heart } from "lucide-react";

export function DesignPrinciplesSection() {
  const principles = [
    {
      icon: Users,
      title: "Human-Centred",
      description: "Design with empathy, prioritising visitor needs, accessibility, and diverse perspectives to create inclusive experiences.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Eye,
      title: "Clear & Intuitive",
      description: "Communicate information clearly through visual hierarchy, wayfinding, and intuitive interactions that guide visitors naturally.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Engaging & Memorable",
      description: "Create immersive, interactive experiences that captivate curiosity and leave lasting impressions on every visitor.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every design decision serves a clear purpose, supporting learning objectives and the exhibition's core narrative.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Sustainable & Responsible",
      description: "Minimise environmental impact through thoughtful material choices, energy efficiency, and designs built to last.",
      color: "from-rose-500 to-red-500",
    },
    {
      icon: Lightbulb,
      title: "Innovative & Adaptive",
      description: "Embrace new technologies and flexible approaches that evolve with changing needs and emerging possibilities.",
      color: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <div className="space-y-8">
      <GlassCard className="p-6 md:p-12" delay={0.1}>
        <div className="space-y-6">
          <div>
            <p className="text-sm tracking-wide opacity-60 uppercase mb-2">Foundation</p>
            <h2 className="text-gray-900 text-[44px] font-bold m-[0px]">Design Principles</h2>
          </div>
          <p className="text-gray-700 max-w-3xl">
            These core principles guide every decision in creating exhibition experiences 
            that educate, inspire, and connect with diverse audiences at the GovTech Experience Centre.
          </p>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {principles.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <GlassCard className="p-6 md:p-8 h-full" delay={0}>
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-gray-900">{principle.title}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      <GlassCard className="p-6 md:p-12" delay={0.8}>
        <div className="space-y-6">
          <div>
            <p className="text-sm tracking-wide opacity-60 uppercase mb-2">Application</p>
            <h4 className="text-gray-900">Putting Principles into Practice</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="h-2 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <p className="font-semibold text-gray-900">Research</p>
              <p className="text-sm text-gray-600">
                Understand visitor needs through observation, interviews, and data analysis.
              </p>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <p className="font-semibold text-gray-900">Prototype</p>
              <p className="text-sm text-gray-600">
                Test ideas rapidly with mockups and iterative refinement based on feedback.
              </p>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              <p className="font-semibold text-gray-900">Evaluate</p>
              <p className="text-sm text-gray-600">
                Measure success through visitor engagement, learning outcomes, and impact.
              </p>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}