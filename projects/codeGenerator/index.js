const codeLenth = 128;
const incNum = 1;
const incLowLet = 1;
const incCapLet = 1;
const incSymb = 1;

const numLib = "0123456789";
const lowLetLib = "abcdefghijklmnopqrstuvwxyz";
const capLetLib = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const symbLib = "-=!@£$%^&*()_+?><~€#"

let codeLib = "";

codeLib += incNum ? numLib : "";
codeLib += incLowLet ? lowLetLib : "";
codeLib += incCapLet ? capLetLib : "";
codeLib += incSymb ? symbLib : "";

let passWord = "";

for(let i = 0; i < codeLenth; i ++){
    passWord += codeLib[Math.floor(Math.random() * codeLib.length)];
}



document.getElementById("myBox").textContent = passWord;
