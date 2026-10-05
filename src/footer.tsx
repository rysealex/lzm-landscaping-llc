import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYelp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import lzmDarkSml from "./lzm-dark-sml.png";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const navHeight = 85;
          const y =
            section.getBoundingClientRect().top +
            window.pageYOffset -
            navHeight;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const section = document.getElementById(sectionId);
    const navHeight = 85;
    if (section) {
      const y =
        section.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-col footer-col-brand">
        <img
          src={lzmDarkSml}
          alt="LZM Landscaping LLC"
          className="footer-logo"
        />
        <p className="footer-tagline">Outdoor Care Done Right | Since 2023</p>
        <div className="footer-socials">
          <a
            href="https://www.yelp.com/biz/lzm-landscaping-gig-harbor?osq=Lzm+Landscaping&override_cta=Request+pricing+%26+availability"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yelp"
          >
            <FontAwesomeIcon icon={faYelp} />
          </a>
          <a
            href="https://www.facebook.com/p/LZM-Landscaping-LLC-61577894886146"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>

      <div className="footer-col footer-col-links">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to="/" onClick={(e) => handleLinkScroll(e, "home")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={(e) => handleLinkScroll(e, "about")}>
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/#services"
              onClick={(e) => handleLinkScroll(e, "services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              onClick={(e) => handleLinkScroll(e, "contact")}
            >
              Free Estimates
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-col footer-col-contact">
        <h4>Contact Us</h4>
        <div className="footer-contact-item">
          <Phone size={16} />
          <a href="tel:+12533585125">(253) 358-5125</a>
        </div>
        <div className="footer-contact-item">
          <Phone size={16} />
          <a href="tel:+13602865237">(360) 286-5237</a>
        </div>
        <div className="footer-contact-item">
          <Mail size={16} />
          <a href="mailto:lzmlandscapingllc@gmail.com">
            lzmlandscapingllc@gmail.com
          </a>
        </div>
        <div className="footer-contact-item">
          <MapPin size={16} />
          <span>Gig Harbor, WA &amp; Surrounding Areas</span>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>
          &copy; {new Date().getFullYear()} LZM Landscaping LLC. All rights
          reserved.
        </p>
        <p className="developer-tag">
          Developed by{" "}
          <a
            href="https://rysealex.github.io/my-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alex Ryse
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
