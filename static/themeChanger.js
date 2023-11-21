function setTheme() {
    const theme = window.location.pathname.includes('/users/') ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
}
  
document.addEventListener('DOMContentLoaded', setTheme);
window.addEventListener('popstate', setTheme);