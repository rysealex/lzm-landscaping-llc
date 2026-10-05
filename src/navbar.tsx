import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ServicesDropdown from "./servicesDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYelp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import lzmDarkSml from "./lzm-dark-sml.png";
import "./App.css";

interface NavbarProps {
  openServiceModal?: (serviceName: string) => void;
}

function Navbar({ openServiceModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 250);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleLinkScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

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

  const handleDropdownServiceClick = (serviceName: string) => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    if (openServiceModal && location.pathname === "/") {
      const serviceSection = document.getElementById("services");
      if (serviceSection) {
        serviceSection.scrollIntoView({ behavior: "smooth" });
      }
      setTimeout(() => {
        openServiceModal(serviceName);
      }, 700);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-left">
          <Link to="/" onClick={(e) => handleLinkScroll(e, "home")}>
            <img
              src={lzmDarkSml}
              alt="LZM Landscaping LLC Logo"
              className={`nav-logo ${scrolled ? "shrunk-logo" : ""}`}
            />
          </Link>
          <div className="nav-title">
            <Link to="/" onClick={(e) => handleLinkScroll(e, "home")}>
              <h3>LZM Landscaping LLC</h3>
            </Link>
          </div>
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <Link to="/" onClick={(e) => handleLinkScroll(e, "home")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={(e) => handleLinkScroll(e, "about")}>
              About
            </Link>
          </li>
          <li
            className={`services-dropdown-container ${isServicesOpen ? "open" : ""}`}
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
          >
            <Link
              to="/#services"
              onClick={(e) => handleLinkScroll(e, "services")}
            >
              Services{" "}
              {isMenuOpen ? "" : <ChevronDown size={15} className="chevron" />}
            </Link>
            <ServicesDropdown
              onSelectService={handleDropdownServiceClick}
              onCloseMenu={() => {
                setIsMenuOpen(false);
                setIsServicesOpen(false);
              }}
            />
          </li>
          <li>
            <Link
              to="/#contact"
              onClick={(e) => handleLinkScroll(e, "contact")}
            >
              Contact
            </Link>
          </li>

          {/* Quick Call CTA Button in Navbar */}
          <li className="nav-cta-item">
            <a href="tel:+12533585125" className="nav-call-btn">
              <Phone size={15} />
              <span>(253) 358-5125</span>
            </a>
          </li>

          <li className="nav-social-icons-mobile">
            <a
              href="https://www.yelp.com/biz/lzm-landscaping-gig-harbor?osq=Lzm+Landscaping&override_cta=Request+pricing+%26+availability"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yelp reviews"
            >
              <FontAwesomeIcon icon={faYelp} />
            </a>
            <a
              href="https://www.facebook.com/p/LZM-Landscaping-LLC-61577894886146"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
