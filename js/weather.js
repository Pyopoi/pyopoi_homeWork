const API_KEY = "016d6661445ccc5300daab5e50c9cab2";

function onGeoOk(position){
    const lat = position.coords.latitude; //latitude 위도
    const lon = position.coords.longitude; //longitude 경도
    // console.log("You live in",lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // console.log(url);
    fetch(url).then(response => response.json())
    .then(data => {
        // console.log(date.name, date.weather[0].main);
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");

    // const name = data.name;
    city.innerText = data.name;
    // const weather = data.weather[0].main;    
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;    
    });
}
function onGeoError(){
    alert("Can't find you... No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// onGeoOk({sexyObj})