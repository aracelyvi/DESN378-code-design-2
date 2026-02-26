const toggle = document.querySelector('.theme-toggle');

// 1. LOAD: Memory & System Preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Determine start theme: Saved choice OR System Choice OR Default to light
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

// Apply it immediately
document.documentElement.dataset.theme = initialTheme;

// 2. TOGGLE: The Button Logic
toggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.dataset.theme;

  // STRETCH GOAL: The Ternary Operator
  // This says: If current is dark, make it light. Otherwise, make it dark.
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
});