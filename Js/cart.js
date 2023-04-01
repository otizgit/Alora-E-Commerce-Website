export default function cartDetails() {
  if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }

  function ready() {
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
      var button = removeCartButtons[i];
      button.addEventListener("click", removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
    }
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
      var button = addCart[i];
      button.addEventListener("click", addCartClicked);
    }
  }

  function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateTotal();
  }

  function addCartClicked(event) {
    var button = event.target;
    var shopProducts =
      button.parentElement.parentElement.parentElement.parentElement;
    var title =
      shopProducts.getElementsByClassName("product-name")[0].innerText;
    var price =
      shopProducts.getElementsByClassName("product-price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
  }

  function addProductToCart(title, price, productImg) {
    const totalTitle = document.querySelector(".total-title");
    const totalPrice = document.querySelector(".total-price");

    const emptyCart = document.querySelector(".empty-cart");
    emptyCart.innerHTML = ``;

    const mainCart = document.querySelector(".main-cart");
    const btnContainer = mainCart.querySelector(".btn-container");
    btnContainer.innerHTML = `<button type="button" class="btn-buy">Buy Now</button>`;
    const buyBtn = btnContainer.querySelector("button");
    buyBtn.addEventListener("click", function () {
      var cartContent = document.getElementsByClassName("cart-content")[0];
      while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
      }
      updateTotal();
      alert(
        "Thank you for buying these product(s), your order is being processed."
      );
      btnContainer.innerHTML = ``;
      emptyCart.innerHTML = `<img src="/Images/thinking-face.png" alt="">
      <p>Your cart is empty.</p>`;
      totalTitle.innerText = "";
      totalPrice.innerText = "";
    });

    totalTitle.innerText = "Total";

    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
      if (cartItemsNames[i].innerHTML == title) {
        alert("Item has already been added to cart.");
        return;
      }
    }
    var cartBoxContent = `
                      <img src="${productImg}">
                      <div class="detail-box">
                          <div class="cart-product-title">${title}</div>
                          <div class="cart-price">${price}</div>
                          <input type="number" value="1" class="cart-quantity">
                      </div>
                      <i class="fa-solid fa-trash cart-remove"></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
      .getElementsByClassName("cart-remove")[0]
      .addEventListener("click", removeCartItem);
    cartShopBox
      .getElementsByClassName("cart-quantity")[0]
      .addEventListener("change", quantityChanged);

    function removeCartItem(event) {
      var buttonClicked = event.target;
      let parentElement = buttonClicked.parentElement;
      parentElement.remove();
      updateTotal();
      if (cartItems.innerHTML === "") {
        btnContainer.innerHTML = ``;
        emptyCart.innerHTML = `<img src="/Images/thinking-face.png" alt="">
        <p>Your cart is empty.</p>`;
        totalTitle.innerText = "";
        totalPrice.innerText = "";
      }
    }
  }

  function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName("cart-price")[0];
      var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      var price = parseFloat(priceElement.innerText.replace("$", ""));
      var quantity = quantityElement.value;
      total = total + price * quantity;
    }
    total = total.toFixed(2);

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  }
}