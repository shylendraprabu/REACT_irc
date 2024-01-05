import React from 'react';
import './assets/css/Footer.css'; 
import log1 from './assets/images/Instagram.png';
import log2 from './assets/images/facebook.webp';
import log3 from './assets/images/google.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2>About Us</h2>
          <p>I am Shylendra Prabu.</p>
          <p>Software Developer & UI Designer</p>
        </div>
        <div className="footer-column">
          <h2>Contact</h2>
          <p>Email: shylendraprabu@gmail.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-column">
          <h2>Follow Us</h2>
          <p></p>
          <div className="social-icons">
            <img src={log1} alt='' style={{height:'50px',width:"50px"}} class='dp'></img>
            <img src={log2} alt='' style={{height:'50px',width:"50px"}} class='dp'></img>
            <img src={log3} alt='' style={{height:'50px',width:"50px"}} class='dp'></img>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;