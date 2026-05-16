import { motion } from 'motion/react';
import { Search, Star } from 'lucide-react';
import hero01 from '../assets/hero01.jpg';

const Hero = () => {
  const stats = [
    { text: "“DermaLife's HydraFacial changed my skin game forever.” — Ananya K.", id: 1 },
    { text: "“The best aesthetic experts in the country. Period.” — Rohan M.", id: 2 },
    { text: "“Transformation that feels natural and premium.” — Priya S.", id: 3 },
  ];

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[75vh] min-[929px]:h-[calc(100vh-104px)] flex flex-col min-[929px]:flex-row min-[929px]:items-center overflow-hidden bg-[#DDD6CB] min-[929px]:bg-brand-cream pt-[72px] min-[929px]:pt-0 min-[929px]:mt-[104px]"
    >
      {/* Hero Image Container */}
      <div className="relative h-[60vh] min-[929px]:absolute min-[929px]:inset-0 min-[929px]:h-full w-full z-0">
        <img
          src={hero01}
          alt="Dermalife Aesthetic Care"
          className="w-full h-full object-cover max-[465px]:object-[85%_center] object-right min-[929px]:object-right"
        />

        {/* Transition Gradient for Mobile - with 1px overlap to fix rendering glitch */}
        <div className="absolute bottom-[-1px] left-0 w-full h-24 bg-gradient-to-t from-[#DDD6CB] to-transparent z-10 min-[929px]:hidden" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 min-[929px]:px-12 w-full pt-8 pb-4 min-[929px]:pt-32 min-[929px]:pb-24">
        <div className="flex flex-col min-[768px]:flex-row min-[929px]:flex-col gap-8 min-[929px]:gap-0">
          {/* Left Side: Heading & Subheading */}
          <div className="flex-1 max-w-full min-[929px]:max-w-3xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-4xl min-[929px]:text-6xl font-primary font-extrabold  leading-[1.1] mb-6 uppercase tracking-tighter">
                Skin That Glows. <br />
                <span className="text-brand-gold">Body That Sculpts.</span> <br />
              </h3>
              <p className="text-base min-[929px]:text-xl text-brand-dark/70 mb-8 max-w-md font-sans leading-relaxed">
                Expert dermatology, body contouring and medical weight loss -
                all under one roof. Real results, right here in Gurugram.
              </p>

            </motion.div>
          </div>

          {/* Right Side: Trust Badges (below 928px) */}
          <div className="flex-1 min-[929px]:contents">
            <div className="flex flex-col gap-3 min-[929px]:mb-0">
              <div className="flex flex-wrap gap-3 min-[929px]:gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="inline-flex items-center gap-3 py-2.5 px-4 bg-white/40 backdrop-blur-md border border-brand-gold/20 rounded-2xl shadow-sm hover:border-brand-gold/40 transition-all duration-500"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <Star size={12} className="fill-brand-gold text-brand-gold" />
                  </div>
                  <span className="text-[9px] min-[929px]:text-[10px] font-primary font-bold text-brand-dark/80 uppercase tracking-[0.15em]">
                    Trusted by <span className="text-brand-gold">Dermatologists</span>
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="inline-flex items-center gap-3 py-2.5 px-4 bg-white/40 backdrop-blur-md border border-brand-gold/20 rounded-2xl shadow-sm hover:border-brand-gold/40 transition-all duration-500"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
                  </div>
                  <span className="text-[9px] min-[929px]:text-[10px] font-primary font-bold text-brand-dark/80 uppercase tracking-[0.15em]">
                    <span className="text-brand-gold">1,000+</span> Happy Customers
                  </span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="inline-flex items-center gap-3 py-2.5 px-4 bg-white/40 backdrop-blur-md border border-brand-gold/20 rounded-2xl shadow-sm hover:border-brand-gold/40 transition-all duration-500 w-fit"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={10} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <span className="text-[9px] min-[929px]:text-[10px] font-primary font-bold text-brand-dark/80 uppercase tracking-[0.15em]">
                  <span className="text-brand-gold">4.9/5</span> Verified Clinic Rating
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <button
            onClick={scrollToBooking}
            className="btn-primary w-full md:w-auto"
          >
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="relative min-[929px]:absolute min-[929px]:bottom-0 left-0 w-full bg-brand-accent/5 backdrop-blur-md py-4 overflow-hidden border-t border-brand-accent/10 z-30">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((_, i) => (
            <span key={i} className=" text-sm font-bold tracking-wide flex items-center gap-3 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              Dermalife Skin & Hair Clinic — DLF Phase 1 Gurugram — Expert Dermatologists — ISO Certified — 1000+ Happy Patients
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
