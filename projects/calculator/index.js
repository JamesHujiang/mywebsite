const inputDisplay = document.getElementById("inputDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function append(text){
    inputDisplay.value += text;
}

function clearDisplay(){
    inputDisplay.value = "";
}

function calculate(){
    try{
        resultDisplay.textContent = eval(inputDisplay.value);
    }
    catch(error){
        resultDisplay.textContent = "Error"
    }
}

