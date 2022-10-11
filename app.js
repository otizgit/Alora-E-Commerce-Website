const hamburger = document.querySelectorAll('.hamburger')
const list = document.querySelector('.top-nav ul') 
const links = document.querySelectorAll('.top-nav ul li')
const addCart = document.querySelectorAll('.add-cart')
const cart = document.querySelector('.cart')
const mainCart = document.querySelector('.main-cart')
const closeCart = document.querySelector('.close-cart')

cart.addEventListener('click', function(){
    mainCart.classList.add('cart-active')
})

closeCart.addEventListener('click', function(){
    mainCart.classList.remove('cart-active')
})

addCart.forEach(function(add){
    add.addEventListener('click', function(){
        cart.classList.add('display-notif')
    })
})

mainCart.addEventListener('click', function(){
    cart.classList.remove('display-notif')
})


hamburger.forEach(function(ham){
    ham.addEventListener('click', function(){
        list.classList.toggle('nav-display')
        links.forEach(function(link, index){
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `slide 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })
    })
})


const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to('.intro-image', {y:'0%', duration: 0.5, stagger: 0.25})
tl.to('.slider', {y:'-100%', duration: 1.2, delay: 0.3})
tl.to('.intro', {y: '-100%', duration: 1}, "-=1")
tl.fromTo('.logo', {opacity: 0}, {opacity: 1, duration: 1})
tl.fromTo('.to-top', {opacity: 0}, {opacity: 1, duration: 1}, "-=1")
tl.fromTo('.top-nav', {opacity: 0}, {opacity: 1, duration: 1}, "-=1")
tl.fromTo('.hero-content', {opacity: 0}, {opacity: 1, duration: 1}, "-=1")
tl.fromTo('.hero-content', {y: '10%'}, {y: '0%', duration: 1}, "-=1")
tl.fromTo('.about-content', {opacity: 0}, {opacity: 1, duration: 1}, "-=1")
tl.fromTo('.about-content', {y: '10%'}, {y: '0%', duration: 1}, "-=1")
tl.fromTo('.login-container', {y: '10%'}, {y: '0%', duration: 1}, "-=1")
tl.fromTo('.login-container', {opacity: 0}, {opacity: 1, duration: 1}, "-=1")


AOS.init({
    duration: 1000,
    once: true
});