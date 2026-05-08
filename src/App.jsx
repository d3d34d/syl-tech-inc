import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Updates from './pages/Updates';
import About from './pages/About';

import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Waitlist from './pages/Waitlist';
import { Privacy, Terms, Cookies } from './pages/Legal';

import { SylLogo, SylWatermark } from './components/SylLogo';
import { useGlobalScramble } from './hooks/useGlobalScramble';
import './index.css';

const Footer = () => (
  <footer className="footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '60px 5%' }}>
    <div className="footer-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
      <div className="footer-brand">
        <Link to="/" className="logo" style={{ marginBottom: 0 }}>
          <SylLogo size={28} />
          <span className="logo-text">Syl Tech</span>
        </Link>
      </div>

      <div className="footer-nav" style={{ display: 'flex', gap: '32px' }}>
        <Link to="/about" className="nav-link-simple">About</Link>
        <Link to="/careers" className="nav-link-simple">Careers</Link>
        <Link to="/blog" className="nav-link-simple">Blog</Link>
        <Link to="/updates" className="nav-link-simple">Updates</Link>
        <Link to="/contact" className="nav-link-simple">Contact</Link>
      </div>

      <div className="footer-meta" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/d3d34d/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>© 2025 Syl Tech</p>
      </div>
    </div>
  </footer>
);

function AppContent() {
  useGlobalScramble();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <SylWatermark />
      <ScrollToTop />
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/updates" element={<Updates />} />

          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </div>
      {!isHomePage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
