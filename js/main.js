document.addEventListener('DOMContentLoaded', () => {
    initDynamicDates();
    initNavbar();
    initSmoothScroll();
    initGSAPAnimations();
    initForm();
});

function initDynamicDates() {
    const currentYear = new Date().getFullYear();
    const establishmentYear = 2020;
    
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = currentYear;
    }
    
    const yearsOfExcellence = currentYear - establishmentYear;
    const yearsOfExcellenceEl = document.getElementById('yearsOfExcellence');
    if (yearsOfExcellenceEl) {
        yearsOfExcellenceEl.textContent = yearsOfExcellence + '+';
    }
    
    const yearsTextEl = document.getElementById('yearsText');
    if (yearsTextEl) {
        yearsTextEl.textContent = yearsOfExcellence + '+';
    }
}

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.fade-in').forEach(element => {
        gsap.fromTo(element, 
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    gsap.fromTo('.about-image',
        { opacity: 0, x: -50 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.about',
                start: 'top 70%'
            }
        }
    );

    gsap.fromTo('.about-content',
        { opacity: 0, x: 50 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.2,
            scrollTrigger: {
                trigger: '.about',
                start: 'top 70%'
            }
        }
    );

    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        gsap.fromTo(item,
            { 
                opacity: 0, 
                x: -30 
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                delay: 0.5 + (index * 0.15),
                scrollTrigger: {
                    trigger: '.features-list',
                    start: 'top 80%'
                },
                onComplete: () => {
                    gsap.fromTo(item.querySelector('.feature-icon'),
                        { scale: 0, opacity: 0 },
                        { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
                    );
                }
            }
        );
    });

    gsap.fromTo('.service-card',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.services-grid',
                start: 'top 80%'
            }
        }
    );

    gsap.fromTo('.gallery-item',
        { opacity: 0, scale: 0.9 },
        {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.gallery-grid',
                start: 'top 80%'
            }
        }
    );

    gsap.fromTo('.pricing-card',
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.pricing-grid',
                start: 'top 80%'
            }
        }
    );

    gsap.fromTo('.contact-info',
        { opacity: 0, x: -30 },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 70%'
            }
        }
    );

    gsap.fromTo('.contact-form',
        { opacity: 0, x: 30 },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.2,
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 70%'
            }
        }
    );
}

function initForm() {
    const form = document.getElementById('bookingForm');
    const dateInput = document.getElementById('eventDate');

    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.classList.add('loading');

        setTimeout(() => {
            submitBtn.classList.remove('loading');
            alert('Thank you for your booking request! We will contact you shortly.');
            form.reset();
        }, 1500);
    });
}
