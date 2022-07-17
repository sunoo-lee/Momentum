const $play = document.querySelector(".play");
const $pause = document.querySelector(".pause");
const $stop = document.querySelector(".stop");
const $timer = document.querySelector(".play_time");

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "WBbVUDVJb3M",
    events: {},
  });
}

function stopVideo() {
  player.stopVideo();
  player.clearVideo();
}

function pauseVideo() {
  player.pauseVideo();
}

const playVideo = () => {
  player.playVideo();
};

const playerTimer = () => {
  let playTime = Math.round(player.getCurrentTime());
  const minutes = String(Math.round(playTime / 60)).padStart(2, "0");
  const seconds = String(Math.round(playTime % 60)).padStart(2, "0");
  $timer.innerText = `${minutes}:${seconds} / 35:42`;
};

setInterval(playerTimer, 1000);

$play.addEventListener("click", playVideo);
$pause.addEventListener("click", pauseVideo);
$stop.addEventListener("click", stopVideo);
