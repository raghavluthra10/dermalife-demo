import { motion } from 'motion/react';

const MapSection = () => {
  return (
    <section className="py-12 md:py-16 bg-brand-cream px-6">
      <div className="max-w-7xl mx-auto">
        <div className="h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-brand-muted relative group">
          <div className="absolute top-8 left-8 z-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-brand-muted max-w-[240px]">
            <h4 className="font-primary font-bold uppercase tracking-tight mb-2 text-brand-dark">Locate Us</h4>
            <p className="text-[10px] text-brand-dark/60 font-bold uppercase tracking-tight leading-relaxed">
              Ground Floor, DLF PHASE 1, <br />
              A-14/22, Gurugram, <br />
              Haryana 122002
            </p>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default MapSection;
