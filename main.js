let btnRight = document.getElementById('right');
btnRight.innerHTML = '<i class="fas fa-arrow-right fa-2x "></i>';
let btnLeft = document.getElementById('left');
btnLeft.innerHTML = '<i class="fas fa-arrow-left fa-2x"></i>';

let sourceArray = ['url("images/1.jpg")', 'url("images/2.jpg")', 'url("images/3.jpg")'];
let choice = 0;

let body = document.getElementById('body');
body.style.backgroundImage = sourceArray[choice];

btnRight.addEventListener('click', swipeRight);
btnLeft.addEventListener('click', swipeLeft);


function swipeRight() {
    if (choice == 2) choice = -1;

    choice ++;
    body.style.backgroundImage = sourceArray[choice];
}

function swipeLeft() {
    if (choice == 0) choice = 3;

    choice --;
    body.style.backgroundImage = sourceArray[choice];
}