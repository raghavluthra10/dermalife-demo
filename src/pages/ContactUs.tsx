import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Check } from 'lucide-react';
import BookingForm from '../components/BookingForm';

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for future email integration
    alert("Thank you for your message. We will get back to you shortly!");
  };

  return (
    <main className="bg-brand-cream min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-accent/10  rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-primary font-bold  leading-[0.9] mb-8 uppercase tracking-tighter">
              Contact <br /> Dermalife
            </h1>
            <p className="text-lg text-brand-dark/50 font-sans font-medium uppercase tracking-tight max-w-xl mx-auto">
              Ready to start your transformation? Reach out to our experts for a personalized consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

            {/* Contact Information & Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              {/* Form */}
              <div className="bg-brand-accent p-10 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
                  <MessageSquare size={150} />
                </div>
                <h3 className="text-3xl font-primary font-bold text-white uppercase tracking-tight mb-8">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest ml-4">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold transition-colors font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest ml-4">Email ID</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold transition-colors font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest ml-4">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91-9810305086"
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold transition-colors font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest ml-4">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold transition-colors font-medium resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-gold text-white font-primary font-bold uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-white hover: transition-all shadow-xl flex items-center justify-center gap-3 active:scale-[0.98]"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-muted hover:shadow-md transition-shadow">
                  <Phone className="text-brand-gold mb-4" size={24} />
                  <h4 className="font-primary font-bold  uppercase tracking-tight mb-2">Phone</h4>
                  <a href="tel:+919212510087" className="text-brand-dark/60 text-sm font-medium hover:text-brand-gold transition-colors">+91 98103 05086</a>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-muted hover:shadow-md transition-shadow">
                  <Mail className="text-brand-gold mb-4" size={24} />
                  <h4 className="font-primary font-bold  uppercase tracking-tight mb-2">Email</h4>
                  <p className="/60 text-sm font-medium">info@dermalife.com</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-muted hover:shadow-md transition-shadow sm:col-span-2">
                  <MapPin className="text-brand-gold mb-4" size={24} />
                  <h4 className="font-primary font-bold  uppercase tracking-tight mb-2">Clinic Address</h4>
                  <p className="/60 text-sm font-medium leading-relaxed">
                    Ground Floor, DLF PHASE 1, <br />
                    A-14/22, Gurugram, Haryana 122002
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="h-full min-h-[600px] bg-white rounded-[3rem] shadow-xl border border-brand-muted overflow-hidden relative"
            >
              <div className="absolute top-8 left-8 z-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-brand-muted max-w-[240px]">
                <h4 className="font-primary font-bold  uppercase tracking-tight mb-2">Visit Our Clinic</h4>
                <div className="flex gap-2 items-start text-[10px] text-brand-dark/60 font-bold uppercase tracking-tight">
                  <Clock size={14} className="text-brand-gold shrink-0" />
                  <span>Mon - Sat: 10AM - 7PM <br /> Sunday: By Appointment</span>
                </div>
              </div>

              {/* Actual Google Maps Iframe for the searched location */}
              <iframe
                src="https://www.google.com/maps?q=Dermalife+Wellness+Clinic+Ground+Floor,+DLF+PHASE+1,+A-14/22,+Gurugram,+Haryana+122002&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 bg-brand-cream relative overflow-hidden text-center border-t border-brand-muted/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-[56px] font-primary font-bold text-brand-dark leading-[1.1] mb-6 uppercase tracking-tighter text-black">
            Ready to start <br /> <span className="text-brand-gold italic font-normal text-4xl md:text-5xl lg:text-[52px]">your transformation?</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-brand-dark/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation — our specialists will assess your concerns and recommend the right treatment protocol for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-dark/30 font-bold flex items-center gap-2 text-black">
              <Check size={12} className="text-brand-gold" />
              Takes 2 minutes
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-dark/30 font-bold flex items-center gap-2 text-black">
              <Check size={12} className="text-brand-gold" />
              No commitment
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-dark/30 font-bold flex items-center gap-2 text-black">
              <Check size={12} className="text-brand-gold" />
              Expert-led advice
            </span>
          </div>
        </div>
      </section>
      <BookingForm />
    </main>
  );
};

export default ContactUs;
