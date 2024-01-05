import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/home.css'; 
import log1 from './homevideo.mp4';
import Lottie from 'react-lottie';
import Music from './components/Animation - 1702919382167.json';

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Music,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <html>
      <head>
       
        <link rel="stylesheet" href="ANIME.css" />
        <style>
          {`
            .transparent-footer {
              background: transparent;
              position: fixed;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              padding: 10px;
              color: white; // You can adjust the text color
            }
          `}
        </style>
      </head>
      <body>
        <div className="HERO">
          <video autoPlay loop muted playsInline>
            <source src={log1} type="video/mp4" />
          </video>
          <nav>
            <ul>
          <Lottie options={defaultOptions} height={150} width={150} />
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#contact">CONTACT US</a>
              </li>
            </ul>
            <div className="CONTENT">
              <center>
                <h2>INFI-TENTS</h2>
              </center>
              <center>
                <Link to="/Login">
                  <i>Get Started</i>
                  </Link>
              </center>
            </div>
          </nav>
        </div>
      </body>
    </html>
  );
};

export default Home;