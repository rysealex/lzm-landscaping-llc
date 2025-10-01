import React from 'react';
import './App.css';

// list of all services
const services = [
  { name: 'Lawn Care', link: '' },
  { name: 'Tree Service', link: '' },
  { name: 'Hardscape Projects', link: '' },
  { name: 'Painting Services', link: '' },
];

function ServicesDropdown({ onSelectService }: { onSelectService: (serviceName: string) => void }) {
  return (
    <div className='services-dropdown'>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <a onClick={() => onSelectService(service.name)}>{service.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesDropdown;