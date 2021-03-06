window.addEventListener("load", frontPage);
let score = 0;
let lives = 3;
let p;
let timeLeft = 60;
let gameIsPaused = false;
let gameHasEnded = false;
let backMusic = document.querySelector("#backMus");
let tomatoSound = document.querySelector("#tomatoSound");
let splatSound = document.querySelector("#splatSound");
let electricitySound = document.querySelector("#electricitySound");
let loseSound1 = document.querySelector("#loseTrump");
let loseSound2 = document.querySelector("#loseWauWau");
let tremendusSound = document.querySelector("#tremendus");
let clickSound = document.querySelector("#clickSound");
let tadaSound = document.querySelector("#tadaSound");
let manSound = document.querySelector("#manSound")
let womanSound = document.querySelector("#womanSound")

function frontPage() {
    document.querySelector("#gamescreen").classList.add("hidden");
    document.querySelector("#losescreen").classList.add("hidden");
    document.querySelector("#winscreen").classList.add("hidden");
    document.querySelector("#startscreen").classList.remove("hidden");
    document.querySelector("#startbutton").addEventListener("click", start);
    document.querySelector("#howtoplaybutton").addEventListener("click", openInstruction);
    document.querySelector("#startbutton").addEventListener("click", playClickSound);
    document.querySelector("#howtoplaybutton").addEventListener("click", playClickSound);

    electricitySound.muted = true;
    backMusic.muted = true;
    loseSound1.muted = true;
    loseSound2.muted = true;
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

    document.querySelector("#timer2").classList.add("countdown");

    lives = 3;
    timeLeft = 60;
    score = 0;
    let p;
    gameIsPaused = false;
    gameHasEnded = false;
    document.querySelector("#currentScore").textContent = score;

    backMusic.muted = false;
    backMusic.currentTime = 0;
    tomatoSound.muted = false;
    tremendusSound.muted = false;
    loseSound1.muted = true;
    loseSound2.muted = true;
    document.querySelector("#sound").classList.remove("soundoff");
    document.querySelector("#sound").classList.add("soundon");
    electricitySound.muted = true;
    womanSound.muted = false;
    manSound.muted = false;

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

    document.querySelector("#pause").addEventListener("click", pauseGame);
    document.querySelector("#sound").addEventListener("click", muteSound);
    startTimer();
    playBackgroundMusic();

    //    document.querySelector("#h1").addEventListener("click", gainLife);
    //    document.querySelector("#h3").addEventListener("click", loseLife);
}

function playBackgroundMusic() {
    console.log("function playBackgroundMusic()");
    backMusic.play();
    backMusic.volume = 0.2;
    backMusic.loop = true;
}

function playTomatoSound() {
    console.log("function playTomatoSound()");
    tomatoSound.play();
    tomatoSound.volume = 1;
}

function playSplatSound() {
    console.log("function playSplatSound()");
    splatSound.play();
    splatSound.volume = 0.2;
}

function playElectricitySound() {
    console.log("function playElectricitySound()");
    electricitySound.play();
    electricitySound.loop = true;
}

function playLoseSound1() {
    console.log("playLoseSound1()");
    loseSound1.play();
    loseSound1.loop = true;
    loseSound1.volume = 0.3;
    loseSound1.muted = false;
}

function playLoseSound2() {
    console.log("playLoseSound2()");
    loseSound2.muted = false;
    loseSound2.play();
}

function playClickSound() {
clickSound.play();
clickSound.currentTime = 0;
}

function playTremendusSound() {
    tremendusSound.play();
    tremendusSound.volume = 0.7;
}

function playTadaSound() {
    tadaSound.play();
    tadaSound.volume = 0.2;
}

function playWomanSound(){
    womanSound.play();
}

function playManSound(){
    manSound.play();
}

