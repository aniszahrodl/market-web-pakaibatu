// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// klik di luar sidebar
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) & !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// toggle class active
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik di luar sidebar
const shoppingCartButton = document.querySelector("#shopping-cart-button");
document.addEventListener("click", function (e) {
  if (!shoppingCartButton.contains(e.target) & !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// preview
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// previewclose
const closeItem = document.querySelector(".modal .modal-container .close-item");
closeItem.onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
