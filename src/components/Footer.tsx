import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/dermalife_logo_new.png';

const Footer = () => {
  const columns = [
    {
      title: "Skin & Aesthetics",
      links: [
        { name: "Pico Laser", href: "/skin/pico-laser" },
        { name: "HIFU", href: "/skin/hifu" },
        { name: "Dermal Fillers", href: "/aesthetics/dermal-fillers" },
        { name: "Botox", href: "/aesthetics/botox" },
        { name: "Skin Booster", href: "/aesthetics/skin-booster" },
        { name: "Meso Botox", href: "/aesthetics/meso-botox" }
      ]
    },
    {
      title: "Hair & Slimming",
      links: [
        { name: "Laser Hair Reduction", href: "/services/laser-hair-reduction" },
        { name: "PRP & GFC Therapy", href: "/hair/prp-treatment" },
        { name: "Ondacool", href: "/slimming/ondacool" },
        { name: "Lipolasere", href: "/slimming/lipolasere" },
        { name: "M-sculpt", href: "/slimming/m-sculpt" },
        { name: "Weight Loss", href: "/slimming/weight-loss-program" }
      ]
    },
    {
      title: "Facials",
      links: [
        { name: "Brightening Facial", href: "/facials/brightening-facial" },
        { name: "Detox Facial", href: "/facials/detox-facial" },
        { name: "Hydra Facial", href: "/facials/hydra-facial" },
        { name: "Korean Glass Facial", href: "/facials/korean-glass-facial" },
        { name: "Stem Cell Facial", href: "/facials/stem-cell-facial" },
        { name: "Deep Repair Facial", href: "/facials/deep-repair-facial" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" }
      ]
    }
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:w-1/4">
            <div className="flex items-center mb-8">
              <img src={logo} alt="DermaLife Wellness Clinic" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-white/50 text-sm mb-10 leading-relaxed font-sans font-medium uppercase tracking-tight max-w-sm">
              India's leading aesthetic clinic. Redefining medical excellence with a touch of luxury.
            </p>
            <div className="flex items-center gap-5">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-white/5 rounded-2xl text-white hover:bg-brand-gold hover:text-brand-dark transition-all shadow-sm"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-white/5 rounded-2xl text-white hover:bg-brand-gold hover:text-brand-dark transition-all shadow-sm"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 lg:gap-16">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.3em] text-white mb-8 md:mb-10">{col.title}</h4>
                <ul className="space-y-4 md:space-y-5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-brand-gold text-sm font-bold transition-colors uppercase tracking-widest text-[10px] md:text-[11px]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-10 py-12 md:py-16 border-y border-white/10 mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 text-center md:text-left">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white/5 rounded-xl md:rounded-[1.5rem] flex items-center justify-center text-white shadow-sm shrink-0">
              <Phone className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="hidden md:block text-[10px] text-white/40 uppercase font-extrabold tracking-[0.3em] mb-1">Call Us</p>
              <a href="tel:+919212510087" className="font-primary font-bold text-[9px] md:text-lg text-white tracking-tight hover:text-brand-gold transition-colors">+91 98103 05086</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 text-center md:text-left">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white/5 rounded-xl md:rounded-[1.5rem] flex items-center justify-center text-white shadow-sm shrink-0">
              <Mail className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="hidden md:block text-[10px] text-white/40 uppercase font-extrabold tracking-[0.3em] mb-1">Email Us</p>
              <a href="mailto:hello@dermalife.in" className="font-primary font-bold text-[9px] md:text-lg text-white tracking-tight hover:text-brand-gold transition-colors">hello@dermalife.in</a>
            </div>
          </div>
          <a
            href="https://www.google.com/maps?q=Dermalife+Wellness+Clinic+Ground+Floor,+DLF+PHASE+1,+A-14/22,+Gurugram,+Haryana+122002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 text-center md:text-left group/map"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white/5 rounded-xl md:rounded-[1.5rem] flex items-center justify-center text-white shadow-sm shrink-0 group-hover/map:bg-brand-gold group-hover/map:text-brand-dark transition-all duration-300">
              <MapPin className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="hidden md:block text-[10px] text-white/40 uppercase font-extrabold tracking-[0.3em] mb-1">Find Us</p>
              <p className="font-primary font-bold text-[7px] md:text-sm text-white tracking-tight uppercase leading-tight group-hover/map:text-brand-gold transition-colors">
                Ground Floor, DLF PHASE 1, <br className="hidden md:block" /> A-14/22, Gurugram
              </p>
            </div>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-white/30 font-extrabold uppercase tracking-[0.2em]">
          <p>© 2026 DermaLife Skin & Aesthetic Clinic. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
