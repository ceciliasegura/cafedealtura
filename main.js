
const accordions = document.querySelectorAll(".accordion .img_accordion");
const containerS4 = document.querySelectorAll(".containerLineS4");
accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        accordion.parentNode.parentNode.children[1].classList.toggle("showContent")
        accordion.classList.toggle("rotate")
    })
})

