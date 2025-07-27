function checkChar() {
  var input = document.getElementById("charInput").value;
  var result = document.getElementById("result");

  if (input.length === 0) {
    result.innerHTML = "Please enter a character.";
    return;
  }

  var code = input.charCodeAt(0);

  if (code >= 48 && code <= 57) {
    result.innerHTML = "It is a number.";
  } else if (code >= 65 && code <= 90) {
    result.innerHTML = "It is an uppercase letter.";
  } else if (code >= 97 && code <= 122) {
    result.innerHTML = "It is a lowercase letter.";
  } else {
    result.innerHTML = "It is a special character.";
  }
}
