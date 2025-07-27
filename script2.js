function greetUser() {
  var gender = document.getElementById("genderInput").value;
  var message = document.getElementById("message");
  var page = document.getElementById("page");

  if (gender === "male" || gender === "Male") {
    message.innerHTML = "Good Morning Sir.";
    page.style.backgroundColor = "#add8e6"; // light blue
  } else if (gender === "female" || gender === "Female") {
    message.innerHTML = "Good Morning Ma'am.";
    page.style.backgroundColor = "#ffc0cb"; // light pink
  } else {
    message.innerHTML = "Please enter 'male' or 'female'.";
    page.style.backgroundColor = "white";
  }
}
