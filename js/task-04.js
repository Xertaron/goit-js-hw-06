const counter = document.querySelector("#counter");
const buttonNegative = document.querySelector(
  "button[data-action='decrement']"
);

const buttonPositive = document.querySelector(
  "button[data-action='increment']"
);
const counterValue = document.querySelector("#value");
let currentNumber = 0;

buttonNegative.addEventListener("click", () => {
  currentNumber -= 1;
  counterValue.textContent = currentNumber;
});
buttonPositive.addEventListener("click", () => {
  currentNumber += 1;
  counterValue.textContent = currentNumber;
});
