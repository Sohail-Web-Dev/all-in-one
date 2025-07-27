function checkDivisible() {
  var number = document.getElementById("numInput").value;
  var result = document.getElementById("result");

  document.body.style.backgroundColor = "white";

  if (number % 3 === 0) {
    result.innerHTML = "✅ Yes, " + number + " is divisible by 3!";
    result.style.color = "green";
    document.body.style.backgroundColor = "lightgreen";
  } else {
    result.innerHTML = "❌ No, " + number + " is not divisible by 3.";
    result.style.color = "red";
    document.body.style.backgroundColor = "crimson";
  }
}
