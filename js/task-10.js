function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const input = controls.firstElementChild;
const creation = document.querySelector("button[data-create]");
const destruction = document.querySelector("button[data-destroy]");
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.background = getRandomHexColor();
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    boxes.appendChild(box);
  }
}

creation.addEventListener("click", () => {
  const adding = createBoxes(input.value);
});

function destroyBoxes() {
  boxes.innerHTML = "";
}
destruction.addEventListener("click", () => {
  destroyBoxes.call();
});
