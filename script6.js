var secret = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  var guess = Number(document.getElementById("guessInput").value);
  var msg = document.getElementById("message");

  document.body.style.backgroundColor = "white";

  if (guess === secret) {
    msg.innerHTML = "🎉 Bingo! Correct answer.";
    msg.style.color = "green";
    document.body.style.backgroundColor = "lime";
  } else if (guess + 1 === secret || guess - 1 === secret) {
    msg.innerHTML = "🔥 Close enough to the correct answer!";
    msg.style.color = "orange";
    document.body.style.backgroundColor = "yellow";
  } else {
    msg.innerHTML = "❌ Try again!";
    msg.style.color = "red";
    document.body.style.backgroundColor = "crimson";
  }
}
