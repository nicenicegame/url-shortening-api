import React from "react";
import "./Boost.css";

const Boost = () => {
  return (
    <section className="boost">
      <img
        src="./images/bg-boost-desktop.svg"
        alt="boost"
        className="boost-image"
      />
      <div className="boost-wrapper">
        <h1>Boost your links today</h1>
        <button className="button-small">Get Started</button>
      </div>
    </section>
  );
};

export default Boost;
