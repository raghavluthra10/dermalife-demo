import { useState } from 'react';
import { Star } from 'lucide-react';

const GoogleReviews = () => {
  const [reviews] = useState([
    { author_name: "Rahul Khanna", text: "Best clinic in Sector 56! The HydraFacial is worth every penny. Professional staff and luxury environment.", rating: 5, relative_time_description: "2 days ago" },
    { author_name: "Meera Singh", text: "Saw visible results in just 2 sessions of Laser Hair Reduction. Highly recommend Dr. Priya for personalised advice.", rating: 5, relative_time_description: "1 week ago" },
    { author_name: "Vikram Batra", text: "The weight management program is scientifically backed and really works. Clean and hygienic clinics.", rating: 5, relative_time_description: "3 weeks ago" },
    { author_name: "Deepika P.", text: "Absolutely loved the ambiance and the service. The skin boosters made my face look so fresh and youthful.", rating: 5, relative_time_description: "1 month ago" },
  ]);

  return (
    <section id="reviews" className="bg-brand-cream py-spacing-section px-6 py-20 border-y border-brand-muted overflow-x-hidden">
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
          <a href="#" className="px-6 py-3 border-2 border-brand-dark rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all font-primary">
            Write a Review
          </a>
        </div>

        <div className="flex overflow-x-auto pb-8 md:pb-0 gap-6 no-scrollbar snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-brand-muted/50 flex flex-col justify-between h-full shadow-sm min-w-[85%] sm:min-w-[320px] md:min-w-0 snap-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-accent/20 rounded-full flex items-center justify-center font-bold text-brand-accent uppercase">
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
                <p className="text-sm font-sans leading-relaxed text-brand-dark/70 line-clamp-4 italic font-medium">"{rev.text}"</p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-muted/50">
                <div className="flex items-center gap-2 text-[10px] font-bold text-brand-accent uppercase tracking-tighter">
                  <div className="w-4 h-4 bg-brand-accent rounded-full flex items-center justify-center text-[8px] text-white">✓</div>
                  Verified Customer
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        {/* <div className="mt-12 md:mt-16 text-center border-t border-brand-muted/30 pt-12 md:pt-16">
          <h3 className="text-2xl md:text-4xl font-primary font-bold text-brand-accent mb-8 uppercase tracking-tighter max-w-2xl mx-auto leading-tight">
            Join 50,000+ clients who <span className="text-brand-gold italic font-normal">trust us</span> with their skin
          </h3>
          <button
            onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-12 py-5 bg-brand-accent text-white font-bold rounded-full hover:bg-brand-gold transition-all shadow-2xl uppercase tracking-widest text-sm font-primary"
          >
            Book Free Consultation
          </button>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-dark/30 font-bold mt-6">
            Takes 2 minutes • No commitment
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default GoogleReviews;
