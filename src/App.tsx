import { useState } from 'react';
import Navbar from './navbar';
import Home from './home';
import Services from './services';
import About from './about';
import Contact from './contact';
import Footer from './footer';

function App() {

  const [selectedService, setSelectedService] = useState<string | null>(null);

  // function will be passed down to the Navbar
  const openServiceModal = (serviceName: string) => {
    setSelectedService(serviceName);
  };

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
    </div>
  );
}

export default App;
