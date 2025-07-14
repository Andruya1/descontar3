import React from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import DiscountsPage from '@/pages/DiscountsPage';
import AboutPage from '@/pages/AboutPage';
import ActivationPage from '@/pages/ActivationPage';
import QRCodePage from '@/pages/QRCodePage';
import ScrollToTop from '@/components/layout/ScrollToTop';
import TermsAndConditionsPage from '@/pages/TermsAndConditionsPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import FAQPage from '@/pages/FAQPage';
import ComerciosPage from '@/pages/ComerciosPage';
import ThankYouPage from '@/pages/ThankYouPage';
import DestinationsPage from '@/pages/DestinationsPage';

function App() {
  const { toast } = useToast();
  const location = useLocation();

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Funcionalidad en desarrollo",
      description: `¡La característica '${feature}' no está implementada aún, pero puedes solicitarla en tu próximo prompt! 🚀`,
      duration: 4000,
    });
  };

  const MainLayout = () => (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar handleFeatureClick={handleFeatureClick} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer handleFeatureClick={handleFeatureClick} />
    </div>
  );
  
  const ActivationLayout = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col">
       <Navbar handleFeatureClick={handleFeatureClick} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer handleFeatureClick={handleFeatureClick} />
    </div>
  );

  const MinimalLayout = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );

  return (
    <>
      <ScrollToTop />
      <Toaster />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage handleFeatureClick={handleFeatureClick} />} />
            <Route path="/descuentos" element={<DiscountsPage />} />
            <Route path="/comercios" element={<ComerciosPage />} />
            <Route path="/destinos" element={<DestinationsPage />} />
            <Route path="/nosotros" element={<AboutPage handleFeatureClick={handleFeatureClick} />} />
            <Route path="/terminos" element={<TermsAndConditionsPage />} />
            <Route path="/privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Route>
          <Route element={<ActivationLayout />}>
             <Route path="/activacion" element={<ActivationPage />} />
          </Route>
          <Route element={<MinimalLayout />}>
             <Route path="/qr-code" element={<QRCodePage />} />
             <Route path="/gracias" element={<ThankYouPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;