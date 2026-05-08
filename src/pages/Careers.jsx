import React from 'react';
import './Careers.css';

const Careers = () => {
  const roles = [
    { title: 'Marketing Lead', team: 'Growth', location: 'Remote' },
    { title: 'Customer Success Specialist', team: 'Growth', location: 'Remote' },
    { title: 'Design Engineer', team: 'Design', location: 'Remote' },
    { title: 'Product Designer', team: 'Design', location: 'Remote' },
    { title: 'DevOps Engineer', team: 'Engineering', location: 'Remote' },
    { title: 'Backend Developer', team: 'Engineering', location: 'Remote' },
    { title: 'Frontend Developer', team: 'Engineering', location: 'Remote' }
  ];

  return (
    <div className="careers-page">
      <div className="careers-layout">
        <div className="careers-info">
          <h1>Open roles.</h1>
          <p>
            We're always looking for talented people who care about speed, quality, and great user experiences.
          </p>
        </div>
        <div className="roles-list">
          {roles.map((role, index) => (
            <div key={index} className="role-item">
              <div className="role-main">
                <h3>{role.title} / <span className="team-label">{role.team}</span></h3>
                <p className="location">{role.location}</p>
              </div>
              <div className="role-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
