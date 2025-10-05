import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function Footer() {

	return (
		<div className='footer-container'>
			<div className='footer-left'>
				<p>Outdoor Care Done Right | Since 2023</p>
				<div>
					<a href="https://www.yelp.com/biz/lzm-landscaping-gig-harbor?osq=Lzm+Landscaping&override_cta=Request+pricing+%26+availability" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faYelp} />
					</a>
					<a href="https://www.facebook.com/p/LZM-Landscaping-LLC-61577894886146" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
				</div>
			</div>
			<div className='footer-center'>
				<p>&copy; 2023 LZM Landscaping LLC. All rights reserved.</p>
			</div>
			<div className='footer-right'>
				<p>Nav Links Here</p>
			</div>
		</div>
	);
};

export default Footer;