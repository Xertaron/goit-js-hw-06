const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleries = document.querySelector(".gallery");
galleries.style.display = "flex";

galleries.style.gap = "30px";
const markup = images
  .map(
    (photo) =>
      `<li><img class=attributes src=${photo.url} alt=${photo.alt}></li>`
  )
  .join("");
galleries.insertAdjacentHTML("afterbegin", markup);
const attribute = document.querySelectorAll(".attributes");
attribute.forEach((element) => {
  element.style.minWidth = "300px";
  element.style.maxHeight = "233px";
});
const lists = document.querySelectorAll("li");
lists.forEach((element) => {
  element.style.listStyle = "none";
});
