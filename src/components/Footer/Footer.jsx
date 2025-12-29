import React from "react";
import "./Footer.css";
import teamlogo from '../../assets/Team Logo.jpg'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand" aria-hidden="false">
          <div className="brand-logo" aria-hidden="true">
            {/* simple square + bolt mark logo (SVG) */}
            <img src={teamlogo} alt="teamlogo-image" id="team-logo" />
          </div>

          <div className="brand-text">
            <div className="brand-title">Trubo Techies</div>
            <div className="brand-tag">Innovate · Ship · Repeat</div>
          </div>
        </div>

        {/* Link columns */}
        <div className="footer-links" role="navigation" aria-label="Footer navigation">
          <div className="links-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div className="links-col">
            <h4>Product</h4>
            <ul>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/docs">Docs</a></li>
            </ul>
          </div>

          <div className="links-col">
            <h4>Support</h4>
            <ul>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Optional small callout or contact */}
        <div className="footer-contact" aria-hidden="false">
          <p className="contact-title">Get in touch</p>
          <a className="contact-mail" href="mailto:hello@trubotechies.com">hello@trubotechies.com</a>
          <p className="contact-note">24 X 7 Support</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">© {year} Trubo Techies. All rights reserved.</div>

        <div className="footer-social" aria-label="Social links">
          <a href="#" aria-label="Twitter" className="social-link" rel="noopener noreferrer">
            {/* Twitter SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 7.5c-.6.3-1.3.5-2 .6.7-.4 1.2-1 1.5-1.8-.7.4-1.4.7-2.2.9C16.8 6 16 6 15.2 5.6c-1-.4-1.6-1.4-1.4-2.4 0 .1 0 .2 0 .3C12 4 10.8 5 9.8 5.2c-.9.2-1.8.1-2.6-.3-.8-.4-1.4-1.1-1.7-1.9 0 0-.1.6.2 1.3.3.7.8 1.3 1.5 1.7-.7 0-1.3-.2-1.9-.5v.1c0 1.2.8 2.2 1.9 2.5-.4.1-.8.1-1.2.1-.3 0-.6 0-.9-.1.6 1.8 2.2 3 4 3-1.5 1.1-3.3 1.7-5.2 1.7-.3 0-.7 0-1-.1C6 19 8.3 20 10.9 20c7.5 0 11.6-6.2 11.6-11.5v-.5C22.5 8.8 21.6 8.1 20 7.5z" fill="#333"/>
            </svg>
          </a>

          <a href="#" aria-label="LinkedIn" className="social-link" rel="noopener noreferrer">
            {/* LinkedIn SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM7 7v17h5v-9c0-2.4 3-2.6 3 0V24h5v-10c0-6-7-5.8-9-2.8V7H7z" fill="#333"/>
            </svg>
          </a>

          <a href="#" aria-label="GitHub" className="social-link" rel="noopener noreferrer">
            {/* GitHub SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 .5C5.7.5.9 5.4.9 11.7c0 4.9 3.2 9.1 7.6 10.6.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.5-3.8-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8.7 2.3 1.3.1-.8.4-1.5.7-1.9-2.5-.3-5.1-1.3-5.1-6 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.1 1.2a10.6 10.6 0 012.8-.4c1 0 2 .1 2.8.4 2.1-1.5 3.1-1.2 3.1-1.2.6 1.6.2 2.8.1 3.1.8.8 1.3 1.9 1.3 3.1 0 4.7-2.6 5.6-5.1 6 .4.4.7 1.1.7 2.3v3.4c0 .3.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.6C23.1 5.4 18.3.5 12 .5z" fill="#333"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
