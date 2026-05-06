import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, Sparkles, ShieldCheck, Zap, ChevronDown, CheckCircle2 } from 'lucide-react';

interface RecommendedTreatment {
  name: string;
  clinical: string;
  benefit: string;
  tags?: string[];
  img: string;
}

interface Concern {
  id: string;
  title: string;
  proof: string;
  icon: JSX.Element;
  treatments: RecommendedTreatment[];
}

const TopTreatments = () => {
  const [activeTab, setActiveTab] = useState<'concerns' | 'treatments'>('concerns');
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null);

  const concernsData: Concern[] = [
    {
      id: 'wrinkles',
      title: "Smooth Wrinkles & Look Younger",
      proof: "Visible results in 4–8 weeks",
      icon: <Sparkles className="text-brand-gold" size={24} />,
      treatments: [
        {
          name: "Youthful Lift",
          clinical: "Anti-Wrinkle Injections",
          benefit: "Softens expression lines for a natural, refreshed look.",
          tags: ["Most Popular"],
          img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&w=400"
        },
        {
          name: "Collagen Booster",
          clinical: "HIFU Lifting",
          benefit: "Tightens skin and defines jawline without surgery.",
          tags: ["No Downtime"],
          img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400"
        }
      ]
    },
    {
      id: 'skin-tone',
      title: "Get Brighter, Even-Toned Skin",
      proof: "Clinically proven treatments",
      icon: <Zap className="text-brand-gold" size={24} />,
      treatments: [
        {
          name: "Instant Radiance",
          clinical: "Hydrafacial Luxe",
          benefit: "Deep hydration and exfoliation for red-carpet skin.",
          tags: ["Most Popular", "No Downtime"],
          img: "https://images.unsplash.com/photo-1570172233294-084535fc06c1?auto=format&fit=crop&w=400"
        },
        {
          name: "Skin Brightening",
          clinical: "Glutathione IV",
          benefit: "Internal glow and detox for overall skin health.",
          tags: ["Internal Glow"],
          img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400"
        }
      ]
    },
    {
      id: 'acne',
      title: "Clear Acne & Reduce Scars",
      proof: "Trusted by 50,000+ clients",
      icon: <ShieldCheck className="text-brand-gold" size={24} />,
      treatments: [
        {
          name: "Acne Control",
          clinical: "Medi-Peels",
          benefit: "Unclogs pores and controls oil production effectively.",
          tags: ["Expert Choice"],
          img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400"
        },
        {
          name: "Scar Correction",
          clinical: "Microneedling RF",
          benefit: "Smooths skin texture and reduces deep acne scars.",
          tags: ["Long-term Results"],
          img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400"
        }
      ]
    },
    {
      id: 'pigmentation',
      title: "Fade Pigmentation & Dark Spots",
      proof: "FDA-approved technology",
      icon: <Star className="text-brand-gold" size={24} />,
      treatments: [
        {
          name: "Spotless Skin",
          clinical: "Laser Pigmentation Removal",
          benefit: "Targets sun spots and melasma at the source.",
          tags: ["High Precision"],
          img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=400"
        }
      ]
    },
    {
      id: 'hair',
      title: "Stop Hair Thinning & Regrow Hair",
      proof: "Natural & safe procedures",
      icon: <CheckCircle2 className="text-brand-gold" size={24} />,
      treatments: [
        {
          name: "Natural Hair Regrowth",
          clinical: "PRP Therapy",
          benefit: "Uses your own plasma to stimulate hair follicles.",
          tags: ["Most Popular"],
          img: "https://images.unsplash.com/photo-1594434296624-5059bb7cd8bc?auto=format&fit=crop&w=400"
        }
      ]
    },
    {
      id: 'fat',
      title: "Lose Stubborn Fat Without Surgery",
      proof: "No downtime options available",
      icon: <ArrowRight className="text-brand-gold" size={24} />,
      treatments: [
        {
          name: "Fat Freeze",
          clinical: "CoolSculpting Elite",
          benefit: "Permanently reduces fat cells in targeted areas.",
          tags: ["FDA Approved", "No Surgery"],
          img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400"
        }
      ]
    }
  ];

  const treatmentsData = [
    {
      name: "Instant Glow Facial",
      clinical: "Hydrafacial Luxe",
      benefit: "Deep cleanses and hydrates for an immediate red-carpet glow.",
      badges: ["Most Popular", "No Downtime"]
    },
    {
      name: "Fat Reduction Without Surgery",
      clinical: "CoolSculpting Elite",
      benefit: "Non-invasive fat cell reduction with permanent results.",
      badges: ["FDA-approved"]
    },
    {
      name: "Hair Regrowth Treatment",
      clinical: "PRP Therapy",
      benefit: "Stimulates natural hair growth using plasma rich therapy.",
      badges: ["Safe & Natural"]
    },
    {
      name: "Laser Hair Removal for Smooth Skin",
      clinical: "Soprano Titanium",
      benefit: "Painless laser technology for long-lasting hair-free skin.",
      badges: ["Most Popular", "Painless"]
    },
    {
      name: "Face Sculpt & Lift",
      clinical: "HIFU",
      benefit: "Non-surgical face lift for tighter and more defined skin.",
      badges: ["No Downtime"]
    },
    {
      name: "Skin Polish & Brighten",
      clinical: "Carbon Peel",
      benefit: "Removes impurities and brightens dull skin instantly.",
      badges: ["Instant Results"]
    }
  ];

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-brand-green mb-4 font-primary font-bold uppercase tracking-tighter">Choose your skin goal</h2>
        <p className="text-brand-dark/60 mb-12 font-sans font-medium uppercase tracking-widest text-sm">Targeted results for a more confident you</p>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-brand-muted mb-12">
          {['Concerns', 'Treatments'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab.toLowerCase() as any);
                setSelectedConcern(null);
              }}
              className={`pb-4 text-xl font-primary font-bold relative transition-all uppercase tracking-widest ${activeTab === tab.toLowerCase() ? 'text-brand-green' : 'text-brand-dark/40'
                }`}
            >
              {tab}
              {activeTab === tab.toLowerCase() && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'concerns' ? (
              <motion.div
                key="concerns-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 gap-3 w-full"
              >
                {concernsData.map((concern) => (
                  <div
                    key={concern.id}
                    className="group"
                  >
                    <button
                      onClick={() => setSelectedConcern(selectedConcern === concern.id ? null : concern.id)}
                      className={`w-full flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl transition-all border ${selectedConcern === concern.id
                        ? 'bg-brand-green border-brand-green text-white shadow-lg'
                        : 'bg-white border-brand-muted hover:border-brand-gold text-brand-dark'
                        }`}
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${selectedConcern === concern.id ? 'bg-white/10' : 'bg-brand-cream'
                          }`}>
                          {concern.icon}
                        </div>
                        <div className="text-left">
                          <h3 className="text-sm md:text-lg font-primary font-bold uppercase tracking-tight leading-tight">{concern.title}</h3>
                          <p className={`text-[8px] md:text-[10px] font-sans font-bold uppercase tracking-widest mt-0.5 ${selectedConcern === concern.id ? 'text-white/60' : 'text-brand-gold'
                            }`}>
                            {concern.proof}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-500 flex-shrink-0 ${selectedConcern === concern.id ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {selectedConcern === concern.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "circOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex overflow-x-auto pb-6 md:pb-0 gap-4 md:gap-8 p-4 md:p-8 bg-brand-green/5 rounded-b-[2rem] border-x border-b border-brand-green/10 no-scrollbar snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3">
                            {concern.treatments.map((t, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-[2rem] shadow-lg flex flex-col gap-6 border border-brand-muted hover:border-brand-gold transition-colors min-w-[85%] sm:min-w-[320px] md:min-w-0 snap-center"
                              >
                                <div className="w-full h-40 md:h-48 rounded-2xl overflow-hidden flex-shrink-0 shadow-inner">
                                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    {t.tags?.map(tag => (
                                      <span key={tag} className="bg-brand-gold text-white text-[9px] md:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                  <h4 className="text-base md:text-lg font-primary font-bold text-brand-green uppercase leading-tight">
                                    {t.name} <span className="text-brand-dark/40 font-normal italic lowercase">({t.clinical})</span>
                                  </h4>
                                  <p className="text-xs md:text-sm text-brand-dark/60 mt-2 font-medium leading-relaxed">
                                    {t.benefit}
                                  </p>
                                  <button
                                    onClick={scrollToBooking}
                                    className="mt-6 flex items-center gap-2 text-brand-gold font-bold text-[10px] md:text-xs uppercase tracking-widest hover:text-brand-green transition-colors group/btn"
                                  >
                                    Book Free Consultation
                                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                  </button>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="treatments-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex overflow-x-auto pb-8 md:pb-0 gap-6 md:gap-8 no-scrollbar snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3"
              >
                {treatmentsData.map((t, i) => (
                  <div
                    key={i}
                    className="group bg-white p-8 rounded-[2.5rem] border border-brand-muted hover:border-brand-gold hover:shadow-2xl transition-all duration-500 cursor-pointer min-w-[85%] sm:min-w-[320px] md:min-w-0 snap-center"
                  >
                    <div className="flex gap-2 mb-6">
                      {t.badges.map(badge => (
                        <span key={badge} className="bg-brand-gold/10 text-brand-gold text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-brand-gold/20">
                          {badge}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-primary font-bold text-brand-green uppercase tracking-tight leading-tight group-hover:text-brand-gold transition-colors">
                      {t.name} <br />
                      <span className="text-brand-dark/30 font-normal italic lowercase">({t.clinical})</span>
                    </h3>
                    <p className="text-sm text-brand-dark/50 mt-4 font-sans font-medium leading-relaxed">
                      {t.benefit}
                    </p>
                    <div className="mt-8 pt-6 border-t border-brand-muted flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green">Advanced Care</span>
                      <ArrowRight size={20} className="text-brand-gold" />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-0 md:mt-20 pt-6 md:pt-20 border-t border-brand-muted text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-4xl font-primary font-bold text-brand-green uppercase tracking-tighter mb-2">
              Not sure which treatment <br className="hidden md:block" /> is right for you?
            </h2>
            <p className="text-l text-brand-dark/50 font-sans font-medium mb-6">
              Get a personalized skin plan from our board-certified experts.
            </p>
            <button
              onClick={scrollToBooking}
              className="px-12 py-6 bg-brand-green text-white font-bold rounded-full hover:bg-brand-gold transition-all shadow-2xl uppercase tracking-widest text-sm font-primary"
            >
              Book Free Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TopTreatments;
