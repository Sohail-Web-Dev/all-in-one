function checkFuel() {
  var fuel = document.getElementById("fuelInput").value;
  var message = document.getElementById("message");
  var page = document.getElementById("page");

  if (fuel < 0.25) {
    message.innerHTML = "⛽ Please refill the fuel in your car!";
    page.style.backgroundColor = "red";
  } else {
    message.innerHTML = "✅ Fuel level is okay.";
    page.style.backgroundColor = "lightgreen";
  }
}
