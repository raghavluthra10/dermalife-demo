import { motion } from 'motion/react';
import { ArrowRight, Check, Phone, Activity, Target, Layers, ShieldCheck, Sparkles, Zap, TrendingUp, Heart, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import slimmingHero from '../assets/slimming_and_body_contouring.jpg';

const Slimming = () => {
  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const concerns = [
    { text: "Stubborn belly fat", icon: <Target size={16} /> },
    { text: "Love handles and flanks", icon: <Layers size={16} /> },
    { text: "Double chin and face fat", icon: <ShieldCheck size={16} /> },
    { text: "Arm and thigh fat", icon: <Activity size={16} /> },
    { text: "Post-pregnancy weight", icon: <Heart size={16} /> },
    { text: "Slow metabolism", icon: <Zap size={16} /> },
    { text: "Body contouring and sculpting", icon: <TrendingUp size={16} /> },
    { text: "Muscle toning and definition", icon: <Zap size={16} /> },
    { text: "Cellulite reduction", icon: <Sparkles size={16} /> },
    { text: "Back fat and bra bulge", icon: <Layers size={16} /> },
    { text: "Overall weight loss", icon: <TrendingUp size={16} /> },
    { text: "Inch loss without surgery", icon: <Droplets size={16} /> },
  ];

  const treatments = [
    { name: "Ondacool", desc: "Fat freezing and skin tightening for face and body using targeted cool energy.", href: "/slimming/ondacool" },
    { name: "Lipolasere", desc: "Laser-based fat reduction that melts stubborn fat and tightens skin simultaneously.", href: "/slimming/lipolasere" },
    { name: "Detox & deep tissue massage", desc: "Therapeutic body massage that drains toxins, reduces water retention, and improves circulation.", href: "/slimming/detox-deep-tissue-massage" },
    { name: "Body trim", desc: "A targeted body contouring treatment to reduce localised fat and reshape problem areas.", href: "/slimming/body-trim" },
    { name: "M-sculpt", desc: "Electromagnetic muscle stimulation that builds muscle and burns fat at the same time.", href: "/slimming/m-sculpt" },
    { name: "Weight loss program", desc: "Medically supervised weight loss programs designed for 5kg, 7kg, and 10kg targets.", href: "/slimming/weight-loss-program" },
    { name: "Metaslim & Trimbit", desc: "Advanced metabolic slimming treatments targeting deep fat layers for lasting inch loss.", href: "/slimming/metaslim-trimbit" },
  ];

  return (
    <div className="bg-brand-cream min-h-screen pt-[104px]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <nav className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-brand-dark/40">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2 text-brand-gold">›</span>
          <span className="text-brand-dark">Slimming</span>
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
                src={slimmingHero}
                alt="Slimming & Body Contouring"
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
              NON-SURGICAL BODY CONTOURING & SLIMMING
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-primary font-normal text-brand-dark leading-[1.1] mb-8"
            >
              Lose inches. Tone up. <br /> No surgery, no downtime.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-[1.7] mb-12 max-w-2xl"
            >
              Whether you want to lose stubborn fat, tone and sculpt your body, or achieve medically supervised weight loss — every slimming treatment at Dermalife is assessed and supervised by a certified dermatologist. We identify your body composition, target areas, and goals before recommending any treatment. No crash diets. No surgery. Just clinically proven results.
            </motion.p>

            {/* Treatable Concerns Section */}
            <div className="mb-12">
              <span className="inline-block px-4 py-1.5 bg-brand-accent/5 text-brand-accent text-[10px] font-primary font-bold uppercase tracking-widest rounded-full border border-brand-accent/10 mb-8">
                Treatable Concerns
              </span>

              <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4">
                {concerns.map((concern, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-center gap-3 py-1.5 group"
                  >
                    <div className="text-brand-gold group-hover:scale-110 transition-transform duration-300">{concern.icon}</div>
                    <span className="font-sans text-[14px] text-brand-dark/80 group-hover:text-brand-dark transition-colors">{concern.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button onClick={scrollToBooking} className="btn-primary flex items-center justify-center gap-2">
                Book free consultation
              </button>
              <a href="tel:+919810305086" className="px-8 py-4 border-2 border-brand-dark rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all font-primary flex items-center justify-center gap-2">
                <Phone size={14} />
                Call us now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Treatments Section */}
      <section className="bg-white py-24 border-y border-brand-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-primary font-bold text-brand-dark uppercase tracking-tighter mb-4">
              Our slimming treatments
            </h2>
            <p className="text-brand-dark/50 text-sm md:text-base max-w-xl mx-auto">
              Every slimming treatment at Dermalife is supervised by a certified dermatologist. We assess your body, your goals, and your health before recommending any treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {treatments.map((treatment, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[12px] border border-brand-muted/40 hover:border-brand-gold/30 hover:shadow-xl hover:shadow-brand-gold/5 transition-all duration-500 bg-brand-cream/10"
              >
                <h3 className="text-xl md:text-2xl font-primary font-bold text-brand-dark uppercase tracking-tight mb-3">
                  {treatment.name}
                </h3>
                <p className="font-sans text-[15px] text-brand-dark/60 leading-relaxed mb-6">
                  {treatment.desc}
                </p>
                <Link
                  to={treatment.href}
                  className="inline-flex items-center gap-2 text-[10px] font-primary font-bold uppercase tracking-widest text-brand-gold group"
                >
                  Learn more
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12 md:mt-16">
            <button onClick={scrollToBooking} className="btn-primary">
              Book free consultation
            </button>
          </div>
        </div>
      </section>



      {/* Bottom CTA Section */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-[48px] font-primary font-bold text-brand-dark leading-[1.1] mb-6 uppercase tracking-tighter text-black">
            Not sure which slimming treatment <br className="hidden md:block" /> is right for you?
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-dark/60 mb-12 max-w-2xl mx-auto">
            Book a free consultation — our dermatologist will assess your body, understand your goals, and recommend the right treatment plan. No pressure, no commitment.
          </p>

          <button onClick={scrollToBooking} className="btn-primary min-w-[280px]">
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

export default Slimming;
