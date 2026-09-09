import { useState, useCallback } from 'react';
import Header from '@/components/Header';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import Packages from '@/components/Packages';
import HajjUmrah from '@/components/HajjUmrah';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import VisaAssistance from '@/components/VisaAssistance';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const [filterDestination, setFilterDestination] = useState('');
  const [filterTripType, setFilterTripType] = useState('');

  const handleSearch = useCallback((destination: string, tripType: string) => {
    setFilterDestination(destination);
    setFilterTripType(tripType);
  }, []);

  const handleDestinationClick = useCallback((destination: string) => {
    setFilterDestination(destination);
    setFilterTripType('');
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        <Destinations onCardClick={handleDestinationClick} />
        <Packages filterDestination={filterDestination} filterTripType={filterTripType} />
        <HajjUmrah />
        <WhyUs />
        <Testimonials />
        <VisaAssistance />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
