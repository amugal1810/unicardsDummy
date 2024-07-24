import React from 'react';
import { useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from './nxt_wave_bg_lottie.json'
import './App.css'; // Import your CSS file for styling
import uniCardsLogo from './Uni_Cards_Logo.jpg'
import heropng from './nx_wave_hero.png'

const App = () => {
  const animationRef = useRef(null);
  return (
    <div className="container">
      <Lottie
          className="animation-background"
          lottieRef={animationRef}
          animationData={animationData}
          loop={true}
          autoplay={true}
          rendererSettings= {{
            preserveAspectRatio : 'xMidYMid slice'}
          }
          speed = {4}
        />
      <header className="header">
          <img src={uniCardsLogo} alt="Uni Logo" className="logo" />
          <button className="paycheck-button">Uni Paycheck</button>
        </header>
      <main className="main-content">
        <div className='onboard'>
        
        <h1 className="title">NX Wave. The next-gen credit card for those who love rewards.</h1>
        <p className="subtitle">1% Cashback + 5x Rewards + Zero Forex Markup</p>
        <div className="form-container">
          <input type="text" placeholder="Enter Phone Number" className="phone-input" />
          <button className="apply-button">Apply Now</button>
        </div>
        <div className="consent">
          <input type="checkbox" checked readOnly />
          <label>You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
        </div>
        {/* <img src="path/to/card-image.png" alt="Card Image" className="card-image" /> */}
        
        
        
      </div>
      <img src={heropng} alt = 'Hero png' className='heropng'/>
      </main>
      
    </div>
  );
};

export default App;

