let btnUpBaker = document.getElementById("btnUpBaker");
let btnDownBaker = document.getElementById("btnDownBaker");
let slidesBaker  = document.getElementsByClassName("baker__slide");
let descriptionsBaker  = document.getElementsByClassName("baker__slide_description");


let currentSlideBaker  = 0;

let buttonsBaker  = document.getElementsByClassName('baker__slider');

for (let i = 0; i < buttonsBaker .length; i++) {
    buttonsBaker [i].addEventListener('click', function () {
        slideSwitch(buttonsBaker [i].dataset.name)
    });
}

function slideSwitch(slideNumber) {
    if (typeof slideNumber === 'number') {
        for (let i = 0; i < slidesBaker.length; i++) {
            if (i != slideNumber) {
                descriptionsBaker [i * 2].classList.remove('baker__slide_description_active');
                descriptionsBaker [i * 2 + 1].classList.add('baker__slide_description_active');
            } else {
                descriptionsBaker [i * 2].classList.add('baker__slide_description_active');
                descriptionsBaker [i * 2 + 1].classList.remove('baker__slide_description_active');
            }
        }
    } 
}

function validSlideNumberCheck(slideNumber) {
    let validNumber = slideNumber;

    if (slideNumber < 0) {
        validNumber = slidesBaker.length - 1;
    } else if (slideNumber > slidesBaker.length - 1) {
        validNumber = 0;
    }

    currentSlideBaker  = validNumber;

    return currentSlideBaker ;
}

btnUpBaker.onclick = function () {
    let newSlide = currentSlideBaker  - 1;
    slideSwitch(validSlideNumberCheck(newSlide));
}

btnDownBaker.onclick = function () {
    let newSlide = currentSlideBaker  + 1;
    slideSwitch(validSlideNumberCheck(newSlide));
}