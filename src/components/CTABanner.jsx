import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import './CTABanner.css';

export default function CTABanner() {
  return (
    <section className="cta-banner-section section">
      <div className="container">
        <div className="cta-banner-container glass">
          <div className="cta-glow"></div>
          <div className="cta-content">
            <div className="cta-badge">
              <Sparkles size={14} />
              <span>Start Learning Today</span>
            </div>
            <h2 className="cta-title">Ready to build your custom path?</h2>
            <p className="cta-description">
              Join thousands of learners generating targeted curriculums, tracking milestones, and skipping unnecessary courses.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Create My Roadmap Now <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
