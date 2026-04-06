import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faCertificate,
  faShield,
  faHandshake,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import luis from "./luis.jpeg";
import "./App.css";

const testimonialData = [
  {
    quote:
      "LZM Landscaping transformed our backyard into a beautiful oasis. Highly recommend and will use them again!",
    author: "Sarah M.",
  },
  {
    quote:
      "Incredible attention to detail. LZM Landscaping provided a truly custom solution for our tricky hillside. Expert work we can depend on.",
    author: "David B.",
  },
  {
    quote:
      "LZM Landscaping transformed our backyard into a beautiful oasis. Highly recommend and will use them again!",
    author: "John D.",
  },
  {
    quote:
      "Incredible attention to detail. LZM Landscaping provided a truly custom solution for our tricky hillside. Expert work we can depend on.",
    author: "Alex R.",
  },
];

function About() {
  return (
    <div className="about-container">
      {/* Mission Statement */}
      <section className="about-section about-mission">
        <h3>Our Mission</h3>
        <p>
          “Outdoor care done right. We show up, work hard, and deliver quality
          results you can trust, focused on maximizing customer satisfaction
          every step of the way.”
        </p>
      </section>
      {/* Header and Introduction */}
      <div className="about-header">
        <h2>About Us</h2>
        <p>
          LZM Landscaping LLC is backed by a team with 15+ years of hands-on
          experience in the industry. We are commited to delivering reliable,
          high-quality work with a strong focus on customer service.
        </p>
        <p>
          Our goal is simple: maximize customer satisfaction on every project.
          We achieve this by staying flexible with your schedule, paying close
          attention to detail, and making sure the job is done right the first
          time.
        </p>
        <p>
          From the initial estimate to the final result, we focus on clear
          comminication and a smooth, stress-free experience so you can feel
          confident in the work being done on your property.
        </p>
      </div>
      {/* Team Section */}
      {/* <section className='about-section about-team'>
				<h3>Meet Luis Zacarias, Owner & General Contractor</h3>
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
          </div> */}
      {/* Fact Callouts */}
      {/* <div className='founder-facts'>
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
			</section> */}
      {/* Values Section */}
      <section className="about-section about-values">
        <div className="values-header">
          <h3>Why Choose LZM Landscaping LLC?</h3>
        </div>
        <ul className="values-list">
          <li>
            <div>
              <FontAwesomeIcon icon={faCertificate} className="values-icon" />
            </div>
            <p className="values-title">Quality</p>
            <p className="values-info">
              We use only the best materials and practices to ensure lasting
              results.
            </p>
          </li>
          <li>
            <div>
              <FontAwesomeIcon icon={faSquareCheck} className="values-icon" />
            </div>
            <p className="values-title">Customer Satisfaction</p>
            <p className="values-info">
              We work closely with our clients to bring their vision to life.
            </p>
          </li>
          <li>
            <div>
              <FontAwesomeIcon icon={faHandshake} className="values-icon" />
            </div>
            <p className="values-title">Integrity</p>
            <p className="values-info">
              We uphold the highest standards of honesty and transparency in all
              our dealings.
            </p>
          </li>
        </ul>
      </section>
      {/* Testimonials Section */}
      {/* <section className='about-section about-testimonials'>
				<h3>Testimonials</h3>
        <Carousel
          showThumbs={false} 
          autoPlay={true} 
          interval={5000} 
          infiniteLoop={true} 
          showIndicators={true} 
          showStatus={false}
          showArrows={false}
          swipeable={false}
          animationHandler={"fade"}
          transitionTime={750}
          className='carousel-testimonial'
        >
          {testimonialData.map((testimonial, index) => (
            <div key={index}> 
              <div className='testimonial'>
                <div className='testimonial-icon-container'>
                  <FontAwesomeIcon icon={faQuoteLeft} className='testimonial-icon' />
                </div>
                <div className='testimonial-quote'>
                  <p>{testimonial.quote}</p>
                  <p className='testimonial-author'>- {testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel> */}
      {/* <div className='testimonial'>
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
				</div> */}
      {/* </section> */}
    </div>
  );
}

export default About;
