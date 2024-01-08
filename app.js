import { menuArray } from "./data.js";

console.log(menuArray);

//set HTML for each item
function getFeedHtml(menuArray) {
  return menuArray
    .map(function (item) {
      const { name, ingredients, id, price, emoji } = item;
      const listIngredients = ingredients.join(",");
     return `
       <div class="item">
           <h1 class="emoji">${emoji}</h1>
              <div class="name">
                <h2>${name}</h2>
                <p>${listIngredients}</p>
                 <p>${price}</p>
               </div>
           <button id="add">+</button>
       </div>
  `;
    })
    .join("");
}

document.getElementById("container").innerHTML = getFeedHtml(menuArray);
