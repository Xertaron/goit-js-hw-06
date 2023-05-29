const buttonNegative = document.querySelector("button");
const buttonPositive = buttonNegative.nextElementSibling.nextElementSibling;
const counterValue = document.querySelector("#value");
counterValue.value = 0;

console.log(counterValue.value);
// const addValue = () => {
//   console.log(counterValue++);
// };
// const reduceValue = () => {
//   console.log(counterValue++);
// };
// const reducing = document.querySelector(".decrement");
// const adding = document.querySelector(".increment");

// buttonNegative.addEventListener("click", reduceValue);
// buttonPositive.addEventListener("click", addValue);
// buttonNegative.addEventListener("click", (event) => {
//   event.preventDefault();
//   const currentValue = Number(counterValue.value) || 0;
//   counterValue.value = currentValue - 1;
//   // console.log((counterValue.value = event.counterValue--));
// });
// buttonPositive.addEventListener("click", (event) => {
//   event.preventDefault();
//   const currentValue = Number(counterValue.value) || 0;
//   counterValue.value = currentValue + 1;
//   // console.log((counterValue.value = event.counterValue++));
// });
buttonNegative.addEventListener("click", () => {
  counterValue.textContent = counterValue.value -= 1;
});
buttonPositive.addEventListener("click", () => {
  counterValue.textContent = counterValue.value += 1;
});
