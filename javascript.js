window.addEventListener("load", frontPage);
let score = 0;
let lives = 3;
let p;
let timeLeft = 60;

function frontPage() {
    document.querySelector("#gamescreen").classList.add("hidden");
    document.querySelector("#losescreen").classList.add("hidden");
    document.querySelector("#winscreen").classList.add("hidden");
    document.querySelector("#startscreen").classList.remove("hidden");
    document.querySelector("#startbutton").addEventListener("click", start);
    document.querySelector("#howtoplaybutton").addEventListener("click", openInstruction);
}

function start() {
    console.log("function start()");
    document.querySelector("#gamescreen").classList.remove("hidden");
    document.querySelector("#losescreen").classList.add("hidden");
    document.querySelector("#winscreen").classList.add("hidden");
    document.querySelector("#startscreen").classList.add("hidden");

    document.querySelector("#h1").classList.remove("heart2");
    document.querySelector("#h2").classList.remove("heart2");
    document.querySelector("#h3").classList.remove("heart2");
    document.querySelector("#h1").classList.add("heart1");
    document.querySelector("#h2").classList.add("heart1");
    document.querySelector("#h3").classList.add("heart1");

    lives = 3;
    timeLeft = 60;
    score = 0;
    let p;
    document.querySelector("#currentScore").textContent = score;

    document.querySelector("#tpos1").classList.add("hidden");
    document.querySelector("#tpos1s").classList.add("hidden");
    document.querySelector("#tpos2").classList.add("hidden");
    document.querySelector("#tpos2s").classList.add("hidden");
    document.querySelector("#tpos3").classList.add("hidden");
    document.querySelector("#tpos3s").classList.add("hidden");
    document.querySelector("#tpos4").classList.add("hidden");
    document.querySelector("#tpos4s").classList.add("hidden");
    document.querySelector("#tpos5").classList.add("hidden");
    document.querySelector("#tpos5s").classList.add("hidden");
    document.querySelector("#tpos6").classList.add("hidden");
    document.querySelector("#tpos6s").classList.add("hidden");

    document.querySelector("#trump-sprite").classList.remove("trump2-sprite");
    document.querySelector("#trump-sprite").classList.add("trump1-sprite");
    document.querySelector("#trump-sprite").classList.add("upDown");
    document.querySelector("#trump-container").classList.value = "";
    document.querySelector("#trump-container").classList.add("pos1");
    document.querySelector("#trump-sprite").addEventListener("animationiteration", newPosTrump);
    document.querySelector("#trump-sprite").addEventListener("click", stopTrump);

    document.querySelector("#woman-sprite").classList.remove("woman2-sprite");
    document.querySelector("#woman-sprite").classList.add("woman1-sprite");
    document.querySelector("#woman-sprite").classList.add("upDown");
    document.querySelector("#woman-container").classList.add("pos2");
    document.querySelector("#woman-sprite").addEventListener("animationiteration", newPosWoman);
    document.querySelector("#woman-sprite").addEventListener("click", stopWoman);

    document.querySelector("#man-sprite").classList.remove("man2-sprite");
    document.querySelector("#man-sprite").classList.add("man1-sprite");
    document.querySelector("#man-sprite").classList.add("upDown");
    document.querySelector("#man-container").classList.add("pos3");
    document.querySelector("#man-sprite").addEventListener("animationiteration", newPosMan);
    document.querySelector("#man-sprite").addEventListener("click", stopMan);

    document.querySelector("#pause").addEventListener("click", globalPause);
    showTime();

    //    document.querySelector("#h1").addEventListener("click", gainLife);
    //    document.querySelector("#h3").addEventListener("click", loseLife);
}

function showTime() {
    if (timeLeft > 0) {
        timeLeft--;
        startTimer();
    } else {
        gameOver();
    }
}

function startTimer() {
    if (timeLeft == 0) {
        gameOver();
    } else {
        setTimeout(showTime, 1000);
    }
    console.log("time left: " +timeLeft)
}

function gainLife() {
    lives = lives + 1;
    document.querySelector("#h" + lives).classList.remove("heart2");
    document.querySelector("#h" + lives).classList.add("heart1");
    console.log("you have " + lives + " lives");
}

function loseLife() {
    if (lives > 1) {
    document.querySelector("#h" + lives).classList.remove("heart1");
    document.querySelector("#h" + lives).classList.add("heart2");
    lives = lives - 1;
    console.log("you have " + lives + " lives");
    }else {
    document.querySelector("#h" + lives).classList.remove("heart1");
    document.querySelector("#h" + lives).classList.add("heart2");
    lives = lives - 1;
    console.log("you have " + lives + " lives");
    setTimeout(gameOver, 500)
    }
}

