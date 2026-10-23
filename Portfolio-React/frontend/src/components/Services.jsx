export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="fw-bold">My <span style={{ color: '#6c63ff' }}>Services</span></h2>
            <p className="lead text-muted">Here are the services I offer to help grow your business</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card service-card h-100 border-0 shadow-sm animate__animated animate__fadeInUp">
              <div className="card-body p-4 text-center">
                <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-4" style={{ color: '#6c63ff' }}>
                  <i className="fas fa-code fa-2x"></i>
                </div>
                <h4 className="mb-3">Frontend Development</h4>
                <p className="text-muted mb-4">Building responsive, user-friendly websites with HTML, CSS, JavaScript and modern frameworks.</p>
                <a href="#" className="btn btn-sm btn-outline-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card service-card h-100 border-0 shadow-sm animate__animated animate__fadeInUp">
              <div className="card-body p-4 text-center">
                <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-4" style={{ color: '#6c63ff' }}>
                  <i className="fas fa-paint-brush fa-2x"></i>
                </div>
                <h4 className="mb-3">Graphic Design</h4>
                <p className="text-muted mb-4">Creating stunning visuals, logos, and branding materials that make your business stand out.</p>
                <a href="#" className="btn btn-sm btn-outline-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card service-card h-100 border-0 shadow-sm animate__animated animate__fadeInUp">
              <div className="card-body p-4 text-center">
                <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-4" style={{ color: '#6c63ff' }}>
                  <i className="fas fa-chart-line fa-2x"></i>
                </div>
                <h4 className="mb-3">Social Media Management</h4>
                <p className="text-muted mb-4">Growing your online presence with strategic content creation and community engagement.</p>
                <a href="#" className="btn btn-sm btn-outline-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}