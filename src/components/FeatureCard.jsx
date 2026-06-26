import React from 'react';
import './FeatureCard.css';

export default function FeatureCard({ icon: Icon, title, description, badge, colorClass = 'violet' }) {
  return (
    <div className={`feature-card glass ${colorClass}`}>
      {badge && <span className="feature-badge">{badge}</span>}
      <div className="feature-icon-box">
        <Icon size={24} className="feature-icon" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}
