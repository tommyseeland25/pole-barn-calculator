// console.log("Calculator loaded!")

// // Values inputed by user. then calculate is clicked
// // need to look at those values to then make the calcaulation
// // From mlooking at those numbers, then decide what math I want to do
// // Then attach that new info to the results

// // 1. Grab the button by its id
// const btn = document.getElementById("calculateBtn");

// // 2. Grab the input by its id
// const widthInput = document.getElementById("width");

// // 3. Listen for a click on the button
// btn.addEventListener("click", function() {
//   // 4. Read the value from the input
//   const widthValue = widthInput.value;
//   console.log(widthValue);
// });

console.log("Calculator loaded!")


// tracking width input to calculate button press
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("calculatorBtn");
  const widthInput = document.getElementById("width");

  btn.addEventListener("click", function() {
    const widthValue = widthInput.value;
    console.log(widthValue);
  });
});

// tracking length input to calculate button press
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("calculatorBtn");
    const lengthInput = document.getElementById("length");

    btn.addEventListener("click", function() {
        const lengthValue = lengthInput.value;
        console.log(lengthValue);
    });
});

// tracking height input to calculate button press
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("calculatorBtn");
    const heightInput = document.getElementById("height");

    btn.addEventListener("click", function() {
        const heightValue = heightInput.value;
        console.log(heightValue);
    })
})