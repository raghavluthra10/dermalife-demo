import { motion } from 'motion/react';
import { Search, Star } from 'lucide-react';
import heroImage from '../hero-treatment.png';

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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-brand-cream/70 via-brand-cream/40 to-transparent absolute z-10" />
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="w-full h-full bg-black/5 absolute inset-0 z-[5]" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-primary font-extrabold text-brand-green leading-[1.1] mb-6 uppercase tracking-tighter">
              Transformative <br />
              <span className="text-brand-gold">skin care,</span> <br />
              designed for you.
            </h1>
            <p className="text-xl md:text-2xl text-brand-dark/70 mb-10 max-w-md font-sans">
              Expert dermatology. Real results. Tailored to your unique aesthetic goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <button 
                onClick={scrollToBooking}
                className="w-full sm:w-auto px-10 py-5 bg-brand-green text-white font-bold rounded-full hover:bg-brand-green/90 transition-all shadow-2xl font-primary uppercase tracking-widest text-sm"
              >
                Book Free Consultation
              </button>
              
              <div className="relative w-full sm:w-80 group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-brand-green/50 group-focus-within:text-brand-green">
                  <Search size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="What can we treat?" 
                  className="w-full bg-white border border-brand-muted py-4 pl-12 pr-6 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all shadow-md font-bold uppercase tracking-widest text-xs"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute bottom-24 right-6 md:right-12 z-30 max-w-[240px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-brand-green p-6 rounded-2xl text-white shadow-2xl relative"
        >
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
            <Star size={16} className="fill-brand-gold text-white" />
          </div>
          <p className="text-sm font-medium leading-relaxed font-bold uppercase tracking-tight">
            <span className="text-brand-gold">#1 Specialist</span> in skin & aesthetic treatments across India
          </p>
        </motion.div>
      </div>

      {/* Testimonial Ticker */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-green/5 backdrop-blur-md py-4 overflow-hidden border-t border-brand-green/10">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...stats, ...stats].map((stat, i) => (
            <span key={i} className="text-brand-green text-sm font-bold tracking-wide flex items-center gap-3 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              {stat.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
