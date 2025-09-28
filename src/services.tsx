import { BrickWall, Flower2 } from 'lucide-react';
import './App.css';

function Services() {
  return (
		<div className='services-container'>
			<div className='services-header'>
				<h1>Our Services</h1>
				<p>We offer a wide range of landscaping services to meet your needs.</p>
			</div>
			<div className='services-list'>
				<div className='service-item'>
					<BrickWall className='service-icon' />
					<h2>Lawn Care</h2>
				</div>
				<div className='service-item'>
					<BrickWall className='service-icon' />
					<h2>Paver Installation</h2>
				</div>
				<div className='service-item'>
					<BrickWall className='service-icon' />
					<h2>Sprinklers</h2>
				</div>
				<div className='service-item'>
					<Flower2 className='service-icon' />
					<h2>Garden Design</h2>
				</div>
			</div>
			<div className='view-all-services'>
				<button>View All Services</button>
			</div>
		</div>
	);
};

export default Services;