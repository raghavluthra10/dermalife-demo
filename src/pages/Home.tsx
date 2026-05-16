import Hero from '../components/Hero';
import ConsultationCTA from '../components/ConsultationCTA';
import TrustedExpertise from '../components/TrustedExpertise';
import TopTreatments from '../components/TopTreatments';
import StatsSection from '../components/StatsSection';
import BrandPillars from '../components/BrandPillars';
import GoogleReviews from '../components/GoogleReviews';
import FounderSection from '../components/FounderSection';
import PressSection from '../components/PressSection';
import BookingForm from '../components/BookingForm';
import MapSection from '../components/MapSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Specialities from '../components/Specialities';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedExpertise />
      <Specialities />
      <ConsultationCTA />
      <BrandPillars />
      <GoogleReviews />
      <BookingForm />
      <MapSection />
    </>
  );
};

export default Home;
