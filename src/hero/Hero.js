import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-text">
          <h2>More than just shorter links</h2>
          <h3>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </h3>
          <button className="button-small">Get Started</button>
        </div>
        <div className="hero-image">
          <img
            src="./images/illustration-working.svg"
            alt="hero working"
            className="hero-working"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
