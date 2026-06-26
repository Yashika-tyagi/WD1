import React from 'react';
import { Star, Quote } from 'lucide-react';
import './TestimonialSection.css';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Frontend Engineer @ Vercel',
    comment: 'SkillPath completely changed how I approach learning. I generated a React-to-Next.js path, followed the recommended checkpoints, and landed my dream role within 3 months!',
    rating: 5,
    avatarText: 'SJ',
    avatarGradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Self-Taught Data Analyst',
    comment: 'The quality of the resources SkillPath structures is mind-blowing. Instead of getting stuck in tutorial hell, I had an actionable checklist and projects to build.',
    rating: 5,
    avatarText: 'DC',
    avatarGradient: 'linear-gradient(135deg, #a855f7, #6366f1)',
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Computer Science Student',
    comment: 'As a student, I struggled to understand what industry skills actually matter. SkillPath gave me the exact skills, libraries, and best practices standard tech companies look for.',
    rating: 5,
    avatarText: 'ER',
    avatarGradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  }
];

export default function TestimonialSection() {
  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Success Stories</span>
          <h2 className="section-title">Loved by <span className="gradient-text">10,000+ Learners</span></h2>
          <p className="section-subtitle">
            See how ambitious individuals used personalized pathways to transition careers, acquire skills, and build side projects.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial-card glass">
              <Quote className="quote-icon" size={32} />
              
              <div className="stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="star-icon" />
                ))}
              </div>
              
              <p className="testimonial-comment">"{t.comment}"</p>
              
              <div className="testimonial-author">
                <div 
                  className="author-avatar"
                  style={{ background: t.avatarGradient }}
                >
                  {t.avatarText}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{t.name}</h4>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