function newPosTrump() {
    console.log("newPosTrump()");
    document.querySelector("#tpos1").classList.add("hidden");
    document.querySelector("#tpos1s").classList.add("hidden");
    document.querySelector("#tpos2").classList.add("hidden");
    document.querySelector("#tpos2s").classList.add("hidden");
    document.querySelector("#tpos3").classList.add("hidden");
    document.querySelector("#tpos3s").classList.add("hidden");
    document.querySelector("#tpos4").classList.add("hidden");
    document.querySelector("#tpos4s").classList.add("hidden");
    document.querySelector("#tpos5").classList.add("hidden");
    document.querySelector("#tpos5s").classList.add("hidden");
    document.querySelector("#tpos6").classList.add("hidden");
    document.querySelector("#tpos6s").classList.add("hidden");

    document.querySelector("#trump-container").classList.value = "";
    document.querySelector("#trump-container").offsetHeight;
    document.querySelector("#trump-sprite").classList.remove("trump2-sprite");
    document.querySelector("#trump-sprite").classList.add("trump1-sprite");
    document.querySelector("#trump-sprite").classList.add("upDown");
    let randPos = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#trump-container").classList.add("pos" + randPos);
    console.log("pos" + randPos);
    document.querySelector("#trump-sprite").addEventListener("animationiteration", newPosTrump);
    document.querySelector("#trump-sprite").addEventListener("animationiteration", loseLife);
    document.querySelector("#trump-sprite").addEventListener("click", stopTrump);
}

function newPosWoman() {
    console.log("newPosWoman()");
    document.querySelector("#tpos1").classList.add("hidden");
    document.querySelector("#tpos1s").classList.add("hidden");
    document.querySelector("#tpos2").classList.add("hidden");
    document.querySelector("#tpos2s").classList.add("hidden");
    document.querySelector("#tpos3").classList.add("hidden");
    document.querySelector("#tpos3s").classList.add("hidden");
    document.querySelector("#tpos4").classList.add("hidden");
    document.querySelector("#tpos4s").classList.add("hidden");
    document.querySelector("#tpos5").classList.add("hidden");
    document.querySelector("#tpos5s").classList.add("hidden");
    document.querySelector("#tpos6").classList.add("hidden");
    document.querySelector("#tpos6s").classList.add("hidden");

    document.querySelector("#woman-container").classList.value = "";
    document.querySelector("#woman-container").offsetHeight;
    document.querySelector("#woman-sprite").classList.remove("woman2-sprite");
    document.querySelector("#woman-sprite").classList.add("woman1-sprite");
    document.querySelector("#woman-sprite").classList.add("upDown");
    let randPos = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#woman-container").classList.add("pos" + randPos);
    console.log("pos" + randPos);
    document.querySelector("#woman-sprite").addEventListener("animationiteration", newPosWoman);
    document.querySelector("#woman-sprite").addEventListener("click", stopWoman);
}

function newPosMan() {
    console.log("newPosMan()");
    document.querySelector("#tpos1").classList.add("hidden");
    document.querySelector("#tpos1s").classList.add("hidden");
    document.querySelector("#tpos2").classList.add("hidden");
    document.querySelector("#tpos2s").classList.add("hidden");
    document.querySelector("#tpos3").classList.add("hidden");
    document.querySelector("#tpos3s").classList.add("hidden");
    document.querySelector("#tpos4").classList.add("hidden");
    document.querySelector("#tpos4s").classList.add("hidden");
    document.querySelector("#tpos5").classList.add("hidden");
    document.querySelector("#tpos5s").classList.add("hidden");
    document.querySelector("#tpos6").classList.add("hidden");
    document.querySelector("#tpos6s").classList.add("hidden");

    document.querySelector("#man-container").classList.value = "";
    document.querySelector("#man-container").offsetHeight;
    document.querySelector("#man-sprite").classList.remove("man2-sprite");
    document.querySelector("#man-sprite").classList.add("man1-sprite");
    document.querySelector("#man-sprite").classList.add("upDown");
    let randPos = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#man-container").classList.add("pos" + randPos);
    console.log("pos" + randPos);
    document.querySelector("#man-sprite").addEventListener("animationiteration", newPosMan);
    document.querySelector("#man-sprite").addEventListener("click", stopMan);
}

function stopTrump() {
    console.log("function stopTrump()");
    document.querySelector("#trump-sprite").classList.add("stop");
    p = this.parentElement.classList;
    console.log("pos " + p);
    document.querySelector("#t" + p).classList.remove("hidden");
    document.querySelector("#t" + p).classList.add("zoom_out");
    document.querySelector("#trump-sprite").classList.add("trump2-sprite");
    document.querySelector("#t" + p).addEventListener("animationend", splatTrump);
    score = score + 1;
    document.querySelector("#currentScore").textContent = score;
}

function stopWoman() {
    console.log("function stopWoman()");
    p = this.parentElement.classList;
    console.log("#pos" + p);
    this.classList.add("stop");
    document.querySelector("#t" + p).classList.remove("hidden");
    document.querySelector("#t" + p).classList.add("zoom_out");
    this.classList.add("woman2-sprite");
    loseLife();
    document.querySelector("#t" + p).addEventListener("animationend", splatWoman);
}

