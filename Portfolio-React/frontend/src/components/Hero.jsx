import { useState, useEffect } from 'react';

export default function Hero() {
  const words = ["Full-Stack Developer", 
    "PERN Stack Developer", 
    "Frontend Engineer", 
    "Backend Developer",
    "Web Application Builder"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullText = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        // Deleting backward
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-6 hero-content animate__animated animate__fadeInLeft">
            <h3 className="text-muted text-white-50">Hello, I'm</h3>
            <h1 className="display-3 fw-bold mb-3" style={{ color: '#6c63ff' }}>Ayush Bhattarai</h1>
            <div className="typewriter mb-3">
              <span className="type-text h4 fw-bold text-secondary">{currentText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="lead mb-4">Results-driven Full-Stack Developer with a strong eye for UI/UX design and brand aesthetics. Experienced in building robust web applications while leveraging design tools like Canva to craft engaging social media posts, brand identities, and custom logos that bridge technical architecture with clean visual design.</p>
            <div className="social-icons mb-4">
              <a href="#" className="btn btn-sm btn-outline-light me-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="btn btn-sm btn-outline-light me-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="btn btn-sm btn-outline-light me-2"><i className="fab fa-instagram"></i></a>
              <a href="#" className="btn btn-sm btn-outline-light me-2"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="btn btn-sm btn-outline-light"><i className="fab fa-github"></i></a>
            </div>
            <a href="#portfolio" className="btn btn-primary btn-lg px-4 me-2" style={{ backgroundColor: '#6c63ff', border: 'none' }}>View My Work</a>
            <a href="#contact" className="btn btn-outline-light btn-lg px-4">Hire Me</a>
          </div>
          <div className="col-lg-6 hero-img animate__animated animate__fadeInRight">
            <div className="profile-img-container">
              <img src="/profile.jpg" alt="Your Photo" className="profile-img" />
              <div className="circle-animation"></div>
              <div className="circle-animation delay-1"></div>
              <div className="circle-animation delay-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}