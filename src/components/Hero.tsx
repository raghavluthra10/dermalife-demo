import { motion } from 'motion/react';
import { Search, Star } from 'lucide-react';
import heroVideo from '../hero-video.mp4';

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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-brand-cream">
      {/* Hero Video & Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-brand-cream/80 via-brand-cream/50 to-transparent absolute z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="w-full h-full bg-black/10 absolute inset-0 z-[5]" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-7xl font-primary font-extrabold  leading-[1.1] mb-6 uppercase tracking-tighter">
              Transformative <br />
              <span className="text-brand-gold">skin care,</span> <br />
              designed for you.
            </h1>
            <p className="text-base md:text-2xl text-brand-dark/70 mb-10 max-w-md font-sans leading-relaxed">
              Expert dermatology. Real results. Tailored to your unique aesthetic goals.
            </p>

            <div className="hidden sm:block mt-12">
              <button
                onClick={scrollToBooking}
                className="btn-primary"
              >
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile-Only Bottom CTA */}
      <div className="sm:hidden absolute bottom-24 left-6 right-6 z-30">
        <button
          onClick={scrollToBooking}
          className="btn-primary w-full"
        >
          Book Free Consultation
        </button>
      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-accent/5 backdrop-blur-md py-4 overflow-hidden border-t border-brand-accent/10">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((_, i) => (
            <span key={i} className=" text-sm font-bold tracking-wide flex items-center gap-3 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              Dermalife Skin & Hair Clinic — Sector 56 Gurugram — Expert Dermatologists — ISO Certified — 1000+ Happy Patients
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
