import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import generalCleanupsBefore from './gallery/cleanup-before.png';
import generalCleanupsAfter from './gallery/cleanup-after.png';

function CleanupCarousel() {
  return (
    <div className='cleanup-specific-carousel'>
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
        <div className="carousel-slide-wrapper">
          <img src={generalCleanupsBefore} alt="Before cleanup" />
          <span className="status-label">Before</span>
        </div>
        <div className="carousel-slide-wrapper">
          <img src={generalCleanupsAfter} alt="After cleanup" />
          <span className="status-label">After</span>
        </div>
      </Carousel>
    </div>
  );
}

export default CleanupCarousel;