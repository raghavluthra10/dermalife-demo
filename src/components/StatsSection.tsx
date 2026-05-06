const StatsSection = () => {
  const stats = [
    { label: "Happy Transformations", val: "55K+" },
    { label: "Clinics across India", val: "45" },
    { label: "Board-certified experts", val: "80+" },
  ];


  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 1. TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-10 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl text-brand-green mb-8 leading-[1.1] font-primary font-bold uppercase tracking-tighter">
              Real experts, <br />
              <span className="italic font-normal">Real results.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-dark/70 font-sans leading-relaxed">
              Our certified medical treatments are driven by clinical excellence and an uncompromising attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-3xl md:text-5xl font-primary text-brand-gold mb-1 font-bold uppercase tracking-tighter">
                  {stat.val}
                </div>
                <div className="text-[10px] md:text-xs font-bold text-brand-dark/40 uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* 3. MORE TRANSFORMATIONS */}
        <div className="mb-32">
          <div className="text-center mb-16">
            {/* <h2 className="text-3xl md:text-5xl font-primary font-bold text-brand-green mb-4 uppercase tracking-tighter">
              More Transformations
            </h2> */}
            <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>

          {/* Grid for Desktop, Scroll for Mobile */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-10 pb-8 md:pb-0 no-scrollbar snap-x snap-mandatory">
            {[
              {
                before: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=400&q=80",
                after: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80",
                result: "Acne Clear in 2 Months",
                name: "Anjali",
                concern: "Active Acne"
              },
              {
                before: "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&w=400&q=80",
                after: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80",
                result: "Glass Skin Glow",
                name: "Rishi",
                concern: "Dullness"
              },
              {
                before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400&q=80",
                after: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80",
                result: "Youthful Lift",
                name: "Sonia",
                concern: "Fine Lines"
              },
              {
                before: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=400&q=80",
                after: "https://images.unsplash.com/photo-1515377662630-6a7510d402ec?auto=format&fit=crop&w=400&q=80",
                result: "Even Skin Tone",
                name: "Vikram",
                concern: "Hyper-pigmentation"
              },
              {
                before: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=400&q=80",
                after: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
                result: "Defined Jawline",
                name: "Karan",
                concern: "Double Chin"
              },
              {
                before: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=400&q=80",
                after: "https://images.unsplash.com/photo-1591343395582-99bf4de990bc?auto=format&fit=crop&w=400&q=80",
                result: "Pore Reduction",
                name: "Zoya",
                concern: "Large Pores"
              }
            ].map((card, i) => (
              <div
                key={i}
                className="min-w-[85vw] md:min-w-0 snap-center bg-white rounded-[2rem] p-4 shadow-lg border border-brand-muted/30 group"
              >
                <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 relative">
                  <div className="grid grid-cols-2 h-full gap-1">
                    <img src={card.before} alt="Before" className="w-full h-full object-cover" />
                    <img src={card.after} alt="After" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <span className="bg-white/80 backdrop-blur-md text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-full shadow-sm">Before</span>
                    <span className="bg-brand-gold text-white text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-full shadow-md">After</span>
                  </div>
                </div>
                <div className="px-2">
                  <h4 className="text-lg md:text-xl font-primary font-bold text-brand-green mb-1 uppercase tracking-tight">
                    "{card.result}"
                  </h4>
                  <p className="text-[10px] md:text-xs font-bold text-brand-dark/40 uppercase tracking-widest">
                    {card.name} — {card.concern}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. CTA SECTION */}
        <div className="text-center py-20 bg-brand-cream rounded-[3rem] md:rounded-[5rem] border border-brand-muted/50 px-6">
          <h2 className="text-3xl md:text-5xl font-primary font-bold text-brand-green mb-10 uppercase tracking-tighter leading-tight">
            See what we can <br className="md:hidden" /> do for your skin
          </h2>
          <button
            onClick={scrollToBooking}
            className="w-full md:w-auto px-12 py-5 bg-brand-green text-white font-bold rounded-full hover:bg-brand-gold transition-all shadow-2xl uppercase tracking-widest text-sm font-primary"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
