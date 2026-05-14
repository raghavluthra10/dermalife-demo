import { motion } from 'motion/react';

const Facials = () => {
  return (
    <div className="pt-32 pb-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-primary font-extrabold uppercase tracking-tighter mb-8">
            Clinical <br />
            <span className="text-brand-gold">Facials</span>
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl font-sans leading-relaxed mb-12">
            Luxury meets clinical efficacy. Our medically supervised facials are 
            designed to deep clean, hydrate, and rejuvenate for an instant clinical glow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="aspect-[4/3] bg-brand-muted rounded-[2rem]" />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-primary mb-6">Personalised Glow</h2>
            <p className="text-brand-dark/70 leading-relaxed mb-8">
              Every facial is customized based on your skin's immediate needs, 
              using pharmaceutical-grade ingredients for visible, lasting radiance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facials;
