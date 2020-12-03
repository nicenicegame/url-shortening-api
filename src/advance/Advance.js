import React from "react";
import "./Advance.css";
import Form from "./Form";

const Advance = () => {
  return (
    <section className="advance">
      <Form />
      <div className="advance-wrapper">
        <div className="advance-text">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with <br />
            our advanced statistics dashboard.
          </p>
        </div>

        <div className="advance-box">
          <div className="brand card">
            <div className="card-image">
              <img src="./images/icon-brand-recognition.svg" alt="brand" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="detailed card">
            <div className="card-image">
              <img src="./images/icon-detailed-records.svg" alt="detailed" />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="fully card">
            <div className="card-image">
              <img src="./images/icon-fully-customizable.svg" alt="fully" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advance;
