var timeLimit = 60;
let timeLeft = timeLimit;


var timerInterval = setInterval(() => {
  timeLeft--;
  document.getElementById("timer").innerHTML = `Time left: ${timeLeft} seconds`;
  if (timeLeft === 0) {
    clearInterval(timerInterval);
    endQuiz();
  }
}, 1000);

// Calculates the score and records the user's initials when the user submits the quiz
document.getElementById("quiz-form").addEventListener("submit", (event) => {
  event.preventDefault();
  var questions = document.getElementsByClassName("question");
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    var answers = questions[i].getElementsByTagName("input");
    for (let j = 0; j < answers.length; j++) {
      if (answers[j].checked && answers[j].value === "A") {
        score++;
        break;
      }
    }
  }
  var initials = document.getElementById("initials").value;
  localStorage.setItem("score", score);
  localStorage.setItem("initials", initials);
  document.getElementById("scoreboard").innerHTML = `
    <h2>Your score is: ${score}/${questions.length}</h2>
    <h3>Your initials are: ${initials}</h3>
  `;
  document.getElementById("play-again").style.display = "block";
});
function endQuiz() {
  document.getElementById("quiz-form").innerHTML = "<h2>Time's up!</h2>";
}
console.log(localStorage.getItem("score"))

// Reloads the page when the "Play Again" button is clicked
document.getElementById("play-again").addEventListener("click", () => {
  location.reload();
});


