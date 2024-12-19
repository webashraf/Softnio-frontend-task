console.log("Hello world!")
// Catch all the radio of colors
const colorRadios = document.querySelectorAll('input[name="color"]');
// Catch all the radio of sizes
const sizeRadios = document.querySelectorAll('input[name="size"]');
// Select the product image element
const productImage = document.getElementById('productImage');
const itemQty = document.getElementById('itemQty');

const cart = [
  {
    title: "",
    price: 0,
    image: "",
    color: "",
    size: "",
    qty: 0,
  }
];
let title =  document.getElementById('title').innerText;
let price = document.getElementById('price').innerText;
let color;
let size;
let addToCartBtn = document.getElementById('addToCart');


console.log(colorRadios[0].value, sizeRadios[0].value);
addToCartBtn.addEventListener("click", () => {
  console.log("Click",{ title, price, image: productImage.src, color, size});
  // console.log(title, price, color, size, qty, itemQty, productImage);
})