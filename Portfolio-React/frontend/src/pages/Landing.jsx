import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../templates.css';

export default function Landing() {
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
          <h1 className="mb-3 fw-bold">Landing Page Templates</h1>
          <p className="lead">High-converting designs for your products</p>
        </div>
      </header>

      <section className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/landing1.jpg" alt="Landing Page 1" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">SaaS Product</h3>
                <p className="template-card-text">Modern design for software products</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/landing2.jpg" alt="Landing Page 2" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">App Launch</h3>
                <p className="template-card-text">Mobile-focused landing page</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/landing3.jpg" alt="Landing Page 3" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">E-book</h3>
                <p className="template-card-text">Conversion-focused for digital products</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/landing4.jpg" alt="Landing Page 4" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Webinar</h3>
                <p className="template-card-text">Registration-focused design</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/landing5.jpg" alt="Landing Page 5" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Agency</h3>
                <p className="template-card-text">Professional service showcase</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/landing6.jpg" alt="Landing Page 6" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Minimal</h3>
                <p className="template-card-text">Clean, distraction-free design</p>
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