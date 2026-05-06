const BrandPillars = () => {
  const pillars = [
    { title: "Skilled and trusted expertise", desc: "Our team consists of board-certified dermatologists." },
    { title: "Custom consultation plans", desc: "No two skin types are the same. Neither are our plans." },
    { title: "Modern and premium facilities", desc: "Step into an oasis of luxury and clinical precision." },
    { title: "Highest quality care", desc: "We use only FDA approved equipment and high-grade materials." },
  ];

  return (
    <section className="bg-brand-green py-spacing-section px-6 text-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl mb-16 leading-tight font-primary font-bold uppercase tracking-tighter">Led by certified specialists. <br />Driven by <span className="text-brand-gold italic font-normal">lasting results.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {pillars.map((p, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl font-primary text-brand-gold/50 mb-4 italic font-bold">0{i+1}.</div>
              <h3 className="text-lg font-primary mb-2 font-bold uppercase tracking-wide">{p.title}</h3>
              <p className="text-sm text-white/60 mb-4 font-sans leading-relaxed">{p.desc}</p>
              <div className="w-12 h-px bg-brand-gold/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;
