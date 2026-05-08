import React from 'react';
import TeamShowcase from '@/components/ui/team-showcase';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-hero">
          <span className="badge">THE SYL TECH ETHOS</span>
          <h1>For the creators.<br/>For the planet.</h1>
          <p>We are building technology that honors human originality while protecting the world we live in. Innovation should never come at the expense of our future.</p>
        </div>

        <div className="about-body">
          <div className="about-block">
            <h2>Defending Creativity</h2>
            <p>In an era where the tech industry is racing to automate and replicate the human experience, we stand for something fundamentally different. Syl Tech was founded on the uncompromising belief that human creativity is our most valuable resource.</p>
            <p>We are witnessing a digital landscape that frequently prioritizes extraction over attribution, feeding original thought into black-box systems without permission. We refuse to participate in that cycle. Instead, our company is dedicated to engineering infrastructure that protects, amplifies, and fairly rewards the people who actually do the creative work.</p>
          </div>

          <div className="about-block">
            <h2>A Sustainable Future</h2>
            <p>True technological progress cannot be measured solely by processing power or scale; it must be weighed against its environmental impact. The digital sector holds a massive, growing carbon footprint, and we believe it is our profound responsibility to build differently.</p>
            <p>Syl Tech is deeply committed to minimizing our ecological impact. From optimizing our digital architecture to making mindful, green-first engineering decisions, we prioritize the health of our planet. We believe that building the future of the internet requires ensuring there is a future to build for.</p>
          </div>

          <div className="about-block">
            <h2>Our Mission</h2>
            <p>We are not just writing code; we are cultivating a new kind of digital ecosystem. A space where ethical engineering meets relentless human creativity.</p>
            <p>Syl Tech exists to empower the creators of today without compromising the environment for the generations of tomorrow. We are here to prove that a technology company can be highly innovative, fiercely protective of artistic integrity, and unconditionally committed to global sustainability.</p>
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
