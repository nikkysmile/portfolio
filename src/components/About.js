import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <Reveal>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">About</h2>

          <p className="text-white/70 leading-relaxed text-lg">
           I specialize in building meaningful social experiences for brands. With expertise in strategic content planning, audience engagement, and performance marketing, I help businesses grow their online presence.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
