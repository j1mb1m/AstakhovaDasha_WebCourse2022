

function show() {
    var entityStar = document.getElementById("inp_1");
    var countStar = entityStar.value;
    entityStar.value = "";

    var entityStars = document.getElementById("stars");
    var x = "";
    for (var i = 0; i < countStar; i++) {
        x += "<div class = \"star_empty\"></div>";    
    }

    entityStars.innerHTML = x;
}

window.onload = show;