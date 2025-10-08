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
				<h3>Meet Luis Zacarias, Founder & Lead Designer</h3>
				<div className='founder-profile'>
					<div className='founder-content-wrapper'>
            <img src={luis} alt='Luis Zacarias' className='founder-photo' />
            <div className='founder-bio'>
              <p>
                Luis founded LZM Landscaping **10 years ago** with a goal: to blend artistry with meticulous, lasting craftsmanship. His expertise, particularly in **sustainable hardscaping**, is the driving force behind our reputation.
              </p>
              <p>
                As the owner, Luis personally oversees **100% of projects**—ensuring every detail meets the LZM standard of quality, guaranteed.
              </p>
              <p className='founder-quote'>
                "For me, quality isn't an act, it's a deep-rooted habit we bring to every yard."
              </p>
            </div>
          </div>
          {/* Fact Callouts */}
          <div className='founder-facts'>
            <div className='fact-item'>
              <span className='fact-number'>10+</span>
              <p className='fact-label'>Years of Landscaping Excellence</p>
            </div>
            <div className='fact-item'>
              <span className='fact-number'>100%</span>
              <p className='fact-label'>Owner-Supervised Projects</p>
            </div>
            <div className='fact-item'>
              <span className='fact-number'>A+</span>
              <p className='fact-label'>Customer-Rated Service</p>
            </div>
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