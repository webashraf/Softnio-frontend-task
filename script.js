console.log("Hello world!");

// Catch all the radio of colors
const colorRadios = document.querySelectorAll('input[name="color"]');
// Catch all the radio of sizes
const sizeRadios = document.querySelectorAll('input[name="size"]');
// Select the product image element
const productImage = document.getElementById('productImage');
const itemQty = document.getElementById('itemQty');
const cartTable = document.getElementById('cartBody');
const addToCartBtn = document.getElementById('addToCart');
const checkOutBtn = document.getElementById('checkOutBtn');
const checkoutCount = document.getElementById("checkoutCount");
const cartSection = document.getElementById("cartSection")
let cartItemCount = 0; 
const cart = [];

addToCartBtn.addEventListener("click", () => {
  // Get selected color and size
  const selectedColor = Array.from(colorRadios).find(radio => radio.checked)?.value || "Default Color";
  const selectedSize = Array.from(sizeRadios).find(radio => radio.checked)?.value || "Default Size";

  // Get the product details
  const title = document.getElementById('title').innerText;
  const price = document.getElementById('price').innerText;
  const qty = itemQty.innerText;

  // Add the item to the cart array
  const item = {
    title,
    price,
    image: productImage.src,
    qty,
    color: selectedColor,
    size: selectedSize,
  };
  cart.push(item);
  checkoutCount.innerText = cart.length;

  // Update the cart table
  updateCartTable();
  if (checkoutCount.innerText > 0) {
    checkOutBtn.style.display = "block";
  } 
  cart.forEach((item) => {
    let totalQty = 0
    totalQty += Number(item.qty);
    document.getElementById('totalQty').innerText = totalQty;console.log(totalQty);
  
  });
});

checkOutBtn.addEventListener('click', () => {
  cartSection.style.display = "flex";
})

function updateCartTable() {
  cartTable.innerHTML = "";
 
  cart.forEach((item, index) => {
   
    const row = document.createElement("tr");
    row.className = "border-b";

    row.innerHTML = `
      <td class="py-4 flex items-center">
        <img src="${item.image}" alt="${item.title}" class="w-12 h-12 mr-4 rounded-md" />
        <span>${item.title}</span>
      </td>
      <td class="py-4 capitalize">${item.color}</td>
      <td class="py-4 font-bold ">${item.size}</td>
      <td class="py-4">${item.qty}</td>
      <td class="py-4 text-right font-bold">${item.price}</td>
    `;
    cartTable.appendChild(row);

   
  });
}


