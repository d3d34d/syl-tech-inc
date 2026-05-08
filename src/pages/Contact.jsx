import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container glass">
        <div className="contact-header">
          <h1>Get in touch.</h1>
          <p>Have questions? We're here to help you accelerate.</p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="How can we help?"></textarea>
          </div>
          <button type="submit" className="btn-primary full-width">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
