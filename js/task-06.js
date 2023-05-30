const validationInput = document.querySelector("#validation-input");

const nonsense = validationInput.dataset.length;

validationInput.addEventListener("blur", () => {
  if (validationInput.value.length == nonsense) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
