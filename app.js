import { menuArray } from "./data.js";
const orderBox = document.getElementById("order");
const totalPriceEl = document.getElementById("total-price");
const thanksEl = document.getElementById("thanks");
let order = [];

//thanks message
function thanks() {
  document.getElementById("modal-form").classList.add("active");
}

function reset() {
  setTimeout(() => {
    renderMenu();
    thanksEl.classList.add("active");
  }, 3000);
}

//eventlistener
document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    handleClickAdd(e.target.dataset.add);
  } else if (e.target.dataset.remove) {
    removeItem(e.target.dataset.remove);
  } else if (e.target.dataset.complete) {
    completeOrder(e.target.dataset.complete);
  }
});

//submit
document.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const fullName = formData.get("name");
  console.log(fullName);
  document.getElementById(
    "thx-message"
  ).textContent = `Thanks, ${fullName}! Your order is on its way! `;
  thanks();
  reset();
});

//complete form
function completeOrder() {
  document.getElementById("modal-form").classList.remove("active");
  orderBox.classList.add("active");
  thanksEl.classList.remove("active");
}

//add item to order
function handleClickAdd(itemId) {
  let itemObj = menuArray.filter(function (item) {
    return item.id === itemId;
  })[0];

  if (!order.includes(itemObj)) {
    order.push(itemObj);
    getTotalPrice(order);
    renderOrder();
    orderBox.classList.remove("active");
  }
}

//remove item from order
function removeItem(itemId) {
  let targetObj = menuArray.find(function (obj) {
    return obj.id === itemId;
  });
  if (order.includes(targetObj)) {
    const index = order.indexOf(targetObj);
    order.splice(index, 1);
    getTotalPrice(order);
    renderOrder();
  }
  if (order.length < 1) {
    orderBox.classList.add("active");
    renderOrder();
  }
}

//calculate total price of items
function getTotalPrice(arr) {
  let finalPrice = order.reduce(function (itemPrice, totalPrice) {
    return itemPrice + totalPrice.price;
  }, 0);
  return (totalPriceEl.innerHTML = "$" + finalPrice);
}

//add item to order html
function orderHtml() {
  let orderHtml = "";
  order.forEach(function (order) {
    orderHtml += `
    <div class="card" id="orders">
  <h4>${order.name}</h4>
  <button class="remove" data-remove="${order.id}">remove</button>
  <p>$${order.price}</p>
  </div>
  
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
           <button class="add" id="${item.name}" data-add="${item.id}">+</button>
       </div>
  `;
  });
  return menu;
}

function renderMenu() {
  document.getElementById("container").innerHTML = menuHtml();
}

renderMenu();
