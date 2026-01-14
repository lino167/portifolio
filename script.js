document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Mobile Menu Toggle
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 1. Check LocalStorage for saved preference
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme if 'dark'
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // 2. Toggle Event Listener
    themeBtn.addEventListener('click', () => {
        // Toggle class
        body.classList.toggle('dark-mode');

        // Save preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // 3. AOS Animation Initialization
    AOS.init({
        duration: 1000,
        once: true
    });
});
