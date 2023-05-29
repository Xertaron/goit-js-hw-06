const validationInput = document.querySelector("#validation-input");
validationInput.classList.add("valid");
validationInput.classList.add("invalid");
const nonsense = validationInput.dataset.length;
// const isValid = document.querySelector(".valid");
// const isInvalid = document.querySelector(".invalid");
// const validInput = document.querySelector("#validation-input.valid");
// const invalidInput = document.querySelector("validation-input.invalid");
validationInput.addEventListener("blur", () => {
  if (validationInput.value.length == nonsense) {
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
  }
});

console.log(validationInput);
console.log(validationInput.textContent.length);
console.log(validationInput.dataset.length);
