const body = document.querySelector("body");
const bgColor = document.querySelector(".color");
const btnSwitch = document.querySelector(".change-color");
function getRandomHexColor() {
  body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  bgColor.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btnSwitch.addEventListener("click", getRandomHexColor);
