import { menuArray } from "./data.js";
const orderBox = document.getElementById("order");
let totalPrice = 0;
let orders = [];

//event listener
document.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.dataset.add) {
    addItem(e.target.dataset.add);
  }
});

//handle add button
function addItem(itemId) {
  const addItemObj = menuArray.filter(function (item) {
    return (item.id = itemId);
  })[0];
  if (!orders.includes(addItemObj)) {
    orders.push(addItemObj);
    renderOrderItems();
  }

  // orderBox.style.display = "flex";
  // renderOrderItems();
}

//render order item
function getOrderHtml() {
  let orderHtml = "";
  orders.forEach(function (item) {
    orderHtml += `
  <h4>${item.name}</h4>
<button class="remove" >remove</button>
<p>$${item.price}</p>
  `;
  });
}

//rendering Menu
function getMenu() {
  let menuHtml = "";

  menuArray.forEach(function (item) {
    menuHtml += `
          <div class="item">
            <h1 class="emoji">${item.emoji}</h1>
              <div class="name">
                <h2>${item.name}</h2>
                <p>${item.ingredients}</p>
                 <h4>$${item.price}</h4>
               </div>
           <button class="add" data-add=${item.id}>+</button>
       </div>
  `;
  });

  return menuHtml;
}

function render() {
  document.getElementById("container").innerHTML = getMenu();
}

function renderOrderItems() {
  document.getElementById("addItem").innerHTML = getOrderHtml();
}

render();
