function badWordsReplacer() {
  let input = document.getElementById("textbox").value;

  let replacedWord = "*****";

  input = input.replace("dang", replacedWord);
  input = input.replace("shoot", replacedWord);
  input = input.replace("fudge", replacedWord);

  document.getElementById("answer").innerText = input;
  document.getElementById("textbox").value = input;
}
function grammarly() {
  let input = document.getElementById("textbox").value;

  input = input.replace("me and my friend", "my friend and I");

  document.getElementById("answer").innerText = input;
  document.getElementById("textbox").value = input;
}

function nameValidation() {
  let input = document.getElementById("textbox").value;

  document.getElementById("textbox").value = input;
  numberCheck = input.replace(/[^0-9]/g, "").length;

  if (input.length >= 30) {
    alert("Too Long");
  } else if (numberCheck > 0) {
    alert("Only Letters");
  } else if (input.length == 0) {
    alert("Too Short");
  } else {
    document.getElementById("answer").innerText = "Name Accepted";
  }
}

function salutationValidation() {
  let input = document.getElementById("textbox").value;

  document.getElementById("textbox").value = input;
  firstCharacter = input[0];
  indexOfLast = input.length - 1;
  lastCharacter = input[indexOfLast];

  if (firstCharacter == firstCharacter.toUpperCase() && lastCharacter == ".") {
    document.getElementById("answer").innerText = "Accepted";
  } else {
    document.getElementById("answer").innerText = "Rejected";
  }
}

function passwordChecker() {
  let input = document.getElementById("textbox").value.trim();

  document.getElementById("textbox").value = input;
  numberOfNumbersInString = input.replace(/[^0-9]/g, "").length;
  numberOfSpecialCharacters = input.replace(/[^!@#$%^&*?/]/g, "").length;
  numberOfCapitalLetters = input.replace(/[^A-Z]/g, "").length;

  if (numberOfNumbersInString == 0 && numberOfSpecialCharacters == 0) {
    document.getElementById("answer").innerText = "Weak Password";
  } else if (
    numberOfCapitalLetters >= 1 && numberOfNumbersInString >= 1 && numberOfSpecialCharacters >= 1 && input.length > 8) {
    document.getElementById("answer").innerText = "Very Strong Password";
  } else if (
    numberOfNumbersInString >= 1 && numberOfSpecialCharacters >= 1) {
    document.getElementById("answer").innerText = "Strong Password";
  } else if (numberOfNumbersInString >= 1 || numberOfSpecialCharacters >= 1) {
    document.getElementById("answer").innerText = "Medium strength Password";
  }
}

function dnaChecker() {
  let input1 = document.getElementById("textbox2").value;
  let input2 = document.getElementById("textbox3").value;

  validDNA1 = input1.replace(/[AGCT]/g, "").length;
  validDNA2 = input2.replace(/[AGCT]/g, "").length;

  complementaryPair = input1.replaceAll('A','$').replaceAll('G','%').replaceAll('T','A').replaceAll('C','G').replaceAll('$','T').replaceAll('%','C')

  if (validDNA1 == 0 && validDNA2 == 0 && complementaryPair == input2) {
    alert("valid DNA pair");
  } else {
    alert("DNA are not a pair or invalid input");
  }
}