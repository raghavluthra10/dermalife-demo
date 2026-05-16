import { motion } from 'motion/react';
import { ArrowRight, Check, Phone, Activity, Target, Layers, ShieldCheck, Sparkles, HeartPulse, Zap, Clock, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import facialHero from '../assets/facial_home.jpg';

const Facials = () => {
  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const concerns = [
    { text: "Dull and tired-looking skin", icon: <Sparkles size={16} /> },
    { text: "Dehydrated and dry skin", icon: <Droplets size={16} /> },
    { text: "Oily and congested skin", icon: <Activity size={16} /> },
    { text: "Acne and breakout-prone skin", icon: <Zap size={16} /> },
    { text: "Uneven skin tone and texture", icon: <Target size={16} /> },
    { text: "Pigmentation and dark spots", icon: <Layers size={16} /> },
    { text: "Fine lines and early signs of ageing", icon: <Clock size={16} /> },
    { text: "Skin sensitivity and redness", icon: <HeartPulse size={16} /> },
    { text: "Loss of glow and radiance", icon: <Sparkles size={16} /> },
    { text: "Rough and damaged skin", icon: <ShieldCheck size={16} /> },
    { text: "Pore congestion and blackheads", icon: <Activity size={16} /> },
    { text: "Skin needing deep repair and restoration", icon: <Layers size={16} /> },
  ];

  const treatments = [
    {
      name: "Dermal skin brightening facial",
      desc: "A professional brightening treatment that targets dullness, uneven tone, and pigmentation for instant glow.",
      href: "/facials/brightening-facial"
    },
    {
      name: "Dermalife detox facial",
      desc: "A deep cleansing and detoxifying facial that purifies congested skin and restores clarity.",
      href: "/facials/detox-facial"
    },
    {
      name: "Hydra facial",
      desc: "Multi-step hydration and cleansing treatment for instantly plumper, smoother, glowing skin.",
      href: "/facials/hydra-facial"
    },
    {
      name: "Korean glass facial",
      desc: "Achieve the coveted Korean glass skin — poreless, translucent, and lit from within.",
      href: "/facials/korean-glass-facial"
    },
    {
      name: "Stem cell anti-ageing facial",
      desc: "Advanced anti-ageing facial using stem cell technology to reverse visible signs of ageing.",
      href: "/facials/stem-cell-facial"
    },
    {
      name: "Line correction facial",
      desc: "Targeted treatment to visibly soften fine lines and restore youthful skin texture.",
      href: "/facials/line-correction-facial"
    },
    {
      name: "Deep repair facial",
      desc: "An intensive skin repair treatment for damaged, stressed, or compromised skin.",
      href: "/facials/deep-repair-facial"
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen pt-[104px]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <nav className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-brand-dark/40">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2 text-brand-gold">›</span>
          <span className="text-brand-dark uppercase tracking-widest">Facials</span>
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
                src={facialHero}
                alt="Facial Treatments"
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
              PROFESSIONAL FACIALS & SKIN TREATMENTS
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-primary font-normal text-brand-dark leading-[1.1] mb-8"
            >
              Facials that actually <br /> <span className="text-brand-gold italic font-normal text-4xl md:text-5xl lg:text-[52px]">transform your skin.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-[1.7] mb-12 max-w-2xl"
            >
              Every facial at Dermalife goes far beyond a standard salon treatment. Our facials use professional-grade formulations and clinical techniques to deeply cleanse, restore, brighten, and rejuvenate your skin — delivering visible results from the very first session. Each facial is customised to your skin type, concern, and goals by our trained specialists.
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
            <h2 className="text-3xl md:text-5xl font-primary font-bold text-brand-dark uppercase tracking-tighter mb-4">Our professional facials</h2>
            <p className="font-sans text-brand-dark/60 max-w-2xl leading-relaxed">
              Every clinical facial at Dermalife is performed using medical-grade equipment and advanced formulations to deliver results you can see and feel instantly.
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
            Not sure which facial <br /> <span className="text-brand-gold italic font-normal text-4xl md:text-5xl lg:text-[52px]">is right for you?</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-dark/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation — our skin specialist will assess your skin type and goals, then recommend the perfect facial for your needs. We believe in results, not just relaxation.
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

export default Facials;
