function showResult() {
  var s1 = document.getElementById("sub1").value;
  var s2 = document.getElementById("sub2").value;
  var s3 = document.getElementById("sub3").value;
  var card = document.getElementById("resultCard");

  s1 = Number(s1);
  s2 = Number(s2);
  s3 = Number(s3);

  // Reset background to white first
  document.body.style.backgroundColor = "white";

  if (!s1 || !s2 || !s3) {
    card.classList.remove("hidden");
    card.innerHTML = "Please enter marks for all subjects.";
    return;
  }

  if (s1 > 100 || s2 > 100 || s3 > 100) {
    card.classList.remove("hidden");
    card.innerHTML = "Marks cannot be more than 100.";
    return;
  }

  var total = 300;
  var obtained = s1 + s2 + s3;
  var percentage = (obtained / total) * 100;
  var grade = "";
  var remarks = "";

  if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent work!";
    document.body.style.backgroundColor = "lime";
  } else if (percentage >= 70) {
    grade = "A";
    remarks = "Very good!";
    document.body.style.backgroundColor = "green";
  } else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve.";
    document.body.style.backgroundColor = "yellow";
  } else if (percentage >= 50) {
    grade = "C";
    remarks = "Work harder.";
    document.body.style.backgroundColor = "goldenrod";
  } else {
    grade = "F";
    remarks = "Better luck next time.";
    document.body.style.backgroundColor = "red";
  }

  card.classList.remove("hidden");
  card.innerHTML =
    "Marks Sheet<br><br>" +
    "Total Marks: 300<br>" +
    "Marks Obtained: " + obtained + "<br>" +
    "Percentage: " + percentage + "%<br>" +
    "Grade: " + grade + "<br>" +
    "Remarks: " + remarks;
}
