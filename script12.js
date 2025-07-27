function checkLarger() {
  var n1 = parseInt(document.getElementById("num1").value);
  var n2 = parseInt(document.getElementById("num2").value);
  var result = document.getElementById("result");

  if (n1 > n2) {
    result.innerHTML = n1 + " is larger.";
  } else if (n2 > n1) {
    result.innerHTML = n2 + " is larger.";
  } else {
    result.innerHTML = "Both numbers are equal.";
  }
}
