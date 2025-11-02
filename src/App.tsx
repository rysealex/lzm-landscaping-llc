import { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Navbar from './navbar';
import Home from './home';
import Services from './services';
import About from './about';
import Contact from './contact';
import Footer from './footer';

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
      // if scroll down 200px, show the button
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
    <div>
      <Navbar openServiceModal={openServiceModal} />
      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services 
          selectedService={selectedService} 
          setSelectedService={setSelectedService} 
        />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
      <button 
        className={`scroll-to-top ${showScrollButton ? 'show' : ''}`}
        onClick={scrollToTop}
        type="button" 
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </div>
  );
}

export default App;
