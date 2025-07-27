function checkVowel() {
  var ch = document.getElementById("char").value.toLowerCase();
  var result = document.getElementById("result");

  if (ch.length !== 1 || !isNaN(ch)) {
    result.innerHTML = "Please enter a single letter.";
    return;
  }

  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    result.innerHTML = "true (It's a vowel)";
  } else {
    result.innerHTML = "false (Not a vowel)";
  }
}
