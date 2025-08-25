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
    let isLetterOpen = false;

    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            const founderSection = document.getElementById('founder');
            const main = document.querySelector('main');

            if (!isLetterOpen) {
                // Open the letter
                ctaButton.classList.add('letter-opened');

                // Move the entire main container up
                if (main) {
                    main.classList.add('slide-up');
                }

                // Fade in the Founder's Letter section after a delay
                if (founderSection) {
                    setTimeout(() => {
                        founderSection.classList.add('open');
                    }, 2500); // Start fade-in at 2.5 seconds, slightly before slide-up completes
                }

                isLetterOpen = true;
            } else {
                // Close the letter
                ctaButton.classList.remove('letter-opened');

                // First fade out the founder section
                if (founderSection) {
                    founderSection.classList.remove('open');
                }

                // Then slide main back down after a brief delay
                setTimeout(() => {
                    if (main) {
                        main.classList.remove('slide-up');
                    }
                }, 300); // Small delay for smooth transition

                isLetterOpen = false;
            }
        });
    }

    console.log('%cNOVIER AUREX', 'font-family: "GT Super Display", serif; font-size: 24px; font-weight: 700; letter-spacing: 0.05em; color: #2C3E50;');
    console.log('%cPRECISION ENGINEERED EXCELLENCE', 'font-family: "GT Super Display", serif; font-size: 12px; font-weight: 700; letter-spacing: 0.15em; color: #2C3E50; opacity: 0.7;');

    const root = document.body;
    let pending = false;
    let clientWidth = window.innerWidth;
    let clientHeight = window.innerHeight;

    function updateHalo(e) {
        if (pending) return;
        pending = true;
        requestAnimationFrame(() => {
            let x; let y;
            if (e.touches && e.touches[0]) {
                x = e.touches[0].clientX;
                y = e.touches[0].clientY;
            } else {
                x = e.clientX;
                y = e.clientY;
            }
            root.style.setProperty('--halo-x', x + 'px');
            root.style.setProperty('--halo-y', y + 'px');
            pending = false;
        });
    }

    function onResize() {
        clientWidth = window.innerWidth;
        clientHeight = window.innerHeight;
    }

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('mousemove', updateHalo, { passive: true });
        window.addEventListener('touchmove', updateHalo, { passive: true });
        window.addEventListener('resize', onResize);
        root.style.setProperty('--halo-x', (clientWidth / 2) + 'px');
        root.style.setProperty('--halo-y', (clientHeight / 2) + 'px');
    }
});