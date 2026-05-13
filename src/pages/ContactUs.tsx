import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

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
            <span className="inline-block px-4 py-1.5 bg-brand-accent/10 text-brand-accent rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-primary font-bold text-brand-accent leading-[0.9] mb-8 uppercase tracking-tighter">
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
                      placeholder="+91-0000000000"
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
                    className="w-full bg-brand-gold text-white font-primary font-bold uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-white hover:text-brand-accent transition-all shadow-xl flex items-center justify-center gap-3 active:scale-[0.98]"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-muted hover:shadow-md transition-shadow">
                  <Phone className="text-brand-gold mb-4" size={24} />
                  <h4 className="font-primary font-bold text-brand-accent uppercase tracking-tight mb-2">Phone</h4>
                  <p className="text-brand-dark/60 text-sm font-medium">+91-8882047047</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-muted hover:shadow-md transition-shadow">
                  <Mail className="text-brand-gold mb-4" size={24} />
                  <h4 className="font-primary font-bold text-brand-accent uppercase tracking-tight mb-2">Email</h4>
                  <p className="text-brand-dark/60 text-sm font-medium">info@dermalife.com</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-muted hover:shadow-md transition-shadow sm:col-span-2">
                  <MapPin className="text-brand-gold mb-4" size={24} />
                  <h4 className="font-primary font-bold text-brand-accent uppercase tracking-tight mb-2">Clinic Address</h4>
                  <p className="text-brand-dark/60 text-sm font-medium leading-relaxed">
                    C-15, Ground Floor, Side Portion, Green Park Extension, <br />
                    Green Park Market, New Delhi - 110016
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
                <h4 className="font-primary font-bold text-brand-accent uppercase tracking-tight mb-2">Visit Our Clinic</h4>
                <div className="flex gap-2 items-start text-[10px] text-brand-dark/60 font-bold uppercase tracking-tight">
                    <Clock size={14} className="text-brand-gold shrink-0" />
                    <span>Mon - Sat: 10AM - 7PM <br /> Sunday: By Appointment</span>
                </div>
              </div>
              
              {/* Actual Google Maps Iframe for the searched location */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6063467471133!2d77.20387537550508!3d28.551543975708892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce27055555555%3A0x46429f635c0ad6f8!2sDermalife%20Skin%20and%20Hair%20Clinic!5e0!3m2!1sen!2sin!4v1715560000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
