document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

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
});
