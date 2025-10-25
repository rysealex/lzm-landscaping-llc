import { useState, useEffect } from 'react';
import MyCarousel from './myCarousel';
import mainPic from './gallery/gallery-17.png';
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
          <p className='carousel-title-welcome'>Landscape design, hardscaping and maintenance in Pierce County</p>
          <p className='carousel-subtitle'>Outdoor Care Done Right | Since 2023</p>
          <div className='home-left-button'>
            <button className='submit-button' id='home-button' onClick={(e) => handleLinkScroll(e, 'contact')}>Book a free Estimate!</button>
          </div>
        </div>
      <div className='main-pic-container'>
        <MyCarousel />
        {/* <img src={mainPic} alt="main-pic" className='main-pic' /> */}
      </div>
    </div>
	);
};

export default Home;