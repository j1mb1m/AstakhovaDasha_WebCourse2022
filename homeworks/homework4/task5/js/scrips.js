var bttn = document.getElementById("submitButton");

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}


function showCards() {

    const width = 571;
    const height = -2577;
    let count = 1;

    for (y = 0; y < 13; y++) {
        for (x = 0; x < 4; x++) {
            if (y == 12 && (x == 1 || x == 3)) {

            } else {
                let position = "" + (x * width / 4) + "px " + (y * height / 13) + "px ";
                let div = document.createElement('div');
                div.style.backgroundPosition = position;
                div.id = "card" + count;
                if (count > 1) {
                    div.className = "card";
                }
                count++;
                document.body.append(div);
            }
        }
    }

    moveCards();

}

async function moveCards() {

    await sleep(3000);  

    let array = document.getElementsByClassName("card");
    for (let i = 0; i < array.length; i++) {
        for (let j = 142; j >= 0; j= j-2){
        array[i].style.marginLeft = "-" + (142 -j) + "px";
        await sleep(2);  
        }
     }

}


