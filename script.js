document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Navbar elements
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Navbar scroll effect and section highlighting
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        
        // Check if we're at the bottom of the page (contact section)
        if (scrollPosition + windowHeight >= documentHeight - 100) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#contact') {
                    link.classList.add('active');
                }
            });
        } else {
            // Regular section detection
            let foundActive = false;
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                            foundActive = true;
                        }
                    });
                }
            });

            // If no section is active (like at the very top), highlight home
            if (!foundActive && scrollPosition < 100) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#home') {
                        link.classList.add('active');
                    }
                });
            }
        }
    }

    // Initial call to set active link on page load
    updateActiveNavLink();

    window.addEventListener('scroll', function() {
        // Navbar background on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link
        updateActiveNavLink();
    });

    // Mobile menu toggle
    navbarToggler.addEventListener('click', function() {
        this.classList.toggle('active');
        navbarCollapse.classList.toggle('show');
        
        // Toggle body overflow when menu is open
        if (navbarCollapse.classList.contains('show')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.classList.remove('active');
                navbarCollapse.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    });

    // Typewriter effect
    const typeText = document.querySelector('.type-text');
    const phrases = [
        "Frontend Developer",
        "Social Media Manager",
        "Graphic Designer"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typeText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typeText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isEnd = true;
            isDeleting = true;
            setTimeout(typeWriter, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeWriter, 500);
        } else {
            const speed = isDeleting ? 100 : 150;
            setTimeout(typeWriter, speed);
        }
    }

    // Start typewriter effect after 1 second
    setTimeout(typeWriter, 1000);

    // Portfolio items with links to separate pages
    const portfolioContainer = document.querySelector('.portfolio-container');
    const portfolioItems = [
        {
            title: "E-commerce Templates",
            category: "Web Design",
            image: "https://via.placeholder.com/600x400",
            link: "ecommerce.html"
        },
        {
            title: "Blog Templates",
            category: "Web Design",
            image: "https://via.placeholder.com/600x400",
            link: "blog.html"
        },
        {
            title: "Portfolio Templates",
            category: "Web Design",
            image: "https://via.placeholder.com/600x400",
            link: "portfolio.html"
        },
        {
            title: "Landing Pages",
            category: "Web Design",
            image: "https://via.placeholder.com/600x400",
            link: "landing.html"
        },
        {
            title: "Canva Designs",
            category: "Graphic Design",
            image: "https://via.placeholder.com/600x400",
            link: "canva.html"
        },
        {
            title: "Social Media Templates",
            category: "Graphic Design",
            image: "https://via.placeholder.com/600x400",
            link: "social.html"
        }
    ];

    function loadPortfolioItems() {
        let output = '';
        portfolioItems.forEach((item, index) => {
            output += `
                <div class="col-lg-4 col-md-6 portfolio-item animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.1}s">
                    <a href="templates/${item.link}" class="portfolio-link">
                        <div class="portfolio-img">
                            <img src="${item.image}" class="img-fluid" alt="${item.title}">
                        </div>
                        <div class="portfolio-overlay">
                            <div class="text-center text-white">
                                <h4>${item.title}</h4>
                                <p class="mb-3">${item.category}</p>
                                <span class="btn btn-sm btn-outline-light">View Collection</span>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        });
        portfolioContainer.innerHTML = output;
    }

    loadPortfolioItems();

    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate progress bars when scrolled to
    const animateProgressBars = function() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        progressBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (barPosition < windowHeight - 100) {
                const width = bar.getAttribute('data-width');
                if (bar.style.width === '0%' || !bar.style.width) {
                    bar.style.width = width;
                }
            }
        });
    };

    // Initialize progress bars to 0
    document.querySelectorAll('.progress-bar').forEach(bar => {
        bar.style.width = '0';
        bar.style.transition = 'width 1s ease-in-out';
    });

    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Run once on page load
});