document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica do Menu Responsivo ---
    const btnMenu = document.querySelector('.btn-menu');
    const navLinks = document.querySelector('.nav-links');

    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Lógica do Formulário de Contacto ---
    const form = document.querySelector('#formContato');
    const msgSucesso = document.querySelector('#mensagemSucesso');

    if (form) {
        form.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Impede a página de recarregar

            // Capturar os dados (para uso futuro com uma base de dados)
            const dados = {
                nome: document.querySelector('#nome').value,
                email: document.querySelector('#email').value,
                telefone: document.querySelector('#telefone').value,
                interesse: document.querySelector('#interesse').value,
                mensagem: document.querySelector('#mensagem').value
            };

            console.log("Dados enviados:", dados);

            // Simular um carregamento de envio
            const botao = form.querySelector('button');
            botao.innerText = "A enviar...";
            botao.disabled = true;

            setTimeout(() => {
                form.style.display = 'none'; // Esconde o formulário
                msgSucesso.style.display = 'block'; // Mostra a mensagem de sucesso
            }, 1500);
        });
    }
});
