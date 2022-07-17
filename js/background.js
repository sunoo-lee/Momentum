const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("div");
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// bgImage.classList.add("background");
// bgImage.style.background = `url(img/${chosenImage})`;

document.body.appendChild(bgImage);