function showTime() {
    if (timeLeft > 0) {
        timeLeft--;
        startTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    if (gameIsPaused == false) {
        if (timeLeft == 0) {
            if (lives > 0) {
                youWin();
            } else {
                gameOver();
            }
        } else {
            setTimeout(showTime, 1000);
        }
        console.log("time left: " + timeLeft)
    }
}

function gainLife() {
    lives = lives + 1;
    document.querySelector("#h" + lives).classList.remove("heart2");
    document.querySelector("#h" + lives).classList.add("heart1");
    console.log("you have " + lives + " lives");
//this function is only in here for testing purposes
}

function loseLife() {
    if (lives > 1) {
        document.querySelector("#h" + lives).classList.remove("heart1");
        document.querySelector("#h" + lives).classList.add("heart2");
        lives = lives - 1;
        console.log("you have " + lives + " lives");
    } else {
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
    document.querySelector("#trump-sprite").addEventListener("animationiteration", playTremendusSound);
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
    setTimeout(splatTrump, 501);
    playTomatoSound();
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
    setTimeout(splatWoman, 501);
    playTomatoSound();
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
    setTimeout(splatMan, 501);
    playTomatoSound();
}

function splatTrump() {
    console.log("function splatTrump()");
    console.log("#t" + p + "s");
    document.querySelector("#t" + p + "s").classList.remove("hidden");
    document.querySelector("#t" + p + "s").classList.add("zoom_in");
    document.querySelector("#t" + p + "s").addEventListener("animationend", restartTrump);
    setTimeout(restartTrump, 151)
}

function splatWoman() {
    console.log("function splatWoman()");
    playWomanSound();
    document.querySelector("#t" + p + "s").classList.remove("hidden");
    document.querySelector("#t" + p + "s").classList.add("zoom_in");
    document.querySelector("#t" + p + "s").addEventListener("animationend", restartWoman);
    setTimeout(restartWoman, 151);
}

function splatMan() {
    console.log("function splatMan()");
    playManSound();
    document.querySelector("#t" + p + "s").classList.remove("hidden");
    document.querySelector("#t" + p + "s").classList.add("zoom_in");
    document.querySelector("#t" + p + "s").addEventListener("animationend", restartMan);
    setTimeout(restartMan, 151);
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

function gameOver() {
    console.log("function gameOver()");

    // Checking the game running status
    if (gameHasEnded == false) {

        timeLeft = 0;

        // remove all classes
        document.querySelector("#trump-sprite").classList.value = "";
        document.querySelector("#man-sprite").classList.value = "";
        document.querySelector("#woman-sprite").classList.value = "";
        document.querySelector("#trump-container").classList.value = "";
        document.querySelector("#man-container").classList.value = "";
        document.querySelector("#woman-container").classList.value = "";
        document.querySelector("#tpos1").classList.value = "";
        document.querySelector("#tpos1s").classList.value = "";
        document.querySelector("#tpos2").classList.value = "";
        document.querySelector("#tpos2s").classList.value = "";
        document.querySelector("#tpos3").classList.value = "";
        document.querySelector("#tpos3s").classList.value = "";
        document.querySelector("#tpos4").classList.value = "";
        document.querySelector("#tpos4s").classList.value = "";
        document.querySelector("#tpos5").classList.value = "";
        document.querySelector("#tpos5s").classList.value = "";
        document.querySelector("#tpos6").classList.value = "";
        document.querySelector("#tpos6s").classList.value = "";
        document.querySelector("#timer2").classList.value = "";

        // Remove all eventListeners
        document.querySelector("#tpos1s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos1s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos1s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos2s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos2s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos2s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos3s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos3s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos3s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos4s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos4s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos4s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos5s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos5s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos5s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos6s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos6s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos6s").removeEventListener("animationend", restartTrump);

        document.querySelector("#tpos1").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos1").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos1").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos2").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos2").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos2").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos3").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos3").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos3").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos4").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos4").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos4").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos5").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos5").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos5").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos6").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos6").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos6").removeEventListener("animationend", splatTrump);

        document.querySelector("#man-sprite").removeEventListener("click", stopMan);
        document.querySelector("#woman-sprite").removeEventListener("click", stopWoman);
        document.querySelector("#trump-sprite").removeEventListener("click", stopTrump);

        document.querySelector("#man-sprite").removeEventListener("animationiteration", newPosMan);
        document.querySelector("#woman-sprite").removeEventListener("animationiteration", newPosWoman);
        document.querySelector("#trump-sprite").removeEventListener("animationiteration", newPosTrump);

        document.querySelector("#trump-sprite").removeEventListener("animationiteration", loseLife);

        // Show gameOverScreen
        document.querySelector("#gamescreen").classList.add("hidden");
        document.querySelector("#losescreen").classList.remove("hidden");

        // Adding a "Restart Game" button
        document.querySelector("#homebutton2").addEventListener("click", frontPage);
        document.querySelector("#tryagainbutton").addEventListener("click", start);

