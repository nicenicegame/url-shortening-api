import "./Header.css";

import React from "react";

const Header = () => {
  return (
    <header className="main-head">
      <div class="nav-wrapper">
        <div class="nav-left">
          <h1>Shortly</h1>
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
        </div>
        <div className="nav-right">
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
      </div>
    </header>
  );
};

export default Header;
