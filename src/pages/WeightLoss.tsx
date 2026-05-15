import { motion } from 'motion/react';
import { Check, Phone, ClipboardList, Target, TrendingUp, ShieldCheck, ArrowRight, UserPlus, Zap, Calendar, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeightLoss = () => {
  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const programs = [
    {
      id: "PROGRAM 01",
      title: "Lose 5kg",
      desc: "Ideal for those who want to shed the first few kilos and kickstart their weight loss journey. A focused short-term program combining clinical treatments and dietary guidance.",
      tag: "6–8 weeks"
    },
    {
      id: "PROGRAM 02",
      title: "Lose 7kg",
      desc: "A mid-level program for those with a clear weight loss target. Combines multiple clinical treatments with personalised nutrition and ongoing monitoring for sustained results.",
      tag: "8–12 weeks"
    },
    {
      id: "PROGRAM 03",
      title: "Lose 10kg",
      desc: "Our most comprehensive weight loss program for those committed to a significant transformation. Full clinical support, nutrition planning, and regular check-ins throughout the journey.",
      tag: "12–16 weeks"
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen pt-[104px]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <nav className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-brand-dark/40">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2 text-brand-gold">›</span>
          <Link to="/slimming" className="hover:text-brand-gold transition-colors">Slimming</Link>
          <span className="mx-2 text-brand-gold">›</span>
          <span className="text-brand-dark uppercase tracking-widest">Weight Loss Program</span>
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
              SUPERVISED . STRUCTURED . SUSTAINED
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-[64px] font-primary font-normal text-brand-dark leading-[1.1] mb-8 uppercase tracking-tighter"
            >
              Medically supervised <br /> <span className="text-brand-gold italic font-normal text-5xl md:text-[56px]">weight loss</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-[1.7] mb-10 max-w-xl"
            >
              A structured, medically supervised weight loss program designed to help you lose a specific, targeted amount of weight safely and sustainably. Choose from our 5kg, 7kg, or 10kg programs — each one built around your body composition, metabolism, lifestyle, and health profile by our certified dermatologist and nutrition team.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToBooking} className="btn-primary">Book free consultation</button>
              <a href="tel:+910000000000" className="px-8 py-4 border-2 border-brand-dark rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all font-primary flex items-center justify-center gap-2">
                <Phone size={14} /> Call us now
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/5] bg-[#E5E1DA] rounded-[24px] overflow-hidden relative border border-brand-muted/30 group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 flex items-center justify-center text-brand-dark/10 uppercase tracking-widest text-[10px] font-bold text-center px-6">Weight Loss Image Placeholder</div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PROGRAM CARDS SECTION */}
      <section className="bg-white py-24 border-t border-brand-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-brand-cream/10 rounded-[32px] border border-brand-muted/30 p-10 flex flex-col items-start hover:border-brand-gold/40 transition-all group"
              >
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em] mb-6 block">
                  {program.id}
                </span>
                <h3 className="text-3xl font-primary font-bold text-brand-dark uppercase tracking-tight mb-6">
                  {program.title}
                </h3>
                <p className="font-sans text-brand-dark/60 text-sm leading-relaxed mb-8 flex-grow">
                  {program.desc}
                </p>
                <div className="flex items-center gap-2 bg-brand-gold/10 text-brand-gold px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
                  <Calendar size={12} /> {program.tag}
                </div>
                <button
                  onClick={scrollToBooking}
                  className="inline-flex items-center gap-2 text-[10px] font-primary font-bold uppercase tracking-widest text-brand-dark group-hover:text-brand-gold transition-colors"
                >
                  Book free consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
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
                Not a diet plan. <br /> A medically designed program.
              </h2>
              <p className="font-sans text-[16px] md:text-[18px] text-white/60 leading-[1.7] mb-8">
                Crash diets and generic weight loss plans fail because they don't account for your individual metabolism, hormones, and body composition. At Dermalife, our weight loss programs are built by certified dermatologists and nutrition specialists — combining clinical treatments, dietary guidance, and ongoing monitoring to deliver real, lasting results safely.
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
                  { text: "Medically supervised throughout", icon: <ShieldCheck className="text-brand-gold" size={20} /> },
                  { text: "Built around your body and metabolism", icon: <UserPlus className="text-brand-gold" size={20} /> },
                  { text: "Three program targets: 5kg, 7kg, 10kg", icon: <Target className="text-brand-gold" size={20} /> },
                  { text: "Combines treatments, diet and monitoring", icon: <Zap className="text-brand-gold" size={20} /> }
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
            Ready to lose weight the <br /> <span className="text-brand-gold italic font-normal text-5xl md:text-[56px]">right way, with medical supervision?</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-dark/60 mb-12 max-w-2xl mx-auto">
            Book a free consultation — our dermatologist will assess your body, understand your target, and recommend the right weight loss program for you.
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
    </div>
  );
};

export default WeightLoss;
