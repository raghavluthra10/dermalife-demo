import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

const PhoneButton = () => {
  // Placeholder number - to be updated by user later
  const phoneNumber = "+919810305086"; 
  const telUrl = `tel:${phoneNumber}`;

  return (
    <motion.a
      href={telUrl}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-[98px] right-6 z-50 flex items-center justify-center w-14 h-14 bg-brand-accent rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.25)] transition-all group"
      aria-label="Call us"
    >
      <Phone className="w-6 h-6 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-3 py-1 bg-white  text-[10px] font-bold uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
        Call us
      </span>
    </motion.a>
  );
};

export default PhoneButton;
