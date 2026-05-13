import Hero from '../components/Hero';
import TopTreatments from '../components/TopTreatments';
import StatsSection from '../components/StatsSection';
import BrandPillars from '../components/BrandPillars';
import GoogleReviews from '../components/GoogleReviews';
import FounderSection from '../components/FounderSection';
import PressSection from '../components/PressSection';
import BookingForm from '../components/BookingForm';

const Home = () => {
  return (
    <>
      <Hero />
      <TopTreatments />
      <StatsSection />
      <BrandPillars />
      <GoogleReviews />
      {/* <FounderSection /> */}
      <PressSection />
      <BookingForm />

      {/* Map Section */}
      <section className="py-20 bg-brand-cream px-6">
        <div className="max-w-7xl mx-auto">
          <div className="h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-brand-muted relative group">
            <div className="absolute top-8 left-8 z-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-brand-muted max-w-[240px]">
              <h4 className="font-primary font-bold text-brand-accent uppercase tracking-tight mb-2">Locate Us</h4>
              <p className="text-[10px] text-brand-dark/60 font-bold uppercase tracking-tight leading-relaxed">
                C-15, Green Park Extension, <br />
                Green Park Market, New Delhi - 110016
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6063467471133!2d77.20387537550508!3d28.551543975708892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce27055555555%3A0x46429f635c0ad6f8!2sDermalife%20Skin%20and%20Hair%20Clinic!5e0!3m2!1sen!2sin!4v1715560000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
