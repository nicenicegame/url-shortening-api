import "./Header.css";

import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const openNav = {
    opacity: 1,
    pointerEvents: "all",
    maxHeight: 600,
  };

  return (
    <header className="main-head">
      <div class="nav-wrapper">
        <h1>Shortly</h1>
        <div class="nav-items" style={isOpen ? openNav : {}}>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#" className="button-small">
                  Signup
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hamburger" onClick={toggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
