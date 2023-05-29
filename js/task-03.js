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

// images.forEach(function (content, index) {
// galleries.insertAdjacentHTML("beforeend", markup);
// index = document.createElement("li");
// let image = document.createElement("img");
// image.src = content.url;
// image.alt = content.alt;
// index.append(image);
// galleries.append(index);
// });
const markup = images
  .map((photo) => `<li><img src=${photo.url} alt=${photo.alt}></li>`)
  .join("");
galleries.insertAdjacentHTML("afterbegin", markup);
// galleries.innerHTML = markup;

// galleries.insertAdjacentHTML("beforebegin", "<h2>Gallery</h2>");
console.log(galleries);
