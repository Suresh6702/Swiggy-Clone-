
// what's ur mind image scrooldown

const scrollContainer = document.getElementById('scrollContent');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

leftArrow.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -150, 
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 150, 
        behavior: 'smooth'
    });
});