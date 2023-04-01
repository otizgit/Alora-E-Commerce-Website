const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".top-nav ul");
const links = document.querySelectorAll(".top-nav ul li");

const cart = document.querySelector(".cart");
const mainCart = document.querySelector(".main-cart");
const closeCart = document.querySelector(".close-cart");

cart.addEventListener("click", function () {
  mainCart.classList.add("cart-active");
});

closeCart.addEventListener("click", function () {
  mainCart.classList.remove("cart-active");
});

mainCart.addEventListener("click", function () {
  cart.classList.remove("display-notif");
});

function checkLinks() {
  links.forEach(function (link, index) {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `slide 0.5s ease forwards ${index / 7 + 0.4}s`;
    }
  });
}

hamburger.addEventListener("click", function () {
  const header = document.querySelector("header");
  const headerHeight = header.getBoundingClientRect().height;
  list.style.top = headerHeight - 3 + "px";
  list.classList.toggle("nav-display");
  checkLinks()
});

list.addEventListener("click", function (e) {
  if (e.target === list) {
    list.classList.remove("nav-display");
    checkLinks()
  }
});

// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".intro-image", { y: "0%", duration: 0.5, stagger: 0.25 });
// tl.to(".slider", { y: "-100%", duration: 1.2, delay: 0.3 });
// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
// tl.fromTo(".logo", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".to-top", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
// tl.fromTo(".top-nav", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
// tl.fromTo(".hero-content", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
// tl.fromTo(".hero-content", { y: "10%" }, { y: "0%", duration: 1 }, "-=1");
// tl.fromTo(".about-content", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
// tl.fromTo(".about-content", { y: "10%" }, { y: "0%", duration: 1 }, "-=1");
// tl.fromTo(".login-container", { y: "10%" }, { y: "0%", duration: 1 }, "-=1");
// tl.fromTo(
//   ".login-container",
//   { opacity: 0 },
//   { opacity: 1, duration: 1 },
//   "-=1"
// );

AOS.init({
  duration: 1000,
  once: true,
});

const copyRight = document.querySelector(".copyright span");
let year = new Date().getFullYear();
copyRight.innerText = year.toString();

const hero = document.getElementById("hero");
let heroHeight = hero.getBoundingClientRect().height;
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", function () {
  toTop.classList.toggle("show-to-top", window.scrollY > heroHeight);
});

const viewCart = document.querySelector(".view-cart")
viewCart.addEventListener("click", function() {
  mainCart.classList.toggle("cart-active");
})