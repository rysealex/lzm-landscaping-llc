import { Scissors, Hammer, Sprout, Leaf, Trash2, Droplets, BrickWall, PaintBucket, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './App.css';

// services list with details and icons
const servicesList = [
	{ 
		name: 'Lawn Care', 
		icon: <Scissors style={{ width: '150px', height: '150px' }} />,
		desc: 'Comprehensive lawn care services including mowing, fertilization, and weed control.'
	},
	{ 
		name: 'Tree Service & Trimming', 
		icon: <Sprout style={{ width: '150px', height: '150px' }} />,
		desc: 'Expert tree trimming and removal services to keep your landscape safe and beautiful.'
	},
	{ 
		name: 'Garden Maintenance', 
		icon: <Leaf style={{ width: '150px', height: '150px' }} />,
		desc: 'Comprehensive garden maintenance services to keep your plants healthy and thriving.'
	},
	{ 
		name: 'General Cleanups', 
		icon: <Trash2 style={{ width: '150px', height: '150px' }} />,
		desc: 'Thorough cleanup services to keep your outdoor spaces tidy and inviting.'
	},
	{ 
		name: 'Hardscaping', 
		icon: <Hammer style={{ width: '150px', height: '150px' }} />,
		desc: 'Expert hardscaping services to create beautiful and functional outdoor spaces.'
	},
	{ 
		name: 'Sprinkler System Installation', 
		icon: <Droplets style={{ width: '150px', height: '150px' }} />,
		desc: 'Professional sprinkler system installation to keep your lawn healthy and hydrated.'
	},
	{ 
		name: 'Paver Installation', 
		icon: <BrickWall style={{ width: '150px', height: '150px' }} />,
		desc: 'Expert paver installation services to create beautiful and durable outdoor surfaces.'
	},
	{ 
		name: 'Painting', 
		icon: <PaintBucket style={{ width: '150px', height: '150px' }} />,
		desc: 'Professional painting services to enhance the beauty of your home.'
	},
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
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[0].name}
						</h3>
						{/* <p className='service-description'>
							{servicesList[0].desc}
						</p> */}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('Tree Service & Trimming')}>
					<div className='service-icon'>
						{servicesList[1].icon}
					</div>
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[1].name}
						</h3>
						{/* <p className='service-description'>
							{servicesList[1].desc}
						</p> */}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('Garden Maintenance')}>
					<div className='service-icon'>
						{servicesList[2].icon}
					</div>
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[2].name}
						</h3>
						{/* <p className='service-description'>
							{servicesList[2].desc}
						</p> */}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('General Cleanups')}>
					<div className='service-icon'>
						{servicesList[3].icon}
					</div>
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[3].name}
						</h3>
						{/* <p className='service-description'>
							{servicesList[3].desc}
						</p> */}
					</div>
				</div>
			</div>
			<div className='services-list'>
				<div className='service-item' onClick={() => setSelectedService('Hardscape Projects')}>
					<div className='service-icon'>
						{servicesList[4].icon}
					</div>
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[4].name}
						</h3>
						{/* <p className='service-description'>
							{servicesList[4].desc}
						</p> */}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('Sprinkler System Installation')}>
					<div className='service-icon'>
						{servicesList[5].icon}
					</div>
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[5].name}
						</h3>
						{/* <p className='service-description'>
							{servicesList[5].desc}
						</p> */}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('Paver Installation')}>
					<div className='service-icon'>
						{servicesList[6].icon}
					</div>
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[6].name}
						</h3>
						{/* <p className='service-description'>
							{servicesList[6].desc}
						</p> */}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('Painting Services')}>
					<div className='service-icon'>
						{servicesList[7].icon}
					</div>
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[7].name}
						</h3>
						{/* <p className='service-description'>
							{servicesList[7].desc}
						</p> */}
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