import React from 'react';
import './Legal.css';

const LegalPage = ({ title, content }) => {
  return (
    <div className="legal-page animate-fade-in">
      <div className="legal-header">
        <h1 className="legal-title">{title}</h1>
        <p className="legal-subtitle">Last updated: May 2025</p>
      </div>
      <div className="legal-content glass">
        {content.map((section, index) => (
          <div key={index} className="legal-section">
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Privacy = () => (
  <LegalPage 
    title="Privacy Policy" 
    content={[
      { heading: "Information We Collect", body: "We collect information that you provide directly to us, such as when you create an account, join our waitlist, or communicate with us." },
      { heading: "How We Use Your Information", body: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Syl Tech and our users." },
      { heading: "Data Security", body: "We use administrative, technical, and physical security measures to help protect your personal information." }
    ]} 
  />
);

export const Terms = () => (
  <LegalPage 
    title="Terms of Service" 
    content={[
      { heading: "Acceptance of Terms", body: "By accessing or using Syl Tech, you agree to be bound by these Terms of Service." },
      { heading: "Use of Service", body: "You agree to use the service only for purposes that are permitted by the Terms and any applicable law." },
      { heading: "Account Responsibility", body: "You are responsible for maintaining the confidentiality of your account and password." }
    ]} 
  />
);

export const Cookies = () => (
  <LegalPage 
    title="Cookie Policy" 
    content={[
      { heading: "What are Cookies?", body: "Cookies are small text files that are stored on your device when you visit a website." },
      { heading: "How We Use Cookies", body: "We use cookies to understand how you use our site and to improve your experience." },
      { heading: "Managing Cookies", body: "Most web browsers allow you to control cookies through their settings." }
    ]} 
  />
);

export default LegalPage;
