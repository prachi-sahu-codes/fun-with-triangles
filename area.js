const inputs = document.querySelectorAll(".angle-input");
const areaBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateAreaOfTriangle(a, b) {
  const area = 0.5 * a * b;
  return area;
}

function calculateArea() {
  const areaOfTriangle = calculateAreaOfTriangle(
    Number(inputs[0].value),
    Number(inputs[1].value)
  );

  output.innerText = `The area of Triangle is ${areaOfTriangle}`;
}

areaBtn.addEventListener("click", calculateArea);