//        //End background music
//        backMusic.muted = true;

        // changing the game running status
        gameHasEnded = true;
        
        if (backMusic.muted == false){
        playLoseSound1();
        playLoseSound2();
        }
    }
}

function youWin() {
    console.log("function youWin()");
    // Checking the game running status
    if (gameHasEnded == false) {

        timeLeft = 0;

        // remove all classes
        document.querySelector("#trump-sprite").classList.value = "";
        document.querySelector("#man-sprite").classList.value = "";
        document.querySelector("#woman-sprite").classList.value = "";
        document.querySelector("#trump-container").classList.value = "";
        document.querySelector("#man-container").classList.value = "";
        document.querySelector("#woman-container").classList.value = "";
        document.querySelector("#tpos1").classList.value = "";
        document.querySelector("#tpos1s").classList.value = "";
        document.querySelector("#tpos2").classList.value = "";
        document.querySelector("#tpos2s").classList.value = "";
        document.querySelector("#tpos3").classList.value = "";
        document.querySelector("#tpos3s").classList.value = "";
        document.querySelector("#tpos4").classList.value = "";
        document.querySelector("#tpos4s").classList.value = "";
        document.querySelector("#tpos5").classList.value = "";
        document.querySelector("#tpos5s").classList.value = "";
        document.querySelector("#tpos6").classList.value = "";
        document.querySelector("#tpos6s").classList.value = "";
        document.querySelector("#timer2").classList.value = "";

        // Remove all eventListeners
        document.querySelector("#tpos1s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos1s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos1s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos2s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos2s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos2s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos3s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos3s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos3s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos4s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos4s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos4s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos5s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos5s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos5s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos6s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos6s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos6s").removeEventListener("animationend", restartTrump);

        document.querySelector("#tpos1").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos1").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos1").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos2").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos2").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos2").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos3").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos3").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos3").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos4").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos4").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos4").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos5").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos5").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos5").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos6").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos6").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos6").removeEventListener("animationend", splatTrump);

        document.querySelector("#man-sprite").removeEventListener("click", stopMan);
        document.querySelector("#woman-sprite").removeEventListener("click", stopWoman);
        document.querySelector("#trump-sprite").removeEventListener("click", stopTrump);

        document.querySelector("#man-sprite").removeEventListener("animationiteration", newPosMan);
        document.querySelector("#woman-sprite").removeEventListener("animationiteration", newPosWoman);
        document.querySelector("#trump-sprite").removeEventListener("animationiteration", newPosTrump);

        document.querySelector("#trump-sprite").removeEventListener("animationiteration", loseLife);

        // Show winScreen
        document.querySelector("#gamescreen").classList.add("hidden");
        document.querySelector("#winscreen").classList.remove("hidden");
        document.querySelector("#finalScore").textContent = score + " tweets";
        playElectricitySound();
        playTadaSound();

        // Adding a "Restart Game" button
        document.querySelector("#homebutton1").addEventListener("click", frontPage);
        document.querySelector("#playagainbutton").addEventListener("click", start);

        // changing the game running status
        gameHasEnded = true;
        
        if (backMusic.muted == false){
            playElectricitySound();
            playTadaSound();
        }
    }
}

function openInstruction() {
    console.log("function openInstruction()")
    document.querySelector("#instructionsscreen").classList.remove("hidden");
    document.querySelector("#closeinstructions").classList.remove("hidden");
    document.querySelector("#closeinstructions").addEventListener("click", closeInstruction);
    document.querySelector("#closeinstructions").addEventListener("click", playClickSound);
}

function closeInstruction() {
    console.log("function closeInstruction()")
    document.querySelector("#instructionsscreen").classList.add("hidden");
    document.querySelector("#closeinstructions").classList.add("hidden");
    document.querySelector("#closeinstructions").removeEventListener("click", closeInstruction);
}

