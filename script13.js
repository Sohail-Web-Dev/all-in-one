function checkNumber() {
  var num = parseFloat(document.getElementById("num").value);
  var result = document.getElementById("result");

  if (num > 0) {
    result.innerHTML = "It's a Positive number.";
  } else if (num < 0) {
    result.innerHTML = "It's a Negative number.";
  } else {
    result.innerHTML = "It's Zero.";
  }
}
