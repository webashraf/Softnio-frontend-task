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