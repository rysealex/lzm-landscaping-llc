import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

// Only the 5 services listed on the home page
const services = [
  { name: 'Lawn Care & Garden Maintenance', path: '/services/lawn-care' },
  { name: 'Tree Service & Trimming', path: '/services/tree-service' },
  { name: 'General Cleanups', path: '/services/cleanups' },
  { name: 'Hardscaping', path: '/services/hardscaping' },
  { name: 'Sprinkler System Installation', path: '/services/sprinklers' },
];

interface ServicesDropdownProps {
  onSelectService?: (serviceName: string) => void;
  onCloseMenu?: () => void;
}

function ServicesDropdown({ onSelectService, onCloseMenu }: ServicesDropdownProps) {
  const handleClick = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    if (onCloseMenu) {
      onCloseMenu();
    }
  };

  return (
    <div className='services-dropdown'>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <Link to={service.path} onClick={() => handleClick(service.name)}>
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesDropdown;