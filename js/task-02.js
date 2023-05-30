const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listOfIngredients = document.querySelector("#ingredients");

ingredients.forEach(function (content, index) {
  index = document.createElement("li");
  index.classList.add("item");
  index.textContent += content;
  listOfIngredients.append(index);
});
listOfIngredients.insertAdjacentHTML("beforebegin", "<h2>Ingredients</h2>");
