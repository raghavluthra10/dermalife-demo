const BrandPillars = () => {
  const pillars = [
    { title: "Certified Dermatologists", desc: "Our team consists of board-certified dermatologists from top medical institutes." },
    { title: "Personalised Treatment Plans", desc: "No two skin types are the same. We design plans tailored to your unique goals." },
    { title: "Advanced Equipment", desc: "We use FDA-approved technology and state-of-the-art clinical facilities." },
    { title: "Premium Quality Care", desc: "Experience luxury skincare with an uncompromising focus on safety and results." },
  ];

  return (
    <section className="bg-brand-accent py-10 md:py-12 px-6 text-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl mb-8 md:mb-10 leading-tight font-primary font-bold uppercase tracking-tighter max-w-3xl mx-auto">Led by certified specialists. <br />Driven by <span className="text-brand-gold italic font-normal">lasting results.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-10 md:gap-y-6">
          {pillars.map((p, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-2xl font-primary text-brand-gold/50 mb-2 italic font-bold">0{i + 1}.</div>
              <h3 className="text-[13px] md:text-sm font-primary mb-1.5 font-bold uppercase tracking-wide">{p.title}</h3>
              <p className="text-[11px] text-white/60 font-sans leading-relaxed px-4">{p.desc}</p>
              <div className="w-6 h-px bg-brand-gold/20 mt-3" />
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-white/5">
          <h3 className="text-lg md:text-xl font-primary font-bold mb-1 uppercase tracking-tight">
            Let our experts guide your skin journey
          </h3>
          <p className="text-white/60 mb-6 max-w-md mx-auto font-sans font-medium text-[11px] md:text-xs leading-relaxed">
            Get a personalized treatment plan based on your skin, goals, and concerns
          </p>
          <button
            onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-14 py-4 md:py-5 bg-brand-gold text-white font-bold rounded-full hover:bg-white hover:text-brand-accent transition-all shadow-2xl uppercase tracking-widest text-xs md:text-sm font-primary active:scale-95"
          >
            Book Free Consultation
          </button>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-8">
            {["Takes 2 minutes", "No commitment", "Expert-led advice"].map(point => (
              <span key={point} className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold flex items-center gap-2">
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
