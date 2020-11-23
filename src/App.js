import './App.css';

function App() {
  return (
    <div>
      <header className="main-head">
      <div class="nav-wrapper">
        <div class="nav-left">
          <h1>Shortly</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </nav>
        </div>
        <div className="nav-right">
          <nav>
            <ul className="nav-links">
              <li><a href="#">Login</a></li>
              <li><a href="#" className="button-small">Signup</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main>
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-text">
            <h2>More than just shorter links</h2>
            <h3>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
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
      <section className="advance">
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
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
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
      <section className="footer">
        <div className="footer-wrapper">
          <div className="logo">
            <h1>Shortly</h1>
          </div>
          <div className="features">
            <h1>Features</h1>
            <ul className="footer-links">
              <li><a href="#">Link Shortening</a></li>
              <li><a href="#">Branded Links</a></li>
              <li><a href="#">Analytics</a></li>
            </ul>
          </div>
          <div className="resources">
            <h1>Resources</h1>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="company">
            <h1>Company</h1>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
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
    </main>
    </div>
  );
}

export default App;
