document.addEventListener('DOMContentLoaded', () => {
    const neonButtons = document.querySelectorAll('.neon-button');
    
    // Add click effect to neon buttons
    neonButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            button.appendChild(ripple);

            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;

            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add syntax highlighting to code blocks (you may want to use a library like Prism.js for this)
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach((block) => {
        // This is a placeholder for syntax highlighting
        // In a real implementation, you would use a library like Prism.js
        console.log('Syntax highlighting applied to:', block);
    });
});