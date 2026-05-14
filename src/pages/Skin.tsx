import { motion } from 'motion/react';

const Skin = () => {
  return (
    <div className="pt-32 pb-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-primary font-extrabold uppercase tracking-tighter mb-8">
            Skin <br />
            <span className="text-brand-gold">Solutions</span>
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl font-sans leading-relaxed mb-12">
            Experience dermatologist-led skincare treatments tailored to your unique needs. 
            From acne management to advanced anti-aging, we provide clinically proven results.
          </p>
        </motion.div>

        {/* Placeholder for future content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="aspect-[4/3] bg-brand-muted rounded-[2rem]" />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-primary mb-6">Expert Diagnostics</h2>
            <p className="text-brand-dark/70 leading-relaxed mb-8">
              Every skin journey at Dermalife begins with a comprehensive analysis by our 
              senior dermatologists, ensuring the safest and most effective protocol for your skin type.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skin;
