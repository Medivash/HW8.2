document.addEventListener('DOMContentLoaded', function() {
    const text = "Что вершит судьбу человечества в этом мире? Некое незримое существо или закон, подобно Длани Господней парящей над миром? По крайне мере истинно то, что человек не властен даже над своей волей.";
    let index = 0;
    const interval = 40; // Интервал между появлением каждой буквы (в миллисекундах)
    const typingEffect = document.getElementById('typing-effect');
    
    function type() {
        typingEffect.textContent += text[index];
        index++;
        if (index < text.length) {
            setTimeout(type, interval);
        }
    }

    type();
});