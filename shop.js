const productsCoffeShop = [
    { id: 1, price: 9, name: 'Costa Rica Tarrazú', description: 'Paquete de café, 250 gr', img: 'assets/cafeverde.png' },
    { id: 2, price: 9, name: 'Colombia Los Naranjos', description: 'Paquete de café, 250 gr', img: 'assets/caferojo.png' },
    { id: 3, price: 9, name: 'Laos Amanecer', description: 'Paquete de café, 250 gr', img: 'assets/cafeverdeclaro.png' },
    { id: 4, price: 9, name: 'Etiopía Yrgacheff', description: 'Paquete de café, 250 gr', img: 'assets/cafemorado.png' },
    { id: 5, price: 15, name: 'Kenia Ndunduri ', description: 'Paquete de café, 250 gr', img: 'assets/Coffee bag kenia shop.png' },
    { id: 6, price: 17, name: 'Etiopía Sidamo', description: 'Paquete de café, 250 gr', img: 'assets/coffe bag etipia shop.png' },
    { id: 7, price: 12, name: 'Costa Rica Monte Bello', description: 'Paquete de café, 250 gr', img: 'assets/coffe back costarica shop.png' },
    { id: 8, price: 9, name: 'Colombia La Casita', description: 'Paquete de café, 250 gr', img: 'assets/ coffe shop bag colombia shop.jpg' }
]

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




