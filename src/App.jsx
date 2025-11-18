import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-orange-50">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CallToActionSection />
        
        


        <Footer />
      </div>

    </>
  );

}

export default App;