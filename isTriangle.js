const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateSumAngle(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
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
}

isTriangleBtn.addEventListener("click", isTriangle);

// ******* QUIZ ********

const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-btn");
const output1 = document.querySelector("#output1");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

// function calculateScores() {
//   console.log("click");
//   let score = 0;
//   let index = 0;
//   const formResults = new FormData(quizForm);
//   for (let value of formResults.values()) {
//     if (value === correctAnswers[index]) {
//       //   score++;
//       score = score + 1;
//     }
//     // index++;
//     index = index + 1;
//   }
//   console.log(score);
// }

function calculateScores() {
  console.log("clicked");
}
submitAnswerBtn.addEventListener("click", calculateScores);
