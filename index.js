document.addEventListener('DOMContentLoaded', function () {
    // Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            const founderSection = document.getElementById('founder');
            const hero = document.querySelector('.hero');
            
            // Start hero movement first
            if (hero) {
                hero.classList.add('condensed');
            }
            
            // Delay the reveal slightly for coordinated animation
            if (founderSection) {
                setTimeout(() => {
                    founderSection.classList.add('open');
                    // Delay the hairline animation slightly more
                    setTimeout(() => {
                        founderSection.classList.add('drawn');
                    }, 300);
                }, 150);
            }
            
            console.log('Founder\'s Letter clicked');
        });
    }

    const visionLink = document.querySelector('a[href="#vision"]');
    if (visionLink) {
        visionLink.addEventListener('click', function (e) {
            e.preventDefault();
            const visionSection = document.getElementById('vision');
            const hero = document.querySelector('.hero');
            if (visionSection) {
                visionSection.classList.add('open');
                visionSection.classList.add('drawn');
            }
            if (hero) {
                hero.classList.add('condensed');
            }
        });
    }

    const founderHeading = document.querySelector('#founder h2');
    if (founderHeading) {
        founderHeading.addEventListener('click', function () {
            const founderSection = document.getElementById('founder');
            const hero = document.querySelector('.hero');
            if (founderSection) {
                founderSection.classList.add('open');
                founderSection.classList.add('drawn');
            }
            if (hero) {
                hero.classList.add('condensed');
            }
        });
    }

    console.log('%cNOVIER AUREX', 'font-family: "GT Super Display", serif; font-size: 24px; font-weight: 700; letter-spacing: 0.05em; color: #2C3E50;');
    console.log('%cPRECISION ENGINEERED EXCELLENCE', 'font-family: "GT Super Display", serif; font-size: 12px; font-weight: 700; letter-spacing: 0.15em; color: #2C3E50; opacity: 0.7;');
});