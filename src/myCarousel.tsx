import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
import './CarouselFade.css';

// import gallery images
import img1 from './gallery/gallery-20.png';
import img2 from './gallery/gallery-2.png';
import img3 from './gallery/gallery-4.png';
import img4 from './gallery/gallery-7.png';
import img5 from './gallery/gallery-9.png';
import img6 from './gallery/gallery-17.png';
import img7 from './gallery/gallery-18.png';

function MyCarousel() {
  return (
    <div className='carousel-container'>
      <h1 className='carousel-title-welcome'>Welcome to</h1>
      <h1 className='carousel-title'>LZM Landscaping LLC</h1>
      <p className='carousel-subtitle'>Outdoor Care Done Right | Since 2023</p>
      <Carousel 
        showThumbs={false} 
        autoPlay={true} 
        interval={3000} 
        infiniteLoop={true} 
        showIndicators={false} 
        showStatus={false}
        showArrows={false}
      >
        <div>
          <img src={img6} alt="gallery-6" className='carousel-image' />
        </div>
        <div>
          <img src={img7} alt="gallery-7" className='carousel-image' />
        </div>
        <div>
          <img src={img3} alt="gallery-3" className='carousel-image' />
        </div>
        <div>
          <img src={img4} alt="gallery-4" className='carousel-image' />
        </div>
        <div>
          <img src={img5} alt="gallery-5" className='carousel-image' />
        </div>
        <div>
          <img src={img1} alt="gallery-1" className='carousel-image' />
        </div>
        <div>
          <img src={img2} alt="gallery-2" className='carousel-image' />
        </div>
      </Carousel>
    </div>
  );
}

export default MyCarousel;