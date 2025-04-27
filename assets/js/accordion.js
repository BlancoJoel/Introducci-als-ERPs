document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('.accordion-icon');

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            content.style.display = 'block';
            icon.textContent = '-'; // Cambia a "menos"
        } else {
            content.style.display = 'none';
            icon.textContent = '+'; // Cambia a "más"
        }
    });
});