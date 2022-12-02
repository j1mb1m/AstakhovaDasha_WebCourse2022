let btnUp = document.getElementById("btnUp");
let btnDown = document.getElementById("btnDown");
let slides = document.getElementsByClassName("about__slide");
let descriptions = document.getElementsByClassName("about__slide_description");


let currentSlide = 0;

let buttons = document.getElementsByClassName('about__slide');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        slideSwitch(buttons[i].dataset.name)
    });
}

function slideSwitch(slideNumber) {
    if (typeof slideNumber === 'number') {
        for (let i = 0; i < slides.length; i++) {
            if (i != slideNumber) {
                descriptions[i * 2].classList.remove('about__slide_description_active');
                descriptions[i * 2 + 1].classList.add('about__slide_description_active');
            } else {
                descriptions[i * 2].classList.add('about__slide_description_active');
                descriptions[i * 2 + 1].classList.remove('about__slide_description_active');
            }
        }
    } 
}

function validSlideNumberCheck(slideNumber) {
    let validNumber = slideNumber;

    if (slideNumber < 0) {
        validNumber = slides.length - 1;
    } else if (slideNumber > slides.length - 1) {
        validNumber = 0;
    }

    currentSlide = validNumber;

    return currentSlide;
}

btnUp.onclick = function () {
    let newSlide = currentSlide - 1;
    slideSwitch(validSlideNumberCheck(newSlide));
}

btnDown.onclick = function () {
    let newSlide = currentSlide + 1;
    slideSwitch(validSlideNumberCheck(newSlide));
}