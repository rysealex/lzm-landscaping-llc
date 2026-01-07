import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

import generalCleanupsBefore from './gallery/cleanup-before.png';
import generalCleanupsAfter from './gallery/cleanup-after.png';

function CleanupCarousel() {
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
          <img src={generalCleanupsBefore} alt="Before cleanup" />
        </div>
        <div>
          <img src={generalCleanupsAfter} alt="After cleanup" />
        </div>
      </Carousel>
    </div>
    );
}

export default CleanupCarousel;