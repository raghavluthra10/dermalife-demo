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
            Skin treatments <br />
            <span className="text-brand-gold italic font-normal">that actually work.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-dark/70 max-w-2xl font-sans leading-relaxed mb-12">
            From acne and pigmentation to anti-ageing and skin texture — every treatment at Dermalife is diagnosed and supervised by a certified dermatologist. No guesswork. No generic protocols.
          </p>
        </motion.div>

        {/* Intro Para Section */}
        <div className="mt-16 md:mt-24 border-t border-brand-muted pt-12">
          <div className="max-w-4xl">
            <p className="text-xl md:text-2xl font-primary text-brand-dark leading-relaxed">
              Your skin is unique. That's why at Dermalife, we never recommend a treatment before understanding your skin profile. Every consultation begins with a detailed skin analysis by our dermatologist — who then builds a plan specific to your concerns, skin type, and goals. We use only FDA-approved technology, administered by trained specialists under medical supervision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skin;
