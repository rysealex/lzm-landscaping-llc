import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

// import gallery images
import img2 from './gallery/gallery-2.png';
import img3 from './gallery/gallery-4.png';
import img4 from './gallery/gallery-7.png';
import img5 from './gallery/gallery-9.png';
import img6 from './gallery/gallery-17.png';
import img7 from './gallery/gallery-18.png';

function MyCarousel() {
  return (
    <div className='carousel-container'>
      <Carousel 
        showThumbs={false} 
        autoPlay={true} 
        interval={3000} 
        infiniteLoop={true} 
        showIndicators={false} 
        showStatus={false}
        showArrows={false}
        swipeable={false}
        animationHandler={"fade"}
        transitionTime={1000}
      >
        <div>
          <img 
            src={img6} 
            alt="Custom stone paver patio and outdoor living space in Gig Harbor by LZM Landscaping LLC" 
            className='carousel-image'
            decoding="async"
          />
        </div>
        <div>
          <img 
            src={img7} 
            alt="Precision residential lawn mowing, edging, and seasonal maintenance in Tacoma WA" 
            className='carousel-image'
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <img 
            src={img3} 
            alt="Fresh dark hemlock bark mulch installation for weed-free garden beds" 
            className='carousel-image'
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <img 
            src={img4} 
            alt="Structural stone block retaining wall for hillside erosion control" 
            className='carousel-image'
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <img 
            src={img5} 
            alt="Residential sprinkler irrigation system installation and lawn watering" 
            className='carousel-image'
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <img 
            src={img2} 
            alt="Lush green sod lawn installation and turf renovation in Pierce County WA" 
            className='carousel-image'
            loading="lazy"
            decoding="async"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default MyCarousel;