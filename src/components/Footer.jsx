import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Useful Links Column */}
          <div className="footer__column">
            <h3 className="footer__heading">Useful Links</h3>
            <ul className="footer__links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="/contactus">Contact us</a>
              </li>
            </ul>
          </div>

          {/* About Us Column */}
          <div className="footer__column">
            <h3 className="footer__heading">About us</h3>
            <p className="footer__text">
              We are a team of passionate people whose goal is to improve
              everyone's life through disruptive products. We build great
              products to solve your business problems.
            </p>
            <p className="footer__text">
              Our products are designed for small to medium size companies
              willing to optimize their performance.
            </p>
          </div>

          {/* Connect With Us Column */}
          <div className="footer__column">
            <h3 className="footer__heading">Connect with us</h3>
            <ul className="footer__contact">
              <li className="footer__contact-item">
                <img
                  src="/path/to/map-icon.png"
                  alt="Location"
                  className="footer__icon"
                />
                <span>16 Idowu Martins St, Eti-Osa, Victoria Island</span>
              </li>
              <li className="footer__contact-item">
                <img
                  src="/path/to/envelope-icon.png"
                  alt="Email"
                  className="footer__icon"
                />
                <a href="mailto:info@turog.ng">info@turog.ng</a>
              </li>
              <li className="footer__contact-item">
                <img
                  src="/path/to/call-icon.png"
                  alt="Phone"
                  className="footer__icon"
                />
                <a href="tel:+2348022279770">+234 802-227-9770</a>
              </li>
            </ul>
            <div className="footer__social">
              <h4 className="footer__social-heading">Follow us</h4>
              <div className="footer__social-icons">
                {/* Add your social media icons/links here */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="footer__social-link"
                >
                  {/* Facebook icon placeholder */}
                  <span>FB</span>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="footer__social-link"
                >
                  {/* Twitter icon placeholder */}
                  <span>TW</span>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="footer__social-link"
                >
                  {/* LinkedIn icon placeholder */}
                  <span>LI</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