function pauseGame() {
    if (gameIsPaused == false) {
        console.log("Game is Paused");
        playClickSound();
        document.querySelector("#pause").classList.remove("pause1");
        document.querySelector("#pause").classList.add("pause2");

        //pause all animations
        document.querySelector("#trump-sprite").classList.add("stop");
        document.querySelector("#man-sprite").classList.add("stop");
        document.querySelector("#woman-sprite").classList.add("stop");

        document.querySelector("#trump-container").classList.add("stop");
        document.querySelector("#man-container").classList.add("stop");
        document.querySelector("#woman-container").classList.add("stop");

        document.querySelector("#tpos1").classList.add("stop");
        document.querySelector("#tpos1s").classList.add("stop");
        document.querySelector("#tpos2").classList.add("stop");
        document.querySelector("#tpos2s").classList.add("stop");
        document.querySelector("#tpos3").classList.add("stop");
        document.querySelector("#tpos3s").classList.add("stop");
        document.querySelector("#tpos4").classList.add("stop");
        document.querySelector("#tpos4s").classList.add("stop");
        document.querySelector("#tpos5").classList.add("stop");
        document.querySelector("#tpos5s").classList.add("stop");
        document.querySelector("#tpos6").classList.add("stop");
        document.querySelector("#tpos6s").classList.add("stop");

        document.querySelector("#timer2").classList.add("stop");

        //remove all event listeners
        document.querySelector("#tpos1s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos1s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos1s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos2s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos2s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos2s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos3s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos3s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos3s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos4s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos4s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos4s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos5s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos5s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos5s").removeEventListener("animationend", restartTrump);
        document.querySelector("#tpos6s").removeEventListener("animationend", restartMan);
        document.querySelector("#tpos6s").removeEventListener("animationend", restartWoman);
        document.querySelector("#tpos6s").removeEventListener("animationend", restartTrump);

        document.querySelector("#tpos1").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos1").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos1").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos2").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos2").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos2").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos3").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos3").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos3").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos4").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos4").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos4").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos5").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos5").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos5").removeEventListener("animationend", splatTrump);
        document.querySelector("#tpos6").removeEventListener("animationend", splatMan);
        document.querySelector("#tpos6").removeEventListener("animationend", splatWoman);
        document.querySelector("#tpos6").removeEventListener("animationend", splatTrump);

        document.querySelector("#man-sprite").removeEventListener("click", stopMan);
        document.querySelector("#woman-sprite").removeEventListener("click", stopWoman);
        document.querySelector("#trump-sprite").removeEventListener("click", stopTrump);

        document.querySelector("#man-sprite").removeEventListener("animationiteration", newPosMan);
        document.querySelector("#woman-sprite").removeEventListener("animationiteration", newPosWoman);
        document.querySelector("#trump-sprite").removeEventListener("animationiteration", newPosTrump);

        document.querySelector("#trump-sprite").removeEventListener("animationiteration", loseLife);

        gameIsPaused = true;

    } else {
        playClickSound();
        console.log("Game is NOT Paused");

        document.querySelector("#pause").classList.remove("pause2");
        document.querySelector("#pause").classList.add("pause1");

        //remove all pause classes
        document.querySelector("#trump-sprite").classList.remove("stop");
        document.querySelector("#man-sprite").classList.remove("stop");
        document.querySelector("#woman-sprite").classList.remove("stop");

        document.querySelector("#trump-container").classList.remove("stop");
        document.querySelector("#man-container").classList.remove("stop");
        document.querySelector("#woman-container").classList.remove("stop");

        document.querySelector("#tpos1").classList.remove("stop");
        document.querySelector("#tpos1s").classList.remove("stop");
        document.querySelector("#tpos2").classList.remove("stop");
        document.querySelector("#tpos2s").classList.remove("stop");
        document.querySelector("#tpos3").classList.remove("stop");
        document.querySelector("#tpos3s").classList.remove("stop");
        document.querySelector("#tpos4").classList.remove("stop");
        document.querySelector("#tpos4s").classList.remove("stop");
        document.querySelector("#tpos5").classList.remove("stop");
        document.querySelector("#tpos5s").classList.remove("stop");
        document.querySelector("#tpos6").classList.remove("stop");
        document.querySelector("#tpos6s").classList.remove("stop");

        document.querySelector("#timer2").classList.remove("stop");

        //add all event listerners back
        document.querySelector("#tpos1s").addEventListener("animationend", restartMan);
        document.querySelector("#tpos1s").addEventListener("animationend", restartWoman);
        document.querySelector("#tpos1s").addEventListener("animationend", restartTrump);
        document.querySelector("#tpos2s").addEventListener("animationend", restartMan);
        document.querySelector("#tpos2s").addEventListener("animationend", restartWoman);
        document.querySelector("#tpos2s").addEventListener("animationend", restartTrump);
        document.querySelector("#tpos3s").addEventListener("animationend", restartMan);
        document.querySelector("#tpos3s").addEventListener("animationend", restartWoman);
        document.querySelector("#tpos3s").addEventListener("animationend", restartTrump);
        document.querySelector("#tpos4s").addEventListener("animationend", restartMan);
        document.querySelector("#tpos4s").addEventListener("animationend", restartWoman);
        document.querySelector("#tpos4s").addEventListener("animationend", restartTrump);
        document.querySelector("#tpos5s").addEventListener("animationend", restartMan);
        document.querySelector("#tpos5s").addEventListener("animationend", restartWoman);
        document.querySelector("#tpos5s").addEventListener("animationend", restartTrump);
        document.querySelector("#tpos6s").addEventListener("animationend", restartMan);
        document.querySelector("#tpos6s").addEventListener("animationend", restartWoman);
        document.querySelector("#tpos6s").addEventListener("animationend", restartTrump);

        document.querySelector("#tpos1").addEventListener("animationend", splatMan);
        document.querySelector("#tpos1").addEventListener("animationend", splatWoman);
        document.querySelector("#tpos1").addEventListener("animationend", splatTrump);
        document.querySelector("#tpos2").addEventListener("animationend", splatMan);
        document.querySelector("#tpos2").addEventListener("animationend", splatWoman);
        document.querySelector("#tpos2").addEventListener("animationend", splatTrump);
        document.querySelector("#tpos3").addEventListener("animationend", splatMan);
        document.querySelector("#tpos3").addEventListener("animationend", splatWoman);
        document.querySelector("#tpos3").addEventListener("animationend", splatTrump);
        document.querySelector("#tpos4").addEventListener("animationend", splatMan);
        document.querySelector("#tpos4").addEventListener("animationend", splatWoman);
        document.querySelector("#tpos4").addEventListener("animationend", splatTrump);
        document.querySelector("#tpos5").addEventListener("animationend", splatMan);
        document.querySelector("#tpos5").addEventListener("animationend", splatWoman);
        document.querySelector("#tpos5").addEventListener("animationend", splatTrump);
        document.querySelector("#tpos6").addEventListener("animationend", splatMan);
        document.querySelector("#tpos6").addEventListener("animationend", splatWoman);
        document.querySelector("#tpos6").addEventListener("animationend", splatTrump);

        document.querySelector("#man-sprite").addEventListener("click", stopMan);
        document.querySelector("#woman-sprite").addEventListener("click", stopWoman);
        document.querySelector("#trump-sprite").addEventListener("click", stopTrump);

        document.querySelector("#man-sprite").addEventListener("animationiteration", newPosMan);
        document.querySelector("#woman-sprite").addEventListener("animationiteration", newPosWoman);
        document.querySelector("#trump-sprite").addEventListener("animationiteration", newPosTrump);

        document.querySelector("#trump-sprite").addEventListener("animationiteration", loseLife);

        gameIsPaused = false;
        startTimer();
    }
}

