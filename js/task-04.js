const buttonNegative = document.querySelector("button");
const buttonPositive = buttonNegative.nextElementSibling.nextElementSibling;
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
