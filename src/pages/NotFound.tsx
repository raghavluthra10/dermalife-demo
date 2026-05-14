import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center px-6 pt-20">
      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold font-primary font-bold text-8xl md:text-9xl opacity-20 block mb-4">404</span>
          <h1 className="text-3xl md:text-5xl uppercase tracking-tighter mb-6">
            Page <span className="italic font-normal">not found.</span>
          </h1>
          <p className="text-brand-dark/60 text-lg mb-10 leading-relaxed max-w-md mx-auto">
            The treatment or page you are looking for doesn't exist or has been moved to a new location.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="btn-primary w-full sm:w-auto flex items-center gap-2"
            >
              <Home size={18} />
              Return Home
            </Link>
            <Link 
              to="/contact" 
              className="btn-outline w-full sm:w-auto flex items-center gap-2"
            >
              Contact Support
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="mt-20 flex justify-center gap-12 opacity-10 grayscale">
          <div className="w-24 h-1 bg-brand-gold rounded-full" />
          <div className="w-24 h-1 bg-brand-accent rounded-full" />
          <div className="w-24 h-1 bg-brand-gold rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
