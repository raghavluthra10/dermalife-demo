import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import logo from '../assets/dermalife_logo_new.png';

const servicesData = [
  {
    category: "Skin & Face",
    services: [
      { name: "Chemical Peel", desc: "Advanced exfoliation for glowing skin" },
      { name: "Face PRP", desc: "Natural rejuvenation using your own plasma" },
      { name: "QR 678 neo", desc: "Advanced growth factor therapy for skin" },
      { name: "Thermage", desc: "Non-invasive skin tightening & smoothing" }
    ]
  },
  {
    category: "Body & Fat",
    services: [
      { name: "M-tone", desc: "Muscle toning and body sculpting" },
      { name: "Lipo Laser", desc: "Non-surgical fat reduction therapy" },
      { name: "Fat Freezing Marvel", desc: "Science-backed cryolipolysis for fat loss" }
    ]
  },
  {
    category: "Lifting",
    services: [
      { name: "Hifu", desc: "High-intensity focused ultrasound lift" },
      { name: "Thermage", desc: "Deep tissue heating for skin tightening" }
    ]
  },
  {
    category: "Hair",
    services: [
      { name: "Laser Hair Reduction", desc: "Permanent and painless hair removal", href: "/services/laser-hair-reduction" },
      { name: "QR 678 neo", desc: "Hair regrowth and scalp revitalization" }
    ]
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(servicesData[0].category);

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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#', isDropdown: true },
    { name: 'Results', href: '/results' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-cream/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="DermaLife Wellness Clinic" className="h-10 md:h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.isDropdown && setActiveMegaMenu(link.name)}
              onMouseLeave={() => link.isDropdown && setActiveMegaMenu(null)}
            >
              {link.isDropdown ? (
                <button
                  className="text-sm font-semibold transition-colors relative group font-primary uppercase tracking-wider flex items-center gap-1 py-4 text-brand-dark/80"
                >
                  {link.name}
                  <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  to={link.href}
                  className="text-sm font-semibold transition-colors relative group font-primary uppercase tracking-wider text-brand-dark/80 hover:text-brand-gold"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              )}

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {link.isDropdown && activeMegaMenu === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-white shadow-2xl rounded-2xl border border-brand-muted flex overflow-hidden z-50 mt-2"
                  >
                    {/* Categories Column */}
                    <div className="w-[240px] bg-brand-cream/30 p-6 border-r border-brand-muted">
                      <div className="flex flex-col gap-1">
                        {servicesData.map((cat) => (
                          <button
                            key={cat.category}
                            onMouseEnter={() => setActiveCategory(cat.category)}
                            className={`text-left px-5 py-3.5 rounded-xl font-primary font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-between group ${activeCategory === cat.category ? 'bg-brand-green text-white shadow-md' : 'text-brand-dark/40 hover:text-brand-green hover:bg-brand-green/5'
                              }`}
                          >
                            {cat.category}
                            <ArrowRight size={12} className={`transition-transform duration-300 ${activeCategory === cat.category ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Services Grid */}
                    <div className="flex-1 p-10 bg-white">
                      <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                        {servicesData.find(c => c.category === activeCategory)?.services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href || "/services"}
                            className="group/item block"
                            onClick={() => setActiveMegaMenu(null)}
                          >
                            <h4 className="font-primary font-bold text-brand-green uppercase tracking-tight text-[13px] group-hover/item:text-brand-gold transition-colors leading-tight">
                              {service.name}
                            </h4>
                            <p className="text-[10px] text-brand-dark/40 font-medium mt-1.5 leading-relaxed uppercase tracking-tighter max-w-[200px]">
                              {service.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={scrollToBooking}
            className="px-5 py-2.5 border border-brand-green text-brand-green text-sm font-bold rounded-full hover:bg-brand-green hover:text-white transition-all font-primary uppercase tracking-wider"
          >
            Book Consultation
          </button>
          <button 
            onClick={scrollToBooking}
            className="px-5 py-2.5 bg-brand-green text-white text-sm font-bold rounded-full hover:bg-brand-green/90 transition-all shadow-md active:scale-95 font-primary uppercase tracking-wider"
          >
            Request a Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-brand-green"
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
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.isDropdown ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => setActiveMegaMenu(activeMegaMenu === link.name ? null : link.name)}
                        className="w-full text-left text-lg font-primary font-bold text-brand-dark py-4 border-b border-brand-muted uppercase tracking-wider flex items-center justify-between"
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
                            className="overflow-hidden bg-brand-green/5 rounded-xl mt-2 px-4"
                          >
                            {servicesData.map((cat) => (
                              <div key={cat.category} className="py-4 border-b border-brand-green/10 last:border-0">
                                <h5 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">{cat.category}</h5>
                                <div className="grid grid-cols-1 gap-4">
                                  {cat.services.map((s) => (
                                    <Link
                                      key={s.name}
                                      to={s.href || "/services"}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block"
                                    >
                                      <p className="text-sm font-bold text-brand-green uppercase tracking-tight">{s.name}</p>
                                      <p className="text-[9px] text-brand-dark/40 uppercase tracking-tighter mt-0.5">{s.desc}</p>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-primary font-bold text-brand-dark py-4 border-b border-brand-muted uppercase tracking-wider"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <button 
                  onClick={scrollToBooking}
                  className="w-full py-3 border border-brand-green text-brand-green font-bold rounded-full uppercase tracking-wider font-primary"
                >
                  Book Consultation
                </button>
                <button 
                  onClick={scrollToBooking}
                  className="w-full py-3 bg-brand-green text-white font-bold rounded-full uppercase tracking-wider font-primary"
                >
                  Request a Call
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
