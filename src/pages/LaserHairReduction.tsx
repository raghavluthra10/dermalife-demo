import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Target, Star } from 'lucide-react';
import BookingForm from '../components/BookingForm';

const LaserHairReduction = () => {
  return (
    <div className="bg-brand-cream min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-accent/10  rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Premium Hair Care
            </span>
            <h1 className="text-5xl md:text-7xl font-primary font-bold  leading-[0.9] mb-8 uppercase tracking-tighter">
              Laser Hair <br /> Reduction
            </h1>
            <p className="text-lg md:text-xl text-brand-dark/60 font-sans font-medium max-w-xl leading-relaxed mb-10">
              Experience the ultimate freedom from unwanted hair with our state-of-the-art laser technology. Painless, permanent, and perfectly safe for all skin types.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-brand-accent text-white rounded-full font-primary font-bold uppercase tracking-widest text-xs hover:bg-brand-gold transition-all shadow-xl">
                Book Free Consultation
              </button>
              <button className="px-8 py-4 border border-brand-accent  rounded-full font-primary font-bold uppercase tracking-widest text-xs hover:bg-brand-accent hover:text-white transition-all">
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4 z-0" />
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck className="text-brand-gold" />, title: "FDA Approved", desc: "World-class safety standards with clinically proven results." },
              { icon: <Sparkles className="text-brand-gold" />, title: "Virtually Painless", desc: "Advanced cooling technology ensures maximum comfort during treatment." },
              { icon: <Target className="text-brand-gold" />, title: "Precision", desc: "Targeted energy that destroys hair follicles without affecting skin." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-primary font-bold  uppercase tracking-tight">{benefit.title}</h3>
                <p className="/50 leading-relaxed text-sm uppercase tracking-tight font-medium">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-cream px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-primary font-bold  mb-8 uppercase tracking-tighter">The Procedure</h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Skin Assessment", desc: "Our experts analyze your skin type and hair growth patterns." },
                { step: "02", title: "Patch Test", desc: "Ensuring your skin reacts perfectly to the laser settings." },
                { step: "03", title: "The Session", desc: "Quick and efficient laser pulses targeting the hair follicles." },
                { step: "04", title: "Aftercare", desc: "Soothing gels and personalized advice for long-lasting results." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <span className="text-2xl font-primary font-bold text-brand-gold/30 group-hover:text-brand-gold transition-colors">{item.step}</span>
                  <div>
                    <h4 className="text-lg font-primary font-bold  uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="/40 text-sm uppercase tracking-tight font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full aspect-square bg-white rounded-[3rem] shadow-2xl flex items-center justify-center p-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-brand-accent/5" />
            <div className="relative z-10 text-center">
                <Star className="w-16 h-16 text-brand-gold mx-auto mb-6 animate-pulse" />
                <h3 className="text-3xl font-primary font-bold  uppercase tracking-tighter mb-4">99% Satisfaction</h3>
                <p className="/50 text-sm uppercase font-bold tracking-widest">Across 10,000+ sessions</p>
            </div>
          </div>
        </div>
      </section>
      <BookingForm />
    </div>
  );
};

export default LaserHairReduction;
