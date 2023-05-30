// Co to tu robi?
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const boxes = document.querySelector("#boxes");
console.log(boxes);
const controls = document.querySelector("#controls");
console.log(controls);
const input = controls.firstElementChild;
console.log(input);
const creation = input.nextElementSibling;
console.log(creation);
const destruction = creation.nextElementSibling;
console.log(destruction);
const build = document.createElement("div");
build.textContent = "box";
console.log(build);
creation.addEventListener("click", () => {
  boxes.insertAdjacentHTML("beforeend", build.textContent);
});
const boom = document.createAttribute("dataset");
boom.dataset = "clear";
console.log(boom);
