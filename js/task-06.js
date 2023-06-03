const validationInput = document.querySelector("#validation-input");

const nonsense = validationInput.dataset.length;

validationInput.addEventListener("blur", () => {
  if (validationInput.value.length !== nonsense) {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
  if (validationInput.value.length == nonsense) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
});
