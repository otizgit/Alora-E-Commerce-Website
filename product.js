const sortByRating = document.querySelector('.sort-by-rating')
const sortByPrice = document.querySelector('.sort-by-price')
const productContainer = document.querySelector('.product-container')
const productContainer2 = document.querySelector('.product-container2')
const productContainer3 = document.querySelector('.product-container3')
const dropButton = document.querySelector('.drop-button')
const select = document.querySelector('.select')

dropButton.addEventListener('click', function(){
    select.classList.toggle('show-select')
})

document.onclick = function(e){
    if (e.target.id !== 'drop-button' && e.target.id !== 'select'){
        select.classList.remove('show-select')
    }
}

sortByRating.addEventListener('click', function(){
    productContainer.innerHTML = productContainer2.innerHTML
})

sortByPrice.addEventListener('click', function(){
    productContainer.innerHTML = productContainer3.innerHTML
})