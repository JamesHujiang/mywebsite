const decBut = document.getElementById('decreaseBtn');
const resBut = document.getElementById('resetBtn');
const incBut = document.getElementById('increaseBtn');
const countLab = document.getElementById('countNumber');

let count = 0

decBut.onclick = function(){
    count--;
    countLab.textContent = count;
};

resBut.onclick = function(){
    count = 0;
    countLab.textContent = count;
};

incBut.onclick = function(){
    count++;
    countLab.textContent = count;
};

document.getElementById('theNumber').textContent = countNumber;