import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import skinImg from '../assets/skin.png';
import hairImg from '../assets/hair_home_page.png';
import slimmingImg from '../assets/slimming_and_body_contouring.png';
import aestheticsImg from '../assets/aesthetics_home.png';
import facialsImg from '../assets/facial_home.png';

const TrustedExpertise = () => {
  const row1Services = [
    { label: 'Skin', path: '/skin', image: skinImg },
    { label: 'Hair', path: '/hair', image: hairImg },
    { label: 'Slimming and Body Contouring', path: '/slimming', image: slimmingImg },
  ];

  const row2Services = [
    { label: 'Aesthetics', path: '/aesthetics', image: aestheticsImg },
    { label: 'Facials', path: '/facials', image: facialsImg },
  ];

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const Card = ({ label, path, image, className = "" }: { label: string, path: string, image?: string, className?: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative aspect-[3/4] bg-[#E8E4DE] rounded-[12px] overflow-hidden ${className}`}
    >
      <Link to={path} className="block w-full h-full">
        {/* Image Rendering */}
        {image ? (
          <>
            <img 
              src={image} 
              alt={label} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
          </>
        ) : (
          <div className="absolute inset-0 w-full h-full" />
        )}
        
        {/* Label - Bottom Left */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20">
          <span className={`font-primary text-base md:text-[18px] font-normal ${image ? 'text-white' : 'text-brand-dark'}`}>
            {label}
          </span>
        </div>

        {/* Arrow Icon - Bottom Right */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20">
          <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center text-brand-dark shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <section className="py-10 md:py-20 px-[60px] bg-brand-cream overflow-hidden border-b border-brand-muted">
      <div className="max-w-7xl mx-auto">
        {/* Top Text Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16 items-start">
          <div className="max-w-md">
            <h2 className="text-[36px] font-primary font-normal text-brand-dark leading-[1.2] normal-case tracking-tight">
              India's most trusted name in dermatology.
            </h2>
          </div>
          <div>
            <p className="font-sans text-[15px] text-brand-dark/70 leading-[1.7]">
              At Dermalife, every treatment is diagnosed, planned and supervised by a certified dermatologist — never a technician. We combine clinically proven technology, personalised protocols, and transparent care so your results are safe, real, and lasting.
            </p>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-5 md:gap-4">
          {/* Row 1: Carousel on Mobile, part of 5-Grid on Desktop */}
          <div className="flex md:contents overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 md:pb-0 -mx-[60px] px-[60px] md:mx-0 md:px-0">
            {row1Services.map((service) => (
              <div key={service.label} className="min-w-[calc(50%-8px)] md:min-w-0 snap-center mr-4 md:mr-0">
                <Card label={service.label} path={service.path} image={service.image} />
              </div>
            ))}
          </div>

          {/* Row 2: 2 Cards side-by-side on mobile, part of 5-Grid on Desktop */}
          <div className="grid grid-cols-2 md:contents gap-4">
            {row2Services.map((service) => (
              <Card key={service.label} label={service.label} path={service.path} image={(service as any).image} />
            ))}
          </div>
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
