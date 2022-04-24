const clock = document.querySelector("h2#clock");

// clock.innerText = "hello poi";
function getClock(){
    const date = new  Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0"); 
    const seconds = String(date.getSeconds()).padStart(2,"0");
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// setInterval(sayHello, 5000); //5000ms 마다 한번씩. 5000ms = 5s

getClock()
setInterval(getClock, 1000);