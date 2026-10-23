import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../templates.css';

export default function Canva() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Your<span>Name</span></Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><a className="nav-link" href="/#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/#portfolio">Templates</a></li>
              <li className="nav-item"><a className="nav-link" href="/#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="template-header">
        <div className="container text-center">
          <h1 className="mb-3 fw-bold">Canva Templates</h1>
          <p className="lead">Ready-to-use designs for your business</p>
        </div>
      </header>

      <section className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/canva1.jpg" alt="Canva Template 1" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Social Media Pack</h3>
                <p className="template-card-text">Complete set for consistent branding</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/canva2.jpg" alt="Canva Template 2" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Presentation</h3>
                <p className="template-card-text">Professional slide designs</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/canva3.jpg" alt="Canva Template 3" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Business Cards</h3>
                <p className="template-card-text">Elegant networking materials</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/canva4.jpg" alt="Canva Template 4" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Instagram Stories</h3>
                <p className="template-card-text">Engaging vertical designs</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/canva5.jpg" alt="Canva Template 5" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Brochure</h3>
                <p className="template-card-text">Print-ready marketing materials</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/canva6.jpg" alt="Canva Template 6" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Logo Pack</h3>
                <p className="template-card-text">Versatile branding elements</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">&copy; 2026 YourName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}