import { motion } from 'motion/react';

const Slimming = () => {
  return (
    <div className="pt-32 pb-20 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-primary font-extrabold uppercase tracking-tighter mb-8">
            Body <br />
            <span className="text-brand-gold">Slimming</span>
          </h1>
          <p className="text-xl text-brand-dark/70 max-w-2xl font-sans leading-relaxed mb-12">
            Non-invasive body contouring and slimming solutions. 
            Achieve your desired silhouette with medically-backed protocols and precision technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="aspect-[4/3] bg-brand-muted rounded-[2rem]" />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-primary mb-6">Precise Contouring</h2>
            <p className="text-brand-dark/70 leading-relaxed mb-8">
              Target stubborn areas with our safe, effective slimming treatments 
              monitored by our aesthetic specialists for optimal safety and results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slimming;
