import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  const [open, setOpen] = useState(null);

  const categories = [
    {
      title: "Social Media Strategy",
      items: [
        { name: "Content planning & calendar development", level: 55 },
        { name: "Audience research & brand positioning", level: 55 },
        { name: "Engagement strategy & community management", level: 55 },
        { name: "Trend analysis & short-form video strategy", level: 55 },
      ],
    },
    {
      title: "Content Creation & Copywriting",
      items: [
        { name: "Caption writing", level: 55 },
        { name: "Hook optimization for Reels & short videos", level: 55 },
        { name: "Hashtag research & keyword optimization", level: 55 },
        { name: "Visual content design", level: 55 },
      ],
    },
    {
      title: "Meta Ads & Paid Campaigns",
      items: [
        { name: "Campaign structuring", level: 55 },
        { name: "Audience targeting", level: 55 },
        { name: "A/B testing & creative optimization", level: 55 },
        { name: "CTR, CPC, CPM & ROAS analysis", level: 55 },
        { name: "Retargeting & conversion strategy", level: 55 },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Meta Business Suite", level: 55 },
        { name: "Meta Ads Manager", level: 55 },
        { name: "Canva", level: 55 },
        { name: "CapCut", level: 55 },
        { name: "Instagram & Facebook Insights", level: 55 },
        { name: "Google Analytics", level: 55 },
      ],
    },
  ];

  return (
    <section id="skills" className="pt-12 pb-24 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="max-w-3xl mx-auto space-y-4 px-6">
        {categories.map((cat, index) => (
          <div key={index}>
            {/* Accordion Button */}
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex justify-between items-center bg-white/10 
              backdrop-blur-xl px-5 py-4 rounded-xl border border-white/10
              hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-xl font-semibold">{cat.title}</span>

              <motion.span
                animate={{ rotate: open === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl"
              >
                ▼
              </motion.span>
            </button>

            {/* Content */}
            {open === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-xl mt-2 p-5 space-y-5"
              >
                {cat.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-3 bg-white/10 rounded-lg overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, delay: i * 0.1 }}
                        className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
