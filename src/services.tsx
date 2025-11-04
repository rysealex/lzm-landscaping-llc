import { Scissors, Hammer, Sprout, Leaf, Trash2, Droplets, BrickWall, PaintBucket, X } from 'lucide-react';
import { useEffect } from 'react';
import './App.css';

// import gallery images
import treeTrimming from './gallery/gallery-21.png';
import sprinklerSystemInstallation from './gallery/gallery-6.png';
import hardscaping from './gallery/gallery-23.png';
import paverInstallation from './gallery/gallery-19.png';
import painting from './gallery/gallery-24.png';


// services list with details and icons
const servicesList = [
	{ 
		name: 'Lawn & Garden Care', 
		icon: <Leaf style={{ width: '150px', height: '150px' }} />,
		desc: 'Comprehensive lawn care services including mowing, fertilization, and weed control.',
    img: treeTrimming
	},
	{ 
		name: 'Tree Service & Trimming', 
		icon: <Sprout style={{ width: '150px', height: '150px' }} />,
		desc: 
    <p>
      Expert tree trimming and removal services to keep your landscape safe and beautiful.
      Expert tree trimming and removal services to keep your landscape safe and beautiful.
      Expert tree trimming and removal services to keep your landscape safe and beautiful.
      Expert tree trimming and removal services to keep your landscape safe and beautiful.
      Expert tree trimming and removal services to keep your landscape safe and beautiful.
      Expert tree trimming and removal services to keep your landscape safe and beautiful.
      <br />
      <br />
      Expert tree trimming and removal services to keep your landscape safe and beautiful.
      Expert tree trimming and removal services to keep your landscape safe and beautiful.
      Expert tree trimming and removal services to keep your landscape safe and beautiful.
      Expert tree trimming and removal services to keep your landscape safe and beautiful.
      Expert tree trimming and removal services to keep your landscape safe and beautiful.
      Expert tree trimming and removal services to keep your landscape safe and beautiful.
    </p>,
    img: treeTrimming
	},
	// { 
	// 	name: 'Garden Maintenance', 
	// 	icon: <Leaf style={{ width: '150px', height: '150px' }} />,
	// 	desc: 'Comprehensive garden maintenance services to keep your plants healthy and thriving.',
  //   img: treeTrimming
	// },
	{ 
		name: 'General Cleanups', 
		icon: <Trash2 style={{ width: '150px', height: '150px' }} />,
		desc: 'Thorough cleanup services to keep your outdoor spaces tidy and inviting.',
    img: treeTrimming
	},
	{ 
		name: 'Hardscaping', 
		icon: <Hammer style={{ width: '150px', height: '150px' }} />,
		desc: 
    <p>
      Expert hardscaping services to create beautiful and functional outdoor spaces.
      Expert hardscaping services to create beautiful and functional outdoor spaces.
      Expert hardscaping services to create beautiful and functional outdoor spaces.
      Expert hardscaping services to create beautiful and functional outdoor spaces.
      Expert hardscaping services to create beautiful and functional outdoor spaces.
      Expert hardscaping services to create beautiful and functional outdoor spaces.
      <br />
      <br />
      Expert hardscaping services to create beautiful and functional outdoor spaces.
      Expert hardscaping services to create beautiful and functional outdoor spaces.
      Expert hardscaping services to create beautiful and functional outdoor spaces.
      Expert hardscaping services to create beautiful and functional outdoor spaces.
      Expert hardscaping services to create beautiful and functional outdoor spaces.
      Expert hardscaping services to create beautiful and functional outdoor spaces.
    </p>,
    img: hardscaping
	},
	{ 
		name: 'Sprinkler System Installation', 
		icon: <Droplets style={{ width: '150px', height: '150px' }} />,
		desc: 'Professional sprinkler system installation to keep your lawn healthy and hydrated.',
    img: sprinklerSystemInstallation
	},
	{ 
		name: 'Paver Installation', 
		icon: <BrickWall style={{ width: '150px', height: '150px' }} />,
		desc:
    <p>
      Expert paver installation services to create beautiful and durable outdoor surfaces.
      Expert paver installation services to create beautiful and durable outdoor surfaces.
      Expert paver installation services to create beautiful and durable outdoor surfaces.
      Expert paver installation services to create beautiful and durable outdoor surfaces.
      Expert paver installation services to create beautiful and durable outdoor surfaces.
      Expert paver installation services to create beautiful and durable outdoor surfaces.
      <br />
      <br />
      Expert paver installation services to create beautiful and durable outdoor surfaces.
      Expert paver installation services to create beautiful and durable outdoor surfaces.
      Expert paver installation services to create beautiful and durable outdoor surfaces.
      Expert paver installation services to create beautiful and durable outdoor surfaces.
      Expert paver installation services to create beautiful and durable outdoor surfaces.
      Expert paver installation services to create beautiful and durable outdoor surfaces.
    </p>,
    img: paverInstallation
	},
	{ 
		name: 'Painting', 
		icon: <PaintBucket style={{ width: '150px', height: '150px' }} />,
		desc:
    <p>
      Professional painting services to enhance the beauty of your home.
      Professional painting services to enhance the beauty of your home.
      Professional painting services to enhance the beauty of your home.
      Professional painting services to enhance the beauty of your home.
      Professional painting services to enhance the beauty of your home.
      Professional painting services to enhance the beauty of your home.
      <br />
      <br />
      Professional painting services to enhance the beauty of your home.
      Professional painting services to enhance the beauty of your home.
      Professional painting services to enhance the beauty of your home.
      Professional painting services to enhance the beauty of your home.
      Professional painting services to enhance the beauty of your home.
      Professional painting services to enhance the beauty of your home.
    </p>,
    img: painting
	},
];

