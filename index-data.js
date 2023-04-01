import cartDetails from "./cart.js";
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(xhttp.responseText);
    const hotDealsContainer = document.querySelector(".hot-deals-container");
    const newArrivalsContainer = document.querySelector(
      ".new-arrivals-container"
    );

    let hotDeals = "";
    let newArrivals = "";

    products.forEach((product) => {
      if (product.section === "hot deals") {
        hotDeals += `
        <div class="col">
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
      } else if (product.section === "new arrivals") {
        newArrivals += `
        <div class="col">
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
      }
    });
    hotDealsContainer.innerHTML = hotDeals;
    newArrivalsContainer.innerHTML = newArrivals

    const addCart = document.querySelectorAll(".add-cart");
    addCart.forEach(function (add) {
      add.addEventListener("click", function () {
        cart.classList.add("display-notif");
      });
    });

    cartDetails()
  }
};
xhttp.open("GET", "./data.json", true);
xhttp.send();

