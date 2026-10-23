import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../templates.css';

export default function Blog() {
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
          <h1 className="mb-3 fw-bold">Blog Templates</h1>
          <p className="lead">Beautiful designs to showcase your content</p>
        </div>
      </header>

      <section className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/blog1.jpg" alt="Blog Template 1" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Minimal Blogger</h3>
                <p className="template-card-text">Clean, content-focused design for writers</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/blog2.jpg" alt="Blog Template 2" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Magazine Style</h3>
                <p className="template-card-text">Professional layout for content-rich blogs</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/blog3.jpg" alt="Blog Template 3" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Personal Journal</h3>
                <p className="template-card-text">Intimate design for personal storytelling</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/blog4.jpg" alt="Blog Template 4" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Travel Blog</h3>
                <p className="template-card-text">Visual-focused design for travel stories</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/blog5.jpg" alt="Blog Template 5" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Food Blogger</h3>
                <p className="template-card-text">Appetizing design for recipe sharing</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/blog6.jpg" alt="Blog Template 6" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Tech Blog</h3>
                <p className="template-card-text">Modern design for tech enthusiasts</p>
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