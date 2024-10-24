document.getElementById('myBut').onclick = function(){
    if(Math.round(Math.random())){
     document.getElementById('myLabel').textContent = '㊌';
     document.getElementById('myLabel').style.color = 'slateblue'
    }
    else {
     document.getElementById('myLabel').textContent = '㊋';
     document.getElementById('myLabel').style.color = 'crimson'
    }
}


// 