import { ChevronRight } from 'lucide-react';

const SalonBanner = () => {
  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-spacing-section px-6 bg-white">
       <div className="max-w-7xl mx-auto relative h-[450px] rounded-[4rem] overflow-hidden group cursor-pointer shadow-2xl">
          <div className="absolute inset-0 bg-brand-dark/50 z-10 group-hover:bg-brand-dark/40 transition-colors" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600')] bg-cover bg-center transition-transform duration-[3s] group-hover:scale-110" />
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
             <h2 className="text-4xl md:text-6xl text-white mb-10 font-primary font-extrabold uppercase tracking-tighter">Step up your beauty game <br />with our salon.</h2>
             <button 
                onClick={scrollToBooking}
                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-brand-green font-extrabold rounded-full hover:bg-brand-gold hover:text-white transition-all shadow-xl group/link uppercase tracking-[0.2em] text-xs font-primary"
             >
                Explore Services <ChevronRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
             </button>
          </div>
       </div>
    </section>
  );
};

export default SalonBanner;
