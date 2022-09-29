const sides = document.querySelectorAll(".angle-input");
const hypoBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}
function calculateHypotenuse() {
  if (Number(sides[0].value) !== 0 && Number(sides[1].value) !== 0) {
    const sumOfSquares = calculateSumOfSquares(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    output.innerText = `The length of Hypotenuse is ${lengthOfHypotenuse.toFixed(
      2
    )}`;
  } else {
    output.innerText = "Please input all the sides of a Triangle in numerals!!";
  }
}

hypoBtn.addEventListener("click", calculateHypotenuse);
