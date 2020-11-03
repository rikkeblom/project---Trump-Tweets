window.addEventListener("load", start);

function start() {
    console.log("function start()")
    document.querySelector("#trump1-sprite").classList.add("upDown");
    document.querySelector("#trump1-container").classList.add("pos1");
    document.querySelector("#trump1-sprite").addEventListener("click", stop);
}

function stop() {
    console.log("function stop()");
    document.querySelector("#trump1-sprite").classList.add("stop");
    restart();
}

function restart() {
    console.log("function restart()")
    document.querySelector("#trump1-sprite").classList.remove("stop")
    document.querySelector("#trump1-sprite").classList.remove("upDown");
    document.querySelector("#trump1-container").classList.remove("pos1");
    document.querySelector("#trump1-container").offsetHeight;
    start();
}

