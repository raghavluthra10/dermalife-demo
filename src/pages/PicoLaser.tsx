import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Phone, Target, Activity, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import picoHero from '../assets/pico_laser.png';

const PicoLaser = () => {
  const [activeTab, setActiveTab] = useState<'Toning' | 'Brightening'>('Toning');

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const tabContent = {
    Toning: {
      heading: "Pico Toning",
      paragraph: "A low-fluence, high-frequency Pico laser protocol that targets uneven skin tone, melasma, and diffuse pigmentation across the face. Gentle enough for regular sessions, effective enough to deliver visible, lasting improvement in overall skin tone and clarity.",
      treats: [
        "Melasma and hormonal pigmentation",
        "Uneven and patchy skin tone",
        "Diffuse pigmentation and sun damage",
        "Dull and lacklustre complexion",
        "Suitable for all Indian skin tones"
      ]
    },
    Brightening: {
      heading: "Pico Brightening",
      paragraph: "A targeted Pico laser protocol that focuses on specific dark spots, post-acne marks, and concentrated areas of pigmentation — shattering pigment precisely and stimulating collagen for a brighter, more even, glass-skin result.",
      treats: [
        "Specific dark spots and sunspots",
        "Post-acne marks and blemishes",
        "Age spots and liver spots",
        "Concentrated areas of hyperpigmentation",
        "Overall skin brightening and glow"
      ]
    }
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
          <span className="text-brand-dark uppercase tracking-widest">Pico Laser</span>
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
              BRIGHTEN . TONE . CORRECT
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-[64px] font-primary font-normal text-brand-dark leading-[1.1] mb-8 uppercase tracking-tighter"
            >
              Pico laser — advanced <br /> <span className="text-brand-gold italic font-normal text-5xl md:text-[56px]">toning and brightening</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-[1.7] mb-10 max-w-xl"
            >
              One of the most advanced laser technologies available for skin brightening and toning. Pico laser delivers ultra-short bursts of energy in picoseconds — shattering pigment particles and stimulating collagen without damaging surrounding skin. Available in two focused protocols: toning and brightening.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToBooking} className="btn-primary">Book free consultation</button>
              <a href="tel:+919810305086" className="px-8 py-4 border-2 border-brand-dark rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all font-primary flex items-center justify-center gap-2">
                <Phone size={14} /> Call us now
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/5] bg-[#E5E1DA] rounded-[24px] overflow-hidden relative border border-brand-muted/30 group">
              <img 
                src={picoHero} 
                alt="Pico Laser Treatment" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* TWO TREATMENT TABS SECTION */}
      <section className="bg-white border-y border-brand-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center border-b border-brand-muted/10">
            {(['Toning', 'Brightening'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-12 py-8 text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative ${
                  activeTab === tab ? 'text-brand-gold' : 'text-brand-dark/40 hover:text-brand-dark'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabPico"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="py-24 max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
              >
                <div>
                  <h3 className="text-4xl font-primary font-bold text-brand-dark uppercase tracking-tight mb-8">
                    {tabContent[activeTab].heading}
                  </h3>
                  <p className="font-sans text-brand-dark/70 text-lg leading-relaxed mb-10">
                    {tabContent[activeTab].paragraph}
                  </p>
                  <button onClick={scrollToBooking} className="btn-primary">
                    Book {activeTab} Consultation
                  </button>
                </div>
                <div>
                  <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-8 block">WHAT IT TREATS</span>
                  <div className="space-y-4">
                    {tabContent[activeTab].treats.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all">
                          <Check size={12} />
                        </div>
                        <span className="font-sans text-brand-dark/80 font-bold text-sm tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY DERMALIFE (DARK BACKGROUND) */}
      <section className="bg-brand-accent py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2 text-white">
              <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">WHY DERMALIFE</span>
              <h2 className="text-3xl md:text-5xl font-primary font-bold uppercase tracking-tighter leading-tight mb-8 text-white">
                Clearer, more even skin. <br /> Faster than you think.
              </h2>
              <p className="font-sans text-[16px] md:text-[18px] text-white/60 leading-[1.7] mb-8">
                Pico laser on Indian skin requires precise calibration to avoid triggering post-inflammatory hyperpigmentation. Our dermatologists customise every session — wavelength, energy, and pulse duration — based on your specific skin tone, concern, and whether you need toning or brightening protocol.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button onClick={scrollToBooking} className="px-12 py-5 bg-brand-gold text-brand-dark font-bold rounded-full hover:bg-white transition-all uppercase tracking-widest text-sm shadow-xl w-full sm:w-auto text-center border-none">
                  Book free consultation
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full">
                {[
                  { text: "Pigmentation and melasma corrected", icon: <Target className="text-brand-gold" size={20} /> },
                  { text: "Acne marks and dark spots faded", icon: <Activity className="text-brand-gold" size={20} /> },
                  { text: "Skin tone evened and brightened", icon: <ShieldCheck className="text-brand-gold" size={20} /> },
                  { text: "Safe for all Indian skin tones", icon: <Zap className="text-brand-gold" size={20} /> }
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
      <section className="py-24 bg-brand-cream relative overflow-hidden text-center border-t border-brand-muted/30" id="booking-section">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-[56px] font-primary font-bold text-brand-dark leading-[1.1] mb-6 uppercase tracking-tighter text-black">
            Ready for clearer, <br /> <span className="text-brand-gold italic font-normal text-4xl md:text-5xl lg:text-[52px]">more even skin?</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-dark/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation — our dermatologist will assess your skin tone and recommend whether toning or brightening protocol is right for you.
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

export default PicoLaser;
