// triangle calculation
function calculteTriangleArea() {
  // get triangle base
  const triangleBaseInput = document.getElementById("triangle-base");
  const tringngleBaseValue = triangleBaseInput.value;
  const base = parseFloat(tringngleBaseValue);
  // console.log(base)

  // get triangle height
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightValue = triangleHeightInput.value;
  const height = parseFloat(triangleHeightValue);
  // console.log(height)

  // calculate triangle area
  const triangleArea = 0.5 * base * height;
  console.log("Triangle Area is :", triangleArea);
  // display area
  const displayTriangleArea = document.getElementById("triangle-area");
  displayTriangleArea.innerText = triangleArea;

  // ---display calculation area section--
  const displayCalculationAreaSection =
    document.getElementById("triangle-area-display");
  displayCalculationAreaSection.innerText = triangleArea;
}

// Rectangle calculation
function calculateRectangleArea() {
  // get width
  const widthInput = document.getElementById("ractangle-width");
  const widthValue = widthInput.value;
  const width = parseFloat(widthValue);
  // console.log(width)

  // get length
  const lengthInput = document.getElementById("ractangle-length");
  const lengthValue = lengthInput.value;
  const length = parseFloat(lengthValue);
  // console.log(length)

  // calculate ractangle area
  const ractangleArea = width * length;

  // display area
  const displayRactangleArea = document.getElementById("ractangle-area");
  displayRactangleArea.innerText = ractangleArea;

  // ---display calculation area section--
  const displayCalculationAreaSection =
    document.getElementById("ractangle-area-display");
  displayCalculationAreaSection.innerText = ractangleArea;
}

// Parallelogram calculation
function calculateParallelogramArea() {
  // get base
  const baseInput = document.getElementById("base-input");
  const baseValue = baseInput.value;
  const base = parseFloat(baseValue);
  // console.log(base)

  // get height
  const heightInput = document.getElementById("height-input");
  const heightValue = heightInput.value;
  const height = parseFloat(heightValue);
  // console.log(height)

  // parallelogram area
  const parallelogramArea = base * height;

  // display area
  const displayParallelogramArea =
    document.getElementById("parallelogram-area");
  displayParallelogramArea.innerText = parallelogramArea;

  // ---display calculation area section--
  const displayCalculationAreaSection =
    document.getElementById("paralleogram-area-display");
  displayCalculationAreaSection.innerText = parallelogramArea;
}

// calculation rhombus area
function calculateRhombusArea() {
  // get d1
  const d1 = getD1InputValue();
  // console.log(d1)

  // get d2
  const d2 = getD2InputValue();
  // console.log(d2)

  // Rhombus area calculation
  const rhombusArea = d1 * d2;

  // display rhombus area
  const displayRhombusArea = document.getElementById("rhombus-area");
  displayRhombusArea.innerText = rhombusArea;

  // ---display calculation area section--
  const displayCalculationAreaSection =
    document.getElementById("rhombus-area-display");
  displayCalculationAreaSection.innerText = rhombusArea;

}
// get first input by function
function getD1InputValue() {
  const d1Input = document.getElementById("rhombus-d1");
  const d1Value = d1Input.value;
  const d1 = parseFloat(d1Value);
  return d1;
}
// get second input by function
function getD2InputValue() {
  const d2Input = document.getElementById("rhombus-d2");
  const d2Value = d2Input.value;
  const d2 = parseFloat(d2Value);
  return d2;
}

// calculation pentagon area
function calculatePentagonArea() {
  // get p by input function
  const p = getInputValue("pentagon-p");
  console.log("p is:", p);

  // get b by input function
  const b = getInputValue("pentagon-b");
  console.log("b is:", b);

  // calculate pentagon area
  const pentagonArea = 0.5 * p * b;

  // disply pentagon area
  const displayPentagonArea = document.getElementById("pentagon-area");
  displayPentagonArea.innerText = pentagonArea;

  // ---display calculation area section--
  const displayCalculationAreaSection =
    document.getElementById("pentagon-area-display");
  displayCalculationAreaSection.innerText = pentagonArea;
}

// Ellipse area calculation
function calcultaeEllipseArea() {
  // get a by input function
  const a = getInputValue("ellipse-a");
  // console.log(a)

  // get b by input Function
  const b = getInputValue("ellipse-b");
  // console.log(b)

  // calculation ellipse area
  const ellipseArea = 3.1416 * a * b;

  // display ellipse area
  const displayEllipseArea = document.getElementById("ellipse-area");
  displayEllipseArea.innerText = ellipseArea.toFixed(2);

  // display calculation area section
  const displayCalculationAreaSection =
    document.getElementById("ellipse-area-display");
  displayCalculationAreaSection.innerText = ellipseArea.toFixed(2);
}

// sample input value whose use this excute this
function getInputValue(InputFieldId) {
  const inputField = document.getElementById(InputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}