function muteSound() {
    console.log("function muteSound()");
    if(backMusic.muted == false) {
        backMusic.muted = true;
        tomatoSound.muted = true;
        tremendusSound.muted = true;
        womanSound.muted = true;
        manSound.muted = true;
        loseSound1.muted = true;
        loseSound2.muted = true; 
        splatSound.muted = true;
        electricitySound.muted = true;
        tadaSound.muted = true;
        
        document.querySelector("#sound").classList.remove("soundon");
        document.querySelector("#sound").classList.add("soundoff");
        playClickSound();

    } else {
        backMusic.muted = false;
        tomatoSound.muted = false;
        tremendusSound.muted = false;
        womanSound.muted = false;
        manSound.muted = false;
        loseSound1.muted = false;
        loseSound2.muted = false; 
        splatSound.muted = false;
        electricitySound.muted = false;
        tadaSound.muted = false;
        
        document.querySelector("#sound").classList.remove("soundoff");
        document.querySelector("#sound").classList.add("soundon");
        playClickSound();
    }
}

//------------Tomato on aside---------------

let image_tracker = "t";

function splash() {
    let image = document.getElementById("tomato");
    if (image_tracker == 't') {
        image.src = "design/splash.svg";
        image_tracker = "s";
        playSplatSound();
    } else {
        image.src = "design/tomato.svg";
        image_tracker = "t";
    }
}
