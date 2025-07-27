function checkTemp() {
  var temp = document.getElementById("tempInput").value;
  var result = document.getElementById("result");

  document.body.style.backgroundColor = "white";

  if (temp > 40) {
    result.innerHTML = "🔥 It is too hot outside.";
    result.style.color = "red";
    document.body.style.backgroundColor = "salmon";
  } else if (temp > 30) {
    result.innerHTML = "😎 The Weather today is Normal.";
    result.style.color = "orange";
    document.body.style.backgroundColor = "moccasin";
  } else if (temp > 20) {
    result.innerHTML = "🌤️ Today’s Weather is cool.";
    result.style.color = "blue";
    document.body.style.backgroundColor = "lightblue";
  } else if (temp > 10) {
    result.innerHTML = "❄️ OMG! Today’s weather is so Cool.";
    result.style.color = "purple";
    document.body.style.backgroundColor = "lavender";
  } else {
    result.innerHTML = "🥶 It's freezing!";
    result.style.color = "gray";
    document.body.style.backgroundColor = "#e0e0e0";
  }
}
