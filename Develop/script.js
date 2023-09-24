// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var variousPrompts = getPrompt();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//arrays
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", ",", "<", ".", ">", "?", "/"];
  var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var randomArray = [];


//variable declaration
  var passLength = 8;
  var confirmLowercase;
  var confirmUppercase;
  var confirmNumeric;
  var confirmSpecialCharacters;
  var password = "";


function generatePassword() {
  var password = "";
  // loop to randomly select from arrays
    for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * randomArray.length);
        password = password + randomArray[randomIndex];
    } return password;
}

function getPrompt() {
  passLength = prompt("Enter a password length of 8-128 characters.");
}

//if password length is not met, user will be prompted again
if (passLength < 8 || passLength > 128) {
    alert("You have entered an invalid password length.");
   }
     
  //confirms character type(s) to include in password
  var confirmLowercase = confirm("Include a lowercase?");
  var confirmUppercase = confirm("Include an uppercase?");
  var confirmNumeric = confirm("Include numeric?");
  var confirmSpecialCharacters = confirm("Include special characters?");

//if no character type selected, user is re-prompted to confirm character type(s) 
if (confirmLowercase === false && confirmUppercase === false && confirmNumeric === false && confirmSpecialCharacters === false) {
  alert("You must choose at least one of the following character types to include in the password.");
    var confirmLowercase = confirm("Include a lowercase?");
    var confirmUppercase = confirm("Include an uppercase?");
    var confirmNumeric = confirm("Include numeric?");
    var confirmSpecialCharacters = confirm("Include special characters?");
};

     
//if character type(s) is/are confirmed
    if (confirmLowercase) {
      randomArray = randomArray.concat(lowercase);
    }
    if (confirmUppercase) {
      randomArray = randomArray.concat(uppercase);
    }
    if (confirmNumeric) {
      randomArray = randomArray.concat(numeric);
    }
    if (confirmSpecialCharacters) {
      randomArray = randomArray.concat(specialCharacters);
    };

