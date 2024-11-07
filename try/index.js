let startX = 0, startY = 0, offsetX, offsetY;
const myContainer = document.getElementById("myContainer");

myContainer.addEventListener("mousedown", mouseDown)

function mouseDown(event){
    offsetX = event.clientX - startX;
    offsetY = event.clientY - startY;
    
    myContainer.addEventListener("mousemove", mouseMove)
    myContainer.addEventListener("mouseup", mouseUp)
}

function mouseMove(event){
    

    myContainer.style.left = event.clientX - offsetX + 'px';
    myContainer.style.top = event.clientY - offsetY + 'px';

    startX = event.clientX - offsetX;
    startY = event.clientY - offsetY;

    myContainer.addEventListener("mouseup", mouseUp)

}

function mouseUp(event){
    myContainer.removeEventListener("mousemove", mouseMove);
}