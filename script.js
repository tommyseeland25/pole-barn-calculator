console.log("Calculator loaded!")


// tracking width,, length, height input to calculate button press
// along with floor area, total wall area, and num of posts math
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("calculatorBtn");
  const widthInput = document.getElementById("width");
  const lengthInput = document.getElementById("length");
  const heightInput = document.getElementById("height");
  const roofPitchInput = document.getElementById("roofPitch");
  const trussSpacingInput = document.getElementById("trussSpacing");

  btn.addEventListener("click", function() {
    const widthValue = Number(widthInput.value);
    const lengthValue = Number(lengthInput.value);
    const heightValue = Number(heightInput.value);
    const roofPtichValue = Number(roofPitchInput.value);
    const trussSpacingValue = Number(trussSpacingInput.value);

    // storing to log, F12
    //console.log(widthValue, lengthValue, heightValue, roofPtichValue);

    // floor area calculation
    const floorArea = widthValue * lengthValue;
    console.log("Floor area:", floorArea);

    // total wall area for the 4 walls
    const wallArea = 2 * (widthValue + lengthValue) * heightValue;
    console.log("Wall Area:", wallArea);

    // total number of post needed math
    const numPosts = ((((lengthValue / 8) + 1) * 2) + 
                      (((widthValue / 8) - 1) * 2));
    console.log("Number of Posts:", numPosts);

    // lumbar math, girts
    const num_girt_row = heightValue / 2;
    const total_girt_length = num_girt_row * ((lengthValue + widthValue) * 2);
    const num_2x6x16_boards= Math.ceil(total_girt_length / 16);
    console.log("Girt Boards (2x6x16):", num_2x6x16_boards);

    // Roof logic
    console.log("Roof Pitch", roofPtichValue);
    console.log("Truss Spacing", trussSpacingValue);
    const num_of_trusses = (lengthValue / trussSpacingValue) + 1;
    //const rafter

    // words presented to user
    document.getElementById("results").innerHTML = 
    "Floor Area: " + floorArea + " sq ft" +
    "<br>Wall Area: " + wallArea + " sq ft" +
    "<br>Number of Posts: " + numPosts +
    "<br>Girt Boards (2x6x16): " + num_2x6x16_boards +
    "<br>Number of Trusses: " + num_of_trusses;

  });
});

