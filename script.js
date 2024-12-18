console.log("Hello world!")

const images = ["./assets/watch-purple.png", "./assets/watch-cyan.png", "./assets/watch-blue.png", "./assets/watch-black.png"]


// Catch all the radio of colors
const colorRadios = document.querySelectorAll('input[name="color"]');
// Select the product image element
const productImage = document.getElementById('productImage');

// Add event listeners to each radio button
colorRadios.forEach((radio, index) => {
  radio.addEventListener('change', () => {

    console.log("clicked", productImage);
    productImage.src = images[index];
  });
});

// Catch items for update items quantity
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
const itemQty = document.getElementById('itemQty');

let quantity = 0;

// Minus item quantity
qtyMinus.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
    itemQty.innerText = quantity; 
  }
});

// Plus items quantity
qtyPlus.addEventListener('click', () => {
  quantity++;
  itemQty.innerText = quantity; 
});