interface ServicesProps {
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
}

function Services({ selectedService, setSelectedService }: ServicesProps) {

  // helper function to get the current service details
  const currentService = servicesList.find(service => service.name === selectedService);

  // find the index to determine image position
  const currentIndex = servicesList.findIndex(service => service.name === selectedService);
  
  // If the index is odd (1, 3, 5, etc.), the image should be on the right.
  // The first item (index 0) will be false, keeping the image on the left.
  const isImageOnRight = currentIndex !== -1 && currentIndex % 2 !== 0;

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

  // handle the click to contact section
  const handleLinkScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

    // disable the selected service
    setSelectedService(null);
    
    const section = document.getElementById(sectionId);
    // const navHeight = scrolled ? 70 : 150; // adjust based on scroll state
    const navHeight = 70; // fixed height for simplicity

    if (section) {
      const yOffset = -navHeight;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth'});
    }
  };

  return (
		<div className='services-container'>
			<div className='services-header'>
				<h1>Our Services</h1>
				<p>We offer a wide range of landscaping services to meet your needs.</p>
			</div>
			<div className='services-list' id='services-list-top'>
				<div className='service-item' onClick={() => setSelectedService('Lawn & Garden Care')}>
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
				{/* <div className='service-item' onClick={() => setSelectedService('Garden Maintenance')}>
					<div className='service-icon'>
						{servicesList[2].icon}
					</div>
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[2].name}
						</h3>
					</div>
				</div> */}
				<div className='service-item' onClick={() => setSelectedService('General Cleanups')}>
					<div className='service-icon'>
						{servicesList[2].icon}
					</div>
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[2].name}
						</h3>
						{/* <p className='service-description'>
							{servicesList[3].desc}
						</p> */}
					</div>
				</div>
			</div>
			<div className='services-list'>
				<div className='service-item' onClick={() => setSelectedService('Hardscaping')}>
					<div className='service-icon'>
						{servicesList[3].icon}
					</div>
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[3].name}
						</h3>
						{/* <p className='service-description'>
							{servicesList[4].desc}
						</p> */}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('Sprinkler System Installation')}>
					<div className='service-icon'>
						{servicesList[4].icon}
					</div>
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[4].name}
						</h3>
						{/* <p className='service-description'>
							{servicesList[5].desc}
						</p> */}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('Paver Installation')}>
					<div className='service-icon'>
						{servicesList[5].icon}
					</div>
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[5].name}
						</h3>
						{/* <p className='service-description'>
							{servicesList[6].desc}
						</p> */}
					</div>
				</div>
				<div className='service-item' onClick={() => setSelectedService('Painting')}>
					<div className='service-icon'>
						{servicesList[6].icon}
					</div>
					<div className='service-content'>
						<h3 className='service-name'>
							{servicesList[6].name}
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
			{/* UPDATED MODAL STRUCTURE */}
      {currentService && (
        <div className='service-modal' onClick={() => setSelectedService(null)}>
         <div 
            className={`service-modal-content ${isImageOnRight ? 'reverse-layout' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className='close-button' onClick={() => setSelectedService(null)}>
              <X />
            </div>
            {currentService.img && (
              <div className='modal-image-wrapper'>
                <img 
                  src={currentService.img} 
                  alt={`${currentService.name} service`} 
                  className='modal-service-image'
                />
              </div>
            )}
            <div className='modal-text-content'>
              <h2>{currentService.name}</h2>
              {/* Use the service description */}
              {currentService.desc}
              <button className='submit-button' id='home-button' onClick={(e) => handleLinkScroll(e, 'contact')}>Contact Us Today!</button>
            </div>
          </div>
        </div>
      )}
		</div>
	);
};

export default Services;