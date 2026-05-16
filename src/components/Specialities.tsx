import { motion } from 'motion/react';

const Specialities = () => {
  const specialties = [
    {
      number: '01',
      category: 'SKIN & AESTHETICS',
      title: 'Skin Treatments',
      description: 'Advanced clinical solutions to restore and maintain your skin\'s natural health and radiance.',
      tags: ['Acne', 'Pigmentation', 'Anti-aging', 'HydraFacial']
    },
    {
      number: '02',
      category: 'SLIMMING & BODY',
      title: 'Body Contouring & Sculpting',
      description: 'Non-invasive fat reduction and body shaping treatments to achieve your desired physique.',
      tags: ['Fat freezing', 'RF sculpting', 'Inch loss', 'Tummy toning']
    },
    {
      number: '03',
      category: 'HAIR SOLUTIONS',
      title: 'Hair Restoration',
      description: 'Scientifically-proven therapies for hair growth and scalp health at any stage of hair loss.',
      tags: ['PRP', 'GFC', 'Mesotherapy']
    },
    {
      number: '04',
      category: 'WELLNESS & WEIGHT',
      title: 'Medical Weight Management',
      description: 'Doctor-led programs focusing on sustainable weight loss and metabolic optimization.',
      tags: ['Metabolic reset', 'Diet planning', 'Slimming wraps', 'Cavitation']
    }
  ];

  return (
    <section className="py-24 bg-[#f8f7f2] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block"
          >
            Our Specialities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-primary font-bold text-brand-dark uppercase tracking-tighter"
          >
            Skin Care & <br className="md:hidden" /> Body Wellness
          </motion.h2>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-6 md:gap-8 snap-x snap-mandatory pb-12 no-scrollbar -mx-6 px-6 md:mx-0 md:px-4 md:-mx-4">
          {specialties.map((spec, index) => (
            <motion.div
              key={spec.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-brand-muted/30 relative overflow-hidden group hover:shadow-xl transition-all duration-500 min-w-[85vw] md:min-w-0 snap-center"
            >
              <div className="absolute top-8 right-8 text-7xl md:text-8xl font-primary font-extrabold text-brand-dark/[0.03] group-hover:text-brand-gold/10 transition-colors duration-500">
                {spec.number}
              </div>
              
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-6 block">
                  {spec.category}
                </span>
                <h3 className="text-2xl md:text-4xl font-primary font-bold text-brand-dark uppercase tracking-tight mb-4 md:mb-6">
                  {spec.title}
                </h3>
                <p className="text-brand-dark/60 font-sans text-xs md:text-base leading-relaxed mb-8 md:mb-10 max-w-sm">
                  {spec.description}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {spec.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-brand-cream border border-brand-muted/40 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-brand-dark/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
