import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HeroBackground } from '../components/HeroBackground';
import AnimatedButton from '../components/AnimatedButton';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  
  // Hero content fades out as we scroll down (though there's not much to scroll now)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="hero">
        <HeroBackground />
        <div className="hero-content">
          <h1 className="hero-title" data-no-scramble>
            Engineered for <br />
            <span className="hero-accent">Future World</span>
          </h1>


          <p className="hero-subtitle">
            Winnipeg-born tech powerhouse. Bridging the gap between human creativity and artificial intelligence.
          </p>



          <motion.div className="hero-actions" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.7 }}>
            <AnimatedButton text="Join Aura Waitlist" hoverText="Be the first" variant="primary" onClick={() => navigate('/waitlist')} />
            <AnimatedButton text="Our Network" hoverText="Explore Syl Tech" variant="secondary" showPulse={false} />
          </motion.div>

        </div>
      </section>


    </div>
  );
};

export default Home;
