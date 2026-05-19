const container = document.querySelector('.container');
const card = document.querySelector('.card');

container.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
});

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 1s ease-out';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
}); 
