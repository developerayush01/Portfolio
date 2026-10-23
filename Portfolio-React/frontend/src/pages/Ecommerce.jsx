import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../templates.css';

export default function Ecommerce() {
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
          <h1 className="mb-3 fw-bold">E-commerce Templates</h1>
          <p className="lead">Professional online store designs for your business</p>
        </div>
      </header>

      <section className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/ecommerce1.jpg" alt="E-commerce Template 1" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Minimal Shop</h3>
                <p className="template-card-text">Clean, modern design with focus on product presentation</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/ecommerce2.jpg" alt="E-commerce Template 2" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Boutique Style</h3>
                <p className="template-card-text">Elegant design for fashion and luxury products</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/ecommerce3.jpg" alt="E-commerce Template 3" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Tech Store</h3>
                <p className="template-card-text">Modern design for electronics and gadgets</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/ecommerce4.jpg" alt="E-commerce Template 4" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Organic Market</h3>
                <p className="template-card-text">Fresh and natural design for food products</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/ecommerce5.jpg" alt="E-commerce Template 5" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Jewelry Showcase</h3>
                <p className="template-card-text">Luxurious design for jewelry and accessories</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View Demo</a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="template-card">
              <img src="/assets/images/ecommerce6.jpg" alt="E-commerce Template 6" className="template-card-img" />
              <div className="template-card-body">
                <h3 className="template-card-title">Sports Gear</h3>
                <p className="template-card-text">Energetic design for sports equipment</p>
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