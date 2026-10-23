export default function About() {
  return (
    <section id="about" className="py-5 bg-light text-dark">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0 animate__animated animate__fadeIn">
            <img src="/profile.jpg" alt="About Photo" className="img-fluid rounded shadow" />
          </div>
          <div className="col-lg-7 animate__animated animate__fadeIn">
            <h2 className="fw-bold mb-4">About <span style={{ color: '#6c63ff' }}>Me</span></h2>
            <h3 className="h4 text-secondary mb-4">Frontend Developer & Designer</h3>
            <p className="lead mb-4">I specialize in frontend development, graphic design, and social media management. With a keen eye for detail and a passion for creating beautiful, functional designs, I help businesses establish their online presence.</p>
            <div className="skills">
              <div className="skill-item mb-3">
                <div className="skill-info d-flex justify-content-between mb-1">
                  <span>Frontend Development</span>
                  <span>95%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div className="progress-bar" style={{ width: '95%', backgroundColor: '#6c63ff' }}></div>
                </div>
              </div>
              <div className="skill-item mb-3">
                <div className="skill-info d-flex justify-content-between mb-1">
                  <span>Graphic Design</span>
                  <span>90%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div className="progress-bar" style={{ width: '90%', backgroundColor: '#6c63ff' }}></div>
                </div>
              </div>
              <div className="skill-item mb-3">
                <div className="skill-info d-flex justify-content-between mb-1">
                  <span>Social Media Management</span>
                  <span>85%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div className="progress-bar" style={{ width: '85%', backgroundColor: '#6c63ff' }}></div>
                </div>
              </div>
            </div>
            <a href="#" className="btn btn-primary mt-3" style={{ backgroundColor: '#6c63ff', border: 'none' }}>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}