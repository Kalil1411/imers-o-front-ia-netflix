// Função para alternar entre dark e light mode
function toggleTheme() {
    // Seleciona o body
    const body = document.body;
    
    // Alterna a classe 'light-mode' no body
    body.classList.toggle('light-mode');
    
    // Seleciona o botão de toggle
    const button = document.getElementById('theme-toggle');
    
    // Atualiza o texto do botão baseado no modo atual
    if (body.classList.contains('light-mode')) {
        button.textContent = 'Modo Escuro';
        // Salva a preferência no localStorage
        localStorage.setItem('theme', 'light');
    } else {
        button.textContent = 'Modo Claro';
        // Salva a preferência no localStorage
        localStorage.setItem('theme', 'dark');
    }
}

// Função para carregar o tema salvo do localStorage
function loadTheme() {
    // Obtém o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const button = document.getElementById('theme-toggle');
    
    // Se existe um tema salvo e é 'light', aplica o light mode
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        button.textContent = 'Modo Escuro';
    } else {
        // Caso contrário, garante que está em dark mode
        body.classList.remove('light-mode');
        button.textContent = 'Modo Claro';
    }
}

// Executa a função loadTheme quando a página carrega
document.addEventListener('DOMContentLoaded', loadTheme);