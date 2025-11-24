// Theme changer (toggle dark/light)
if (!window.hasThemeChanger) {
  window.hasThemeChanger = true;
  window.currentTheme = localStorage.getItem('aums-theme') || 'default';
  applyTheme(window.currentTheme);

  window.toggleTheme = () => {
    window.currentTheme = (window.currentTheme === 'dark') ? 'light' : 'dark';
    localStorage.setItem('aums-theme', window.currentTheme);
    applyTheme(window.currentTheme);
  };

  function applyTheme(theme) {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  }
}

// File lister (example: collect URLs to downloadable files)
window.listFiles = () => {
  let links = [...document.querySelectorAll('a[href]')]
    .filter(a => /\.(pdf|docx?|xlsx?|pptx?)$/i.test(a.href));
  alert('Files found:\n' + links.map(l => l.href).join('\n'));
}
// Function to set a theme
function setTheme(themeName) {
  // Remove all theme classes
  document.body.classList.remove('dark', 'light', 'dracula');
  // Add the selected theme
  document.body.classList.add(themeName);
  // Save preference (optional)
  localStorage.setItem('aums-theme', themeName);
}

// To restore theme on page load:
const saved = localStorage.getItem('aums-theme');
if (saved) setTheme(saved);

// To change theme from popup (example for dark):
// setTheme('dark');
// Or for light: setTheme('light')
// Or for dracula: setTheme('dracula')
