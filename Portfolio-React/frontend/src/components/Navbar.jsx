import { useState, useEffect } from 'react';
import '../style.css'; // Ensure style.css is properly imported here

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand fw-bold fs-4" href="#home" onClick={handleClose}>
            Ayush<span className="text-primary">.dev</span>
          </a>

          {/* Custom Hamburger / Close Button */}
          <button 
            className="navbar-toggler border-0 shadow-none d-lg-none bg-transparent" 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-white fs-4`}></i>
          </button>

          {/* Desktop Navigation */}
          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item px-2"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item px-2"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item px-2"><a className="nav-link" href="#services">Skills</a></li>
              <li className="nav-item px-2"><a className="nav-link" href="#portfolio">Projects</a></li>
              <li className="nav-item px-2 ms-2">
                <a className="btn btn-primary px-4 py-2" href="#contact" style={{ backgroundColor: '#6c63ff', border: 'none' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Click-Outside Backdrop */}
      {isOpen && (
        <div 
          className="drawer-backdrop d-lg-none" 
          onClick={handleClose}
        />
      )}

      {/* Slide-In Drawer Panel from the LEFT */}
      <div className={`mobile-slide-drawer-left d-lg-none ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header d-flex justify-content-between align-items-center px-4 py-3 border-bottom border-secondary border-opacity-25">
          <span className="fw-bold fs-5 text-white">Menu</span>
          <button 
            className="btn text-white fs-4 p-0 border-0 bg-transparent shadow-none" 
            onClick={handleClose}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="drawer-body px-4 py-3">
          <a className="drawer-link" href="#home" onClick={handleClose}>Home</a>
          <a className="drawer-link" href="#about" onClick={handleClose}>About</a>
          <a className="drawer-link" href="#services" onClick={handleClose}>Skills</a>
          <a className="drawer-link" href="#portfolio" onClick={handleClose}>Projects</a>
          <div className="mt-4">
            <a className="btn btn-primary py-3 w-100 shadow-sm" href="#contact" onClick={handleClose} style={{ backgroundColor: '#6c63ff', border: 'none' }}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}