const PressSection = () => {
  const logos = ["Financial Express", "Healthshots", "Fashion", "ELLE", "Vogue"];
  return (
    <section className="py-spacing-section border-y border-brand-muted bg-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.4em] font-bold text-brand-dark/30 mb-2">In the spotlight with the best</p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo) => (
            <span key={logo} className="text-2xl md:text-3xl font-primary font-extrabold text-brand-dark italic uppercase tracking-tighter">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
