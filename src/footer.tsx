import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function Footer() {

	return (
		<div className='footer-container'>
			<p>&copy; 2023 LZM Landscaping LLC. All rights reserved.</p>
			<a href="https://www.yelp.com/biz/lzm-landscaping-gig-harbor?osq=Lzm+Landscaping&override_cta=Request+pricing+%26+availability" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faYelp} />
			</a>
			<a href="https://www.facebook.com/p/LZM-Landscaping-LLC-61577894886146" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faFacebook} />
			</a>
		</div>
	);
};

export default Footer;