import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import logo from '../assets/dermalife_logo_new.png';

const servicesData: Record<string, { name: string; href: string }[]> = {
  Skin: [
    { name: "Pico Laser", href: "/skin/pico-laser" },
    { name: "Fractional Laser", href: "/skin/fractional-laser" },
    { name: "Photofacial", href: "/skin/photofacial" },
    { name: "HIFU", href: "/skin/hifu" },
    { name: "Exosome Therapy", href: "/skin/exosome-therapy" },
    { name: "Glutathione IV", href: "/skin/glutathione-iv-microneedling" },
    { name: "Face PRP", href: "/skin/face-prp" },
    { name: "Morpheus", href: "/skin/morpheus" },
    { name: "Q-Switch Laser", href: "/skin/q-switch-laser" },
    { name: "Chemical Peel", href: "/skin/face-brightening-acne-peel" }
  ],
  Hair: [
    { name: "Laser Hair Reduction", href: "/services/laser-hair-reduction" },
    { name: "PRP & GFC Therapy", href: "/hair" },
    { name: "QR678 Treatment", href: "/hair/qr678-treatment" },
    { name: "Exosome Therapy", href: "/hair/exosome-treatment" }
  ],
  Slimming: [
    { name: "Ondacool", href: "/slimming/ondacool" },
    { name: "Lipolasere", href: "/slimming/lipolasere" },
    { name: "Detox & Massage", href: "/slimming/detox-deep-tissue-massage" },
    { name: "M-sculpt", href: "/slimming/m-sculpt" },
    { name: "Body Trim", href: "/slimming/body-trim" },
    { name: "Metaslim & Trimbit", href: "/slimming/metaslim-trimbit" },
    { name: "Weight Loss Program", href: "/slimming/weight-loss-program" }
  ],
  Aesthetics: [
    { name: "Dermal Fillers", href: "/aesthetics/dermal-fillers" },
    { name: "Botox", href: "/aesthetics/botox" },
    { name: "Collagen Threads", href: "/aesthetics/collagen-threads" },
    { name: "Skin Booster", href: "/aesthetics/skin-booster" },
    { name: "Meso Botox", href: "/aesthetics/meso-botox" }
  ],
  Facials: [
    { name: "Brightening Facial", href: "/facials/brightening-facial" },
    { name: "Detox Facial", href: "/facials/detox-facial" },
    { name: "Hydra Facial", href: "/facials/hydra-facial" },
    { name: "Korean Glass Facial", href: "/facials/korean-glass-facial" },
    { name: "Stem Cell Facial", href: "/facials/stem-cell-facial" },
    { name: "Line Correction Facial", href: "/facials/line-correction-facial" },
    { name: "Deep Repair Facial", href: "/facials/deep-repair-facial" }
  ]
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const leftNavLinks = [
    { name: 'Skin', href: '/skin' },
    { name: 'Hair', href: '/hair' },
    { name: 'Slimming', href: '/slimming' },
    { name: 'Aesthetics', href: '/aesthetics' },
    { name: 'Facials', href: '/facials' },
  ];

  const rightNavLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-none ${
        isScrolled 
          ? 'bg-brand-cream/85 backdrop-blur-md py-3 shadow-none' 
          : 'bg-brand-cream/30 backdrop-blur-md py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="DermaLife Wellness Clinic" className="h-10 md:h-14 w-auto object-contain" />
          </Link>

          {/* Left Desktop Links */}
          <div className="hidden min-[1100px]:flex items-center gap-6 h-full">
            {leftNavLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative h-full py-4"
                onMouseEnter={() => setActiveMegaMenu(link.name)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link
                  to={link.href}
                  className="text-[11px] font-bold transition-all relative group font-primary uppercase tracking-[0.2em] text-brand-dark/80 hover:text-brand-gold whitespace-nowrap flex items-center gap-1"
                >
                  {link.name}
                  <ChevronDown size={10} className={`transition-transform duration-300 ${activeMegaMenu === link.name ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </Link>

                <AnimatePresence>
                  {activeMegaMenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-[240px] bg-white shadow-2xl rounded-xl border border-brand-muted/30 overflow-hidden z-50 py-4"
                    >
                      {servicesData[link.name]?.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-brand-dark/60 hover:text-brand-gold hover:bg-brand-cream/30 transition-all border-l-2 border-transparent hover:border-brand-gold"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Right Desktop Section */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {rightNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-[11px] font-bold transition-all relative group font-primary uppercase tracking-[0.2em] text-brand-dark/80 hover:text-brand-gold whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          
          <button 
            onClick={scrollToBooking}
            className="px-6 py-2.5 bg-brand-accent text-white text-[11px] font-bold rounded-full hover:bg-brand-accent/90 transition-all shadow-md active:scale-95 font-primary uppercase tracking-widest whitespace-nowrap"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-brand-cream border-t border-brand-muted p-6 shadow-2xl overflow-y-auto z-[100]"
          >
            <div className="flex flex-col gap-2">
              {leftNavLinks.map((link) => (
                <div key={link.name} className="border-b border-brand-muted last:border-0">
                  <button
                    onClick={() => setActiveMegaMenu(activeMegaMenu === link.name ? null : link.name)}
                    className="w-full text-left text-lg font-primary font-bold py-5 uppercase tracking-wider text-brand-dark flex items-center justify-between"
                  >
                    {link.name}
                    <ChevronDown size={20} className={`transition-transform duration-300 ${activeMegaMenu === link.name ? 'rotate-180 text-brand-gold' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeMegaMenu === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-brand-accent/5 rounded-xl mb-4 px-4"
                      >
                        {servicesData[link.name]?.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-4 border-b border-brand-accent/10 last:border-0"
                          >
                            <p className="text-sm font-bold uppercase tracking-tight text-brand-dark/70 hover:text-brand-gold">{sub.name}</p>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {rightNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-primary font-bold py-5 border-b border-brand-muted uppercase tracking-wider text-brand-dark"
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col gap-3 mt-8 pb-12">
                <button 
                  onClick={scrollToBooking}
                  className="w-full py-5 bg-brand-accent text-white font-bold rounded-full uppercase tracking-widest font-primary shadow-lg text-sm"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
