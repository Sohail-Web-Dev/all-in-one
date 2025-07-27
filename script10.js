function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var op = document.getElementById("operator").value;
  var result = document.getElementById("result");

  if (op === "+") {
    result.innerHTML = "Result: " + (num1 + num2);
  } else if (op === "-") {
    result.innerHTML = "Result: " + (num1 - num2);
  } else if (op === "*") {
    result.innerHTML = "Result: " + (num1 * num2);
  } else if (op === "/") {
    if (num2 === 0) {
      result.innerHTML = "❌ Cannot divide by 0";
    } else {
      result.innerHTML = "Result: " + (num1 / num2);
    }
  } else if (op === "%") {
    result.innerHTML = "Result: " + (num1 % num2);
  } else {
    result.innerHTML = "❌ Invalid operator. Use +, -, *, / or %";
  }
}
