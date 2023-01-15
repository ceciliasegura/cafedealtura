const coffes = document.querySelectorAll(".cafe3");
const addBtnCoffes = document.querySelectorAll(".button_section3");
const shoppingBagStore = JSON.parse(localStorage.getItem("bag"));
const shoppingBag = shoppingBagStore === null ? [] : shoppingBagStore;
const totalNumberBagP = document.querySelector(".totalNumberBag");

var totalNumberBag = 0;
coffes.forEach((cafe3) => {
    cafe3.children[3].addEventListener("click", () => {
        shopingBagItemFound = shoppingBag.filter(i => i.name === cafe3.children[1].innerText);
        const bag = {
            name: cafe3.children[1].innerText,
            price: cafe3.children[2].children[0].innerText,
            img: cafe3.children[0].src,
            numberOfItems: shopingBagItemFound.length > 0 ? (shopingBagItemFound[0].numberOfItems++) : 1
        }

        totalNumberBag++;
        totalNumberBagP.innerText = totalNumberBag;

        let data = shoppingBag.find(e => e.name === bag.name)?.name

        if (!data) {
            shoppingBag.push(bag);
            console.log(shoppingBag);
        }

        localStorage.setItem("bag", JSON.stringify(shoppingBag));
    })
})

if (shoppingBagStore) {
    shoppingBagStore.forEach(i => {
        totalNumberBag = totalNumberBag + i.numberOfItems;
    })
}

totalNumberBagP.innerText = totalNumberBag;