function stopMan() {
    console.log("function stopMan()");
    p = this.parentElement.classList;
    console.log("#pos" + p);
    this.classList.add("stop");
    document.querySelector("#t" + p).classList.remove("hidden");
    document.querySelector("#t" + p).classList.add("zoom_out");
    this.classList.add("man2-sprite");
    loseLife();
    document.querySelector("#t" + p).addEventListener("animationend", splatMan);
}

function splatTrump() {
    console.log("function splatTrump()");
    console.log("#t" + p + "s");
    document.querySelector("#t" + p + "s").classList.remove("hidden");
    document.querySelector("#t" + p + "s").classList.add("zoom_in");
    document.querySelector("#t" + p + "s").addEventListener("animationend", restartTrump);
}

function splatWoman() {
    console.log("function splatWoman()");
    document.querySelector("#t" + p + "s").classList.remove("hidden");
    document.querySelector("#t" + p + "s").classList.add("zoom_in");
    document.querySelector("#t" + p + "s").addEventListener("animationend", restartWoman);
}

function splatMan() {
    console.log("function splatMan()");
    document.querySelector("#t" + p + "s").classList.remove("hidden");
    document.querySelector("#t" + p + "s").classList.add("zoom_in");
    document.querySelector("#t" + p + "s").addEventListener("animationend", restartMan);
}

function restartTrump() {
    console.log("function restartTrump()");
    document.querySelector("#trump-sprite").classList.remove("stop");
    document.querySelector("#trump-sprite").classList.remove("upDown");
    document.querySelector("#trump-container").classList.value = "";
    document.querySelector("#trump-container").offsetHeight;
    newPosTrump();
}

function restartWoman() {
    console.log("function restartWoman()");
    document.querySelector("#woman-sprite").classList.remove("stop");
    document.querySelector("#woman-sprite").classList.remove("upDown");
    document.querySelector("#woman-container").classList.value = "";
    document.querySelector("#woman-container").offsetHeight;
    newPosWoman();
}

function restartMan() {
    console.log("function restartMan()");
    document.querySelector("#man-sprite").classList.remove("stop");
    document.querySelector("#man-sprite").classList.remove("upDown");
    document.querySelector("#man-container").classList.value = "";
    document.querySelector("#man-container").offsetHeight;
    newPosMan();
}

function globalPause() {
    console.log("function globalPause()")
//    document.querySelector("#woman-sprite").classList.add("stop");
//    document.querySelector("#woman-container").classList.add("stop");
//    document.querySelector("#man-sprite").classList.add("stop");
//    document.querySelector("#man-container").classList.add("stop");
//    document.querySelector("#trump-sprite").classList.add("stop");
//    document.querySelector("#trump-container").classList.add("stop");
//    document.querySelector("#tpos1").classList.add("stop");
//    document.querySelector("#tpos2").classList.add("stop");
//    document.querySelector("#tpos3").classList.add("stop");
//    document.querySelector("#tpos4").classList.add("stop");
//    document.querySelector("#tpos5").classList.add("stop");
//    document.querySelector("#tpos6").classList.add("stop");
//    document.querySelector().classList.add("stop");
}


function gameOver() {
    if (lives > 0) {
    console.log("you win")
    timeLeft = 0;
    document.querySelector("#gamescreen").classList.add("hidden");
    document.querySelector("#winscreen").classList.remove("hidden");
    document.querySelector("#homebutton1").addEventListener("click", returnToMenu);
    document.querySelector("#playagainbutton").addEventListener("click", start);
    } else {
    console.log("you lose");
    timeLeft = 0;
    document.querySelector("#gamescreen").classList.add("hidden");
    document.querySelector("#losescreen").classList.remove("hidden");
    document.querySelector("#homebutton2").addEventListener("click", returnToMenu);
    document.querySelector("#tryagainbutton").addEventListener("click", start);
    }
}

function returnToMenu() {
    document.querySelector("#gamescreen").classList.add("hidden");
    document.querySelector("#losescreen").classList.add("hidden");
    document.querySelector("#winscreen").classList.add("hidden");
    document.querySelector("#startscreen").classList.remove("hidden");
    document.querySelector("#startbutton").addEventListener("click", start);
    document.querySelector("#howtoplaybutton").addEventListener("click", openInstruction);
}

function openInstruction() {
    console.log("function openInstruction()")
    document.querySelector("#instructionsscreen").classList.remove("hidden");
    document.querySelector("#closeinstructions").classList.remove("hidden");
    document.querySelector("#closeinstructions").addEventListener("click", closeInstruction)
}

function closeInstruction() {
    console.log("function closeInstruction()")
    document.querySelector("#instructionsscreen").classList.add("hidden");
    document.querySelector("#closeinstructions").classList.add("hidden");
}


//------------Tomato on aside---------------

var image_tracker = "t";

function splash() {
    var image = document.getElementById("tomato");
    if (image_tracker == 't') {
        image.src = "design/splash.svg";
        image_tracker = "s";
    } else {
        image.src = "design/tomato.svg";
        image_tracker = "t";
    }
}
