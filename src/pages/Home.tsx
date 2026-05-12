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
      <GoogleReviews />
      <TopTreatments />
      <StatsSection />
      <BrandPillars />

      <FounderSection />
      <PressSection />
      <BookingForm />
      {/* google maps */}
    </>
  );
};

export default Home;
