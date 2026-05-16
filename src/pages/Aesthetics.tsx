import { motion } from 'motion/react';
import { ArrowRight, Check, Phone, Activity, Target, Layers, ShieldCheck, Sparkles, HeartPulse, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import aestheticsHero from '../assets/aesthetics_home.jpg';

const Aesthetics = () => {
  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const concerns = [
    { text: "Fine lines and wrinkles", icon: <Activity size={16} /> },
    { text: "Sagging and loss of facial volume", icon: <Layers size={16} /> },
    { text: "Jawline definition and contouring", icon: <Target size={16} /> },
    { text: "Lip enhancement and definition", icon: <HeartPulse size={16} /> },
    { text: "Under-eye hollowness and dark circles", icon: <Sparkles size={16} /> },
    { text: "Forehead lines and frown lines", icon: <Zap size={16} /> },
    { text: "Crow's feet and smile lines", icon: <Clock size={16} /> },
    { text: "Nose reshaping without surgery", icon: <Target size={16} /> },
    { text: "Cheek and chin enhancement", icon: <Layers size={16} /> },
    { text: "Skin hydration and glow", icon: <Sparkles size={16} /> },
    { text: "Facial lifting and tightening", icon: <Activity size={16} /> },
    { text: "Excessive sweating", icon: <Zap size={16} /> },
  ];

  const treatments = [
    {
      name: "Dermal fillers",
      desc: "Restore lost volume, define features, and smooth deep lines with precision-placed hyaluronic acid fillers.",
      href: "/aesthetics/dermal-fillers"
    },
    {
      name: "Botox",
      desc: "Relax fine lines and wrinkles for a refreshed, natural appearance — without looking done.",
      href: "/aesthetics/botox"
    },
    {
      name: "Collagen threads",
      desc: "Non-surgical face lift using dissolvable threads that lift, tighten, and stimulate collagen simultaneously.",
      href: "/aesthetics/collagen-threads"
    },
    {
      name: "Skin booster",
      desc: "Deep hydration injected directly into the skin for lasting plumpness, glow, and elasticity.",
      href: "/aesthetics/skin-booster"
    },
    {
      name: "Meso Botox",
      desc: "Micro-injections of diluted Botox that refine pores, control oil, and give the skin a smooth, glassy finish.",
      href: "/aesthetics/meso-botox"
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen pt-[104px]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <nav className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-brand-dark/40">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2 text-brand-gold">›</span>
          <span className="text-brand-dark uppercase tracking-widest">Aesthetics</span>
        </nav>
      </div>

      {/* Main Two-Column Layout */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col min-[929px]:flex-row gap-12 lg:gap-24 items-start">

          {/* Left Column (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full min-[929px]:w-[40%] sticky top-[140px]"
          >
            <div className="aspect-[2/3] bg-[#E5E1DA] rounded-[12px] border border-brand-muted/30 flex items-center justify-center overflow-hidden relative group">
              <img
                src={aestheticsHero}
                alt="Aesthetics Treatment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </motion.div>

          {/* Right Column (60%) */}
          <div className="w-full min-[929px]:w-[60%] flex flex-col pt-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] md:text-[12px] font-primary font-bold uppercase tracking-[0.3em] text-brand-gold mb-6 block"
            >
              INJECTABLES & AESTHETIC TREATMENTS
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-primary font-normal text-brand-dark leading-[1.1] mb-8"
            >
              Look refreshed, natural, <br /> <span className="text-brand-gold italic font-normal text-4xl md:text-5xl lg:text-[52px]">and exactly like yourself.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-[1.7] mb-12 max-w-2xl"
            >
              Aesthetic treatments at Dermalife are never about changing how you look — they are about enhancing and restoring what is already there. Every injectable and aesthetic procedure is performed exclusively by our certified dermatologists. No beauticians, no technicians. Just medical precision, natural results, and your safety above everything else.
            </motion.p>

            {/* Treatable Concerns Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-12"
            >
              <div className="inline-block bg-brand-accent/5 text-brand-dark text-[10px] font-bold px-6 py-2 rounded-full uppercase tracking-[0.2em] mb-10">
                Treatable Concerns
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {concerns.map((concern, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-white border border-brand-muted/40 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                      {concern.icon}
                    </div>
                    <span className="font-sans text-sm text-brand-dark/80 group-hover:text-brand-dark transition-colors">{concern.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button onClick={scrollToBooking} className="btn-primary">Book free consultation</button>
              <a href="tel:+919810305086" className="px-8 py-4 border-2 border-brand-dark rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all font-primary flex items-center justify-center gap-2">
                <Phone size={14} /> Call us now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment List Section */}
      <section className="bg-white py-24 border-t border-brand-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-primary font-bold text-brand-dark uppercase tracking-tighter mb-4">Our aesthetic treatments</h2>
            <p className="font-sans text-brand-dark/60 max-w-2xl leading-relaxed">
              Every aesthetic treatment at Dermalife is performed exclusively by certified dermatologists — never a technician or beautician. Your safety and natural results are our priority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-brand-cream/10 rounded-[24px] border border-brand-muted/30 p-8 md:p-10 flex flex-col items-start hover:border-brand-gold/40 transition-all group"
              >
                <h3 className="text-2xl font-primary font-bold text-brand-dark uppercase tracking-tight mb-4">{treatment.name}</h3>
                <p className="font-sans text-brand-dark/60 text-sm leading-relaxed mb-8 flex-grow">{treatment.desc}</p>
                <Link to={treatment.href} className="inline-flex items-center gap-2 text-[10px] font-primary font-bold uppercase tracking-widest text-brand-dark group-hover:text-brand-gold transition-colors">
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="py-24 bg-brand-cream relative overflow-hidden text-center border-t border-brand-muted/30" id="booking-section">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-[56px] font-primary font-bold text-brand-dark leading-[1.1] mb-6 uppercase tracking-tighter text-black">
            Not sure which aesthetic <br /> <span className="text-brand-gold italic font-normal text-4xl md:text-5xl lg:text-[52px]">treatment is right for you?</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-dark/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation — our dermatologist will assess your face, understand your goals, and recommend the right treatment. We will never recommend anything you don't need. No pressure, no commitment.
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

export default Aesthetics;
