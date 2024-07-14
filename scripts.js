console.log("Script carregado com sucesso!");

document.addEventListener('DOMContentLoaded', () => {
    // 1. Interatividade do botão "Leia mais"
    const readMoreButton = document.getElementById('read-more');
    const aboutText = document.querySelector('.about-content p');
    const additionalText = "Aqui estão mais informações sobre nossa empresa, nossas operações, e nosso compromisso com a excelência.";
    let isExpanded = false;

    readMoreButton.addEventListener('click', () => {
        if (!isExpanded) {
            aboutText.innerHTML += `<br>${additionalText}`;
            readMoreButton.textContent = 'Leia menos';
        } else {
            aboutText.innerHTML = aboutText.innerHTML.split('<br>')[0]; // Remove o texto adicional
            readMoreButton.textContent = 'Leia mais';
        }
        isExpanded = !isExpanded;
    });

    // 2. Validação do formulário de contato
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o envio padrão do formulário

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Regex simples para validação de e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!emailPattern.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Exibe mensagem de sucesso
        alert('Formulário enviado com sucesso!');
        contactForm.reset(); // Limpa o formulário
    });

    // 3. Galeria de imagens
    const galleryImages = document.querySelectorAll('.gallery-container img');
    let currentImageIndex = 0;

    const updateImage = () => {
        console.log("Atualizando imagem:", currentImageIndex);
        galleryImages.forEach((img, index) => {
            img.classList.remove('active');
            if (index === currentImageIndex) {
                img.classList.add('active');
            }
        });
    };

    document.getElementById('prev').addEventListener('click', () => {
        console.log("Botão 'Anterior' clicado");
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : galleryImages.length - 1;
        updateImage();
    });

    document.getElementById('next').addEventListener('click', () => {
        console.log("Botão 'Próximo' clicado");
        currentImageIndex = (currentImageIndex < galleryImages.length - 1) ? currentImageIndex + 1 : 0;
        updateImage();
    });

    // Inicializa a galeria
    updateImage();
});