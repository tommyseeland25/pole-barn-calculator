console.log("Calculator loaded!")


// tracking width,, length, height input to calculate button press
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("calculatorBtn");
  const widthInput = document.getElementById("width");
  const lengthInput = document.getElementById("length");
  const heightInput = document.getElementById("height");

  btn.addEventListener("click", function() {
    const widthValue = Number(widthInput.value);
    const lengthValue = Number(lengthInput.value);
    const heightValue = Number(heightInput.value);

    // storing to log, F12
    console.log(widthValue, lengthValue, heightValue);

    // fllor area calculation
    const floorArea = widthValue * lengthValue;
    console.log("Floor area:", floorArea);

    // total wall area for the 4 walls
    const wallArea = 2 * (widthValue + lengthValue) * heightValue;
    console.log("Wall Area:", wallArea);

    // total number of post needed math
    const numPosts = ((((lengthValue / 8) + 1) * 2) + 
                      (((widthValue / 8) - 1) * 2));
    console.log("Number of Posts:", numPosts);

    // words presented to user
    document.getElementById("results").innerHTML = 
    "Floor Area: " + floorArea + " sq ft" +
    "<br>Wall Area: " + wallArea + " sq ft" +
    "<br>Number of Posts: " + numPosts;

  });
});