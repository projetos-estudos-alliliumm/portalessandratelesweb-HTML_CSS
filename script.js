// Ao clicar indicar onde foi clicado na navbar

document.querySelectorAll('.link-a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove a classe 'link-clicado' de todos os links
        document.querySelectorAll('.link-a').forEach(l => l.classList.remove('link-clicado'));
        // Adiciona a classe 'link-clicado' ao link clicado
        this.classList.add('link-clicado');
    });
});
