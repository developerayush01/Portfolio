import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../templates.css';

export default function GraphicDesign() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const designCategories = [
    { title: "Canva Business Packs", desc: "Ready-to-use business presentations, cards, and brand kits", img: "/assets/images/Canva.png", link: "/canva" },
    { title: "Social Media Feeds", desc: "Cohesive grid designs, Instagram stories, and ad creatives", img: "/assets/images/Social media.png", link: "/social" },
    { title: "Landing Page Visuals", desc: "High-converting layout designs and promotional banners", img: "/assets/images/Landing page.png", link: "/landing" }
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Ayush<span>Bhattarai</span></Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/projects">Web Apps</Link></li>
              <li className="nav-item"><a className="nav-link" href="/#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="template-header" style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #6c63ff 100%)' }}>
        <div className="container text-center">
          <h1 className="mb-3 fw-bold">Graphic Design & Social Media</h1>
          <p className="lead">Creative visual content, branding packages, and digital marketing assets</p>
        </div>
      </header>

      {/* Design Categories Grid */}
      <section className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold">Creative <span style={{ color: '#6c63ff' }}>Portfolios</span></h2>
            <p className="text-muted">Explore my design specializations and template collections</p>
          </div>
        </div>

        <div className="row g-4">
          {designCategories.map((cat, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4">
              <div className="template-card h-100 shadow-sm border-0">
                <img src={cat.img} alt={cat.title} className="template-card-img" style={{ height: '240px', objectFit: 'cover' }} />
                <div className="template-card-body d-flex flex-column text-center p-4">
                  <h3 className="template-card-title">{cat.title}</h3>
                  <p className="template-card-text">{cat.desc}</p>
                  <Link to={cat.link} className="btn btn-primary mt-auto py-2" style={{ backgroundColor: '#6c63ff', border: 'none' }}>
                    View Gallery
                  </Link>
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