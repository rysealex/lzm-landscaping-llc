import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import gallery images
import img1 from './gallery/gallery-1.png';
import img2 from './gallery/gallery-2.png';
import img3 from './gallery/gallery-3.png';

function MyCarousel() {
  return (
    <Carousel>
      <div>
        <img src={img1} alt="gallery-1" />
        <p className="legend">Image 1</p>
      </div>
      <div>
        <img src={img2} alt="gallery-2" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src={img3} alt="gallery-3" />
        <p className="legend">Image 3</p>
      </div>
    </Carousel>
  );
}

export default MyCarousel;