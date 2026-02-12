import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Contact() {
  const socials = [
    {
      icon: <Github size={32} />,
      link: "https://github.com/",
    },
    {
      icon: <Linkedin size={32} />,
      link: "https://www.linkedin.com/in/nikkysmile/",
    },
    {
      icon: <Instagram size={32} />,
      link: "https://instagram.com/",
    },
    {
      icon: <Mail size={32} />,
      link: "mailto:alt.platinum@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black text-center relative">
      <Reveal>
        <h2 className="text-4xl font-bold text-white mb-6">Let’s Connect</h2>
        <p className="text-white/70 mb-10">Find me on social media:</p>

        <div className="flex justify-center gap-8">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
