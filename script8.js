function checkEvenOdd() {
  var number = document.getElementById("numInput").value;
  var result = document.getElementById("result");

  document.body.style.backgroundColor = "white";

  if (number === "") {
    result.innerHTML = "Please enter a number.";
    result.style.color = "gray";
    return;
  }

  if (number % 2 === 0) {
    result.innerHTML = "✅ " + number + " is an Even Number!";
    result.style.color = "blue";
    document.body.style.backgroundColor = "lightblue";
  } else {
    result.innerHTML = "🟣 " + number + " is an Odd Number!";
    result.style.color = "purple";
    document.body.style.backgroundColor = "lavender";
  }
}
