function checkSignal() {
  var color = document.getElementById("colorInput").value;
  var message = document.getElementById("message");
  var page = document.getElementById("page");

  if (color === "red" || color === "Red") {
    message.innerHTML = "Must Stop";
    page.style.backgroundColor = "red";
  } else if (color === "yellow" || color === "Yellow") {
    message.innerHTML = "Ready to move";
    page.style.backgroundColor = "yellow";
  } else if (color === "green" || color === "Green") {
    message.innerHTML = "Move now";
    page.style.backgroundColor = "lime";
  } else {
    message.innerHTML = "Enter red, yellow or green";
    page.style.backgroundColor = "white";
  }
}
