document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    gsap.set(boxes, { y: 50, opacity: 0 }); // Configura a posição inicial

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.to(entry.target, { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.1, 
                    ease: "power1.out" 
                });
                observer.unobserve(entry.target); // Para observar após a animação
            }
        });
    }, { threshold: 0.1 });

    boxes.forEach(box => observer.observe(box));
});
 
  
  
  
// Função que adiciona a classe 'in-view' quando o elemento entra na área visível
function animateOnScroll() {
    const sections = document.querySelectorAll('.sec-4, .txt-sec4, .img-sobre');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe 'in-view' para animar os elementos
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Para observar o elemento uma única vez
        }
      });
    }, {
      threshold: 0.5 // A animação é ativada quando 50% do elemento estiver visível
    });
  
    // Observa a seção e os elementos dentro dela
    sections.forEach(section => {
      observer.observe(section);
    });
  }
  
  // Inicia o processo após o carregamento da página
  document.addEventListener('DOMContentLoaded', animateOnScroll);
   