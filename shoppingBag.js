// añadir los productos a la cesta y poder aumentar
//  el numero o disminuirlo con el + o el -


const bag = JSON.parse(localStorage.getItem("bag"));
const productsInBags = document.querySelector(".bagProducts");
const basket = document.querySelector(".totalBasket");
const subtotalP = document.querySelector(".costeSubtotal");
const tatalCost = document.querySelector(".costeTotal");
const iva = document.querySelector(".iva");
const totalNumberBagP = document.querySelector(".totalNumberBag");

let deliveryCost = 0;
let totalNumberOfProducts = 0;
let subtotal = 0;

bag.forEach((e, i) => {
    const divProductCoffe = document.createElement("div");
    divProductCoffe.innerHTML = `
    <div class="addShoppingDetail">
    <div class="sumImg">
    <div class="sumadores">
    <p class="restar">-</p>
    <p class="btnadd">${e.numberOfItems}</p>
    <p class="añadir">+</p>
    </div>
    
    <div class="imgDescription">
    <img src= "${e.img}"width="55px" height="55px">
    <div>
    <p>${e.name}</p>
    <p>paquete de café, 250 gr</p>
    </div>
    </div>
    </div>
    <p>${getPrice(e.price * e.numberOfItems)}</p>
    </div>`
    productsInBags.append(divProductCoffe)
    totalNumberOfProducts = totalNumberOfProducts + e.numberOfItems;
    subtotal = subtotal + (e.price * e.numberOfItems);

    divProductCoffe.children[0].children[0].children[0].children[2].addEventListener("click", () => {
        totalNumberOfProducts++;
        basket.innerText = 'Cesta: ' + totalNumberOfProducts;
        e.numberOfItems++;
        subtotal = subtotal + Number(e.price);
        subtotalP.innerText = getPrice(subtotal);
        tatalCost.innerText = getPrice(subtotal + deliveryCost);
        iva.innerText = getIva(subtotal);
        totalNumberBagP.innerText = totalNumberOfProducts;
        localStorage.setItem("bag", JSON.stringify(bag));
        divProductCoffe.children[0].children[1].innerText = getPrice(e.numberOfItems * Number(e.price));
        divProductCoffe.children[0].children[0].children[0].children[1].innerText = e.numberOfItems;
    })

    divProductCoffe.children[0].children[0].children[0].children[0].addEventListener("click", () => {
        totalNumberOfProducts--;
        basket.innerText = 'Cesta: ' + totalNumberOfProducts;
        e.numberOfItems--;
        subtotal = subtotal - Number(e.price);
        subtotalP.innerText = getPrice(subtotal);
        tatalCost.innerText = getPrice(subtotal + deliveryCost);
        iva.innerText = getIva(subtotal);
        divProductCoffe.children[0].children[1].innerText = getPrice(e.numberOfItems * Number(e.price));
        divProductCoffe.children[0].children[0].children[0].children[1].innerText = e.numberOfItems;
        totalNumberBagP.innerText = totalNumberOfProducts;
        localStorage.setItem("bag", JSON.stringify(bag));
        divProductCoffe.children[0].children[0].children[0].children[1].innerText = e.numberOfItems;
        if (e.numberOfItems == 0) {
            divProductCoffe.remove();
            let bagWithouRemovedItem = bag.filter(item => item.name != e.name);
            localStorage.setItem("bag", JSON.stringify(bagWithouRemovedItem));
        }
    })
});


basket.innerText = 'Cesta: ' + totalNumberOfProducts;
subtotalP.innerText = getPrice(subtotal)
tatalCost.innerText = getPrice(subtotal + deliveryCost);
iva.innerText = getIva(subtotal)
totalNumberBagP.innerText = totalNumberOfProducts;

// código seleccionar envio


const cost = document.querySelector(".coste");
const delivery = document.querySelectorAll(".inputEnvio");

delivery.forEach((e) => {
    e.addEventListener("click", (event) => {
        let costDelivery = event.target.value
        if (costDelivery == 9) {
            cost.innerText = getPrice(costDelivery);
            deliveryCost = Number(costDelivery);
            tatalCost.innerText = getPrice(subtotal + deliveryCost);
            localStorage.setItem("delivery", JSON.stringify({ delivery: 9 }));
        } else {
            cost.innerText = "Gratis"
            deliveryCost = 0;
            tatalCost.innerText = getPrice(subtotal + deliveryCost);
            localStorage.setItem("delivery", JSON.stringify({ delivery: 0 }));
        }
    })
})

function getIva(subtotal) {
    return "Incluye " + (Math.round(subtotal * 0.04 * 100) / 100).toFixed(2).replace('.', ',') + "€ de IVA";
}

function getPrice(total) {
    return total + ",00€";
}
