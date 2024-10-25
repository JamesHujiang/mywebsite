const numBox = document.getElementById('numBox');
const cToF = document.getElementById('cToF');
const fToC = document.getElementById('fToC');
const result = document.getElementById('result');

let temp
function converter(){
    temp = Number(numBox.value);
    if (cToF.checked){
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + '°F';
    }
    else if (fToC.checked){
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + '°C';
    }
    else {
        result.textContent = 'Please select a unit!';
    }
}