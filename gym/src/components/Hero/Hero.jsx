import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../assets/hero_image.png";
import Heart from "../assets/heart.png";


const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="left-h">
        <Header />
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>5+ </span>
            <span>expert coachs</span>
          </div>

          <div>
            <span>50+ </span>
            <span>member joined</span>
          </div>

          <div>
            <span>5+ </span>
            <span>fitness programe</span>
          </div>
        </div>

        <div className="hero-button">
          <button className="btn">Get started</button>
          <button className="btn">learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />

          <span>Heart Rate</span>
          <span>116 ppm</span>
        </div>

        <img src={hero_image} className="hero-image" alt="" />
        

        
      </div>
    </div>
  );
};

export default Hero;
