export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container py-4">
        <div className="row align-items-center">
          
          {/* Left Column: Bio & Professional Focus */}
          <div className="col-lg-6 about-content mb-5 mb-lg-0">
            <h6 className="text-theme-primary fw-bold text-uppercase tracking-wider">About Me</h6>
            <h2 className="fw-bold mb-3">Full-Stack Developer & Tech Enthusiast</h2>
            
            <h3 className="h5 text-muted mb-4">
              Building robust web applications with clean architecture and seamless user experiences.
            </h3>
            
            <p className="text-secondary mb-4">
              Passionate Full-Stack Developer with a sharp eye for UI/UX design and clean layouts. Focused on building and deploying functional web applications, combining solid technical foundations with a keen sense of visual aesthetics to deliver complete, high-quality digital solutions.
            </p>

            {/* 4 Stat Cards Grid */}
            <div className="row g-3 mt-2">
              <div className="col-6 col-sm-3">
                <div className="p-3 border rounded-3 text-center h-100 shadow-sm">
                  <h4 className="fw-bold text-theme-primary mb-1">2+</h4>
                  <p className="text-muted small mb-0">Years Journey</p>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="p-3 border rounded-3 text-center h-100 shadow-sm">
                  <h4 className="fw-bold text-theme-primary mb-1">4+</h4>
                  <p className="text-muted small mb-0">Core Projects</p>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="p-3 border rounded-3 text-center h-100 shadow-sm">
                  <h4 className="fw-bold text-theme-primary mb-1">PERN</h4>
                  <p className="text-muted small mb-0">Core Stack</p>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="p-3 border rounded-3 text-center h-100 shadow-sm d-flex flex-column justify-content-center">
                  <h4 className="fw-bold text-theme-primary mb-1 fs-5">QA & Dev</h4>
                  <p className="text-muted small mb-0">Experience</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Technical Skills & Progress Bars */}
          <div className="col-lg-6">
            <div className="skills p-4 p-md-5 rounded-4 shadow-sm border border-opacity-10">
              <h4 className="fw-bold mb-4">Technical Proficiency</h4>

              {/* Skill 1: Full-Stack Development */}
              <div className="skill-item mb-3">
                <div className="skill-info d-flex justify-content-between mb-1">
                  <span className="fw-semibold">Full-Stack Development</span>
                  <span className="text-muted">90%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              {/* Skill 2: Frontend Engineering */}
              <div className="skill-item mb-3">
                <div className="skill-info d-flex justify-content-between mb-1">
                  <span className="fw-semibold">Frontend & UI/UX Design</span>
                  <span className="text-muted">95%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              {/* Skill 3: Backend & Database */}
              <div className="skill-item">
                <div className="skill-info d-flex justify-content-between mb-1">
                  <span className="fw-semibold">Backend & Database (PERN)</span>
                  <span className="text-muted">85%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}