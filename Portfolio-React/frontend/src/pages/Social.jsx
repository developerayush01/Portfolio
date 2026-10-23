import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../templates.css';

export default function Social() {
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
          <h1 className="mb-3 fw-bold">Social Media Templates</h1>
          <p className="lead">Engaging designs for your online presence</p>
        </div>
      </header>

      <section className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/social1.jpg" alt="Social Media Template 1" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Instagram Feed</h3>
                <p className="template-card-text">Cohesive grid designs</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/social2.jpg" alt="Social Media Template 2" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Facebook Covers</h3>
                <p className="template-card-text">Professional banner designs</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/social3.jpg" alt="Social Media Template 3" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Twitter Headers</h3>
                <p className="template-card-text">Branded profile designs</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/social4.jpg" alt="Social Media Template 4" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Pinterest Pins</h3>
                <p className="template-card-text">Vertical content designs</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/social5.jpg" alt="Social Media Template 5" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">LinkedIn Posts</h3>
                <p className="template-card-text">Professional content layouts</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/social6.jpg" alt="Social Media Template 6" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Story Templates</h3>
                <p className="template-card-text">Engaging ephemeral content</p>
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