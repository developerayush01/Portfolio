export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="fw-bold">Contact <span style={{ color: '#6c63ff' }}>Me</span></h2>
            <p className="lead text-muted">Get in touch for collaborations or inquiries</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h3 className="h4 mb-4 text-center">Send me a message</h3>
            <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="d2ea8859-e4ad-4c87-b794-1d44555ff7c3" />
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Full Name" required />
                    <label htmlFor="name">Full Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email Address" required />
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone Number" />
                    <label htmlFor="phone">Phone Number (optional)</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Your Message" id="message" name="message" style={{ height: '150px' }} required></textarea>
                    <label htmlFor="message">Your Message</label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary btn-lg px-5 py-3" style={{ backgroundColor: '#6c63ff', border: 'none' }}>
                    <i className="fas fa-paper-plane me-2"></i> Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-6">
            <h3 className="h4 mb-4 text-center">Contact me directly</h3>
            <div className="direct-contact-options">
              <a href="https://wa.me/9817771610" className="direct-contact-card whatsapp" target="_blank" rel="noreferrer">
                <div className="icon-box"><i className="fab fa-whatsapp"></i></div>
                <div className="content">
                  <h4>WhatsApp</h4>
                  <p>Chat with me instantly</p>
                  <span className="small-text">+977 9820696074</span>
                </div>
              </a>

              <a href="tel:+9779817771610" className="direct-contact-card phone">
                <div className="icon-box"><i className="fas fa-phone"></i></div>
                <div className="content">
                  <h4>Phone Call</h4>
                  <p>Available 6AM-10AM / 6PM-10PM</p>
                  <span className="small-text">+977 9820696074</span>
                </div>
              </a>

              <a href="mailto:ayushbhattarai909@gmail.com" className="direct-contact-card email">
                <div className="icon-box"><i className="fas fa-envelope"></i></div>
                <div className="content">
                  <h4>Email</h4>
                  <p>Response within 24 hours</p>
                  <span className="small-text">ayushbhattarai909@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}