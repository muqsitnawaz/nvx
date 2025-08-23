document.addEventListener('DOMContentLoaded', function () {
    // Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // Interactive gradient that responds to mouse movement
    let mouseX = 0.5;
    let mouseY = 0.5;
    let currentX = 0.5;
    let currentY = 0.5;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;
    });
    
    // Smooth animation loop for gradient
    function animateGradient() {
        // Lerp (linear interpolation) for smooth, slow following
        const lerpFactor = 0.015; // Very slow following for luxury feel
        currentX += (mouseX - currentX) * lerpFactor;
        currentY += (mouseY - currentY) * lerpFactor;
        
        // Create a radial influence that shifts the gradient colors
        // Colors flow towards mouse position while maintaining gradient structure
        const xInfluence = (currentX - 0.5) * 30; // -15 to +15
        const yInfluence = (currentY - 0.5) * 20; // -10 to +10
        
        // Shift the gradient stops based on mouse position
        // The gradient maintains its overall flow but colors "pool" near the mouse
        const stop1 = Math.max(0, Math.min(40, 20 - yInfluence));
        const stop2 = Math.max(30, Math.min(70, 45 + xInfluence));
        const stop3 = Math.max(60, Math.min(100, 80 + yInfluence));
        
        // Subtle angle adjustment based on horizontal mouse position
        const angle = 120 + (currentX - 0.5) * 15;
        
        // Apply the dynamic gradient with smooth color transitions
        document.body.style.background = `linear-gradient(${angle}deg, 
            #DCEAF6 ${stop1}%, 
            #F9FBFC ${stop2}%, 
            #F5F7F3 ${stop3}%)`;
        
        requestAnimationFrame(animateGradient);
    }
    
    // Start the animation
    animateGradient();

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
});