const myLabel = document.getElementById('myLabel');

let n = true;
let rec = [];

function toss(){
    rec.length > 6 ? rec = []: rec = rec;
    n? document.getElementById('myBox').style.backgroundColor = 'silver':
    document.getElementById('myBox').style.backgroundColor = 'whitesmoke';
    n = !n;

    let result = Math.round(Math.random());

    if(result){
        result = '<span style="color: slateblue;">㊞</span>';
    }
    else {
        result = '<span style="color: crimson;">㊮</span>';
    }
    rec.push(result)
    document.getElementById('recBox').innerHTML = rec.join("");
    document.getElementById('myLabel').innerHTML = result;
}
