import { Star, ChevronRight } from 'lucide-react';

const StoreHighlight = () => {
  return (
    <section className="py-spacing-section px-6 overflow-hidden bg-brand-cream">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-6 h-full relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-700">
               <img src="https://images.unsplash.com/photo-1629131650831-27ee6bcc6891?auto=format&fit=crop&w=800" alt="Interior" className="w-full h-[450px] object-cover" />
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl translate-y-12 -rotate-2 transition-transform hover:rotate-0 duration-700">
               <img src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800" alt="Interior" className="w-full h-[450px] object-cover" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] block mb-6">Our Clinic Experience</span>
          <h2 className="text-5xl md:text-6xl text-brand-green mb-10 leading-tight font-primary font-bold uppercase tracking-tighter">Ready to feel <br />fabulous?</h2>
          <ul className="space-y-8 mb-12">
            {[
              "Modern and spacious outlets",
              "Pristine and hygienic environment",
              "One-of-a-kind luxurious ambience",
              "Located in premium neighbourhoods"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-6 text-xl text-brand-dark/80 group">
                <span className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all shadow-sm">
                  <Star size={16} className="fill-current" />
                </span>
                <span className="font-bold uppercase tracking-tight">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="relative group max-w-sm">
            <select className="w-full bg-white border-2 border-brand-muted py-5 px-8 rounded-2xl focus:outline-none focus:border-brand-gold appearance-none shadow-xl cursor-pointer font-bold uppercase tracking-widest text-xs text-brand-dark">
              <option>Select your city to find a clinic</option>
              <option>Delhi NCR</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold">
              <ChevronRight size={24} className="rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreHighlight;
