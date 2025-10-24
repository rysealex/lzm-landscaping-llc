import MyCarousel from './myCarousel';
import mainPic from './gallery/gallery-17.png';
import './App.css';

function Home() {
  return (
    <div className='home-container'>
      <div className='home-left-container'>
          <h1 className='carousel-title-welcome'>Welcome to</h1>
          <h1 className='carousel-title'>LZM Landscaping LLC</h1>
          <p className='carousel-subtitle'>Outdoor Care Done Right | Since 2023</p>
        </div>
      <div className='main-pic-container'>
        <img src={mainPic} alt="main-pic" className='main-pic' />
      </div>
    </div>
	);
};

export default Home;