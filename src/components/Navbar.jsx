import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SylLogo } from './SylLogo';
import AnimatedButton from './AnimatedButton';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Updates', path: '/updates' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers', badge: '4' },

  ];


  return (
    <nav className={`navbar-jet ${!isVisible ? 'hidden' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <SylLogo size={28} />
          <span className="logo-text desktop-only">Syl Tech</span>
        </Link>

        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
              {link.badge && <span className="nav-badge">{link.badge}</span>}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="/contact" className="nav-link-simple desktop-only">Contact</Link>
          <AnimatedButton
            text="Join waitlist"
            variant="primary"
            onClick={() => navigate('/waitlist')}
          />
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'show' : ''}`}>
        <button className="mobile-close-btn" onClick={() => setIsMobileMenuOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              {link.badge && <span className="nav-badge">{link.badge}</span>}
            </Link>
          ))}
          <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <div className="mobile-cta">
             <AnimatedButton
              text="Join waitlist"
              variant="primary"
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/waitlist');
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
