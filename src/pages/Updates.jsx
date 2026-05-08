import React from 'react';
import aura1 from '../assets/aura/aura-1.jpg';
import aura2 from '../assets/aura/aura-2.jpg';
import aura3 from '../assets/aura/aura-3.jpg';
import aura4 from '../assets/aura/aura-4.jpg';
import './Updates.css';

const Updates = () => {
  const updates = [
    {
      title: 'Aura — Social Video Reimagined',
      date: 'Aug 12, 2026',
      status: 'Work in Progress',
      demoLink: 'https://aura-960584269942.us-east1.run.app',
      description: 'A social video-sharing platform with an AI-powered content engine and a built-in blockchain-ready royalty system for creators.',
      images: [aura3, aura4, aura1, aura2],
      tags: ['AI', 'Web3', 'Social']
    }
  ];


  return (
    <div className="updates-page">
      <div className="updates-header">
        <h1 data-no-scramble>Product Updates</h1>
        <p>The latest from the Syl Tech ecosystem.</p>
      </div>
      
      <div className="updates-timeline">
        {updates.map((update, index) => (
          <div key={index} className={`update-item ${update.demoLink ? 'featured-update' : ''}`}>
            <div className="update-sidebar">
              <span className="update-date">{update.date}</span>
              {update.status && <span className="update-status">{update.status}</span>}
            </div>
            
            <div className="update-main">
              <h2 className="update-title">{update.title}</h2>
              <p className="update-description">{update.description}</p>
              
              {update.tags && (
                <div className="update-tags">
                  {update.tags.map(tag => <span key={tag} className="update-tag">{tag}</span>)}
                </div>
              )}

              {update.images && update.images.length > 0 && (
                <div className="update-gallery">
                  {update.images.map((img, i) => (
                    <div key={i} className="gallery-item dithered">
                      <img src={img} alt={`Update visual ${i}`} />
                    </div>
                  ))}
                </div>
              )}

              {update.demoLink && (
                <a href={update.demoLink} target="_blank" rel="noopener noreferrer" className="demo-button">
                  View Live Demo
                  <span className="button-arrow">→</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
