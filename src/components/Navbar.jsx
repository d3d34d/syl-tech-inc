import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SylLogo } from './SylLogo';
import AnimatedButton from './AnimatedButton';
import { BookOpen, Bell, Info, Briefcase, Mail, Menu as MenuIcon } from 'lucide-react';
import { MenuContainer, MenuItem } from './ExpandableMenu';
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
          <div className="desktop-only">
            <AnimatedButton
              text="Join waitlist"
              variant="primary"
              onClick={() => navigate('/waitlist')}
            />
          </div>
          <div className="mobile-toggle">
            <MenuContainer>
              <MenuItem icon={<MenuIcon size={24} />} />
              <MenuItem icon={<BookOpen size={20} />} onClick={() => { setIsMobileMenuOpen(false); navigate('/blog'); }} />
              <MenuItem icon={<Bell size={20} />} onClick={() => { setIsMobileMenuOpen(false); navigate('/updates'); }} />
              <MenuItem icon={<Info size={20} />} onClick={() => { setIsMobileMenuOpen(false); navigate('/about'); }} />
              <MenuItem icon={<Briefcase size={20} />} onClick={() => { setIsMobileMenuOpen(false); navigate('/careers'); }} />
              <MenuItem icon={<Mail size={20} />} onClick={() => { setIsMobileMenuOpen(false); navigate('/contact'); }} />
            </MenuContainer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
