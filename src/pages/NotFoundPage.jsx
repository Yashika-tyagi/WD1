import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, HelpCircle, ArrowLeft } from 'lucide-react';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="notfound-page animate-fade-in">
      <div className="notfound-glow"></div>
      <div className="notfound-container glass">
        <div className="notfound-icon-box">
          <Compass size={64} className="broken-compass" />
          <HelpCircle size={28} className="question-badge" />
        </div>
        
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Path Disconnected</h2>
        <p className="notfound-description">
          The skill coordinate or route you requested does not exist in our curriculum index. Let's redirect you to a validated learning roadmap.
        </p>
        
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={16} /> Return to Homepage
        </Link>
      </div>
    </div>
  );
}
