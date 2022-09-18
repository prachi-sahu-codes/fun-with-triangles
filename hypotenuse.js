const sides = document.querySelectorAll(".angle-input");
const hypoBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}
function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  output.innerText = `The length of Hypotenuse is ${lengthOfHypotenuse}`;
}

hypoBtn.addEventListener("click", calculateHypotenuse);
