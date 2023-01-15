const logo = document.querySelector(".container > img");
console.log("logo:", logo)

console.log("")
console.log("cesta")
const shopingBag = document.querySelector(".container2 > img");
console.log(shopingBag)

console.log("")
console.log("nombre cafes:")
const nameCoffe = document.querySelectorAll("div.cafes > div > h4");
// console.log(nameCoffe);
nameCoffe.forEach(e => console.log(e.innerText))

console.log("")
console.log("Precio")
const price = document.querySelectorAll(".cafes > div > p");
// console.log(price)
price.forEach(e => console.log(e.innerText))

console.log("")
console.log("url")
const url = document.querySelectorAll(".cafes > div > img");
console.log(url)

console.log("")
console.log("bucle")
// const coffes = document.querySelectorAll(".cafes > div");
// console.log(coffes)
// coffes.forEach(e => { console.log(`El café ${h4.children[1].innerText} tiene la imagen ${img.children[2].src} y un precio de ${p.children[2].innerText}`) })

console.log("")
console.log("imagen del cafe")
const imgCoffe = document.querySelector(".coffeshop_info > img");
console.log("imagen coffeshop:", imgCoffe)







