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

            // Move the entire main container up
            const main = document.querySelector('main');
            if (main) {
                main.classList.add('slide-up');
            }

            // Fade in only the Founder's Letter section
            if (founderSection) {
                founderSection.classList.add('open');
            }
        });
    }

    console.log('%cNOVIER AUREX', 'font-family: "GT Super Display", serif; font-size: 24px; font-weight: 700; letter-spacing: 0.05em; color: #2C3E50;');
    console.log('%cPRECISION ENGINEERED EXCELLENCE', 'font-family: "GT Super Display", serif; font-size: 12px; font-weight: 700; letter-spacing: 0.15em; color: #2C3E50; opacity: 0.7;');
});