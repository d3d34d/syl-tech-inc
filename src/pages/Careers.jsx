import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { roles } from '../data/roles';
import './Careers.css';

const Careers = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleRole = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="careers-page">
      <div className="careers-layout">
        <div className="careers-info">
          <span className="badge">CAREERS</span>
          <h1>Work that matters.</h1>
          <p>
            We're building a future where creativity is protected and the planet is prioritized. Join us in engineering the next era of human originality.
          </p>
        </div>
        <div className="roles-list">
          {roles.map((role, index) => {
            const isExpanded = expandedIndex === index;
            const { content } = role;
            return (
              <div 
                key={index} 
                className={`role-item ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleRole(index)}
              >
                <div className="role-header">
                  <div className="role-main">
                    <h3>{role.title} / <span className="team-label">{role.team}</span></h3>
                    <p className="location">{role.location}</p>
                  </div>
                  <div className="role-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M19 9L12 16L5 9" 
                        stroke="var(--text-secondary)" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                
                <div className="role-content">
                  <div className="role-detail-grid">
                    <div className="detail-section">
                      <h4>About the role</h4>
                      <p>{content.about}</p>
                    </div>
                    <div className="detail-section">
                      <h4>Why Join Us</h4>
                      <p>{content.why}</p>
                    </div>
                    <div className="detail-section">
                      <h4>Key Responsibilities</h4>
                      <ul>
                        {content.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Qualifications</h4>
                      <ul>
                        {content.qualifications.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="role-footer">
                    <button 
                      className="apply-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/apply?role=${encodeURIComponent(role.title)}`);
                      }}
                    >
                      Apply Now →
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default Careers;

