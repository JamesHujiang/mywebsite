let running = true;
let attempts = 0;
let minNum = 1;
let maxNum = 100;
let myNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
let guess

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert('Please enter a valid number!');
    }
    else {
        if(guess > maxNum || guess < minNum){
            window.alert('Please enter a valid number!')
        }
        else {
            attempts ++;
            if (guess > myNumber){
                window.alert('Too big!');
            }
            else if (guess < myNumber){
                window.alert('Too small!')
            }
            else {
                window.alert(`Correct! The number is ${myNumber}, tried ${attempts} times.`);
                running = false ;
            }
        }
    }
}
