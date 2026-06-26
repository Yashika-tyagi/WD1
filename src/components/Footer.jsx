import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! Stay tuned for SkillPath updates.');
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <Compass className="logo-icon" />
              <span className="logo-text">Skill<span className="gradient-text-alt">Path</span></span>
            </Link>
            <p className="footer-description">
              Generate personalized AI-driven learning pathways tailored to your career aspirations. Learn smart, fast, and structured.
            </p>
            <div className="footer-socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-icon-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="footer-col links-col">
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-col contact-col">
            <h3 className="footer-title">Contact</h3>
            <p className="footer-info">
              Have questions or feedback? Connect with our support team.
            </p>
            <a href="mailto:support@skillpath.dev" className="footer-email">
              <Mail size={16} />
              support@skillpath.dev
            </a>
          </div>

          {/* Newsletter Col */}
          <div className="footer-col newsletter-col">
            <h3 className="footer-title">Stay Updated</h3>
            <p className="footer-info">
              Subscribe to get the latest guides, pathways, and industry insights.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SkillPath Inc. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
