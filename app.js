import { menuArray } from "./data.js";
const orderBox = document.getElementById("order");
let order = [];
let totalPrice = 0;
//eventlistener
document.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.dataset.add) {
    handleClickAdd(e.target.dataset.add);
    orderBox.style.display = "flex";
  }
});

function handleClickAdd(itemId) {
  let itemObj = menuArray.filter(function (item) {
    return item.id === itemId;
  })[0];
  order.push(itemObj);
  renderOrder();
}

//order html
function orderHtml() {
  let orderHtml = "";
  order.forEach(function (order) {
    orderHtml += `
  <h4>${order.name}</h4>
  <button class="remove">remove</button>
  <p>$${order.price}</p>
  `;
  });
  return orderHtml;
}

function renderOrder() {
  document.getElementById("addItem").innerHTML = orderHtml();
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
