import { motion } from 'motion/react';
import { Search, Star } from 'lucide-react';
import heroVideo from '../assets/hero_video.mp4';

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
      className="relative min-h-[75vh] md:h-screen md:min-h-screen flex flex-col md:flex-row md:items-center overflow-hidden bg-[#DDD6CB] md:bg-brand-cream pt-[72px] md:pt-0"
    >
      {/* Hero Video Container */}
      <div className="relative h-[45vh] md:absolute md:inset-0 md:h-full w-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover max-[465px]:object-[80%_center] object-right md:object-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Transition Gradient for Mobile - with 1px overlap to fix rendering glitch */}
        <div className="absolute bottom-[-1px] left-0 w-full h-24 bg-gradient-to-t from-[#DDD6CB] to-transparent z-10 md:hidden" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-8 pb-4 md:pt-32 md:pb-24">
        <div className="max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-4xl md:text-6xl font-primary font-extrabold  leading-[1.1] mb-6 uppercase tracking-tighter">
              Skin that tells <br />
              <span className="text-brand-gold">your best story.</span> <br />
            </h3>
            <p className="text-base md:text-xl text-brand-dark/70 mb-10 max-w-md font-sans leading-relaxed">
              Expert dermatology and aesthetics for every
              <br />
              skin type, tone, and concern. Real results,
              <br />
              - right here in Gurugram.
            </p>

            {/* Unified Button: Full-width on mobile/tablet, inline on desktop */}
            <div className="mt-8 md:mt-12">
              <button
                onClick={scrollToBooking}
                className="btn-primary w-full md:w-auto"
              >
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="relative md:absolute md:bottom-0 left-0 w-full bg-brand-accent/5 backdrop-blur-md py-4 overflow-hidden border-t border-brand-accent/10">
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
