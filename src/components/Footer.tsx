import { Instagram, Youtube, Star, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const columns = [
    { title: "Company", links: ["About Us", "Our Doctors", "Careers", "Sustainability", "Media"] },
    { title: "Clinic", links: ["Skin Treatments", "Anti-Ageing", "Laser Hair Reduction", "Body Sculpting", "IV Drips"] },
    { title: "Resource", links: ["Blogs", "FAQs", "Treatments Guide", "Know Your Skin", "Terms & Conditions"] }
  ];

  return (
    <footer className="bg-white border-t border-brand-muted pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:w-1/4">
             <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-primary font-bold text-xl shadow-md">D</div>
              <span className="text-3xl font-primary font-bold tracking-tighter text-brand-green uppercase">DermaLife</span>
            </div>
            <p className="text-brand-dark/50 text-sm mb-10 leading-relaxed font-sans font-medium uppercase tracking-tight max-w-sm">
              India's leading aesthetic clinic. Redefining medical excellence with a touch of luxury.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="p-3.5 bg-brand-green/5 rounded-2xl text-brand-green hover:bg-brand-gold hover:text-white transition-all shadow-sm"><Instagram size={20} /></a>
              <a href="#" className="p-3.5 bg-brand-green/5 rounded-2xl text-brand-green hover:bg-brand-gold hover:text-white transition-all shadow-sm"><Youtube size={20} /></a>
              <a href="#" className="p-3.5 bg-brand-green/5 rounded-2xl text-brand-green hover:bg-brand-gold hover:text-white transition-all shadow-sm"><Star size={20} /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 lg:gap-16">
            {columns.map((col) => (
               <div key={col.title}>
                 <h4 className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.3em] text-brand-dark mb-8 md:mb-10">{col.title}</h4>
                 <ul className="space-y-4 md:space-y-5">
                    {col.links.map((link) => (
                      <li key={link}><a href="#" className="text-brand-dark/60 hover:text-brand-gold text-sm font-bold transition-colors uppercase tracking-widest text-[10px] md:text-[11px]">{link}</a></li>
                    ))}
                 </ul>
               </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16 border-y border-brand-muted mb-16">
           <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-brand-green/10 rounded-[1.5rem] flex items-center justify-center text-brand-green shadow-sm"><Phone size={24} /></div>
              <div>
                <p className="text-[10px] text-brand-dark/40 uppercase font-extrabold tracking-[0.3em] mb-1">Call Us</p>
                <p className="font-primary font-bold text-lg text-brand-dark tracking-tight">+91 91234 56789</p>
              </div>
           </div>
           <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-brand-green/10 rounded-[1.5rem] flex items-center justify-center text-brand-green shadow-sm"><Mail size={24} /></div>
              <div>
                <p className="text-[10px] text-brand-dark/40 uppercase font-extrabold tracking-[0.3em] mb-1">Email Us</p>
                <p className="font-primary font-bold text-lg text-brand-dark tracking-tight">hello@dermalife.in</p>
              </div>
           </div>
           <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-brand-green/10 rounded-[1.5rem] flex items-center justify-center text-brand-green shadow-sm"><MapPin size={24} /></div>
              <div>
                <p className="text-[10px] text-brand-dark/40 uppercase font-extrabold tracking-[0.3em] mb-1">Find Us</p>
                <p className="font-primary font-bold text-sm text-brand-dark tracking-tight uppercase leading-tight">Sector 56, Gurugram, Haryana <br/> Mon–Sat 10am–7pm</p>
              </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-brand-dark/30 font-extrabold uppercase tracking-[0.2em]">
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
