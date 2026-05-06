/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopTreatments from './components/TopTreatments';
import StatsSection from './components/StatsSection';
import BrandPillars from './components/BrandPillars';
import CategoryExplorer from './components/CategoryExplorer';
import GoogleReviews from './components/GoogleReviews';
import BlogSection from './components/BlogSection';
import FounderSection from './components/FounderSection';
import PressSection from './components/PressSection';
import StoreHighlight from './components/StoreHighlight';
import SalonBanner from './components/SalonBanner';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

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
