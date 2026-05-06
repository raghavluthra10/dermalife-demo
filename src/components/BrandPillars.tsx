const BrandPillars = () => {
  const pillars = [
    { title: "Skilled and trusted expertise", desc: "Our team consists of board-certified dermatologists." },
    { title: "Custom consultation plans", desc: "No two skin types are the same. Neither are our plans." },
    { title: "Modern and premium facilities", desc: "Step into an oasis of luxury and clinical precision." },
    { title: "Highest quality care", desc: "We use only FDA approved equipment and high-grade materials." },
  ];

  return (
    <section className="bg-brand-green py-12 md:py-20 px-6 text-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-10 md:mb-16 leading-tight font-primary font-bold uppercase tracking-tighter">Led by certified specialists. <br />Driven by <span className="text-brand-gold italic font-normal">lasting results.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {pillars.map((p, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl font-primary text-brand-gold/50 mb-4 italic font-bold">0{i + 1}.</div>
              <h3 className="text-base md:text-lg font-primary mb-2 font-bold uppercase tracking-wide">{p.title}</h3>
              <p className="text-[13px] text-white/60 mb-4 font-sans leading-relaxed">{p.desc}</p>
              <div className="w-12 h-px bg-brand-gold/30" />
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-10 md:mt-16 pt-10 md:pt-16 border-t border-white/5">
          <h3 className="text-xl md:text-3xl font-primary font-bold mb-3 uppercase tracking-tight">
            Let our experts guide your skin journey
          </h3>
          <p className="text-white/60 mb-8 max-w-lg mx-auto font-sans font-medium text-sm md:text-base">
            Get a personalized treatment plan based on your skin, goals, and concerns
          </p>
          <button
            onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-12 py-4 md:py-5 bg-brand-gold text-white font-bold rounded-full hover:bg-white hover:text-brand-green transition-all shadow-2xl uppercase tracking-widest text-xs md:text-sm font-primary"
          >
            Book Free Consultation
          </button>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-8">
            {["Takes 2 minutes", "No commitment", "Expert-led advice"].map(point => (
              <span key={point} className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold flex items-center gap-2">
                <span className="w-1 h-1 bg-brand-gold rounded-full" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;
