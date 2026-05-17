import { motion } from 'motion/react';
import { Check, Phone, Target, Sparkles, ShieldCheck, Layers, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import skinHero from '../assets/glutathione.jpg';

const GlutathioneIVMicroneedling = () => {
  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-brand-cream min-h-screen pt-[104px]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <nav className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-brand-dark/40">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2 text-brand-gold">›</span>
          <Link to="/skin" className="hover:text-brand-gold transition-colors">Skin</Link>
          <span className="mx-2 text-brand-gold">›</span>
          <span className="text-brand-dark uppercase">Glutathione IV & Microneedling</span>
        </nav>
      </div>

      {/* SECTION 1: HERO (TWO COLUMN) */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] md:text-[12px] font-primary font-bold uppercase tracking-[0.4em] text-brand-gold mb-6 block"
            >
              BRIGHTEN . BOOST . TRANSFORM
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-[64px] font-primary font-normal text-brand-dark leading-[1.1] mb-8 uppercase tracking-tighter"
            >
              Glutathione IV & <br /> <span className="text-brand-gold italic font-normal text-5xl md:text-[56px]">microneedling</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-[1.7] mb-10 max-w-xl"
            >
              A powerful combination treatment that works on two levels simultaneously — Glutathione IV delivers skin-brightening antioxidants directly into the bloodstream, while microneedling enhances surface-level brightening. The result is comprehensive, visible radiance from the inside out.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToBooking} className="btn-primary">Book free consultation</button>
              <a href="tel:+919212510087" className="px-8 py-4 border-2 border-brand-dark rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all font-primary flex items-center justify-center gap-2">
                <Phone size={14} /> Call us now
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/5] bg-[#E5E1DA] rounded-[24px] overflow-hidden relative border border-brand-muted/30 group">
              <img
                src={skinHero}
                alt="Glutathione IV & Microneedling Treatment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY DERMALIFE (DARK BACKGROUND) */}
      <section className="bg-brand-dark py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2 text-white">
              <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">WHY DERMALIFE</span>
              <h2 className="text-3xl md:text-5xl font-primary font-bold uppercase tracking-tighter leading-tight mb-8 text-white">
                Brighter skin. <br /> Inside and out.
              </h2>
              <p className="font-sans text-[16px] md:text-[18px] text-white/60 leading-[1.7] mb-8">
                IV treatments must be administered by qualified medical professionals in a fully clinical setting. At Dermalife, all IV procedures are supervised by our certified dermatologists with complete medical oversight — so you get maximum results with complete safety.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button onClick={scrollToBooking} className="px-12 py-5 bg-brand-gold text-brand-dark font-bold rounded-full hover:bg-white transition-all uppercase tracking-widest text-sm shadow-xl w-full sm:w-auto text-center">
                  Book free consultation
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full">
                {[
                  { text: "Melanin production reduced systemically", icon: <Target className="text-brand-gold" size={20} /> },
                  { text: "Overall skin tone brightened visibly", icon: <Sparkles className="text-brand-gold" size={20} /> },
                  { text: "Microneedling boosts surface brightening", icon: <Droplets className="text-brand-gold" size={20} /> },
                  { text: "Safe, medically supervised procedure", icon: <ShieldCheck className="text-brand-gold" size={20} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/30 transition-all group">
                    <div className="mt-1 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <span className="font-sans font-bold text-white text-sm leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BOTTOM CTA */}
      <section className="py-24 bg-brand-cream relative overflow-hidden text-center border-t border-brand-muted/30">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-[56px] font-primary font-bold text-brand-dark leading-[1.1] mb-6 uppercase tracking-tighter text-black">
            Want visibly brighter <br /> <span className="text-brand-gold italic font-normal">skin from within?</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-dark/60 mb-12 max-w-2xl mx-auto">
            Book a free consultation — our dermatologist will assess your skin tone and design the right brightening protocol.
          </p>
          <button onClick={scrollToBooking} className="btn-primary min-w-[300px]">
            Book free consultation
          </button>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-dark/30 font-bold flex items-center gap-2">
              <Check size={12} className="text-brand-gold" />
              Takes 2 minutes
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-dark/30 font-bold flex items-center gap-2">
              <Check size={12} className="text-brand-gold" />
              No commitment
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-dark/30 font-bold flex items-center gap-2">
              <Check size={12} className="text-brand-gold" />
              Expert-led advice
            </span>
          </div>
        </div>
      </section>
      <BookingForm />
    </div>
  );
};

export default GlutathioneIVMicroneedling;
