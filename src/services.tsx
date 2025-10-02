import { BrickWall, Flower2, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './App.css';

// services list with details and icons
const servicesList = [
	{ name: 'Lawn Care', icon: <BrickWall style={{ width: '100px', height: '100px' }} /> },
	{ name: 'Tree Service & Trimming', icon: <BrickWall style={{ width: '100px', height: '100px' }} /> },
	{ name: 'Garden Maintenance', icon: <BrickWall style={{ width: '100px', height: '100px' }} /> },
	{ name: 'General Cleanups', icon: <BrickWall style={{ width: '100px', height: '100px' }} /> },
	{ name: 'Hardscaping', icon: <BrickWall style={{ width: '100px', height: '100px' }} /> },
	{ name: 'Sprinkler System Installation', icon: <BrickWall style={{ width: '100px', height: '100px' }} /> },
	{ name: 'Paver Installation', icon: <BrickWall style={{ width: '100px', height: '100px' }} /> },
	{ name: 'Painting', icon: <BrickWall style={{ width: '100px', height: '100px' }} /> },
];

interface ServicesProps {
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
}

function Services({ selectedService, setSelectedService }: ServicesProps) {

	useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedService]);

	// usestate to toggle between services modal
	// const [selectedService, setSelectedService] = useState<string | null>(null);

	// useeffect to disable scrolling when modal is open
	useEffect(() => {
		if (selectedService) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [selectedService]);

  return (
		<div className='services-container'>
			<div className='services-header'>
				<h1>Our Services</h1>
				<p>We offer a wide range of landscaping services to meet your needs.</p>
			</div>
			<div className='services-list' id='services-list-top'>
				<div className='service-item' onClick={() => setSelectedService('Lawn Care')}>
					<div className='service-icon'>
						{servicesList[0].icon}
					</div>
					<div className='service-name'>
						{servicesList[0].name}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('Tree Service & Trimming')}>
					<div className='service-icon'>
						{servicesList[1].icon}
					</div>
					<div className='service-name'>
						{servicesList[1].name}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('Garden Maintenance')}>
					<div className='service-icon'>
						{servicesList[2].icon}
					</div>
					<div className='service-name'>
						{servicesList[2].name}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('General Cleanups')}>
					<div className='service-icon'>
						{servicesList[3].icon}
					</div>
					<div className='service-name'>
						{servicesList[3].name}
					</div>
				</div>
			</div>
			<div className='services-list'>
				<div className='service-item' onClick={() => setSelectedService('Hardscape Projects')}>
					<div className='service-icon'>
						{servicesList[4].icon}
					</div>
					<div className='service-name'>
						{servicesList[4].name}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('Sprinkler System Installation')}>
					<div className='service-icon'>
						{servicesList[5].icon}
					</div>
					<div className='service-name'>
						{servicesList[5].name}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('Paver Installation')}>
					<div className='service-icon'>
						{servicesList[6].icon}
					</div>
					<div className='service-name'>
						{servicesList[6].name}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('Painting Services')}>
					<div className='service-icon'>
						{servicesList[7].icon}
					</div>
					<div className='service-name'>
						{servicesList[7].name}
					</div>
				</div>
			</div>
			{/* <div className='view-all-services'>
				<button>View All Services</button>
			</div> */}

			{/* Modal for service details */}
			{selectedService && (
				<div className='service-modal' onClick={() => setSelectedService(null)}>
					<div className='service-modal-content' onClick={(e) => e.stopPropagation()}>
						<div className='close-button' onClick={() => setSelectedService(null)}>
							<X />
						</div>
						<h2>{selectedService}</h2>
						<p>Details about {selectedService} will go here.</p>
						<p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Services;