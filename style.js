const images = ["./assets/watch-purple.png", "./assets/watch-cyan.png", "./assets/watch-blue.png", "./assets/watch-black.png"];
const sizeTexts = document.querySelectorAll('.sizeText');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
const continueShoppingBtn = document.getElementById('continueShopping');


// Add event listeners to each color radio button
colorRadios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
  color = radio.value;
  console.log(radio.value);
    productImage.src = images[index];
  });
});

// Size styles
sizeRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    size = radio.value;
    console.log(radio.value);
    sizeTexts.forEach((text) => {
      text.style.color = '#364A63'; 
    });

    const selectedLabel = document.querySelector(`label[for="${radio.id}"] .sizeText`);
    if (selectedLabel) {
      selectedLabel.style.color = '#6576FF'; 
    }
  });
});

// Minus item quantity
qtyMinus.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
    console.log(quantity, itemQty.innerText);
    itemQty.innerText = quantity; 
  }
});

// Plus items quantity
qtyPlus.addEventListener('click', () => {
  quantity++;
  console.log(quantity, itemQty.innerText);
  itemQty.innerText = quantity; 
});

// Handle cart show using checkOutBtn
checkOutBtn.addEventListener("click", () => {
  cartSection.style.display = "flex";
  checkOutBtn.style.display = "none";
});

// Hide cart
cartSection.addEventListener('click', () => {
cartSection.style.display = "none";
checkOutBtn.style.display = "block";
document.getElementById('cartBodyModal').addEventListener('click', e => e.stopPropagation())
});

// hide cart by clicking continue shopping button
continueShoppingBtn.addEventListener("click", () => {
  cartSection.style.display = "none";
  checkOutBtn.style.display = "block";
})