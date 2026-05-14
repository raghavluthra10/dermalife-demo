import Hero from '../components/Hero';
import TopTreatments from '../components/TopTreatments';
import StatsSection from '../components/StatsSection';
import BrandPillars from '../components/BrandPillars';
import GoogleReviews from '../components/GoogleReviews';
import FounderSection from '../components/FounderSection';
import PressSection from '../components/PressSection';
import BookingForm from '../components/BookingForm';
import MapSection from '../components/MapSection';

const Home = () => {
  return (
    <>
      <Hero />
      {/* <TopTreatments /> */}
      <StatsSection />
      <BrandPillars />
      <GoogleReviews />
      {/* Add galery */}
      <PressSection />
      <BookingForm />
      <MapSection />
    </>
  );
};

export default Home;
