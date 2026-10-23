import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTemplates({ title, subtitle, templates }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Ayush<span>Bhattarai</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
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

      {/* Template Header */}
      <header className="template-header py-5 mt-5 bg-dark text-white text-center">
        <div className="container py-4">
          <h1 className="mb-3 fw-bold">{title}</h1>
          <p className="lead text-white-50">{subtitle}</p>
        </div>
      </header>

      {/* Templates Grid */}
      <section className="container py-5">
        <div className="row g-4">
          {templates.map((template, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                <img 
                  src={template.img} 
                  alt={template.title} 
                  className="card-img-top object-fit-cover" 
                  style={{ height: '220px' }} 
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                <div className="card-body d-flex flex-column text-center p-4">
                  <h3 className="h5 fw-bold mb-2">{template.title}</h3>
                  <p className="text-muted small mb-4">{template.desc}</p>
                  <a 
                    href={template.demoLink || "#"} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-primary mt-auto py-2" 
                    style={{ backgroundColor: '#6c63ff', border: 'none' }}
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-4 text-center">
        <div className="container">
          <p className="mb-0">&copy; 2026 Ayush Bhattarai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}