import { motion } from 'motion/react';
import { Leaf, Heart, Sparkles, Target, Users, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
  return (
    <main className="bg-brand-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-accent/10  rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Our Story
            </span>
            <h1 className="text-5xl md:text-8xl font-primary font-bold  leading-[0.85] mb-10 uppercase tracking-tighter">
              Beauty is more than <br /> <span className="text-brand-gold italic">skin deep</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-dark/70 font-sans font-medium leading-relaxed mb-12">
              At Dermalife Wellness, beauty is a lifestyle. We believe in restoring balance and confidence through personalized, innovative care.
            </p>
          </motion.div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
            <Leaf size={600} className=" absolute -top-20 -left-20 rotate-45" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-primary font-bold  uppercase tracking-tighter leading-tight">
                A Nurturing Environment <br /> for Transformation
              </h2>
              <div className="prose prose-lg text-brand-dark/60 font-sans font-medium uppercase tracking-tight leading-relaxed">
                <p>
                  Every experience at Dermalife is crafted to help you shine inside and out. From advanced skincare treatments to holistic wellness practices, we create a sanctuary where you can relax, recharge, and renew.
                </p>
                <p className="mt-6">
                  Discover a place where self-care meets transformation, and let Dermalife guide you toward radiant health and timeless beauty.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                  <div className="aspect-[4/5] bg-brand-cream rounded-3xl overflow-hidden shadow-2xl relative group">
                    <div className="absolute inset-0 bg-brand-accent/20 group-hover:bg-brand-accent/0 transition-all duration-700" />
                    <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80" alt="Clinic Ambience" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-brand-gold rounded-3xl flex items-center justify-center p-8 text-white">
                      <div className="text-center">
                          <h4 className="text-4xl font-primary font-bold">10k+</h4>
                          <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Happy Clients</p>
                      </div>
                  </div>
               </div>
               <div className="space-y-4 pt-12">
                  <div className="aspect-square bg-brand-accent rounded-3xl flex items-center justify-center p-8 text-white">
                      <div className="text-center">
                          <h4 className="text-4xl font-primary font-bold">15+</h4>
                          <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Years of Excellence</p>
                      </div>
                  </div>
                  <div className="aspect-[4/5] bg-brand-cream rounded-3xl overflow-hidden shadow-2xl relative group">
                    <div className="absolute inset-0 bg-brand-accent/20 group-hover:bg-brand-accent/0 transition-all duration-700" />
                    <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80" alt="Treatment Room" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 bg-brand-cream px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-primary font-bold  uppercase tracking-tighter mb-6">Our Three Pillars</h2>
            <p className="/50 font-bold uppercase tracking-[0.3em] text-xs">A Trusted Destination in Delhi NCR</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skin Care */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[3rem] shadow-xl border border-brand-muted relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-brand-dark/10 group-hover:text-brand-gold/20 transition-colors">
                  <Sparkles size={120} />
              </div>
              <h3 className="text-3xl font-primary font-bold  uppercase tracking-tight mb-8">🌿 Skin Care</h3>
              <ul className="space-y-6">
                {[
                  { title: "Acne & Scar Treatments", desc: "Advanced therapies to restore clear, healthy skin." },
                  { title: "Anti-aging Solutions", desc: "Non-invasive procedures for youthful radiance." },
                  { title: "Pigmentation & Glow", desc: "Customized regimens for even-toned, luminous skin." }
                ].map((item, i) => (
                  <li key={i} className="group/item">
                    <h5 className="font-primary font-bold  uppercase tracking-tight text-sm group-hover/item:text-brand-gold transition-colors">{item.title}</h5>
                    <p className="/40 text-[10px] uppercase font-bold tracking-tight mt-1">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Wellness */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-brand-accent p-12 rounded-[3rem] shadow-xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-brand-gold/10 transition-colors">
                  <Heart size={120} />
              </div>
              <h3 className="text-3xl font-primary font-bold text-white uppercase tracking-tight mb-8">💆 Wellness</h3>
              <ul className="space-y-6">
                {[
                  { title: "Holistic Programs", desc: "Lifestyle guidance for stress management and vitality." },
                  { title: "Nutritional Support", desc: "Diet plans tailored to skin and overall health." },
                  { title: "Detox Therapies", desc: "Revitalizing treatments to cleanse and rejuvenate." }
                ].map((item, i) => (
                  <li key={i} className="group/item">
                    <h5 className="font-primary font-bold text-white uppercase tracking-tight text-sm group-hover/item:text-brand-gold transition-colors">{item.title}</h5>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-tight mt-1">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Beauty */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[3rem] shadow-xl border border-brand-muted relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-brand-dark/10 group-hover:text-brand-gold/20 transition-colors">
                  <ShieldCheck size={120} />
              </div>
              <h3 className="text-3xl font-primary font-bold  uppercase tracking-tight mb-8">💄 Beauty</h3>
              <ul className="space-y-6">
                {[
                  { title: "Cosmetic Enhancements", desc: "Safe procedures for facial contouring and glow." },
                  { title: "Laser Treatments", desc: "Hair removal, skin resurfacing, and rejuvenation." },
                  { title: "Hair Restoration", desc: "Natural-looking transplants and scalp therapies." }
                ].map((item, i) => (
                  <li key={i} className="group/item">
                    <h5 className="font-primary font-bold  uppercase tracking-tight text-sm group-hover/item:text-brand-gold transition-colors">{item.title}</h5>
                    <p className="/40 text-[10px] uppercase font-bold tracking-tight mt-1">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <div className="mt-20 text-center max-w-3xl mx-auto">
              <p className="text-lg text-brand-dark/60 font-sans font-medium italic">
                "Dermalife Wellness Clinic stands out for its patient-centric approach, blending science and aesthetics to help individuals look and feel their best."
              </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
