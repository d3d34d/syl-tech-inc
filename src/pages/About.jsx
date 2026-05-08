import React from 'react';
import TeamShowcase from '@/components/ui/team-showcase';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-hero">
          <span className="badge">ABOUT SYL TECH</span>
          <h1>High-Performance Future.</h1>
          <p>Built for the modern web. Engineered for speed. Designed for humans.</p>
        </div>

        <div className="about-body">
          <div className="about-block">
            <h2>Our Mission</h2>
            <p>Syl Tech is dedicated to bridging the gap between human creativity and artificial intelligence. We believe that the future of tech isn't just about faster networks, but about more meaningful connections.</p>
            <p>Our infrastructure is designed from the ground up to be intelligent, dynamic, and incredibly fast.</p>
          </div>

          <div className="about-block">
            <h2>Why Aura?</h2>
            <p>Traditional social platforms are built for a static world of passive consumption. Aura is built for the real-time era of creator ownership. We're providing the tools for the next generation of digital entrepreneurs.</p>
          </div>
        </div>
      </div>

      <TeamShowcase />

      <div className="about-container">
        <div className="about-cta">
          <h3>Want to join the mission?</h3>
          <p>We're always looking for talent. <a href="/careers">See open roles →</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
