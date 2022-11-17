let btnRight = document.getElementById('right');
btnRight.innerHTML = '<i class="fas fa-arrow-right fa-2x "></i>';
let btnLeft = document.getElementById('left');
btnLeft.innerHTML = '<i class="fas fa-arrow-left fa-2x"></i>';

let counter = 1;

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

let containerWidth = document.getElementById('carousel-container').offsetWidth

for (i=0; i < carouselImages.length; i++) {
    carouselImages[i].width = containerWidth;
}

const size = carouselImages[0].width;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';

btnRight.addEventListener('click', swipeRight);
btnLeft.addEventListener('click', swipeLeft);

function swipeRight() {
    if (counter > 3) return;
    counter ++;
        // tells how the transform should be done(e.g. slow)
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    // tells how many pixels in which directions it should move
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
}

function swipeLeft() {
    if (counter < 1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter --;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
}

carouselSlide.addEventListener('transitionend', ()=>{
    if (counter == 4) {
        carouselSlide.style.transition = 'none';
        counter = 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
        } else if (counter == 0) {
        carouselSlide.style.transition = 'none';
        counter = 3;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
        }
});
