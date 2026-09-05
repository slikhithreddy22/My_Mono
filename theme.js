const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.dataset.theme = savedTheme;

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('themeToggle');
  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    button.textContent = theme === 'dark' ? '[ light ]' : '[ dark ]';
  };

  setTheme(savedTheme);
  button.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });
});
