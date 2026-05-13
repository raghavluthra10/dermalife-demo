import { motion } from 'motion/react';

const FounderSection = () => {
  return (
    <section id="meet-the-doctor" className="bg-brand-cream py-spacing-section overflow-hidden pb-20">
      <div className="mb-20">
        <div className="flex gap-12 whitespace-nowrap animate-marquee border-y border-brand-muted py-8">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-primary text-6xl text-brand-accent/20 uppercase tracking-tighter font-extrabold">
              — MEET THE VISIONARY — MEET THE VISIONARY
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl font-primary text-brand-accent leading-relaxed mb-8 italic font-bold uppercase tracking-tight">
                "Our philosophy is simple — combine world-class medical science with a premium aesthetic experience that transforms not just how you look, but how you feel."
              </p>
              <p className="text-lg text-brand-dark/70 mb-12 font-sans leading-relaxed font-medium">
                Dr. Priya Sharma, MBBS, MD Dermatology — AIIMS Delhi, with 12 years of dedicated experience, leads a team of experts committed to clinical excellence. Her vision for Dermalife brings together medical precision and a premium aesthetic journey, ensuring results that are both transformative and natural.
              </p>
              <div>
                <h4 className="text-3xl font-primary text-brand-accent font-bold uppercase tracking-tight">Dr. Priya Sharma</h4>
                <p className="text-brand-gold font-bold uppercase tracking-widest text-sm mt-1">Founder & Medical Director</p>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-brand-gold/10 rounded-full scale-110 animate-pulse" />
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <div className="absolute inset-0 bg-brand-muted" />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" alt="Founder" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
