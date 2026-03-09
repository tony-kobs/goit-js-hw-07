/* const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
}); */

const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) =>
  console.log(
    `Category: ${category.querySelector("h2").textContent}
Elements: ${category.querySelectorAll("li").length}`,
  ),
);
