export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h6 className="text-theme-primary fw-bold text-uppercase tracking-wider">What I Do</h6>
            <h2 className="fw-bold">My <span className="text-theme-primary">Services</span></h2>
            <p className="lead text-muted">Specialized engineering services to bring your web applications to life</p>
          </div>
        </div>

        <div className="row g-4">
          
          {/* Service 1: Frontend Development */}
          <div className="col-md-4">
            <div className="card service-card h-100 border-0 shadow-sm rounded-4 p-2">
              <div className="card-body p-4 text-center">
                <div className="icon-box bg-primary bg-opacity-10 text-theme-primary rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                  <i className="fas fa-laptop-code fa-2x"></i>
                </div>
                <h4 className="mb-3 h5 fw-bold">Frontend Development</h4>
                <p className="text-muted mb-4 small">
                  Building responsive, high-performance user interfaces and single-page apps using React, Vite, and modern CSS frameworks.
                </p>
                <a href="#contact" className="btn btn-sm btn-outline-primary px-3 rounded-pill">Get Started</a>
              </div>
            </div>
          </div>

          {/* Service 2: Backend & Database (PERN Stack) */}
          <div className="col-md-4">
            <div className="card service-card h-100 border-0 shadow-sm rounded-4 p-2">
              <div className="card-body p-4 text-center">
                <div className="icon-box bg-primary bg-opacity-10 text-theme-primary rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                  <i className="fas fa-server fa-2x"></i>
                </div>
                <h4 className="mb-3 h5 fw-bold">Backend & Database</h4>
                <p className="text-muted mb-4 small">
                  Developing robust server-side logic, RESTful APIs, and relational databases using Node.js, Express, and PostgreSQL.
                </p>
                <a href="#contact" className="btn btn-sm btn-outline-primary px-3 rounded-pill">Get Started</a>
              </div>
            </div>
          </div>

          {/* Service 3: Full-Stack Integration & QA Testing */}
          <div className="col-md-4">
            <div className="card service-card h-100 border-0 shadow-sm rounded-4 p-2">
              <div className="card-body p-4 text-center">
                <div className="icon-box bg-primary bg-opacity-10 text-theme-primary rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                  <i className="fas fa-shield-alt fa-2x"></i>
                </div>
                <h4 className="mb-3 h5 fw-bold">App Testing & QA</h4>
                <p className="text-muted mb-4 small">
                  Ensuring software reliability through thorough browser testing, bug reporting, layout checks, and functional debugging.
                </p>
                <a href="#contact" className="btn btn-sm btn-outline-primary px-3 rounded-pill">Get Started</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}