function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const bgColor = document.querySelector(".color");
const btnSwitch = document.querySelector(".change-color");

btnSwitch.addEventListener("click", () => {
  const giveRandomColor = getRandomHexColor();
  body.style.backgroundColor = giveRandomColor;
  bgColor.textContent = giveRandomColor;
});
