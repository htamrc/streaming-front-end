const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Função para aplicar tema com base em localStorage ou padrão dark
function applyTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    themeToggle.textContent = '☀';
    themeToggle.setAttribute('title', 'Modo claro');
    themeToggle.setAttribute('aria-label', 'Ativar modo claro');
  } else {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeToggle.textContent = '☾';
    themeToggle.setAttribute('title', 'Modo escuro');
    themeToggle.setAttribute('aria-label', 'Ativar modo escuro');
  }
  localStorage.setItem('theme', theme);
}

// Inicia com tema salvo ou dark se não existir
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

// Alterna entre modo claro e escuro
themeToggle.addEventListener('click', () => {
  const currentIsLight = body.classList.contains('light-mode');
  applyTheme(currentIsLight ? 'dark' : 'light');
});
