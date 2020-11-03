window.addEventListener("load", start);

function start() {
    console.log("function start()")
    document.querySelector("#trump-sprite").classList.remove("trump2-sprite");
    document.querySelector("#trump-sprite").classList.add("trump1-sprite");
    document.querySelector("#trump-sprite").classList.add("upDown");
    document.querySelector("#trump-container").classList.add("pos1");
    document.querySelector("#tomatothrow").classList.add("hidden");
    document.querySelector("#trump-sprite").addEventListener("click", stop);
}

function stop() {
    console.log("function stop()");
    document.querySelector("#trump-sprite").classList.add("stop");
    document.querySelector("#tomatothrow").classList.remove("hidden");
    document.querySelector("#tomatothrow").classList.add("zoom_out");
    document.querySelector("#trump-sprite").classList.add("trump2-sprite");
    document.querySelector("#tomatothrow").addEventListener("animationend", restart);
}

function restart() {
    console.log("function restart()")
    document.querySelector("#trump-sprite").classList.remove("stop")
    document.querySelector("#trump-sprite").classList.remove("upDown");
    document.querySelector("#trump-container").classList.remove("pos1");
    document.querySelector("#trump-container").offsetHeight;
    start();
}



//------------Tomato on aside---------------

var image_tracker = "t";
function splash() {
    var image = document.getElementById("tomato");
    if(image_tracker=='t'){
    image.src = "design/splash.svg";
        image_tracker = "s";
    }
    else {image.src = "design/tomato.svg";
          image_tracker = "t";
         }
}

