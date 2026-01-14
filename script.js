document.addEventListener('DOMContentLoaded', () => {
    // Selectors
    const themeBtn = document.getElementById('theme-btn');
    const themeBtnMobile = document.getElementById('theme-btn-mobile');
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links'); // Desktop
    const mobileMenu = document.getElementById('mobile-menu'); // Mobile
    const html = document.documentElement;

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

    // --- AOS Animation Initialization ---
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});
