/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Results from './pages/Results';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LaserHairReduction from './pages/LaserHairReduction';
import Skin from './pages/Skin';
import Hair from './pages/Hair';
import Slimming from './pages/Slimming';
import Aesthetics from './pages/Aesthetics';
import Facials from './pages/Facials';
import FaceBrighteningAcnePeel from './pages/FaceBrighteningAcnePeel';
import Hifu from './pages/Hifu';
import PicoLaser from './pages/PicoLaser';
import FractionalLaser from './pages/FractionalLaser';
import Photofacial from './pages/Photofacial';
import ExosomeTherapy from './pages/ExosomeTherapy';
import GlutathioneIVMicroneedling from './pages/GlutathioneIVMicroneedling';
import FacePrp from './pages/FacePrp';
import Morpheus from './pages/Morpheus';
import QSwitchLaser from './pages/QSwitchLaser';
import Ondacool from './pages/Ondacool';
import Lipolasere from './pages/Lipolasere';
import DetoxMassage from './pages/DetoxMassage';
import BodyTrim from './pages/BodyTrim';
import MSculpt from './pages/MSculpt';
import Metaslim from './pages/Metaslim';
import WeightLoss from './pages/WeightLoss';
import NotFound from './pages/NotFound';

import WhatsAppButton from './components/WhatsAppButton';
import PhoneButton from './components/PhoneButton';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative w-full overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/results" element={<Results />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services/laser-hair-reduction" element={<LaserHairReduction />} />
            <Route path="/skin" element={<Skin />} />
            <Route path="/skin/face-brightening-acne-peel" element={<FaceBrighteningAcnePeel />} />
            <Route path="/skin/hifu" element={<Hifu />} />
            <Route path="/skin/pico-laser" element={<PicoLaser />} />
            <Route path="/skin/fractional-laser" element={<FractionalLaser />} />
            <Route path="/skin/photofacial" element={<Photofacial />} />
            <Route path="/skin/exosome-therapy" element={<ExosomeTherapy />} />
            <Route path="/skin/glutathione-iv-microneedling" element={<GlutathioneIVMicroneedling />} />
            <Route path="/skin/face-prp" element={<FacePrp />} />
            <Route path="/skin/morpheus" element={<Morpheus />} />
            <Route path="/skin/q-switch-laser" element={<QSwitchLaser />} />
            <Route path="/slimming/ondacool" element={<Ondacool />} />
            <Route path="/slimming/lipolasere" element={<Lipolasere />} />
            <Route path="/slimming/detox-deep-tissue-massage" element={<DetoxMassage />} />
            <Route path="/slimming/body-trim" element={<BodyTrim />} />
            <Route path="/slimming/m-sculpt" element={<MSculpt />} />
            <Route path="/slimming/metaslim-trimbit" element={<Metaslim />} />
            <Route path="/slimming/weight-loss-program" element={<WeightLoss />} />
            <Route path="/hair" element={<Hair />} />
            <Route path="/slimming" element={<Slimming />} />
            <Route path="/aesthetics" element={<Aesthetics />} />
            <Route path="/facials" element={<Facials />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <PhoneButton />
      </div>
    </Router>
  );
}
// 