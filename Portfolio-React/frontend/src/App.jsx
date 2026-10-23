import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import GraphicDesign from './pages/GraphicDesign';

// Page Imports
import Ecommerce from './pages/Ecommerce';
import Canva from './pages/Canva';
import Blog from './pages/Blog';
import Landing from './pages/Landing';
import PortfolioPage from './pages/PortfolioPage';
import Social from './pages/Social';

function Home() {
  return (
    <div data-bs-spy="scroll" data-bs-target=".navbar">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />

      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0">&copy; 2026 YourName. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="social-icons">
                <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-white me-3"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-white"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
      <Route path="/canva" element={<Canva />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/social" element={<Social />} />
      <Route path="/graphic-design" element={<GraphicDesign />} />
    </Routes>
  );
}