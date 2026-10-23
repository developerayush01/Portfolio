import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../templates.css';

export default function PortfolioPage() {
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
          <h1 className="mb-3 fw-bold">Portfolio Templates</h1>
          <p className="lead">Showcase your work in style</p>
        </div>
      </header>

      <section className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/portfolio1.jpg" alt="Portfolio Template 1" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Creative Portfolio</h3>
                <p className="template-card-text">Modern design for creative professionals</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/portfolio2.jpg" alt="Portfolio Template 2" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Photographer</h3>
                <p className="template-card-text">Gallery-focused design for photographers</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/portfolio3.jpg" alt="Portfolio Template 3" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Designer Showcase</h3>
                <p className="template-card-text">Elegant layout for design portfolios</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/portfolio4.jpg" alt="Portfolio Template 4" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Developer Portfolio</h3>
                <p className="template-card-text">Technical layout for developers</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/portfolio5.jpg" alt="Portfolio Template 5" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Artist Portfolio</h3>
                <p className="template-card-text">Visual-focused design for artists</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/portfolio6.jpg" alt="Portfolio Template 6" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Minimal Portfolio</h3>
                <p className="template-card-text">Clean and simple design</p>
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