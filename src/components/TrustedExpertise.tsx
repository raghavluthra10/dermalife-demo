import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustedExpertise = () => {
  const services = [
    { label: 'Skin' },
    { label: 'Hair' },
    { label: 'Body' },
    { label: 'Laser treatments' },
  ];

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-10 md:py-20 px-[60px] bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Text Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16 items-start">
          <div className="max-w-md">
            <h2 className="text-[36px] font-primary font-normal text-brand-dark leading-[1.2] normal-case tracking-tight">
              India's most trusted name
              in dermatology.
            </h2>
          </div>
          <div>
            <p className="font-sans text-[15px] text-brand-dark/70 leading-[1.7]">
              At Dermalife, every treatment is diagnosed, planned and supervised by a certified dermatologist — never a technician. We combine clinically proven technology, personalised protocols, and transparent care so your results are safe, real, and lasting.
            </p>
          </div>
        </div>

        {/* Bottom Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {services.map((service, index) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[3/4] bg-[#E8E4DE] rounded-[12px] overflow-hidden"
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 w-full h-full" />

              {/* Label - Bottom Left */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20">
                <span className="font-primary text-base md:text-[18px] font-normal text-brand-dark">
                  {service.label}
                </span>
              </div>

              {/* Arrow Icon - Bottom Right */}
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20">
                <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center text-brand-dark shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={scrollToBooking}
            className="btn-primary"
          >
            Book Free Consultation.
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedExpertise;
