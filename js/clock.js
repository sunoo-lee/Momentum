const $clock = document.querySelector("h2#clock");
const $date = document.querySelector("h2#date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  $clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth()).padStart(2, "0");
  $date.innerText = `${month}/${day}`;
}

getDate();
getClock();
setInterval(getClock, 1000);
