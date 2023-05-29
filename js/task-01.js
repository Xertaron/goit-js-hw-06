const numberOfCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((element) => {
  const name = element.querySelector("h2");
  const count = element.querySelectorAll("li");
  console.log(`Category: ${name.textContent} 
Elements: ${count.length}`);
});
