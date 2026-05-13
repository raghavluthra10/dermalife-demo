import { useState } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', city: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="booking-section" className="bg-brand-accent py-12 md:py-24 px-4 md:px-20 lg:px-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="flex-1 text-white">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 rounded-full text-brand-gold text-[10px] md:text-xs font-extrabold uppercase tracking-[0.3em] mb-6 md:mb-10">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-brand-gold animate-pulse" />
              Limited Appointments Available
            </div>
            <h2 className="text-4xl md:text-7xl font-primary font-extrabold mb-6 md:mb-10 leading-[1.05] tracking-tighter uppercase">
              Ready to meet <br />your <span className="text-brand-gold font-normal italic lowercase">best self?</span>
            </h2>
            <p className="text-base md:text-xl text-white/70 mb-10 md:mb-14 max-w-md font-sans leading-relaxed font-medium">
              Book your free consultation today and get a personalised skin analysis from our board-certified experts.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-10">
              <div className="flex flex-col items-center p-6 md:p-8 bg-white/5 rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-sm backdrop-blur-sm">
                <div className="text-2xl md:text-4xl font-extrabold font-primary text-brand-gold mb-1 md:mb-2 uppercase tracking-tighter">9%</div>
                <div className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/50 text-center font-bold">Avg. Downtime</div>
              </div>
              <div className="flex flex-col items-center p-6 md:p-8 bg-white/5 rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-sm backdrop-blur-sm">
                <div className="text-2xl md:text-4xl font-extrabold font-primary text-brand-gold mb-1 md:mb-2 uppercase tracking-tighter">15M</div>
                <div className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/50 text-center font-bold">Treatments Done</div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <motion.div
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.95 }}
              className="bg-white p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl relative"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center text-center py-12 md:py-16"
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-accent rounded-full flex items-center justify-center text-white mb-6 md:mb-8 shadow-xl">
                    <Star size={32} className="md:size-[48px] fill-current" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-primary font-bold mb-4 md:mb-6 text-brand-accent uppercase tracking-tighter">Request Received!</h3>
                  <p className="text-brand-dark/60 font-sans text-sm md:text-lg font-medium leading-relaxed">Our skin specialist will call you shortly to confirm your slot.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-2 gap-4 md:gap-8">
                    <div className="col-span-2">
                      <label className="text-[9px] md:text-[10px] uppercase font-extrabold text-brand-dark/40 tracking-[0.3em] block mb-2 md:mb-3 px-1">Full Name</label>
                      <input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Ananya Kapoor"
                        className="w-full bg-brand-cream border-2 border-transparent p-4 md:p-5 rounded-xl md:rounded-2xl focus:border-brand-gold focus:outline-none transition-all placeholder:text-brand-dark/20 font-bold uppercase tracking-widest text-[10px] md:text-xs"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="text-[9px] md:text-[10px] uppercase font-extrabold text-brand-dark/40 tracking-[0.3em] block mb-2 md:mb-3 px-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 00000 00000"
                        className="w-full bg-brand-cream border-2 border-transparent p-4 md:p-5 rounded-xl md:rounded-2xl focus:border-brand-gold focus:outline-none transition-all placeholder:text-brand-dark/20 font-bold uppercase tracking-widest text-[10px] md:text-xs"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="text-[9px] md:text-[10px] uppercase font-extrabold text-brand-dark/40 tracking-[0.3em] block mb-2 md:mb-3 px-1">Your City</label>
                      <select
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-brand-cream border-2 border-transparent p-4 md:p-5 rounded-xl md:rounded-2xl focus:border-brand-gold focus:outline-none transition-all appearance-none cursor-pointer font-bold uppercase tracking-widest text-[10px] md:text-xs text-brand-dark"
                      >
                        <option value="">Select City</option>
                        <option>Delhi NCR</option>
                        <option>Mumbai</option>
                        <option>Bangalore</option>
                        <option>Hyderabad</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="text-[9px] md:text-[10px] uppercase font-extrabold text-brand-dark/40 tracking-[0.3em] block mb-2 md:mb-3 px-1">Service Interested In</label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-brand-cream border-2 border-transparent p-4 md:p-5 rounded-xl md:rounded-2xl focus:border-brand-gold focus:outline-none transition-all appearance-none cursor-pointer font-bold uppercase tracking-widest text-[10px] md:text-xs text-brand-dark"
                      >
                        <option value="">Choose Treatment</option>
                        <option>HydraFacial</option>
                        <option>Laser Hair Reduction</option>
                        <option>Body Sculpting</option>
                        <option>Skin Boosters / PRP</option>
                        <option>Anti-Ageing / Fillers</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-5 md:py-6 bg-brand-gold text-white font-extrabold rounded-xl md:rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl font-primary uppercase tracking-[0.3em] text-[10px] md:text-xs mt-4 md:mt-6"
                  >
                    Book Free Consultation
                  </button>
                  <p className="text-[8px] md:text-[10px] text-center text-brand-dark/30 mt-4 md:mt-6 px-4 md:px-8 font-sans font-bold leading-relaxed uppercase">
                    By clicking above, you agree to receive medical appointment calls/SMS from DermaLife representatives.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
