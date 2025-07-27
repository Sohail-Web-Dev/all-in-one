function checkPassword() {
  var correctPass = "sohail123";
  var userPass = document.getElementById("userPass").value;
  var result = document.getElementById("result");

  if (userPass === "") {
    result.innerHTML = "Please enter your password.";
  } else if (userPass === correctPass) {
    result.innerHTML = "Correct! The password you entered matches the original password.";
  } else {
    result.innerHTML = "Incorrect password.";
  }
}
