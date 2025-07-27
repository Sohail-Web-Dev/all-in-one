function showWelcome() {
  var city = document.getElementById("cityInput").value;
  var output = document.getElementById("output");

  if (city === "") {
    output.innerHTML = "Please enter a city.";
  } else if (city === "karachi" || city === "Karachi") {
    output.innerHTML = "Welcome to the City of Lights, Karachi!";
  } else if (city === "lahore" || city === "Lahore") {
    output.innerHTML = "Welcome to the Heart of Pakistan, Lahore!";
  } else if (city === "islamabad" || city === "Islamabad") {
    output.innerHTML = "Welcome to the Beautiful Capital, Islamabad!";
  } else if (city === "multan" || city === "Multan") {
    output.innerHTML = "Welcome to the City of Saints, Multan!";
  } else if (city === "peshawar" || city === "Peshawar") {
    output.innerHTML = "Welcome to the City of Flowers, Peshawar!";
  } else {
    output.innerHTML = "Welcome to " + city + "!";
  }
}
