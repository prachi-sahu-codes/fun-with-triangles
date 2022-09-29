const inputs = document.querySelectorAll(".angle-input");
const areaBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateAreaOfTriangle(a, b) {
  const area = 0.5 * a * b;
  return area;
}

function calculateArea() {
  if (Number(inputs[0].value) > 0 && Number(inputs[1].value) > 0) {
    const areaOfTriangle = calculateAreaOfTriangle(
      Number(inputs[0].value),
      Number(inputs[1].value)
    );

    output.innerText = `The area of Triangle is ${areaOfTriangle}`;
  } else {
    output.innerText =
      "Please input all the sides in positive numerals without leaving empty or 0!!";
  }
}

areaBtn.addEventListener("click", calculateArea);
