function checkTime() {
  const time = parseInt(document.getElementById("timeInput").value);
  const output = document.getElementById("output");
  const body = document.getElementById("body");

  let message = "";
  let bg = "";

  if (time >= 0 && time < 1200) {
    message = "Good morning!";
    bg = "linear-gradient(to top right, #fceabb, #f8b500)";
  } else if (time >= 1200 && time < 1700) {
    message = "Good afternoon!";
    bg = "linear-gradient(to top right, #a1c4fd, #c2e9fb)";
  } else if (time >= 1700 && time < 2100) {
    message = "Good evening!";
    bg = "linear-gradient(to top right, #fdc830, #f37335)";
  } else if (time >= 2100 && time <= 2359) {
    message = "Good night!";
    bg = "linear-gradient(to top right, #2c3e50, #4ca1af)";
  } else {
    message = "Invalid time. Please enter between 0000 and 2359.";
    bg = "linear-gradient(to top right, #ffdde1, #ee9ca7)";
  }

  body.style.background = bg;
  output.innerHTML = message;
}
