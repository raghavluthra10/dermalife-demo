import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const TopTreatments = () => {
  const [activeTab, setActiveTab] = useState<'treatments' | 'concerns'>('treatments');

  const content = {
    treatments: [
      "01. HydraFacial",
      "02. Laser Hair Reduction",
      "03. IV Wellness Drips",
      "04. CoolSculpting",
      "05. Skin Boosters",
      "06. PRP Hair Treatment"
    ],
    concerns: [
      "01. Wrinkles & Fine Lines",
      "02. Dull & Uneven Skin",
      "03. Acne & Scarring",
      "04. Pigmentation",
      "05. Hair Thinning",
      "06. Stubborn Fat"
    ]
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-brand-green mb-12 font-primary font-bold uppercase tracking-tighter">Top treatments for every concern</h2>
        
        <div className="flex gap-8 border-b border-brand-muted mb-16">
          {['Treatments', 'Concerns'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase() as any)}
              className={`pb-4 text-xl font-primary font-bold relative transition-all uppercase tracking-widest ${
                activeTab === tab.toLowerCase() ? 'text-brand-green' : 'text-brand-dark/40'
              }`}
            >
              {tab}
              {activeTab === tab.toLowerCase() && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="contents"
            >
              {content[activeTab].map((item, i) => (
                <div 
                  key={item}
                  className="group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between border-b border-brand-muted pb-6 group-hover:border-brand-gold transition-colors">
                    <span className="text-2xl font-primary text-brand-green/60 group-hover:text-brand-gold transition-colors font-bold uppercase">{item.split('.')[0]}.</span>
                    <span className="text-2xl font-primary text-brand-dark flex-1 px-4 font-bold uppercase tracking-tight">{item.split('.')[1]}</span>
                    <div className="w-12 h-12 rounded-full border border-brand-muted flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold transition-all shadow-sm">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TopTreatments;
