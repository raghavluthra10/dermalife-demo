import { motion } from 'motion/react';
import docImg from '../assets/doc_home_page.png';

const ConsultationCTA = () => {
  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 bg-white px-10 sm:px-24 md:px-6 overflow-hidden border-b border-brand-muted">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-brand-muted bg-brand-cream">
              <img
                src={docImg}
                alt="Our Specialist"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-gold/10 rounded-full -z-10 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent/5 rounded-full -z-10 blur-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-4xl sm:text-3xl max-[900px]:text-3xl md:text-4xl lg:text-5xl min-[1101px]:text-6xl font-primary font-extrabold  leading-[1.1] mb-4 md:mb-8 uppercase tracking-tighter">
              <span className="text-brand-dark">Not sure</span> <br />
              <span className="text-brand-gold">where to start?</span>
            </h2>
            <p className="text-sm sm:text-base max-[900px]:text-base md:text-lg min-[1101px]:text-xl text-brand-dark/70 mb-6 md:mb-10 font-sans leading-relaxed font-medium">
              Book a free skin consultation — our dermatologists
              will map the right plan for you. <br className="hidden md:block" />
              No pressure, no commitment.
            </p>
            <button
              onClick={scrollToBooking}
              className="px-10 py-5 bg-brand-accent text-white font-bold rounded-full hover:bg-brand-accent/90 transition-all shadow-2xl font-primary uppercase tracking-widest text-sm inline-flex items-center justify-center w-full md:w-auto"
            >
              Book Free Consultation
            </button>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default ConsultationCTA;
