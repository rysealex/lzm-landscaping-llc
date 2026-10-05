import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Navbar from './navbar';
import Footer from './footer';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import MobileQuickBar from './components/MobileQuickBar';

function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // function will be passed down to the Navbar
  const openServiceModal = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  // function to handle the scroll-to-top logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const scrollToTopButton = document.querySelector('.scroll-to-top') as HTMLElement;

    const toggleScrollButtonVisibility = () => {
      if (!scrollToTopButton) return;
      if (window.scrollY > 200) {
        setShowScrollButton(true);
        scrollToTopButton.classList.add('show');
      } else {
        setShowScrollButton(false);
        scrollToTopButton.classList.remove('show');
      }
    };

    window.addEventListener('scroll', toggleScrollButtonVisibility);
    return () => window.removeEventListener('scroll', toggleScrollButtonVisibility);
  }, []);

  return (
    <div className="app-layout">
      <Navbar openServiceModal={openServiceModal} />
      
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                selectedService={selectedService}
                setSelectedService={setSelectedService}
              />
            }
          />
          <Route path="/service-areas" element={<Navigate to="/" replace />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      {/* Sticky Mobile Quick Action Bar (Call, Text, Estimate) */}
      <MobileQuickBar />

      {/* Floating Scroll to Top */}
      <button 
        className={`scroll-to-top ${showScrollButton ? 'show' : ''}`}
        onClick={scrollToTop}
        type="button"
        aria-label="Scroll back to top"
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </div>
  );
}

export default App;
