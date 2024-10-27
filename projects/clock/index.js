function updateTime(){

    const time = new Date();

    let hours = time.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours > 12 ? hours = hours % 12 || 12: "";    //keep 0 hour for mid night
    hours = hours.toString().padStart(2, 0);
    
    const minuts = time.getMinutes().toString().padStart(2, 0);
    const seconds = time.getSeconds().toString().padStart(2, 0);
    
    document.getElementById("clock").textContent = `${hours}:${minuts}:${seconds} ${meridiem}`;

}

updateTime();   //without this will no update in the first second
setInterval(updateTime, 1000);