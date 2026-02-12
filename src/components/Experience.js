import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <Reveal>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-6 text-center">EXPERIENCES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* One */}
          <div>
            <h2 className="text-2xl font-semibold">Social Media Growth Strategy</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              <h1>Duration: 3 months</h1>
              <h1>Role: Social Media Strategist</h1>
              <h1>Responsibilities: content calendar, reel production, engagement response</h1>
              <h1>Results: +45% engagement, +30% follower growth</h1>
            </p>
          </div>

          {/* Freelance */}
          <div>
            <h2 className="text-2xl font-semibold">Meta Ads Conversion Campaign</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              <h1>Duration: 2 months</h1>
              <h1>Role: Meta Ads Specialist</h1>
              <h1>Responsibilities: set campaign, audience targeting, split testing</h1>
              <h1>Results: CPC ↓ 25%, CTR ↑ 37%</h1>
            </p>
          </div>

        </div>
        </div>
      </Reveal>
    </section>
  );
}
