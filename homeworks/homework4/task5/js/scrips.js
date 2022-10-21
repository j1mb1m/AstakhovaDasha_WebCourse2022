var bttn = document.getElementById("submitButton");

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function generateCards() {

    const width = 571;
    const height = -2577;
    let count = 1;

    const contacts = document.getElementById("contacts");

    for (y = 0; y < 13; y++) {
        for (x = 0; x < 4; x++) {
            if (y == 12 && (x == 1 || x == 3)) {

            } else {
                let position = "" + (x * width / 4) + "px " + (y * height / 13) + "px ";
                let div = document.createElement('div');
                div.style.backgroundPosition = position;
                div.id = "card" + count;            
                div.className = "card";

                count++;
                contacts.appendChild(div);
            }
        }
    }
}

function showCards() {

    const width = 571;
    const height = -2577;
    let count = 1;

    let array = document.getElementsByClassName("card");

    for (y = 0; y < 13; y++) {
        for (x = 0; x < 4; x++) {
            if (y == 12 && (x == 1 || x == 3)) {

            } else {
                let position = "" + (x * width / 4) + "px " + (y * height / 13) + "px ";
                array[count-1].style.backgroundPosition = position;
                array[count-1].style.marginLeft = "0px";
            }
            count++;
        }
    }
}

async function moveCards() { 

    let array = document.getElementsByClassName("card");
    for (let i = 1; i < array.length; i++) {
        for (let j = 142; j >= 0; j= j-2){
        array[i].style.marginLeft = "-" + (142 -j) + "px";
        await sleep(2);  
        }
     }

}

function shuffleСards() {

    let array = document.getElementsByClassName("card");
    let array_pos = new Array();

    for (let i = 0; i < array.length; i++) {
        array_pos[i] = array[i].style.backgroundPosition;        
     }

     for (let i = 0; i < array_pos.length; i++) {
        let x = getRandomInt(array_pos.length);
        let y = getRandomInt(array_pos.length);

        let temp = array_pos[y];
        array_pos[y] = array_pos[x];
        array_pos[x] = temp;      
     } 

     for (let i = 0; i < array_pos.length; i++) {
        array[i].style.backgroundPosition = array_pos[i] ;        
     } 

}


