import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faCertificate, faShield, faHandshake } from '@fortawesome/free-solid-svg-icons';
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
        <div className='values-header'>
          <h3>Why Choose LZM Landscaping LLC?</h3>
        </div>
				<ul className='values-list'>
					<li>
            <div>
              <FontAwesomeIcon icon={faCertificate} className='values-icon' />
            </div>
            <p className='values-title'>Quality</p>
            <p>
              We use only the best materials and practices to ensure lasting results. We use only the best materials and practices to ensure lasting results. 
            </p>
          </li>
					<li>
            <div>
              <FontAwesomeIcon icon={faShield} className='values-icon' />
            </div>
            <p className='values-title'>
              Customer Satisfaction
            </p>
            <p>
              We work closely with our clients to bring their vision to life. We work closely with our clients to bring their vision to life.
            </p>
					</li>
					<li>
            <div>
              <FontAwesomeIcon icon={faHandshake} className='values-icon' />
            </div>
            <p className='values-title'>
              Integrity
            </p>
            <p>
              We uphold the highest standards of honesty and transparency in all our dealings. We uphold the highest standards of honesty and transparency in all our dealings.
            </p>
					</li>
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