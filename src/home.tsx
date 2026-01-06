import { useState, useEffect } from 'react';
import MyCarousel from './myCarousel';
import sidePic from './gallery/gallery-13.png';
import sidePic2 from './gallery/gallery-15.png';
import mainPic from './gallery/gallery-17.png';
import lzmDarkTree from './lzm-dark-tree.png';
import './App.css';

// handle the nav bar scroll behavior
const handleLinkScroll = (e: React.MouseEvent, sectionId: string) => {
  e.preventDefault();
  
  const section = document.getElementById(sectionId);
  // const navHeight = scrolled ? 70 : 150; // adjust based on scroll state
  const navHeight = 70; // fixed height for simplicity

  if (section) {
    const yOffset = -navHeight;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth'});
  }
};

function Home() {
  return (
    <div className='home-container'>
      <div className='home-left-container'>
          {/* <h1 className='carousel-title-welcome'>Welcome to</h1>
          <h1 className='carousel-title'>LZM Landscaping LLC</h1> */}
          <h1 className='carousel-title-welcome'>Landscaping, hardscaping and maintenance in Pierce County</h1>
          <p className='carousel-subtitle'>Outdoor Care Done Right | Since 2023</p>
          <div className='home-left-button'>
            <button className='submit-button' id='home-button' onClick={(e) => handleLinkScroll(e, 'contact')}>Book a free Estimate!</button>
          </div>
        </div>
      <div className='main-pic-container'>
        <MyCarousel />
        {/* <img src={mainPic} alt="main-pic" className='main-pic' /> */}
      </div>
      <div className='side-container'>
        <img src={sidePic} className='side-pic' alt='side-pic' />
        <div className='side-text-wrapper'>
          <h1 className='side-title'>All your landscaping needs</h1>
          <p className='side-subtitle'>Our new state of the art equipment gives you a permanent bed edging with unlimited possibilities.  Decorative edging will last for years and outlast traditional plastic edging.  This product is both decorative and functional, defining flower beds, tree surrounds, driveway curb and much more.</p>
          <button className='submit-button' id='home-button' onClick={(e) => handleLinkScroll(e, 'services')}>Our Services</button>
        </div>
        <img src={sidePic2} className='side-pic2' alt='side-pic2' />
      </div>
    </div>
	);
};

export default Home;