import { menuArray } from "./data.js";



//eventListeners 
document.addEventListener('click', function (e) {
 if (e.target.dataset.pizza) {
  console.log('click')
 }
})

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
                 <h4>$${price}</h4>
               </div>
           <button id="add" class="add" data-${name}="${item.id}">+</button>
       </div>
  `;
    })
    .join("");
}

//render HTML
document.getElementById("container").innerHTML = getFeedHtml(menuArray);
