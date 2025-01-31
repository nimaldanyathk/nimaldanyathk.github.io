document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.createElement('button');
  toggleButton.id = 'theme-toggle';
  toggleButton.innerText = '🌙';  // Initial dark mode icon

  // Append the button to the body
  document.body.appendChild(toggleButton);

  // Check for saved user theme preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.body.setAttribute('data-theme', currentTheme);
    toggleButton.innerText = currentTheme === 'dark' ? '☀️' : '🌙';  // Toggle icon
  }

  // Event listener for toggle
  toggleButton.addEventListener('click', () => {
    let newTheme = 'light';
    if (document.body.getAttribute('data-theme') === 'light') {
      newTheme = 'dark';
      toggleButton.innerText = '☀️';  // Light mode icon
    } else {
      toggleButton.innerText = '🌙';  // Dark mode icon
    }
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);  // Save preference
  });
});
