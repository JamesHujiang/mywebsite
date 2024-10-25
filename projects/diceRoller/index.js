function roller(){
    const num = document.getElementById('numBox').value;
    if(num > 100){
        window.alert("Don't roll more than 100 at once!");
    }
    else {
        const resultBox = document.getElementById('resultBox');
        const imgsBox = document.getElementById('imgsBox');

        const results = [];
        const imgs = [];

        for(i = 0; i < num; i++){
            let result = Math.floor(Math.random() * 6) + 1;
            results.push(result);
            imgs.push(`<img src="imgs/${result}.png" alt="Dice ${result}" weidth="50px">`);
        }
        resultBox.textContent = `Dice: ${results.join(', ')}`;
        imgsBox.innerHTML = imgs.join('');
    }
}