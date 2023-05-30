const fontControl = document.querySelector("#font-size-control");
const range = fontControl.type;
const fontSizes = document.querySelector("#text");

fontControl.addEventListener(
  "input",
  function () {
    fontSizes.style.fontSize = this.value + "px";
  },
  0
);
console.log(range);
