import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Apply.css';

const Apply = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    portfolio: '',
    resume: '',
    message: ''
  });

  // Get role from query params if available
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleParam = params.get('role');
    if (roleParam) {
      setFormData(prev => ({ ...prev, role: roleParam }));
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Application submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      navigate('/careers');
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="apply-page success">
        <div className="success-content">
          <div className="success-icon">✓</div>
          <h1>Application Sent.</h1>
          <p>Thank you for your interest in Syl Tech. We've received your application for the <strong>{formData.role}</strong> role and will be in touch soon.</p>
          <p className="redirect-hint">Redirecting you back to careers in 5 seconds...</p>
          <button className="btn-secondary" onClick={() => navigate('/careers')}>Return Now</button>
        </div>
      </div>
    );
  }

  return (
    <div className="apply-page">
      <div className="apply-container">
        <div className="apply-header">
          <button className="back-link" onClick={() => navigate('/careers')}>← Back to Careers</button>
          <h1>Join the mission.</h1>
          <p>Help us build the next generation of social connectivity and edge computing.</p>
        </div>

        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group full-width">
              <label>Role</label>
              <select 
                name="role" 
                required
                value={formData.role}
                onChange={handleChange}
              >
                <option value="" disabled>Select a role</option>
                <option value="Marketing Lead">Marketing Lead</option>
                <option value="Customer Success Specialist">Customer Success Specialist</option>
                <option value="Design Engineer">Design Engineer</option>
                <option value="Product Designer">Product Designer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Other">Other / General Interest</option>
              </select>
            </div>
            <div className="form-group">
              <label>Portfolio / Website</label>
              <input 
                type="url" 
                name="portfolio" 
                placeholder="https://portfolio.com"
                value={formData.portfolio}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Resume Link (Google Drive/Dropbox)</label>
              <input 
                type="url" 
                name="resume" 
                required
                placeholder="https://link-to-resume.com"
                value={formData.resume}
                onChange={handleChange}
              />
            </div>
            <div className="form-group full-width">
              <label>Why Syl Tech?</label>
              <textarea 
                name="message" 
                required 
                rows="5"
                placeholder="Tell us what excites you about the future of social video and AI..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="form-footer">
            <p className="form-note">By submitting, you agree to our Privacy Policy and Terms of Service.</p>
            <button type="submit" className="submit-btn">Submit Application →</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
