document.addEventListener('DOMContentLoaded', () => {
    // Selectors
    const themeBtn = document.getElementById('theme-btn');
    const themeBtnMobile = document.getElementById('theme-btn-mobile');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu'); // Mobile
    const html = document.documentElement;

    // --- Anime.js Hero Animation ---

    // 1. Wrap letters in spans
    const greetingElement = document.getElementById('hero-greeting');
    if (greetingElement) {
        greetingElement.innerHTML = greetingElement.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    // 2. Create Timeline
    const tl = anime.timeline({
        loop: false
    });

    tl.add({
        targets: '#hero-greeting .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        opacity: [0, 1],
        duration: 750,
        delay: anime.stagger(50)
    }).add({
        targets: '.hero-element',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(200),
        offset: '-=500' // Start slightly before previous animation ends
    });


    // --- Scroll Observer for Grid Animations ---
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of element is visible
    };

    const animateGrid = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetGrid = entry.target;

                anime({
                    targets: targetGrid.children, // Select all cards inside the grid
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    translateY: [50, 0],
                    delay: anime.stagger(100, { grid: [1, 5], from: 'center' }),
                    easing: 'spring(1, 80, 10, 0)'
                });

                observer.unobserve(targetGrid); // Run only once
            }
        });
    };

    const gridObserver = new IntersectionObserver(animateGrid, observerOptions);

    // Observe Grids (if they exist)
    const skillsGrid = document.querySelector('#habilidades .grid');
    const projectsGrid = document.querySelector('#projetos .grid');

    if (skillsGrid) gridObserver.observe(skillsGrid);
    if (projectsGrid) gridObserver.observe(projectsGrid);


    // --- Dark Mode Logic ---
    function toggleTheme() {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    // Theme Button Listeners
    if(themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if(themeBtnMobile) themeBtnMobile.addEventListener('click', toggleTheme);


    // --- Mobile Menu Logic ---
    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        // Close menu when clicking links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
    }
});
