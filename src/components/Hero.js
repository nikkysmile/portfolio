import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-center relative overflow-hidden"
    >
      {/* Background Glow Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.4),transparent)]"
      ></motion.div>

      
      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full backdrop-blur-xl"
          initial={{
            x: Math.random() * 1200 - 600,
            y: Math.random() * 1200 - 600,
            opacity: 0,
          }}
          animate={{
            y: Math.random() * -300 - 200,
            opacity: 1,
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Hero Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <motion.img
  src="/1q.png"
  alt="Ki"
  className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto mb-6 object-cover border-4 border-white/40 shadow-2xl"
  initial={{ opacity: 0, scale: 0.7 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2 }}
/>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
            Nikky
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-white/70 max-w-xl mx-auto text-lg md:text-xl"
        >
          Social Media Strategist & Meta Ads Specialist.
        </motion.p>

        <motion.a
  href="porto.pdf"
  download
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 1 }}
  className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
>
  Download
</motion.a>

      </motion.div>
    </section>
  );
}
