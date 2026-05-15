import { motion } from 'motion/react';
import { Stethoscope, Dna, ShieldCheck, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const cards = [
    {
      icon: <Stethoscope size={24} strokeWidth={1} />,
      title: "Clinical Authority",
      desc: "Every procedure is performed exclusively by board-certified dermatologists with decades of combined medical experience."
    },
    {
      icon: <Dna size={24} strokeWidth={1} />,
      title: "Advanced Science",
      desc: "We utilize world-leading technologies and medical-grade formulations to deliver results backed by clinical research."
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={1} />,
      title: "Ethical Practice",
      desc: "Your safety and natural results are our priority. We never recommend treatments you don't need, ensuring honest care."
    },
    {
      icon: <Sparkles size={24} strokeWidth={1} />,
      title: "Luxury Experience",
      desc: "Redefining clinical excellence with a touch of luxury. A serene environment designed for your comfort and privacy."
    }
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row min-h-[800px] overflow-hidden">
      {/* Left Side (55%) */}
      <div className="w-full lg:w-[55%] bg-[#0a0a0a] py-20 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-normal text-[#fffff0] leading-[1.1] mb-16 tracking-tight">
            Why DermaLife is the most trusted <br className="hidden md:block" /> name in Indian aesthetics.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#141414] border border-[#c9a96e]/20 p-8 md:p-10 rounded-sm group hover:border-[#c9a96e]/40 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full border border-[#c9a96e]/30 flex items-center justify-center text-[#c9a96e] mb-8 group-hover:bg-[#c9a96e] group-hover:text-[#141414] transition-all duration-500">
                  {card.icon}
                </div>
                <h3 className="text-white font-sans font-bold text-xs uppercase tracking-[0.3em] mb-4">
                  {card.title}
                </h3>
                <p className="text-[#a8a8a8] font-sans text-sm leading-relaxed font-medium">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Side (45%) */}
      <div className="w-full lg:w-[45%] h-[600px] lg:h-auto relative bg-[#f5f0e8] flex items-center justify-center overflow-hidden">
        {/* Editorial Photo Placeholder */}
        <div className="absolute inset-0 bg-[#f5f0e8]">
          {/* Note: In a real app, this would be an <img> with object-cover */}
          <div className="w-full h-full flex items-center justify-center">
             <div className="text-brand-dark/10 uppercase tracking-[0.5em] text-[10px] font-bold text-center rotate-90 lg:rotate-0">
               Editorial Grade Photograph <br /> High-End Aesthetics Model
             </div>
          </div>
        </div>
        
        {/* Subtle overlay for luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]/5 hidden lg:block" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
