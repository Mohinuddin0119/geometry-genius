// triangle calculation
function calculteTriangleArea(){
    // get triangle base
    const triangleBaseInput = document.getElementById('triangle-base')
    const tringngleBaseValue = triangleBaseInput.value
    const base = parseFloat(tringngleBaseValue)
    // console.log(base)

    // get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue)
    // console.log(height)

    // calculate triangle area
    const triangleArea = 0.5 * base * height;
    console.log("Triangle Area is :",triangleArea)
    // display area
    const displayTriangleArea = document.getElementById('triangle-area')
    displayTriangleArea.innerText = triangleArea;
}