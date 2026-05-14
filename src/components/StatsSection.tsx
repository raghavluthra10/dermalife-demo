import img1 from '../card_photos/magnific__make-a-before-after-of-pigmentation-before-should-__97181.png';
import img2 from '../card_photos/magnific__make-a-before-after-of-pigmentation-before-should-__97182.png';
import img3 from '../card_photos/magnific__a-south-asian-woman-with-dark-hair-wearing-a-light__97183.png';
import img4 from '../card_photos/magnific__a-south-asian-woman-with-auburn-hair-dyed-wearing-__97184.png';
import img5 from '../card_photos/magnific__an-indian-woman-with-shoulderlength-wavy-dark-hair__97185.png';
import img6 from '../card_photos/magnific__extreme-closeup-of-an-indian-womans-face-midtreatm__67813.png';

const StatsSection = () => {
  const stats = [
    { label: "Happy Transformations", val: "55K+" },
    { label: "Clinics across India", val: "45" },
    { label: "Board-certified experts", val: "80+" },
  ];


  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const cards = [
    {
      img: img1,
      result: "Pigmentation Corrected",
      name: "Ananya",
      concern: "Skin Discoloration"
    },
    {
      img: img2,
      result: "Even Skin Tone",
      name: "Meera",
      concern: "Sun Damage"
    },
    {
      img: img3,
      result: "Radiant Skin Glow",
      name: "Priya",
      concern: "Dullness"
    },
    {
      img: img4,
      result: "Hydrated & Fresh",
      name: "Sneha",
      concern: "Dry Skin"
    },
    {
      img: img5,
      result: "Youthful Texture",
      name: "Rohan",
      concern: "Fine Lines"
    },
    {
      img: img6,
      result: "Advanced Facial Care",
      name: "Ishani",
      concern: "Medical Grade Treatment"
    }
  ];

  return (
    <section id="results" className="bg-white py-12 md:py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 1. TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-10 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl  mb-8 leading-[1.1] font-primary font-bold uppercase tracking-tighter">
              Real experts, <br />
              <span className="italic font-normal">Real results.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-dark/70 font-sans leading-relaxed">
              Our certified medical treatments are driven by clinical excellence and an uncompromising attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-3xl md:text-5xl font-primary text-brand-gold mb-1 font-bold uppercase tracking-tighter">
                  {stat.val}
                </div>
                <div className="text-[10px] md:text-xs font-bold text-brand-dark/40 uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* 3. MORE TRANSFORMATIONS */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-10 md:mb-12">
            <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>

          {/* Grid for Desktop, Scroll for Mobile */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 no-scrollbar snap-x snap-mandatory">
            {cards.map((card, i) => (
              <div
                key={i}
                className="min-w-[80vw] md:min-w-0 snap-center group transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/4.8] rounded-[2rem] overflow-hidden mb-4 relative shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.15)] transition-all duration-500">
                  <img src={card.img} alt={card.result} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-gold/90 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">Verified Result</span>
                  </div>
                </div>
                <div className="px-2 text-center">
                  <h4 className="text-lg md:text-xl font-primary font-bold  mb-1 uppercase tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                    "{card.result}"
                  </h4>
                  <p className="text-[10px] md:text-[11px] font-bold text-brand-dark/40 uppercase tracking-[0.3em]">
                    {card.name} — {card.concern}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. CTA SECTION */}
        <div className="text-center py-10 md:py-12 bg-brand-cream rounded-[3rem] border border-brand-muted/30 px-6">
          <h2 className="text-2xl md:text-4xl font-primary font-bold  mb-6 uppercase tracking-tighter leading-tight">
            See what we can <br className="md:hidden" /> do for your skin
          </h2>
          <button
            onClick={scrollToBooking}
            className="group relative inline-flex items-center justify-center px-10 py-4.5 bg-brand-accent text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_15px_35px_rgba(192,54,90,0.25)] hover:shadow-[0_20px_45px_rgba(192,54,90,0.35)]"
          >
            <span className="relative z-10 font-primary uppercase tracking-[0.2em] text-xs">
              Book Free Consultation
            </span>
            <div className="absolute inset-0 bg-brand-gold translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
