const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listOfIngredients = document.querySelector("#ingredients");

// // const listHeader = document.createElement("h2");
// // listHeader.textContent = "Ingredients";
// // listOfIngredients.before(listHeader);

// const firstListItem = document.createElement("li");
// firstListItem.textContent = "Potatoes";
// listOfIngredients.append(firstListItem);
// firstListItem.classList.add("item");

// const secondListItem = document.createElement("li");
// secondListItem.textContent = "Mushrooms";
// listOfIngredients.append(secondListItem);
// secondListItem.classList.add("item");

// const thirdListItem = document.createElement("li");
// thirdListItem.textContent = "Garlic";
// listOfIngredients.append(thirdListItem);
// thirdListItem.classList.add("item");

// const fourthListItem = document.createElement("li");
// fourthListItem.textContent = "Tomatoes";
// listOfIngredients.append(fourthListItem);
// fourthListItem.classList.add("item");

// const fifthListItem = document.createElement("li");
// fifthListItem.textContent = "Herbs";
// listOfIngredients.append(fifthListItem);
// fifthListItem.classList.add("item");

// const sixthListItem = document.createElement("li");
// sixthListItem.textContent = "Condiments";
// listOfIngredients.append(sixthListItem);
// sixthListItem.classList.add("item");

// listOfIngredients.insertAdjacentHTML("beforebegin", "<h2>Ingredients</h2>");
// console.log(listOfIngredients);

// for (let i = 0; i < ingredients.length; i++) {
//   const lists = document.createElement("li");
//   lists.textContent = ingredients[i];
//   lists.classList.add("item");
//   listOfIngredients.append(lists);
//   console.log(lists);
// }
// listOfIngredients.insertAdjacentHTML("beforebegin", "<h2>Ingredients</h2>");

ingredients.forEach(function (content, index) {
  index = document.createElement("li");
  index.classList.add("item");
  index.textContent += content;
  listOfIngredients.append(index);
  console.log(index);
});
listOfIngredients.insertAdjacentHTML("beforebegin", "<h2>Ingredients</h2>");

// ingredients.forEach((element) => {
//   let lists = document.createElement("li");
//   lists.classList.add("item");
//   lists.textContent = element;
//   listOfIngredients.append(lists);
//   console.log(lists);
// });
