import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, MapPin, Phone } from 'lucide-react';
import Footer from '../components/Footer';
import './Pages.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form refresh behavior
    
    if (validateForm()) {
      // Simulate API submit
      console.log('Form data submitted successfully:', formData);
      setIsSubmitted(true);
      
      // Clear form inputs
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <div className="page-wrapper contact-page animate-fade-in">
      <section className="contact-hero section">
        <div className="container text-center">
          <span className="section-tag">Get in Touch</span>
          <h1 className="contact-title">Let's connect</h1>
          <p className="contact-lead">
            Have questions about customized roadmaps, enterprise tools, or looking to collaborate? Drop us a line.
          </p>
        </div>
      </section>

      <section className="contact-body section">
        <div className="container">
          <div className="contact-grid">
            {/* Info Side */}
            <div className="contact-info-panel glass">
              <h2 className="info-title">Contact Information</h2>
              <p className="info-subtitle">Fill out the form and our team will get back to you within 24 hours.</p>

              <div className="info-details">
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <Mail size={18} />
                  </div>
                  <div className="info-item-text">
                    <h4>Support Email</h4>
                    <p>hello@skillpath.dev</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <Phone size={18} />
                  </div>
                  <div className="info-item-text">
                    <h4>Contact Number</h4>
                    <p>+1 (555) 234-5678</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <MapPin size={18} />
                  </div>
                  <div className="info-item-text">
                    <h4>Headquarters</h4>
                    <p>San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>

              <div className="info-footer">
                <MessageSquare className="chat-bubble-icon" size={24} />
                <span>Active chat support is available 9 AM - 6 PM PST.</span>
              </div>
            </div>

            {/* Form Side */}
            <div className="contact-form-panel glass">
              {isSubmitted ? (
                <div className="submission-success-banner animate-fade-in">
                  <div className="success-icon-wrapper">
                    <CheckCircle2 size={48} className="success-icon" />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for reaching out. A SkillPath support representative will review your request and contact you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="btn btn-secondary btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className={errors.name ? 'input-error' : ''}
                      />
                      {errors.name && (
                        <span className="error-message">
                          <AlertCircle size={12} /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className={errors.email ? 'input-error' : ''}
                      />
                      {errors.email && (
                        <span className="error-message">
                          <AlertCircle size={12} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Feedback on AI roadmaps" 
                      className={errors.subject ? 'input-error' : ''}
                    />
                    {errors.subject && (
                      <span className="error-message">
                        <AlertCircle size={12} /> {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message"
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..." 
                      rows={5}
                      className={errors.message ? 'input-error' : ''}
                    ></textarea>
                    {errors.message && (
                      <span className="error-message">
                        <AlertCircle size={12} /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
