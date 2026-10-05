import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CallTextBannerProps {
  headline?: string;
  subheadline?: string;
}

export const CallTextBanner: React.FC<CallTextBannerProps> = ({
  headline = 'Ready to Transform Your Outdoor Space?',
  subheadline = 'Speak directly with owner Luis Zacarias. Free estimates, honest pricing & 15+ years of experience.'
}) => {
  return (
    <div className="call-text-banner">
      <div className="banner-content">
        <h2>{headline}</h2>
        <p>{subheadline}</p>
        <div className="banner-buttons">
          <a href="tel:+12533585125" className="banner-btn call-btn">
            <Phone size={18} />
            <span>Call (253) 358-5125</span>
          </a>
          <Link to="/contact" className="banner-btn estimate-btn">
            <Calendar size={18} />
            <span>Book Free Estimate</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallTextBanner;
