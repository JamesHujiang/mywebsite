let n = true;
document.getElementById('myBut').onclick = function(){
    n? document.getElementById('myBox').style.backgroundColor = 'silver':
    document.getElementById('myBox').style.backgroundColor = 'whitesmoke';
    n = !n;
    if(Math.round(Math.random())){
     document.getElementById('myLabel').textContent = '㊌';
     document.getElementById('myLabel').style.color = 'slateblue'
    }
    else {
     document.getElementById('myLabel').textContent = '㊋';
     document.getElementById('myLabel').style.color = 'crimson'
    }
}
