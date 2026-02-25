const toggle = document.querySelector('.theme-toggle');

// Initialize the page in light mode as per requirements
document.body.classList.add('light');

toggle.addEventListener('click', function() {
    // Toggle between dark and light
    if (document.body.classList.contains('dark')) {
        document.body.classList.replace('dark', 'light');
    } else {
        document.body.classList.replace('light', 'dark');
    }
});