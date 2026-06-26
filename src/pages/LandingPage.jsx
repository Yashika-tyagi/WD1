import React from 'react';
import { BrainCircuit, Milestone, Layers, Users, TrendingUp, Sparkles } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import TestimonialSection from '../components/TestimonialSection';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';
import './Pages.css';

const FEATURES = [
  {
    id: 1,
    icon: BrainCircuit,
    title: 'AI Path Generator',
    description: 'Describe your dream job, and our model builds a structured curriculum curated from leading web resources.',
    badge: 'Popular',
    colorClass: 'violet',
  },
  {
    id: 2,
    icon: Milestone,
    title: 'Milestone Tracking',
    description: 'Tick off sub-modules, store study notes, and visualize your progress percentage in real time.',
    badge: 'New',
    colorClass: 'cyan',
  },
  {
    id: 3,
    icon: Layers,
    title: 'Multi-resource Curation',
    description: 'We fetch and aggregate tutorials, technical blogs, interactive labs, and Youtube series automatically.',
    badge: null,
    colorClass: 'emerald',
  },
  {
    id: 4,
    icon: Users,
    title: 'Community Pathways',
    description: 'Browse, clone, and rate study roadmaps created by experts and peers working in your field.',
    badge: null,
    colorClass: 'cyan',
  },
  {
    id: 5,
    icon: TrendingUp,
    title: 'Dynamic Adapting',
    description: 'If a step is too hard, ask the AI to break it down further into simpler sub-tasks on the fly.',
    badge: 'AI Powered',
    colorClass: 'violet',
  },
  {
    id: 6,
    icon: Sparkles,
    title: 'Career Alignment',
    description: 'Map pathway check-points to actual job descriptions and skill checklists requested by employers.',
    badge: null,
    colorClass: 'emerald',
  }
];

export default function LandingPage() {
  return (
    <div className="page-wrapper landing-page animate-fade-in">
      <HeroSection />

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Capabilities</span>
            <h2 className="section-title">Everything you need to learn <span className="gradient-text">efficiently</span></h2>
            <p className="section-subtitle">
              Traditional courses are static. SkillPath roadmaps are personalized, interactive, and constantly evolving.
            </p>
          </div>

          <div className="features-grid">
            {FEATURES.map((f) => (
              <FeatureCard 
                key={f.id}
                icon={f.icon}
                title={f.title}
                description={f.description}
                badge={f.badge}
                colorClass={f.colorClass}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />
      
      <CTABanner />

      <Footer />
    </div>
  );
}
