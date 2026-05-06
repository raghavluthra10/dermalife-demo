import { Star } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { label: "Happy Transformations", val: "55K+" },
    { label: "Clinics across India", val: "45" },
    { label: "Board-certified cosmetic experts", val: "80+" },
  ];

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white border-y border-brand-muted py-12 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Main Content Area */}
        <div className="flex-1 w-full order-1">
          {/* 1. Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-brand-green mb-6 leading-[1.1] font-primary font-bold uppercase tracking-tighter">
            Real experts, <br />
            <span className="italic font-normal">Real results.</span>
          </h2>

          {/* 2. Subtext */}
          <p className="text-base md:text-lg text-brand-dark/70 mb-10 md:mb-12 max-w-sm font-sans leading-relaxed">
            Our certified medical treatments are driven by clinical excellence and an uncompromising attention to detail.
          </p>

          {/* 3. Stats Grid (2 columns mobile, 3 columns desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mb-12 md:mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-3xl md:text-4xl font-primary text-brand-gold mb-1 font-bold uppercase tracking-tighter">
                  {stat.val}
                </div>
                <div className="text-[10px] md:text-xs font-bold text-brand-dark/60 uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* 4. Visual Proof (Mobile Only) */}
          <div className="lg:hidden mb-12">
            <VisualProof />
          </div>

          {/* 5. Doctor Credibility */}
          <div className="flex items-center gap-3 mb-10 md:mb-12">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-brand-cream overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Doctor" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-dark/40">
                Verified by 80+
              </p>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-green">
                Board-Certified Experts
              </p>
            </div>
          </div>

          {/* 6. CTA Button */}
          <button
            onClick={scrollToBooking}
            className="w-full md:w-auto px-10 py-5 bg-brand-green text-white font-bold rounded-full hover:bg-brand-gold transition-all shadow-xl uppercase tracking-widest text-sm font-primary"
          >
            Book Consultation
          </button>
        </div>

        {/* Visual Proof Area (Desktop Only) */}
        <div className="hidden lg:block flex-1 w-full self-stretch min-h-[500px]">
          <VisualProof />
        </div>
      </div>
    </section>
  );
};

const VisualProof = () => (
  <div className="grid grid-cols-2 h-full gap-3 md:gap-4 p-2">
    <div className="bg-brand-muted rounded-[2rem] relative overflow-hidden min-h-[250px] md:min-h-[400px]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
    </div>
    <div className="grid gap-3 md:gap-4">
      <div className="bg-brand-muted rounded-[2rem] relative overflow-hidden min-h-[120px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
      </div>
      <div className="bg-brand-gold/10 rounded-[2rem] flex items-center justify-center border-2 border-brand-gold/20 p-6 text-center uppercase tracking-tighter text-brand-dark/30 text-3xl md:text-5xl font-primary font-bold">
        Trust.
      </div>
    </div>
  </div>
);

export default StatsSection;
