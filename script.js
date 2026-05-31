
let cart=JSON.parse(localStorage.getItem('cart'))||[];
function addProduct(name,price){
cart.push({name,price});
localStorage.setItem('cart',JSON.stringify(cart));
alert(name+' added to cart');
}
function displayCart(){
let list=document.getElementById('cartList');
let total=0;
cart.forEach(item=>{
let li=document.createElement('li');
li.textContent=item.name+' - ₱'+item.price;
list.appendChild(li);
total+=item.price;
});
document.getElementById('total').innerText=total;
}
function addSizedProduct(productName, sizeId){

let sizeSelect =
document.getElementById(sizeId);

let price =
parseInt(sizeSelect.value);

let sizeText =
sizeSelect.options[sizeSelect.selectedIndex].text;

cart.push({
    name: productName + " (" + sizeText + ")",
    price: price
});

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);

alert(productName + " added to cart!");

}

function addSizedProduct(productName, sizeId){

let sizeSelect = document.getElementById(sizeId);

let price = parseInt(sizeSelect.value);

let sizeName =
sizeSelect.options[sizeSelect.selectedIndex].text;

cart.push({
    name: productName + " (" + sizeName + ")",
    price: price
});

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);

alert(productName + " added to cart!");

}
