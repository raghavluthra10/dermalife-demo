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
    <section className="bg-white border-y border-brand-muted overflow-hidden py-spacing-section">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex-1 px-6">
          <h2 className="text-5xl text-brand-green mb-6 leading-tight font-primary font-bold uppercase tracking-tighter">Real experts, <br /><span className="italic font-normal">Real results.</span></h2>
          <p className="text-lg text-brand-dark/70 mb-12 max-w-sm font-sans">
            Our certified medical treatments are driven by clinical excellence and an uncompromising attention to detail.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-primary text-brand-gold mb-2 font-bold uppercase">{stat.val}</div>
                <div className="text-sm font-bold text-brand-dark/60 uppercase tracking-widest leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollToBooking}
            className="px-10 py-5 bg-brand-green text-white font-bold rounded-full hover:bg-brand-gold transition-all shadow-xl uppercase tracking-widest text-sm font-primary"
          >
            Book Consultation
          </button>
        </div>

        <div className="flex-1 w-full h-[500px] lg:h-auto lg:self-stretch relative overflow-hidden mt-16 lg:mt-0">
          <div className="grid grid-cols-2 h-full gap-2 p-2">
            <div className="bg-brand-muted rounded-2xl relative overflow-hidden min-h-[300px]">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
            </div>
            <div className="grid gap-2">
              <div className="bg-brand-muted rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
              </div>
              <div className="bg-brand-gold/10 rounded-2xl flex items-center justify-center border-2 border-brand-gold/20 p-8 text-center uppercase tracking-tighter text-brand-dark/30 text-5xl font-primary font-bold">
                Trust.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
