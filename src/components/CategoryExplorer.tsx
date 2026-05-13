import { useState } from 'react';
import { motion } from 'motion/react';

const CategoryExplorer = () => {
  const categories = [
    "Slimming & Weight Management",
    "Anti-Ageing",
    "Microneedling",
    "Medi-Facial & Chemical Peels",
    "Wellness",
    "Rejuvenation"
  ];
  const [activeCat, setActiveCat] = useState(categories[0]);

  const cards = [
    { title: "CoolSculpting Elite", trending: true, img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400" },
    { title: "Laser Lipolysis", trending: false, img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400" },
    { title: "EMSCULPT Neo", trending: true, img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=400" },
    { title: "Detox IV Drip", trending: false, img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400" },
  ];

  return (
    <section className="py-spacing-section px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-brand-accent mb-12 font-primary font-bold uppercase tracking-tighter">Explore treatments for your specific needs</h2>

        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`whitespace-nowrap px-8 py-3 rounded-full text-sm font-bold transition-all uppercase tracking-widest ${activeCat === cat ? 'bg-brand-accent text-white shadow-lg' : 'bg-white border border-brand-muted text-brand-dark/60 hover:border-brand-accent/30'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-sm">
                <div className="absolute inset-0 bg-brand-muted/20 z-0" />
                <img src={card.img} alt={card.title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                {card.trending && (
                  <div className="absolute top-4 left-4 z-10 bg-brand-gold text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-lg">
                    Trending
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-primary text-brand-dark group-hover:text-brand-accent transition-colors font-bold uppercase tracking-tight">{card.title}</h3>
              <p className="text-brand-dark/50 text-sm mt-1 uppercase tracking-widest font-bold">Treatment & Procedures</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryExplorer;
