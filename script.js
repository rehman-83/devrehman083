const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');
const savedTheme = localStorage.getItem('abdul-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

document.body.dataset.theme = initialTheme;
function updateThemeButton() {
  const isDark = document.body.dataset.theme === 'dark';
  themeToggle?.setAttribute('aria-pressed', String(isDark));
  themeToggle?.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  if (themeIcon) themeIcon.textContent = isDark ? '☾' : '☼';
  if (themeLabel) themeLabel.textContent = isDark ? 'Dark' : 'Light';
}
updateThemeButton();
themeToggle?.addEventListener('click', () => {
  const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = next;
  localStorage.setItem('abdul-theme', next);
  updateThemeButton();
});

const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    mobileNav.hidden = open;
    toggle.innerHTML = open ? 'Menu <span>↗</span>' : 'Close <span>×</span>';
  });
}
document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = 'Menu <span>↗</span>';
}));
