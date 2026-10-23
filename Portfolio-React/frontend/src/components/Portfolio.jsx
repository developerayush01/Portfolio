import { Link } from 'react-router-dom';

// Import images directly from src/assets/images/
import ecommerceImg from '../assets/images/Ecommerce.png';
import canvaImg from '../assets/images/Canva.png';
import blogImg from '../assets/images/Blog.png';
import landingImg from '../assets/images/Landing page.png';
import portfolioImg from '../assets/images/hero.png'; // or whichever image you want for portfolio
import socialImg from '../assets/images/Social media.png';

export default function Portfolio() {
  const categories = [
    { title: "E-commerce Templates", desc: "Online stores and shops", img: ecommerceImg, link: "/ecommerce" },
    { title: "Canva Templates", desc: "Ready-to-use business designs", img: canvaImg, link: "/canva" },
    { title: "Blog Templates", desc: "Articles and magazines", img: blogImg, link: "/blog" },
    { title: "Landing Pages", desc: "High conversion pages", img: landingImg, link: "/landing" },
    { title: "Portfolio Templates", desc: "Showcase personal work", img: portfolioImg, link: "/portfolio" },
    { title: "Social Media Templates", desc: "Engaging online content", img: socialImg, link: "/social" }
  ];

  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="fw-bold">My <span style={{ color: '#6c63ff' }}>Templates</span></h2>
            <p className="lead text-muted">Browse my collection of professional template categories</p>
          </div>
        </div>
        <div className="row g-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="col-md-4">
              <div className="portfolio-item card border-0 h-100 shadow-sm">
                <div className="overflow-hidden position-relative">
                  <img src={cat.img} alt={cat.title} className="portfolio-img" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="portfolio-overlay">
                    <div className="text-white text-center p-3">
                      <h5 className="fw-bold">{cat.title}</h5>
                      <p className="small mb-3">{cat.desc}</p>
                      <Link to={cat.link} className="btn btn-light btn-sm">View Category</Link>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-white text-center py-3">
                  <h5 className="card-title fw-semibold mb-1">{cat.title}</h5>
                  <p className="card-text text-muted small">{cat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}