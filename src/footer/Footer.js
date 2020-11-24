import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-wrapper">
        <div className="logo">
          <h1>Shortly</h1>
        </div>
        <div className="features">
          <h1>Features</h1>
          <ul className="footer-links">
            <li>
              <a href="#">Link Shortening</a>
            </li>
            <li>
              <a href="#">Branded Links</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
          </ul>
        </div>
        <div className="resources">
          <h1>Resources</h1>
          <ul className="footer-links">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="company">
          <h1>Company</h1>
          <ul className="footer-links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <img src="./images/icon-facebook.svg" alt="icon-facebook" />
          <img src="./images/icon-twitter.svg" alt="icon-twitter" />
          <img src="./images/icon-pinterest.svg" alt="icon-pinterest" />
          <img src="./images/icon-instagram.svg" alt="icon-instagram" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
