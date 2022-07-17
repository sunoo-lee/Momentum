const API_KEY = "18849c63d45d677a891fa2169a5e83c5";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log(lat, lon);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.createElement("img");
      const $li = document.querySelector(".weather");
      const weather = document.querySelector("#weather li:first-child span");
      const city = document.querySelector("#weather li:last-child span");
      city.innerText = data.name;
      weather.innerText = `${data.main.temp}`;
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      $li.appendChild(icon);
    });
}

function onGeoError() {
  console.log("Geo Error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
