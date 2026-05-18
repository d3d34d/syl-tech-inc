import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Careers.css';

const Careers = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(null);


  const roles = [
    { 
      title: 'Marketing Lead', 
      team: 'Growth', 
      location: 'Hybrid - Winnipeg, MB Canada',
      content: {
        about: "We are seeking an experienced, technically sharp Marketing Lead based in Winnipeg to spearhead Syl Tech's growth in the creator economy. Working closely with our founding team in a hybrid capacity, you will own performance, experimentation, and scaling of our multi-channel marketing portfolio.",
        why: "You'll be part of a collaborative, local team that values creativity and ethical innovation. We provide access to significant growth tools and a hybrid culture that prioritizes original work over mass automation.",
        responsibilities: [
          "Own day-to-day operations of our growth program from our Winnipeg office, managing campaigns against efficiency targets.",
          "Design and execute high-velocity testing pipelines across bidding strategies, campaign structures, and creative assets.",
          "Partner closely with local engineering to maintain and improve attribution pipelines and signal quality.",
          "Communicate performance and strategic trade-offs clearly to the founding team in person."
        ],
        qualifications: [
          "A successful track record managing marketing campaigns at scale with demonstrated ROI.",
          "Direct experience with performance marketing platforms and data-driven decision making.",
          "Ability to design structured experiments with clear hypotheses and measurement plans.",
          "Deep alignment with our mission to protect original human creativity."
        ]
      }
    },
    { 
      title: 'Design Engineer', 
      team: 'Design', 
      location: 'On-site - Winnipeg, MB Canada',
      content: {
        about: "We're looking for a Design Engineer who lives at the intersection of aesthetic perfection and technical excellence. Working on-site in our Winnipeg headquarters, you will collaborate daily with our founders to implement ultra-high-fidelity interfaces that feel alive.",
        why: "At Syl Tech, design is not a layer; it is our foundation. Being on-site allows for rapid prototyping, whiteboarding, and seamless communication to push the boundaries of modern CSS and React performance.",
        responsibilities: [
          "Develop and maintain our core design system, ensuring pixel-perfect implementation alongside the design team.",
          "Craft sophisticated micro-interactions and animations that enhance user engagement without sacrificing speed.",
          "Bridge the gap between design and engineering, translating high-fidelity prototypes into production-ready code in real-time.",
          "Optimize frontend performance to ensure lightning-fast experiences for our global users."
        ],
        qualifications: [
          "Mastery of React, modern CSS (including Tailwind v4), and animation libraries like Framer Motion.",
          "A strong portfolio showcasing high-fidelity web experiences and interactive designs.",
          "Experience building and scaling design systems for complex applications.",
          "An obsessive attention to detail and a passion for creating premium user experiences."
        ]
      }
    },
    { 
      title: 'Backend Developer', 
      team: 'Engineering', 
      location: 'Remote - Americas',
      content: {
        about: "We are seeking a fully remote Backend Developer within the Americas timezones to build the scalable services and ethical data pipelines that form the backbone of Syl Tech. You will design robust APIs and distributed systems synchronously with our core team.",
        why: "Enjoy the flexibility of remote work while solving complex architectural problems in an environment that values clean code and sustainable engineering. Your work will directly impact how creators protect their intellectual property.",
        responsibilities: [
          "Design and implement high-performance APIs and microservices using Go and Node.js.",
          "Architect distributed data pipelines that are both efficient and resilient across cloud regions.",
          "Implement secure protocols for content attribution and creator rights management.",
          "Optimize database performance and ensure data integrity across our infrastructure."
        ],
        qualifications: [
          "Significant experience building and scaling backend systems in a production environment.",
          "Proficiency in Go, Node.js, and SQL/NoSQL database design.",
          "Knowledge of distributed systems, caching strategies, and API security best practices.",
          "A commitment to building technology that respects user privacy and data ownership."
        ]
      }
    },
    { 
      title: 'AI Engineer', 
      team: 'Engineering', 
      location: 'Remote - Canada',
      content: {
        about: "We are looking for an exceptional AI Engineer from anywhere in the world to architect the next generation of ethical content tools. You will own the development of our proprietary attribution engine, hunting for the best technical solutions regardless of borders.",
        why: "Join our globally distributed AI research team where talent knows no borders. You will have the opportunity to solve the industry's most pressing ethical challenges while working with state-of-the-art models on a flexible schedule.",
        responsibilities: [
          "Develop and optimize models for content attribution, origin tracking, and intellectual property protection.",
          "Collaborate asynchronously with global backend and design teams to integrate AI services into seamless workflows.",
          "Monitor model performance and implement rigorous fairness and safety benchmarks.",
          "Stay at the forefront of AI research to identify new opportunities for ethical innovation."
        ],
        qualifications: [
          "Background in Computer Science, specifically in areas related to content analysis and computer vision.",
          "Experience with modern deep learning frameworks (PyTorch, TensorFlow) and large-scale model deployment.",
          "Proven ability to translate complex ethical requirements into technical solutions.",
          "A deep-seated belief that technology must serve human creativity and the health of our planet."
        ]
      }
    }

  ];

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

