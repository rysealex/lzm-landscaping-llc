import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import luis from './luis.jpeg';
import './App.css';

function About() {
  return (
		<div className='about-container'>
			{/* Header and Introduction */}
			<div className='about-header'>
				<h2>About Us</h2>
				<p>
					Trusted by homeowners and businesses in the Gig Harbor, WA area.
				</p>
			</div>	
			{/* Mission Statement */}
			<section className='about-section about-mission'>
				<h3>Our Mission</h3>
				<p>
					To provide top-notch landscaping services that enhance the beauty and functionality of outdoor spaces.
				</p>
			</section>
			{/* Team Section */}
			<section className='about-section about-team'>
				<h3>Meet Luis Zacarias, Founder</h3>
				<div className='founder-profile'>
					<img src={luis} alt='Luis Zacarias' className='founder-photo' />
					<div className='founder-bio'>
						<p>
							Luis Zacarias began his career in landscaping 10 years ago.
						</p>
						<p>
							He personally oversees every project to ensure the highest quality standards are met.
						</p>
						<p className='founder-quote'>
							"Quality is not an act, it is a habit." - Luis Zacarias
						</p>
					</div>
				</div>
			</section>
			{/* Values Section */}
			<section className='about-section about-values'>
				<h3>Why Choose LZM Landscaping LLC?</h3>
				<ul>
					<li>Expertise: Our team has years of experience in the landscaping industry.</li>
					<li>Quality: We use only the best materials and practices to ensure lasting results.</li>
					<li>Customer Satisfaction: We work closely with our clients to bring their vision to life.</li>
				</ul>
			</section>
			{/* Testimonials Section */}
			<section className='about-section about-testimonials'>
				<h3>Testimonials</h3>
				<div className='testimonial'>
					<div className='testimonial-icon-container'>
						<FontAwesomeIcon icon={faQuoteLeft} className='testimonial-icon' />
					</div>
					<div className='testimonial-quote'>
						<p>
							LZM Landscaping transformed our backyard into a beautiful oasis. Highly recommend and will use them again!
						</p>
						<p className='testimonial-author'>- Sarah M.</p>
					</div>
				</div>
				<div className='testimonial'>
					<div className='testimonial-icon-container'>
						<FontAwesomeIcon icon={faQuoteLeft} className='testimonial-icon' />
					</div>
					<div className='testimonial-quote'>
						<p>
							LZM Landscaping transformed our backyard into a beautiful oasis. Highly recommend and will use them again!
						</p>
						<p className='testimonial-author'>- Sarah M.</p>
					</div>
				</div>
				<div className='testimonial'>
					<div className='testimonial-icon-container'>
						<FontAwesomeIcon icon={faQuoteLeft} className='testimonial-icon' />
					</div>
					<div className='testimonial-quote'>
						<p>
							LZM Landscaping transformed our backyard into a beautiful oasis. Highly recommend and will use them again!
						</p>
						<p className='testimonial-author'>- Sarah M.</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;