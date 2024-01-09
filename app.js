import { menuArray } from "./data.js";

//rendering Menu
function getMenu(menuArray) {
  let menuHtml = "";

  menuArray.forEach(function (menuItem) {
    const { name, ingredients, id, price, emoji } = menuItem;
    menuHtml += `
          <div class="item">
            <h1 class="emoji">${emoji}</h1>
              <div class="name">
                <h2>${name}</h2>
                <p>${ingredients}</p>
                 <h4>$${price}</h4>
               </div>
           <button id="add" class="add">+</button>
       </div>
  `;
  });

  return menuHtml;
}

function render() {
  document.getElementById("container").innerHTML = getMenu(menuArray);
}

render();
