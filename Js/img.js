const images = document.querySelectorAll("img")

function imgLoad() {
    images.forEach((img) => {
        img.setAttribute("loading", "lazy")
    })
}
document.addEventListener("DOMContentLoaded", imgLoad)