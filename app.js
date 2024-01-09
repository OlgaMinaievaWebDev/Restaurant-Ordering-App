import { menuArray } from "./data.js";

let order = [];
let price = 0;
//eventlistener
document.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.dataset.add) {
    handleClickAdd(e.target.dataset.add);
  }
});

function handleClickAdd(itemId) {
  let itemObj = menuArray.filter(function (item) {
    return item.id === itemId;
  })[0];
  console.log(itemObj);
}

//menu html
function menuHtml() {
  let menu = "";
  menuArray.forEach(function (item) {
    menu += `
  <div class="item">
            <h1 class="emoji">${item.emoji}</h1>
              <div class="name">
                <h2>${item.name}</h2>
                <p>${item.ingredients}</p>
                 <h4>$${item.price}</h4>
               </div>
           <button class="add" data-add="${item.id}">+</button>
       </div>
  `;
  });
  return menu;
}

function renderMenu() {
  document.getElementById("container").innerHTML = menuHtml();
}

renderMenu();
