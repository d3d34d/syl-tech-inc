import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';
import './Waitlist.css';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would typically send the data to an API
    }
  };

  return (
    <div className="waitlist-page">
      <div className="waitlist-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge">Early Access</div>
          <h1>Experience Aura First</h1>
          <p className="subtitle">
            Join the exclusive waitlist for our next-generation social video platform. Be the first to build with our AI-powered content engine.
          </p>


          {!submitted ? (
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <AnimatedButton 
                text="Join Waitlist" 
                variant="primary" 
                type="submit"
              />
            </form>
          ) : (
            <motion.div 
              className="success-message"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h3>You're on the list!</h3>
              <p>We'll notify you as soon as a spot opens up.</p>
            </motion.div>
          )}

          <div className="waitlist-benefits">
            <div className="benefit-item">
              <span className="check">✓</span>
              <span>Early access to AI creation tools</span>
            </div>
            <div className="benefit-item">
              <span className="check">✓</span>
              <span>Reserved Founder @handle</span>
            </div>
            <div className="benefit-item">
              <span className="check">✓</span>
              <span>Tier-1 Creator Royalty status</span>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Waitlist;
