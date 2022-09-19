const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateSumAngle(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  if (
    Number(inputs[0].value) !== 0 &&
    Number(inputs[1].value) !== 0 &&
    Number(inputs[2].value) !== 0
  ) {
    const totalSumAngle = calculateSumAngle(
      Number(inputs[0].value),
      Number(inputs[1].value),
      Number(inputs[2].value)
    );

    if (totalSumAngle === 180) {
      output.innerText = "Great, This angles forms a Triangle!!";
    } else {
      output.innerText = "Uh-oh, This angles doesn't forms a Triangle!!";
    }
  } else {
    output.innerText =
      "Please input all the angles of a Triangle in numerals!!";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
