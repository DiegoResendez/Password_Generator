// Assignment Code
let generateBtn = document.querySelector("#generate");
// let passwordValue = document.getElementById("#password").value;


let valueUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let valueLowerCase = "abcdefghijklmnopqrstuvwxyz"
let valueNumbers = "1234567890"
let valueSpecialCharacters = "!@#$%^&*()_+~"

let value = "";

// Write password to the #password input
function writePassword() {
  value = "";
  let passwordValue = prompt("How many characters would you like?")

  let answerUpperCase
  let answerLowerCase
  let answerNumbers
  let answerSpecialCharacters


  if (passwordValue < 8 || passwordValue > 128) {
    alert("Character count must be between 8 and 128")
    return
  }
  else {
    answerUpperCase = confirm("Do you want to include Upper Case")
    answerLowerCase = confirm("Do you want to include Lower Case")
    answerNumbers = confirm("Do you want to include Numbers")
    answerSpecialCharacters = confirm("Do you want to include Special Characters")

    if (!answerUpperCase && !answerLowerCase && !answerNumbers && !answerSpecialCharacters) {
      alert("Your password is blank.  Try again.")
    }


  }

  if (answerUpperCase) {
    value += valueUpperCase
  }

  if (answerLowerCase) {
    value += valueLowerCase
  }

  if (answerNumbers) {
    value += valueNumbers
  }

  if (answerSpecialCharacters) {
    value += valueSpecialCharacters
  }

  console.log(value)

  let passwordText = document.querySelector("#password");
  let password = "";

  for (i = 0; i < passwordValue; i++) {
    password = password + value.charAt(Math.floor(Math.random() * value.length))
  }

  console.log(password)

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// let answer = confirm("newPassword");
// console.log(answer)
