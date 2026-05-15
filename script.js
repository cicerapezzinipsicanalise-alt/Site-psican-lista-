// Função para fazer os elementos aparecerem ao rolar a página
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

// Seleciona todos os cards para aplicar a animação
document.querySelectorAll('.content-card').forEach(card => {
    observer.observe(card);
});
