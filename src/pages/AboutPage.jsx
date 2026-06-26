import React from 'react';
import { Target, BookOpen, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Pages.css';

export default function AboutPage() {
  return (
    <div className="page-wrapper about-page animate-fade-in">
      {/* Intro Section */}
      <section className="about-hero section">
        <div className="container">
          <span className="section-tag">Our Mission</span>
          <h1 className="about-title">
            Empowering curious minds to master skills, <span className="gradient-text">step by step.</span>
          </h1>
          <p className="about-lead">
            Traditional education is slow and expensive. Online tutorials are fragmented and overwhelming. SkillPath bridges this gap by automatically curating personalized, linear pathways for any technical subject.
          </p>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="about-philosophy section">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-card glass">
              <div className="phil-icon-box violet">
                <Target size={24} />
              </div>
              <h3>Linear Clarity</h3>
              <p>
                We remove the guesswork. Instead of wondering what to learn next, you get a clean sequential checklist from basic fundamentals to production-grade implementation.
              </p>
            </div>

            <div className="philosophy-card glass">
              <div className="phil-icon-box cyan">
                <BookOpen size={24} />
              </div>
              <h3>Curated Resources</h3>
              <p>
                The internet is full of excellent, free tutorials. We don't write new courses; we curate the absolute best articles, documentations, code repositories, and videos already available.
              </p>
            </div>

            <div className="philosophy-card glass">
              <div className="phil-icon-box emerald">
                <Compass size={24} />
              </div>
              <h3>Empirical Verification</h3>
              <p>
                Learning is doing. Every SkillPath includes practical checkpoint assignments and milestone challenges designed to lock in concepts before moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="how-it-works section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How SkillPath Works</h2>
            <p className="section-subtitle">Three steps to customized knowledge development.</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content glass">
                <h3>Define Your Objective</h3>
                <p>Input your target role or desired stack, e.g., "Build a full-stack e-commerce app with Next.js and Prisma". Our AI parses the requirement.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content glass">
                <h3>Synthesize Curriculum</h3>
                <p>The system crawls top tutorials, checks prerequisites, creates milestone challenges, and ranks learning modules logically.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content glass">
                <h3>Track and Advance</h3>
                <p>Log in, mark items as finished, save personal codes, and download curated references while receiving real-time insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid glass">
            <div className="stat-item">
              <span className="stat-number gradient-text">50K+</span>
              <span className="stat-label">Roadmaps Generated</span>
            </div>
            <div className="stat-item">
              <span className="stat-number gradient-text">98%</span>
              <span className="stat-label">Completion Rate Improvement</span>
            </div>
            <div className="stat-item">
              <span className="stat-number gradient-text">120+</span>
              <span className="stat-label">Countries Supported</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="about-cta section">
        <div className="container text-center">
          <h2 className="section-title">Acquire your next skill today</h2>
          <p className="section-subtitle" style={{marginBottom: '2rem'}}>Join thousands of builders using SkillPath to accelerate their tech careers.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Started For Free <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
