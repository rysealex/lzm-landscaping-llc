import React, { useEffect } from 'react';
import Home from '../home';
import About from '../about';
import Services from '../services';
import Contact from '../contact';
import CallTextBanner from '../components/CallTextBanner';

interface HomePageProps {
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  selectedService,
  setSelectedService
}) => {
  useEffect(() => {
    document.title = 'LZM Landscaping LLC | Landscaping, Hardscaping & Property Maintenance in Gig Harbor, WA';
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute(
        'content',
        'LZM Landscaping LLC provides licensed landscaping, paver patios, retaining walls, sprinkler irrigation, sod, bark/mulch, and yard cleanups in Gig Harbor, Tacoma, Port Orchard, and surrounding WA areas. Call (360) 286-5237.'
      );
    }
  }, []);

  return (
    <div className="home-page-wrapper">
      {/* 1. Hero Section */}
      <section id="home">
        <Home />
      </section>

      {/* 2. Direct Call Action Banner */}
      <CallTextBanner
        headline="Need Fast, Dependable Landscaping or Hardscaping?"
        subheadline="Call LZM Landscaping LLC directly. We show up on time, provide honest advice, and deliver lasting results."
      />

      {/* 3. About Section */}
      <section id="about">
        <About />
      </section>

      {/* 5. Core Services Section */}
      <section id="services">
        <Services
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </section>

      {/* 5. Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
