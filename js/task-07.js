const fontControl = document.querySelector("#font-size-control");
const range = fontControl.type;
const fontSizes = document.querySelector("#text");

// function sliding(event) {
//   if (fontControl > 0 && value < 30) {
//     fontSize = "20";
//   } else {
//     fontSize = "50";
//   }
// }
fontControl.addEventListener(
  "input",
  function () {
    fontSizes.style.fontSize = this.value + "px";
  },
  0
);
console.log(range);
