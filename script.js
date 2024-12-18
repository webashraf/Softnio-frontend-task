console.log("Hello world!")

const colorRadios = document.querySelectorAll('input[name="color"]');

// Catch all the radio color button
colorRadios.forEach(radio => {
  radio.addEventListener('change', function() {
    console.log(this.value);  
  });
});
