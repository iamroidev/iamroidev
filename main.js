// Slide-based progressive reveal
const slides = document.querySelectorAll('.slide');
const markers = document.querySelectorAll('.progress-markers span');
const tocItems = document.querySelectorAll('.toc-item');
const mobileMarkers = document.querySelectorAll('.mobile-progress span');
const backToTop = document.getElementById('backToTop');
const projectVisuals = document.querySelectorAll('.project-visual');
const root = document.documentElement;

const themes = [
    {
        bg: 'radial-gradient(900px 520px at 20% 10%, rgba(240, 176, 74, 0.12), rgba(13, 13, 13, 0.96))',
        glow: 'rgba(240, 176, 74, 0.2)',
        title: 'rgba(247, 244, 240, 0.03)'
    },
    {
        bg: 'radial-gradient(900px 520px at 80% 10%, rgba(72, 160, 255, 0.12), rgba(13, 13, 13, 0.96))',
        glow: 'rgba(72, 160, 255, 0.2)',
        title: 'rgba(230, 240, 255, 0.03)'
    },
    {
        bg: 'radial-gradient(900px 520px at 20% 15%, rgba(62, 195, 169, 0.12), rgba(13, 13, 13, 0.96))',
        glow: 'rgba(62, 195, 169, 0.2)',
        title: 'rgba(220, 248, 240, 0.03)'
    },
    {
        bg: 'radial-gradient(900px 520px at 80% 20%, rgba(195, 147, 80, 0.12), rgba(13, 13, 13, 0.96))',
        glow: 'rgba(195, 147, 80, 0.2)',
        title: 'rgba(240, 228, 210, 0.03)'
    },
    {
        bg: 'radial-gradient(900px 520px at 20% 15%, rgba(143, 190, 92, 0.12), rgba(13, 13, 13, 0.96))',
        glow: 'rgba(143, 190, 92, 0.2)',
        title: 'rgba(230, 245, 212, 0.03)'
    },
    {
        bg: 'radial-gradient(900px 520px at 80% 15%, rgba(217, 118, 77, 0.12), rgba(13, 13, 13, 0.96))',
        glow: 'rgba(217, 118, 77, 0.2)',
        title: 'rgba(248, 224, 210, 0.03)'
    },
    {
        bg: 'radial-gradient(900px 520px at 20% 10%, rgba(95, 181, 212, 0.12), rgba(13, 13, 13, 0.96))',
        glow: 'rgba(95, 181, 212, 0.2)',
        title: 'rgba(220, 240, 248, 0.03)'
    },
    {
        bg: 'radial-gradient(900px 520px at 80% 10%, rgba(206, 176, 102, 0.12), rgba(13, 13, 13, 0.96))',
        glow: 'rgba(206, 176, 102, 0.2)',
        title: 'rgba(245, 236, 214, 0.03)'
    },
    {
        bg: 'radial-gradient(900px 520px at 20% 15%, rgba(130, 130, 130, 0.12), rgba(13, 13, 13, 0.98))',
        glow: 'rgba(130, 130, 130, 0.2)',
        title: 'rgba(230, 230, 230, 0.03)'
    }
];

let currentSlide = 0;

// Initialize
function init() {
    const initialSlide = getSlideIndexFromHash();
    if (initialSlide !== null) {
        currentSlide = initialSlide;
        slides[initialSlide].classList.add('visible');
        slides[initialSlide].scrollIntoView({ behavior: 'auto' });
    } else {
        slides[0].classList.add('visible');
    }

    setActiveSlide(currentSlide);
    syncNavigation(currentSlide);
    updateProgress();
    
    // Setup image reveal observers
    projectVisuals.forEach(visual => {
        visual.classList.add('reveal-img');
    });
}

function getSlideIndexFromHash() {
    const match = window.location.hash.match(/^#slide-(\d+)$/);
    if (!match) {
        return null;
    }

    const index = Number.parseInt(match[1], 10);
    return Number.isInteger(index) && index >= 0 && index < slides.length ? index : null;
}

function syncNavigation(slideIndex) {
    markers.forEach((marker, index) => {
        marker.classList.toggle('active', index === slideIndex);
    });

    mobileMarkers.forEach((marker, index) => {
        marker.classList.toggle('active', index === slideIndex);
    });

    tocItems.forEach((item, index) => {
        item.classList.toggle('active', index === slideIndex);
    });

    backToTop.classList.toggle('visible', slideIndex > 0);
}

function applyTheme(slideIndex) {
    const theme = themes[slideIndex] || themes[0];
    root.style.setProperty('--stage-bg', theme.bg);
    root.style.setProperty('--stage-glow', theme.glow);
    root.style.setProperty('--stage-title', theme.title);
}

function setActiveSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === slideIndex);
    });
    applyTheme(slideIndex);
}

// Update progress bar
function updateProgress() {
    const progress = ((currentSlide + 1) / slides.length) * 100;
    const style = document.createElement('style');
    style.textContent = `.progress-bar::after { height: ${progress}%; }`;
    document.querySelectorAll('style[data-progress]').forEach(el => el.remove());
    style.setAttribute('data-progress', 'true');
    document.head.appendChild(style);
}

// Intersection Observer for slide visibility
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const slideIndex = parseInt(entry.target.dataset.slide);
            currentSlide = slideIndex;
            
            entry.target.classList.add('visible');

            setActiveSlide(slideIndex);
            syncNavigation(slideIndex);
            
            updateProgress();
        }
    });
}, observerOptions);

slides.forEach(slide => slideObserver.observe(slide));

// Image reveal observer
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

projectVisuals.forEach(visual => imageObserver.observe(visual));

// Click on markers to navigate
markers.forEach((marker, index) => {
    marker.addEventListener('click', () => navigateToSlide(index));
    marker.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigateToSlide(index);
        }
    });
});

tocItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        navigateToSlide(index);
    });
});

mobileMarkers.forEach((marker, index) => {
    marker.addEventListener('click', () => navigateToSlide(index));
    marker.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigateToSlide(index);
        }
    });
});

function navigateToSlide(index) {
    currentSlide = index;
    setActiveSlide(index);
    syncNavigation(index);
    history.replaceState(null, '', `#slide-${index}`);
    slides[index].scrollIntoView({ behavior: 'smooth' });
}

// Back to top
backToTop.addEventListener('click', () => {
    slides[0].scrollIntoView({ behavior: 'smooth' });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentSlide < slides.length - 1) {
            navigateToSlide(currentSlide + 1);
        }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlide > 0) {
            navigateToSlide(currentSlide - 1);
        }
    } else if (e.key === 'Home') {
        e.preventDefault();
        navigateToSlide(0);
    } else if (e.key === 'End') {
        e.preventDefault();
        navigateToSlide(slides.length - 1);
    }
});

// Smooth scroll snap enhancement
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        let closestSlide = 0;
        let minDistance = Infinity;
        
        slides.forEach((slide, index) => {
            const rect = slide.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            if (distance < minDistance) {
                minDistance = distance;
                closestSlide = index;
            }
        });
        
        if (closestSlide !== currentSlide) {
            currentSlide = closestSlide;
            updateProgress();
        }
    }, 50);
});

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
