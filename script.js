const colorRadios = document.querySelectorAll('input[name="color"]');
const sizeRadios = document.querySelectorAll('input[name="size"]');
const productImage = document.getElementById('productImage');
const itemQty = document.getElementById('itemQty');
const cartTable = document.getElementById('cartBody');
const addToCartBtn = document.getElementById('addToCart');
const checkOutBtn = document.getElementById('checkOutBtn');
const checkoutCount = document.getElementById("checkoutCount");
const cartSection = document.getElementById("cartSection");
const totalPrice = document.getElementById("totalPrice");
let cart = [];

// Handle add item on the cart
const handleAddToCart = () => {
  cart.push(createCartItem());
  checkoutCount.innerText = cart.length;
  updateCartTable();

  // Update quantity
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('totalQty').innerText = totalQty;

  // Handle hide and show checkout button
  checkOutBtn.style.display = cart.length > 0 ? "block" : "none";
}
// Handle add to cart
addToCartBtn.addEventListener("click", handleAddToCart);

// Create a cart item object
const createCartItem = () => {
  const title = document.getElementById('title').innerText;
  const price = parseFloat(document.getElementById('price').innerText.replace('$', ''));
  const qty = Number(itemQty.innerText);
  return {
    title,
    price,
    image: productImage.src,
    qty,
    color: getSelectedRadioValue(colorRadios),
    size: getSelectedRadioValue(sizeRadios),
  };
}

// Update the cart
const  updateCartTable = () => {
  cartTable.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    const row = document.createElement("tr");
    row.className = "border-b";
    row.innerHTML = `
      <td class="py-4 flex items-center">
        <img src="${item.image}" alt="${item.title}" class="w-12 h-12 mr-4 rounded-md" />
        <span>${item.title}</span>
      </td>
      <td class="py-4 capitalize">${item.color}</td>
      <td class="py-4 font-bold">${item.size}</td>
      <td class="py-4">${item.qty}</td>
      <td class="py-4 text-right font-bold">$${itemTotal.toFixed(2)}</td>
    `;
    cartTable.appendChild(row);
  });

  totalPrice.innerText = total;
}

// Catch the selected radio value
const getSelectedRadioValue = (radioNodeList) => {
  return Array.from(radioNodeList).find(radio => radio.checked)?.value;
}


