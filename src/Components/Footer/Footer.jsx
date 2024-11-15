import React from 'react';
import './Footer.css'; // Make sure to create this CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Get to Know Us</h4>
                    <ul>
                        <li>About EcomApplication</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                        <li>EcomApplication Science</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Connect with Us</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Make Money with Us</h4>
                    <ul>
                        <li>Sell on EcomApplication</li>
                        <li>Sell under EcomApplication Accelerator</li>
                        <li>Protect and Build Your Brand</li>
                        <li>EcomApplication Global Selling</li>
                        <li>Supply to EcomApplication</li>
                        <li>Become an Affiliate</li>
                        <li>Fulfilment by EcomApplication</li>
                        <li>Advertise Your Products</li>
                        <li>EcomApplication Pay on Merchants</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Let Us Help You</h4>
                    <ul>
                        <li>Your Account</li>
                        <li>Returns Centre</li>
                        <li>Recalls and Product Safety Alerts</li>
                        <li>100% Purchase Protection</li>
                        <li>EcomApplication App Download</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Explore More</h4>
                    <ul>
                        <li>AbeBooks - Books, art & collectibles</li>
                        <li>EcomApplication Web Services - Scalable Cloud Computing Services</li>
                        <li>Audible - Download Audio Books</li>
                        <li>IMDb - Movies, TV & Celebrities</li>
                        <li>Shopbop - Designer Fashion Brands</li>
                        <li>EcomApplication Business - Everything For Your Business</li>
                        <li>Prime Now - 2-Hour Delivery on Everyday Items</li>
                        <li>EcomApplication Prime Music - 100 million songs, ad-free</li>
                        <li>Over 15 million podcast episodes</li>
                    </ul>
                </div>
            </div>
           <div className='footer-bottom'>
            <p>&copy; {new Date().getFullYear()} EcomApplication. All rights reserved.</p>
           </div>
        </footer>
    );
};

export default Footer;
