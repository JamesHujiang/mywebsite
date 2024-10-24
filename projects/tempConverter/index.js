/*
let myNum = document.getElementById('myNum').value;
// const tempType = document.getElementById('tempType');
const convBt = document.getElementById('convBt');

convBt.onclick() = function(){
    myNum = Number(myNum);
    if (myNum == NaN){
        window.alert('Please input valid number!');
    }
    else {
        window.alert(`myNum`);
    }
}

*/

let myNum = document.getElementById('numBox');
document.getElementById('result').textContent = myNum.value;