// FUNÇÕES DE HEADER
function toggleActive(element) {
    const buttons = document.querySelectorAll('.header-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');
    console.log('Header button ativado');
}

// FUNÇÕES DA NAVEGAÇÃO SECUNDÁRIA
function toggleNavActive(element) {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');
    console.log('Nav button ativado');
}

// ... resto das funções JavaScript permanece igual ...

document.addEventListener('DOMContentLoaded', function() {
    // ... código de inicialização permanece igual ...
});