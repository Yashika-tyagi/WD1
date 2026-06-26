import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Zap, Target, Award } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-glow-layer"></div>
      <div className="hero-container container">
        <div className="hero-badge animate-fade-in">
          <Sparkles size={14} className="badge-icon" />
          <span>Supercharged by AI learning intelligence</span>
        </div>
        
        <h1 className="hero-title animate-fade-in">
          Map Your Journey. <br />
          <span className="gradient-text">Master Any Skill.</span>
        </h1>
        
        <p className="hero-subtitle animate-fade-in">
          Stop scrolling through fragmented courses. Generate a structured, step-by-step learning roadmap tailored to your specific career goals and timeline in seconds.
        </p>
        
        <div className="hero-actions animate-fade-in">
          <Link to="/contact" className="btn btn-primary btn-lg">
            Create Free Pathway <ArrowRight size={18} />
          </Link>
          <Link to="/about" className="btn btn-secondary btn-lg">
            How It Works
          </Link>
        </div>

        <div className="hero-features-preview container animate-fade-in">
          <div className="preview-item">
            <div className="preview-icon-wrapper cyan">
              <Zap size={20} />
            </div>
            <div className="preview-text">
              <h4>Instant Curated Roads</h4>
              <p>AI aggregates best docs, videos, & labs</p>
            </div>
          </div>

          <div className="preview-item">
            <div className="preview-icon-wrapper violet">
              <Target size={20} />
            </div>
            <div className="preview-text">
              <h4>Skill Tracking</h4>
              <p>Tick off milestones as you learn</p>
            </div>
          </div>

          <div className="preview-item">
            <div className="preview-icon-wrapper emerald">
              <Award size={20} />
            </div>
            <div className="preview-text">
              <h4>Certificates</h4>
              <p>Verify your competence with industry links</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
