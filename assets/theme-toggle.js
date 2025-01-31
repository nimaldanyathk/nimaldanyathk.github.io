// Get the toggle button
const toggleButton = document.getElementById('mode-toggle');

// Check if dark mode is already enabled
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '🌞'; // Sun icon for light mode
} else {
    document.body.classList.remove('dark-mode');
    toggleButton.textContent = '🌙'; // Moon icon for dark mode
}

// Toggle dark and light mode
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌞';
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        toggleButton.textContent = '🌙';
        localStorage.setItem('dark-mode', 'disabled');
    }
});
