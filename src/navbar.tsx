import lzmDark from './lzm-dark.png';
import './App.css';

function Navbar() {
  return (
    <div>
      <nav>
        <div className='nav-left'>
          {/* <img src={lzmDark} alt="Logo" className='logo' /> */}
        </div>
        <ul>
          <li>
            <a href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#services">
              Services
            </a>
          </li>
          <li>
            <a href="#gallery">
              Gallery
            </a>
          </li>
          <li>
            <a href="#about">
              About
            </a>
          </li>
          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;