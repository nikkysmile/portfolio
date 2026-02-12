import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const list = [
    {
      title: "Instagram Growth & Content Strategy",
      desc: "Platform: Instagram & Facebook",
      image: "/p1.png",
      detail: "Planned a structured content calendar including reels, carousel posts, and engagement-driven captions. Optimized posting timing and hashtag strategy to improve reach and audience interaction.",
    },
    {
      title: "Meta Ads Campaign Optimization",
      desc: "Platform: Meta Ads Manager",
      image: "/p2.png",
      detail: "Created and managed paid campaigns using audience targeting, retargeting, and creative testing. Improved campaign efficiency through CTR and CPC optimization.",
    },
    {
      title: "Community Engagement & Brand Presence",
      desc: "Platform: Instagram Community Management",
      image: "/p3.png",
      detail: "Handled comments and direct messages, maintained brand tone, and built audience relationships. Increased trust and interaction consistency through active engagement management.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <Reveal>
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Initiatives
        </h2>

        {/* GRID PROJECT */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {list.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateX: 8, rotateY: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              onClick={() => setSelected(p)}
              className="relative cursor-pointer group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
            >
              <img
                src={p.image} alt={p.title}
                className="w-full aspect-[16/6] object-contain bg-black rounded-xl group-hover:opacity-100 transition-all duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                <p className="text-white/60">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-[999]"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/10 border border-white/20 p-8 rounded-2xl max-w-xl text-white shadow-2xl"
            >
              <img
  src={selected.image} alt={selected.title}
  className="w-full object-contain max-h-[70vh] bg-black rounded-xl mb-4"
/>

              <h3 className="text-3xl font-bold mb-2">{selected.title}</h3>
              <p className="text-white/60 mb-6">{selected.detail}</p>

              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
