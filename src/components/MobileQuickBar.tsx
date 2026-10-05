import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MobileQuickBar: React.FC = () => {
  return (
    <aside className="mobile-quick-bar" aria-label="Quick contact bar">
      <a href="tel:+13602865237" className="quick-bar-btn call">
        <Phone size={18} />
        <span>Call</span>
      </a>
      <a href="sms:+12533585125" className="quick-bar-btn text">
        <MessageSquare size={18} />
        <span>Text</span>
      </a>
      <Link to="/contact" className="quick-bar-btn estimate">
        <Calendar size={18} />
        <span>Estimate</span>
      </Link>
    </aside>
  );
};

export default MobileQuickBar;
