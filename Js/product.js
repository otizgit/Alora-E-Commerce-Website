import cartDetails from "./cart.js";

const productContainer = document.querySelector(".product-container");
const dropButton = document.querySelector(".drop-button");
const select = document.querySelector(".select");
const productBtns = document.querySelector(".product-btn");

dropButton.addEventListener("click", function () {
  select.classList.toggle("show-select");
});

document.onclick = function (e) {
  if (e.target.id !== "drop-button" && e.target.id !== "select") {
    select.classList.remove("show-select");
  }
};

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(xhttp.responseText);

    let selectedProducts;
    const productActive = productBtns.querySelector(".product-active");
    const batchId = productActive.id;
    selectedProducts = products.filter((product) => {
      if (product.batch === batchId) {
        return product;
      }
    });

    function loadContent(items) {
      let displayProducts = items.map((product) => {
        return `<div class="col">
        <img class="product-img" src=${product.img} alt="${product.img}">
        <div class="img-info">
            <p class="product-name">${product.name}</p>
            <p class="rating"><i class="fa-solid fa-star"></i> ${product.rating}/5.0</p>
            <div class="price">
                <p class="product-price">$${product.price}</p>
                <p><i class="fa-solid fa-cart-shopping add-cart"></i></p>
            </div> 
        </div>
        </div>`;
      });
      displayProducts = displayProducts.join("");
      productContainer.innerHTML = displayProducts;
    }
    loadContent(selectedProducts)

    document.addEventListener(
      "DOMContentLoaded",
      loadContent(selectedProducts)
    );

    select.addEventListener("click", function (e) {
      if (e.target.id) {
        switch (e.target.innerText) {
          case "Default Sorting":
            selectedProducts = products.filter((product) => {
              if (product.batch === batchId) {
                return product;
              }
            });
            loadContent(selectedProducts);
            break;
          case "Sort By Rating":
            let sortedProducts = selectedProducts.sort((p1, p2) =>
              p1.rating < p2.rating ? 1 : p1.rating > p2.rating ? -1 : 0
            );
            loadContent(sortedProducts);
            break;
          case "Sort By Price":
            let sortedProductsByPrice = selectedProducts.sort((p1, p2) =>
            p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
          );
          loadContent(sortedProductsByPrice);
        }
      }
      cartNotif();
      cartDetails();
    });

    function cartNotif() {
      const addCart = document.querySelectorAll(".add-cart");
      addCart.forEach(function (add) {
        add.addEventListener("click", function () {
          cart.classList.add("display-notif");
        });
      });
    }
    cartNotif();
    cartDetails();
  }
};
xhttp.open("GET", "/data.json", true);
xhttp.send();