/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Search, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Youtube, 
  ArrowRight,
  Menu,
  X,
  Play
} from 'lucide-react';
import heroImage from './hero-treatment.png';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Treatments', href: '#' },
    { name: 'Concerns', href: '#' },
    { name: 'Offers', href: '#' },
    { name: 'Know your Skin', href: '#' },
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
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-white font-primary font-bold text-xl">D</div>
          <span className="text-2xl font-primary font-bold tracking-tight text-brand-green">DermaLife</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-brand-dark/80 hover:text-brand-green transition-colors relative group font-primary uppercase tracking-wider"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </a>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-brand-cream border-t border-brand-muted p-6 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-primary font-bold text-brand-dark py-2 border-b border-brand-muted uppercase tracking-wider">
                  {link.name}
                </a>
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

const Hero = () => {
  const stats = [
    { text: "“DermaLife's HydraFacial changed my skin game forever.” — Ananya K.", id: 1 },
    { text: "“The best aesthetic experts in the country. Period.” — Rohan M.", id: 2 },
    { text: "“Transformation that feels natural and premium.” — Priya S.", id: 3 },
  ];

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-brand-cream/70 via-brand-cream/40 to-transparent absolute z-10" />
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="w-full h-full bg-black/5 absolute inset-0 z-[5]" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-primary font-extrabold text-brand-green leading-[1.1] mb-6 uppercase tracking-tighter">
              Transformative <br />
              <span className="text-brand-gold">skin care,</span> <br />
              designed for you.
            </h1>
            <p className="text-xl md:text-2xl text-brand-dark/70 mb-10 max-w-md font-sans">
              Expert dermatology. Real results. Tailored to your unique aesthetic goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <button 
                onClick={scrollToBooking}
                className="w-full sm:w-auto px-10 py-5 bg-brand-green text-white font-bold rounded-full hover:bg-brand-green/90 transition-all shadow-2xl font-primary uppercase tracking-widest text-sm"
              >
                Book Free Consultation
              </button>
              
              <div className="relative w-full sm:w-80 group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-brand-green/50 group-focus-within:text-brand-green">
                  <Search size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="What can we treat?" 
                  className="w-full bg-white border border-brand-muted py-4 pl-12 pr-6 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all shadow-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute bottom-24 right-6 md:right-12 z-30 max-w-[240px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-brand-green p-6 rounded-2xl text-white shadow-2xl relative"
        >
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
            <Star size={16} className="fill-brand-gold text-white" />
          </div>
          <p className="text-sm font-medium leading-relaxed">
            <span className="text-brand-gold font-bold">#1 Specialist</span> in skin & aesthetic treatments across India
          </p>
        </motion.div>
      </div>

      {/* Testimonial Ticker - Positioned relative to avoid collision */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-green/5 backdrop-blur-md py-4 overflow-hidden border-t border-brand-green/10">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...stats, ...stats].map((stat, i) => (
            <span key={i} className="text-brand-green text-sm font-medium tracking-wide flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              {stat.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};


const TopTreatments = () => {
  const [activeTab, setActiveTab] = useState<'treatments' | 'concerns'>('treatments');

  const content = {
    treatments: [
      "01. HydraFacial",
      "02. Laser Hair Reduction",
      "03. IV Wellness Drips",
      "04. CoolSculpting",
      "05. Skin Boosters",
      "06. PRP Hair Treatment"
    ],
    concerns: [
      "01. Wrinkles & Fine Lines",
      "02. Dull & Uneven Skin",
      "03. Acne & Scarring",
      "04. Pigmentation",
      "05. Hair Thinning",
      "06. Stubborn Fat"
    ]
  };

  return (
    <section className="py-spacing-section px-6 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-brand-green mb-12 font-primary font-bold">Top treatments for every concern</h2>
        
        <div className="flex gap-8 border-b border-brand-muted mb-16">
          {['Treatments', 'Concerns'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase() as any)}
              className={`pb-4 text-xl font-primary font-bold relative transition-all ${
                activeTab === tab.toLowerCase() ? 'text-brand-green' : 'text-brand-dark/40'
              }`}
            >
              {tab}
              {activeTab === tab.toLowerCase() && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="contents"
            >
              {content[activeTab].map((item, i) => (
                <div 
                  key={item}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center justify-between border-b border-brand-muted pb-6 group-hover:border-brand-gold transition-colors">
                    <span className="text-2xl font-primary text-brand-green/60 group-hover:text-brand-gold transition-colors font-bold">{item.split('.')[0]}.</span>
                    <span className="text-2xl font-primary text-brand-dark flex-1 px-4 font-bold">{item.split('.')[1]}</span>
                    <div className="w-12 h-12 rounded-full border border-brand-muted flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold transition-all shadow-sm">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { label: "Happy Transformations", val: "55K+" },
    { label: "Clinics across India", val: "45" },
    { label: "Board-certified cosmetic experts", val: "80+" },
  ];

  return (
    <section className="bg-white border-y border-brand-muted overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex-1 py-spacing-section px-6">
          <h2 className="text-5xl text-brand-green mb-6 leading-tight font-primary">Real experts, <br /><span className="italic font-normal">Real results.</span></h2>
          <p className="text-lg text-brand-dark/70 mb-12 max-w-sm font-sans">
            Our certified medical treatments are driven by clinical excellence and an uncompromising attention to detail.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-primary text-brand-gold mb-2 font-bold">{stat.val}</div>
                <div className="text-sm font-bold text-brand-dark/60 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full h-[500px] lg:h-auto lg:self-stretch relative overflow-hidden">
          <div className="grid grid-cols-2 h-full gap-2 p-2">
            <div className="bg-brand-muted rounded-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
            </div>
            <div className="grid gap-2">
              <div className="bg-brand-muted rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
              </div>
              <div className="bg-brand-gold/10 rounded-2xl flex items-center justify-center border-2 border-brand-gold/20 p-8 text-center uppercase tracking-tighter text-brand-dark/30 text-5xl font-primary font-bold">
                Trust.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BrandPillars = () => {
  const pillars = [
    { title: "Skilled and trusted expertise", desc: "Our team consists of board-certified dermatologists." },
    { title: "Custom consultation plans", desc: "No two skin types are the same. Neither are our plans." },
    { title: "Modern and premium facilities", desc: "Step into an oasis of luxury and clinical precision." },
    { title: "Highest quality care", desc: "We use only FDA approved equipment and high-grade materials." },
  ];

  return (
    <section className="bg-brand-green py-spacing-section px-6 text-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl mb-16 leading-tight font-primary">Led by certified specialists. <br />Driven by <span className="text-brand-gold italic font-normal">lasting results.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {pillars.map((p, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl font-primary text-brand-gold/50 mb-4 italic font-bold">0{i+1}.</div>
              <h3 className="text-lg font-primary mb-2 font-bold uppercase tracking-wide">{p.title}</h3>
              <p className="text-sm text-white/60 mb-4 font-sans leading-relaxed">{p.desc}</p>
              <div className="w-12 h-px bg-brand-gold/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryExplorer = () => {
  const categories = [
    "Slimming & Weight Management",
    "Anti-Ageing",
    "Microneedling",
    "Medi-Facial & Chemical Peels",
    "Wellness",
    "Rejuvenation"
  ];
  const [activeCat, setActiveCat] = useState(categories[0]);

  const cards = [
    { title: "CoolSculpting Elite", trending: true, img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400" },
    { title: "Laser Lipolysis", trending: false, img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400" },
    { title: "EMSCULPT Neo", trending: true, img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=400" },
    { title: "Detox IV Drip", trending: false, img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400" },
  ];

  return (
    <section className="py-spacing-section px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-brand-green mb-12 font-primary">Explore treatments for your specific needs</h2>
        
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
             <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`whitespace-nowrap px-8 py-3 rounded-full text-sm font-bold transition-all uppercase tracking-widest ${
                activeCat === cat ? 'bg-brand-green text-white shadow-lg' : 'bg-white border border-brand-muted text-brand-dark/60 hover:border-brand-green/30'
              }`}
             >
              {cat}
             </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-sm">
                <div className="absolute inset-0 bg-brand-muted/20 z-0" />
                <img src={card.img} alt={card.title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                {card.trending && (
                  <div className="absolute top-4 left-4 z-10 bg-brand-gold text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-lg">
                    Trending
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-primary text-brand-dark group-hover:text-brand-green transition-colors font-bold">{card.title}</h3>
              <p className="text-brand-dark/50 text-sm mt-1 uppercase tracking-widest font-bold">Treatment & Procedures</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([
    { author_name: "Rahul Khanna", text: "Best clinic in South Delhi! The HydraFacial is worth every penny. Professional staff and luxury environment.", rating: 5, relative_time_description: "2 days ago" },
    { author_name: "Meera Singh", text: "Saw visible results in just 2 sessions of Laser Hair Reduction. Highly recommend Dr. Rekha for personalized advice.", rating: 5, relative_time_description: "1 week ago" },
    { author_name: "Vikram Batra", text: "The weight management program is scientifically backed and really works. Clean and hygienic clinics.", rating: 5, relative_time_description: "3 weeks ago" },
    { author_name: "Deepika P.", text: "Absolutely loved the ambiance and the service. The skin boosters made my face look so fresh and youthful.", rating: 5, relative_time_description: "1 month ago" },
  ]);

  return (
    <section className="bg-brand-cream py-spacing-section px-6 border-y border-brand-muted">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="h-6" />
              <span className="text-xl font-bold font-primary uppercase tracking-widest text-brand-dark">Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-[#FBBC05] text-[#FBBC05]" />)}
              </div>
              <span className="font-bold text-lg text-brand-dark">4.9 / 5.0</span>
              <span className="text-brand-dark/40 text-sm">(2,450+ Verified Reviews)</span>
            </div>
          </div>
          <a href="#" className="px-6 py-3 border-2 border-brand-dark rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all">
            Write a Review
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-brand-muted/50 flex flex-col justify-between h-full shadow-sm">
               <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center font-bold text-brand-green uppercase">
                      {rev.author_name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-brand-dark">{rev.author_name}</p>
                      <p className="text-[10px] text-brand-dark/40 uppercase font-bold tracking-widest">{rev.relative_time_description}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                     {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} className="fill-[#FBBC05] text-[#FBBC05]" />)}
                  </div>
                  <p className="text-sm font-sans leading-relaxed text-brand-dark/70 line-clamp-4 italic">"{rev.text}"</p>
               </div>
               <div className="mt-6 pt-4 border-t border-brand-muted/50">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-brand-green uppercase tracking-tighter">
                     <div className="w-4 h-4 bg-brand-green rounded-full flex items-center justify-center text-[8px] text-white">✓</div>
                     Verified Customer
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogSection = () => {
  const blogs = [
    { cat: "Aesthetics", title: "The Rise of Bio-Remodelling in 2026", img: "https://images.unsplash.com/photo-1594434296624-5059bb7cd8bc?auto=format&fit=crop&w=400" },
    { cat: "Wellness", title: "Why Hydration is the Secret to Eternal Glow", img: "https://images.unsplash.com/photo-1611082216373-7f1bbad1e79d?auto=format&fit=crop&w=400" },
    { cat: "Skin Concerns", title: "Acne Management: Beyond Surface Care", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400" },
    { cat: "Innovation", title: "How AI is Personalising Your Skincare Routine", img: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&w=400" },
  ];

  return (
    <section className="py-spacing-section px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-5xl text-brand-green font-primary font-bold">The DermaLife Buzz</h2>
          <a href="#" className="text-brand-gold font-bold uppercase tracking-widest text-sm border-b-2 border-brand-gold pb-1 hover:text-brand-green transition-colors">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, i) => (
             <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative shadow-sm">
                  <div className="absolute inset-0 bg-brand-muted/20" />
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">{blog.cat}</span>
                  <span className="text-xs text-brand-dark/40 font-bold uppercase">April 2026</span>
                </div>
                <h3 className="text-xl font-primary text-brand-dark group-hover:text-brand-green transition-colors line-clamp-2 font-bold leading-snug">
                  {blog.title}
                </h3>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FounderSection = () => {
  return (
    <section className="bg-brand-cream py-spacing-section overflow-hidden">
      <div className="mb-20">
        <div className="flex gap-12 whitespace-nowrap animate-marquee border-y border-brand-muted py-8">
           {[...Array(10)].map((_, i) => (
             <span key={i} className="font-primary text-6xl text-brand-green/20 uppercase tracking-tighter font-extrabold">
               — MEET THE VISIONARY — MEET THE VISIONARY
             </span>
           ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl font-primary text-brand-green leading-relaxed mb-8 italic font-bold">
                "Our philosophy is simple—combine world-class medical science with a premium aesthetic experience that transforms not just how you look, but how you feel."
              </p>
              <p className="text-lg text-brand-dark/70 mb-12 font-sans leading-relaxed">
                Dr. Rekha Sharma, Founder and Director of DermaLife, with 15+ years in Cosmetic Dermatology, leads a team of experts dedicated to the art of subtle transformation. Her vision brought India's first hybrid clinic-salon concept to life, redefining luxury skincare.
              </p>
              <div>
                <h4 className="text-3xl font-primary text-brand-green font-bold uppercase tracking-tight">Dr. Rekha Sharma</h4>
                <p className="text-brand-gold font-bold uppercase tracking-widest text-sm mt-1">Founder & Medical Director</p>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-brand-gold/10 rounded-full scale-110 animate-pulse" />
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <div className="absolute inset-0 bg-brand-muted" />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" alt="Founder" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PressSection = () => {
  const logos = ["Financial Express", "Healthshots", "Fashion", "ELLE", "Vogue"];
  return (
    <section className="py-spacing-section border-y border-brand-muted bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.4em] font-bold text-brand-dark/30 mb-16">In the spotlight with the best</p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           {logos.map((logo) => (
             <span key={logo} className="text-2xl md:text-3xl font-primary font-extrabold text-brand-dark italic uppercase tracking-tighter">{logo}</span>
           ))}
        </div>
      </div>
    </section>
  );
};

const StoreHighlight = () => {
  return (
    <section className="py-spacing-section px-6 overflow-hidden bg-brand-cream">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-6 h-full relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-700">
               <img src="https://images.unsplash.com/photo-1629131650831-27ee6bcc6891?auto=format&fit=crop&w=800" alt="Interior" className="w-full h-[450px] object-cover" />
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl translate-y-12 -rotate-2 transition-transform hover:rotate-0 duration-700">
               <img src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800" alt="Interior" className="w-full h-[450px] object-cover" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-[0.3em] block mb-6">Our Clinic Experience</span>
          <h2 className="text-5xl md:text-6xl text-brand-green mb-10 leading-tight font-primary font-bold uppercase tracking-tighter">Ready to feel <br />fabulous?</h2>
          <ul className="space-y-8 mb-12">
            {[
              "Modern and spacious outlets",
              "Pristine and hygienic environment",
              "One-of-a-kind luxurious ambience",
              "Located in premium neighbourhoods"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-6 text-xl text-brand-dark/80 group">
                <span className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all shadow-sm">
                  <Star size={16} className="fill-current" />
                </span>
                <span className="font-bold">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="relative group max-w-sm">
            <select className="w-full bg-white border-2 border-brand-muted py-5 px-8 rounded-2xl focus:outline-none focus:border-brand-gold appearance-none shadow-xl cursor-pointer font-bold uppercase tracking-widest text-xs text-brand-dark">
              <option>Select your city to find a clinic</option>
              <option>Delhi NCR</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold">
              <ChevronRight size={24} className="rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SalonBanner = () => {
  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-spacing-section px-6 bg-white">
       <div className="max-w-7xl mx-auto relative h-[450px] rounded-[4rem] overflow-hidden group cursor-pointer shadow-2xl">
          <div className="absolute inset-0 bg-brand-dark/50 z-10 group-hover:bg-brand-dark/40 transition-colors" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600')] bg-cover bg-center transition-transform duration-[3s] group-hover:scale-110" />
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
             <h2 className="text-4xl md:text-6xl text-white mb-10 font-primary font-extrabold uppercase tracking-tighter">Step up your beauty game <br />with our salon.</h2>
             <button 
                onClick={scrollToBooking}
                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-brand-green font-extrabold rounded-full hover:bg-brand-gold hover:text-white transition-all shadow-xl group/link uppercase tracking-[0.2em] text-xs font-primary"
             >
                Explore Services <ChevronRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
             </button>
          </div>
       </div>
    </section>
  );
};

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', city: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="booking-section" className="bg-brand-green py-spacing-section px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="flex-1 text-white">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 rounded-full text-brand-gold text-xs font-extrabold uppercase tracking-[0.3em] mb-10">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse" />
              Limited Appointments Available
            </div>
            <h2 className="text-5xl md:text-7xl font-primary font-extrabold mb-10 leading-[1.05] tracking-tighter">
              Ready to meet <br />your <span className="text-brand-gold font-normal italic">best self?</span>
            </h2>
            <p className="text-xl text-white/70 mb-14 max-w-md font-sans leading-relaxed">
              Book your free consultation today and get a personalized skin analysis from our board-certified experts.
            </p>
            
            <div className="grid grid-cols-2 gap-10">
               <div className="flex flex-col items-center p-8 bg-white/5 rounded-[3rem] border border-white/10 shadow-sm backdrop-blur-sm">
                  <div className="text-4xl font-extrabold font-primary text-brand-gold mb-2 uppercase tracking-tighter">0%</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/50 text-center font-bold">Consultation Fee</div>
               </div>
               <div className="flex flex-col items-center p-8 bg-white/5 rounded-[3rem] border border-white/10 shadow-sm backdrop-blur-sm">
                  <div className="text-4xl font-extrabold font-primary text-brand-gold mb-2 uppercase tracking-tighter">15m</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/50 text-center font-bold">Expert Analysis</div>
               </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
             <motion.div 
               whileInView={{ scale: 1 }}
               initial={{ scale: 0.95 }}
               className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl relative"
             >
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center text-center py-16"
                  >
                    <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center text-white mb-8 shadow-xl">
                      <Star size={48} className="fill-current" />
                    </div>
                    <h3 className="text-4xl font-primary font-bold mb-6 text-brand-green uppercase tracking-tighter">Request Received!</h3>
                    <p className="text-brand-dark/60 font-sans text-lg font-medium leading-relaxed">Our skin specialist will call you from a verified number shortly to confirm your slot.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="col-span-2">
                        <label className="text-[10px] uppercase font-extrabold text-brand-dark/40 tracking-[0.3em] block mb-3 px-1">Full Name</label>
                        <input 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Ex: Ananya Kapoor"
                          className="w-full bg-brand-cream border-2 border-transparent p-5 rounded-2xl focus:border-brand-gold focus:outline-none transition-all placeholder:text-brand-dark/20 font-bold uppercase tracking-widest text-xs"
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label className="text-[10px] uppercase font-extrabold text-brand-dark/40 tracking-[0.3em] block mb-3 px-1">Phone Number</label>
                        <input 
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 00000 00000"
                          className="w-full bg-brand-cream border-2 border-transparent p-5 rounded-2xl focus:border-brand-gold focus:outline-none transition-all placeholder:text-brand-dark/20 font-bold uppercase tracking-widest text-xs"
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label className="text-[10px] uppercase font-extrabold text-brand-dark/40 tracking-[0.3em] block mb-3 px-1">Your City</label>
                        <select 
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          className="w-full bg-brand-cream border-2 border-transparent p-5 rounded-2xl focus:border-brand-gold focus:outline-none transition-all appearance-none cursor-pointer font-bold uppercase tracking-widest text-xs text-brand-dark"
                        >
                          <option value="">Select City</option>
                          <option>Delhi NCR</option>
                          <option>Mumbai</option>
                          <option>Bangalore</option>
                          <option>Hyderabad</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label className="text-[10px] uppercase font-extrabold text-brand-dark/40 tracking-[0.3em] block mb-3 px-1">Service Interested In</label>
                        <select 
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="w-full bg-brand-cream border-2 border-transparent p-5 rounded-2xl focus:border-brand-gold focus:outline-none transition-all appearance-none cursor-pointer font-bold uppercase tracking-widest text-xs text-brand-dark"
                        >
                          <option value="">Choose Treatment</option>
                          <option>HydraFacial</option>
                          <option>Laser Hair Reduction</option>
                          <option>Body Sculpting</option>
                          <option>Skin Boosters / PRP</option>
                          <option>Anti-Ageing / Fillers</option>
                        </select>
                      </div>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-6 bg-brand-gold text-white font-extrabold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl font-primary uppercase tracking-[0.3em] text-xs mt-6"
                    >
                      Book Free Consultation
                    </button>
                    <p className="text-[10px] text-center text-brand-dark/30 mt-6 px-8 font-sans font-bold leading-relaxed">
                      By clicking above, you agree to receive medical appointment calls/SMS from DermaLife representatives.
                    </p>
                  </form>
                )}
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const columns = [
    { title: "Company", links: ["About Us", "Our Doctors", "Careers", "Sustainability", "Media"] },
    { title: "Salon", links: ["Hair Styling", "Nail Boutique", "Makeup", "Bridal", "Wellness"] },
    { title: "Clinic", links: ["Skin Treatments", "Anti-Ageing", "Laser Hair Reduction", "Body Sculpting", "IV Drips"] },
    { title: "Resource", links: ["Blogs", "FAQs", "Treatments Guide", "Know Your Skin", "Terms & Conditions"] }
  ];

  return (
    <footer className="bg-white border-t border-brand-muted pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-1">
             <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-primary font-bold text-xl shadow-md">D</div>
              <span className="text-3xl font-primary font-bold tracking-tighter text-brand-green uppercase">DermaLife</span>
            </div>
            <p className="text-brand-dark/50 text-sm mb-10 leading-relaxed font-sans font-medium">
              India's first hybrid clinic-salon. Redefining medical aesthetics with a touch of luxury.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="p-3.5 bg-brand-green/5 rounded-2xl text-brand-green hover:bg-brand-gold hover:text-white transition-all shadow-sm"><Instagram size={20} /></a>
              <a href="#" className="p-3.5 bg-brand-green/5 rounded-2xl text-brand-green hover:bg-brand-gold hover:text-white transition-all shadow-sm"><Youtube size={20} /></a>
              <a href="#" className="p-3.5 bg-brand-green/5 rounded-2xl text-brand-green hover:bg-brand-gold hover:text-white transition-all shadow-sm"><Star size={20} /></a>
            </div>
          </div>

          {columns.map((col) => (
             <div key={col.title}>
               <h4 className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-dark mb-10">{col.title}</h4>
               <ul className="space-y-5">
                  {col.links.map((link) => (
                    <li key={link}><a href="#" className="text-brand-dark/60 hover:text-brand-gold text-sm font-bold transition-colors uppercase tracking-widest text-[11px]">{link}</a></li>
                  ))}
               </ul>
             </div>
          ))}
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
                <p className="font-primary font-bold text-lg text-brand-dark tracking-tight">45 Clinics Across India</p>
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

export default function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TopTreatments />
        <StatsSection />
        <BrandPillars />
        <CategoryExplorer />
        <GoogleReviews />
        <BlogSection />
        <FounderSection />
        <PressSection />
        <StoreHighlight />
        <SalonBanner />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
