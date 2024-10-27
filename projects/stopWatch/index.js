let timer;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if (!isRunning){
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if (isRunning){
        clearInterval(timer);
        isRunning = false;

    }
}

function reset(){
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    update();
}

function update(){
    let hours = Math.floor(elapsedTime / (100 * 60 * 60) % 60).toString().padStart(2, 0);
    let minuts = Math.floor(elapsedTime / (100 * 60) % 60).toString().padStart(2, 0);
    let seconds = Math.floor(elapsedTime / 100 % 60).toString().padStart(2, 0);
    let milliseconds = (elapsedTime % 100).toString().padStart(2, 0);

    document.getElementById('display').textContent = `${hours}:${minuts}:${seconds}:${milliseconds}`;
    elapsedTime ++;
}



