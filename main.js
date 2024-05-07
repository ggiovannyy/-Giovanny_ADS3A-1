document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contato');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');

    form.addEventListener('submit', function(event) {
        
        const nome = nomeInput.value.trim();
        if (!nome.match(/^[A-Za-zÀ-ú\s]+$/) || nome.length > 100 || /\d/.test(nome)) {
            document.getElementById('erro-nome').textContent = 'Nome inválido';
            event.preventDefault();
        } else {
            document.getElementById('erro-nome').textContent = '';
        }

                const email = emailInput.value.trim();
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            document.getElementById('erro-email').textContent = 'Email inválido';
            event.preventDefault();
        } else {
            document.getElementById('erro-email').textContent = '';
        }

        const telefone = telefoneInput.value.trim();
        if (!telefone.match(/^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/)) {
            document.getElementById('erro-telefone').textContent = 'Telefone inválido';
            event.preventDefault();
        } else {
            document.getElementById('erro-telefone').textContent = '';
        }
    });
});
