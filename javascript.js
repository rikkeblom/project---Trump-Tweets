document.querySelector("#trump1-sprite").classList.add("upDown");
document.querySelector("#trump1-sprite").addEventListener("click", stop);

function stop() {
    console.log("function stop()");
    document.querySelector("#trump1-sprite").classList.add("stop");
}

