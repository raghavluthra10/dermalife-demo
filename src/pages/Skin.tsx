import { motion } from 'motion/react';
import { ArrowUpRight, Check, Phone, ArrowRight, ShieldCheck, Sparkles, Activity, Target, Zap, Clock, Heart, Droplets, RefreshCw, Sun, LayoutGrid, AlertCircle, TrendingUp, Layers, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Skin = () => {
  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const concerns = [
    { text: "Acne & active breakouts", icon: <Activity size={16} /> },
    { text: "Pigmentation & dark spots", icon: <Target size={16} /> },
    { text: "Uneven skin tone & texture", icon: <Layers size={16} /> },
    { text: "Fine lines & wrinkles", icon: <RefreshCw size={16} /> },
    { text: "Acne scars & surgical scars", icon: <ShieldCheck size={16} /> },
    { text: "Dull & tired skin", icon: <Sparkles size={16} /> },
    { text: "Sun damage", icon: <Sun size={16} /> },
    { text: "Large pores", icon: <LayoutGrid size={16} /> },
    { text: "Skin laxity & sagging", icon: <TrendingUp size={16} /> },
    { text: "Redness & sensitivity", icon: <Heart size={16} /> },
    { text: "Melasma & hormonal pigmentation", icon: <Zap size={16} /> },
    { text: "Skin brightening & glow", icon: <Sparkles size={16} /> },
    { text: "Anti-ageing & skin tightening", icon: <Clock size={16} /> },
    { text: "Skin rejuvenation", icon: <RefreshCw size={16} /> },
    { text: "Carbon toning & deep cleanse", icon: <Droplets size={16} /> },
    { text: "Tattoo removal", icon: <AlertCircle size={16} /> },
    { text: "Skin booster & hydration", icon: <Droplets size={16} /> },
    { text: "Rough & damaged skin", icon: <Layers size={16} /> },
    { text: "Post-inflammatory marks", icon: <Target size={16} /> },
    { text: "Oily & congested skin", icon: <LayoutGrid size={16} /> },
  ];

  const treatments = [
    { name: "Face brightening & acne peel", desc: "Resurface and clarify skin for a visibly clearer, brighter complexion." },
    { name: "HIFU", desc: "Non-surgical skin tightening for face and neck — no downtime." },
    { name: "Pico laser", desc: "Advanced laser for pigmentation, toning, and skin brightening." },
    { name: "Fractional laser", desc: "Targeted resurfacing for scars, texture, and uneven skin tone." },
    { name: "Photofacial", desc: "Light-based treatment for redness, sun damage, and uneven complexion." },
    { name: "Exosome therapy", desc: "Next-generation skin regeneration using growth factor technology." },
    { name: "Glutathione IV & microneedling", desc: "Brighten from within — combined IV and skin-deep brightening treatment." },
    { name: "Face PRP", desc: "Natural skin rejuvenation using your own platelet-rich plasma." },
    { name: "Morpheus", desc: "Deep fractional RF microneedling for skin remodelling and tightening." },
    { name: "Q-switch laser & carbon toning", desc: "Deep cleanse, brightening, and tattoo removal." },
  ];

  return (
    <div className="bg-brand-cream min-h-screen pt-[104px]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <nav className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-brand-dark/40">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2 text-brand-gold">›</span>
          <span className="text-brand-dark">Skin</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="text-brand-dark/20 uppercase tracking-widest text-[10px] font-bold">Image Placeholder</p>
            </div>
          </motion.div>

          {/* Right Column (60%) */}
          <div className="w-full min-[929px]:w-[60%] flex flex-col pt-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] md:text-[12px] font-primary font-bold uppercase tracking-[0.3em] text-brand-gold mb-6 block"
            >
              Treatments for all skin types
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-primary font-normal text-brand-dark leading-[1.1] mb-8"
            >
              Skin treatments for every concern, every tone, every age.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-[1.7] mb-12 max-w-2xl"
            >
              Whether you're dealing with acne, pigmentation, ageing, or uneven texture — every skin treatment at Dermalife is diagnosed and supervised by a certified dermatologist. No guesswork. No generic protocols. Just real results, tailored to your skin.
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
              <a href="tel:+910000000000" className="px-8 py-4 border-2 border-brand-dark rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all font-primary flex items-center justify-center gap-2">
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
              Our skin treatments
            </h2>
            <p className="text-brand-dark/50 text-sm md:text-base max-w-xl mx-auto">
              Every treatment at Dermalife is performed under dermatologist supervision using FDA-approved technology.
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
                <Link to="/skin" className="inline-flex items-center gap-2 text-[10px] font-primary font-bold uppercase tracking-widest text-brand-gold group">
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

      {/* Advanced Technologies Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-left">
              <span className="text-brand-gold text-[10px] font-primary font-bold uppercase tracking-[0.3em] mb-4 block">
                World-Class Medical Devices
              </span>
              <h2 className="text-3xl md:text-5xl font-primary font-bold text-white uppercase tracking-tighter leading-tight">
                Our Advanced <br /> Technologies
              </h2>
            </div>
            <p className="text-white/40 text-sm md:text-base max-w-sm mb-2">
              We invest in the world's most advanced, FDA-approved laser and aesthetic platforms to ensure your safety and results.
            </p>
          </div>

          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4 md:pb-0">
            {[
              { name: "Lutronic PicoPlus", type: "Picosecond Laser", use: "Pigmentation & Tattoos" },
              { name: "Ultraformer III", type: "HIFU Technology", use: "Skin Lifting & Tightening" },
              { name: "InMode Morpheus8", type: "Fractional RF", use: "Deep Remodelling" },
              { name: "Lumenis M22", type: "Multi-Platform", use: "Skin Resurfacing & Vascular" },
            ].map((tech, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/50 transition-all duration-500 overflow-hidden min-w-[85%] md:min-w-0 snap-center"
              >
                {/* Tech Image Placeholder */}
                <div className="aspect-square bg-white/5 border-b border-white/10 flex items-center justify-center relative group-hover:bg-white/10 transition-colors duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <p className="text-white/10 uppercase tracking-widest text-[8px] font-bold">Machine Image</p>
                </div>

                <div className="p-8 relative">
                  {/* Tech Accents */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/20 transition-all duration-500" />
                  
                  <span className="text-brand-gold text-[9px] font-bold uppercase tracking-widest mb-4 block opacity-60">
                    {tech.type}
                  </span>
                  <h3 className="text-xl font-primary font-bold text-white uppercase tracking-tight mb-4 leading-tight group-hover:text-brand-gold transition-colors">
                    {tech.name}
                  </h3>
                  <div className="h-px w-8 bg-brand-gold/30 mb-4 group-hover:w-full transition-all duration-500" />
                  <p className="text-white/40 text-[11px] uppercase tracking-wider font-bold">
                    Key Application: <span className="text-white/60">{tech.use}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12 md:mt-16">
            <button onClick={scrollToBooking} className="px-12 py-5 bg-brand-gold text-brand-dark font-bold rounded-full hover:bg-white transition-all uppercase tracking-widest text-sm shadow-xl">
              Book free consultation
            </button>
          </div>
        </div>
      </section>

      {/* Before & After Testimonials Section */}
      <section className="py-24 bg-white border-t border-brand-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-[10px] font-primary font-bold uppercase tracking-[0.3em] mb-4 block">
              Real Transformations
            </span>
            <h2 className="text-3xl md:text-5xl font-primary font-bold text-brand-dark uppercase tracking-tighter">
              Clinical Results
            </h2>
          </div>

          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-8 pb-4 lg:pb-0">
            {[
              { title: "Acne Scar Revision", patient: "Anjali K.", treatment: "Fractional Laser + PRP" },
              { title: "Jawline Contouring", patient: "Rohan M.", treatment: "HIFU + Morpheus8" },
              { title: "Pigmentation Clearance", patient: "Priya S.", treatment: "PicoPlus + Skin Boosters" },
            ].map((result, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col bg-brand-cream/10 rounded-3xl overflow-hidden border border-brand-muted/30 shadow-sm hover:shadow-xl transition-all duration-500 min-w-[85%] lg:min-w-0 snap-center"
              >
                {/* Before/After Split Placeholder */}
                <div className="flex aspect-video bg-[#E5E1DA]">
                  <div className="flex-1 border-r border-white/20 flex flex-col items-center justify-center relative group overflow-hidden">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/30 z-10">Before</span>
                    <div className="absolute inset-0 bg-brand-dark/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center relative group overflow-hidden">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/30 z-10">After</span>
                    <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-primary font-bold text-brand-dark uppercase tracking-tight">
                      {result.title}
                    </h3>
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                      Verified Result
                    </span>
                  </div>
                  <p className="text-brand-dark/60 text-sm font-sans mb-6 leading-relaxed">
                    "The difference is night and day. My skin hasn't felt this healthy in years. The team at Dermalife is truly expert."
                  </p>
                  <div className="pt-4 border-t border-brand-muted/30 flex justify-between items-center">
                    <span className="text-[11px] font-bold text-brand-dark uppercase tracking-wider">{result.patient}</span>
                    <span className="text-[10px] text-brand-dark/40 italic font-sans">{result.treatment}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-[48px] font-primary font-bold text-brand-dark leading-[1.1] mb-6 uppercase tracking-tighter">
            Not sure which skin treatment <br className="hidden md:block" /> is right for you?
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-dark/60 mb-12 max-w-2xl mx-auto">
            Book a free consultation — our dermatologist will analyse your skin and recommend the right plan. No pressure, no commitment.
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
    </div>
  );
};

export default Skin;
