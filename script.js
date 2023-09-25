// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//variables & arrays
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", ",", "<", ".", ">", "?", "/"];
  var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var randomArray = [];
  var passLength = 8;
  var password = "";



// Write password to the #password input
function writePassword() {
  var variousPrompts = newPrompts();
  var passwordText = document.querySelector("#password");

    if (variousPrompts) {
    var newPass = generatePassword();
    passwordText.value = newPass; 
    } else {
      passwordText.value = "";
    }
}

function generatePassword() {
  var password = "";
  // loop to randomly select from arrays
    for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * randomArray.length);
        password = password + randomArray[randomIndex];
    } 
  return password;
}

//prompt to enter a pass length of 8-128 characters
function newPrompts() {
  randomArray = [];

  passLength = parseInt(prompt("Enter a password length of 8-128 characters."));

//if password length is not met, user will be prompted again
  if (passLength < 8 || passLength > 128) {
    alert("You have entered an invalid password length.");
    return false;
  }
  
     //if character type(s) is/are confirmed
    if (confirm("Include a lowercase?")) {
      randomArray = randomArray.concat(lowercase);
    }
    if (confirm("Include an uppercase?")) {
      randomArray = randomArray.concat(uppercase);
    }
    if (confirm("Include numeric?")) {
      randomArray = randomArray.concat(numeric);
    }
    if (confirm("Include special characters?")) {
      randomArray = randomArray.concat(specialCharacters);
    }
    return true;
    
  }



  
  //   var confirmLowercase = confirm("Include a lowercase?");
  //   var confirmUppercase = confirm("Include an uppercase?");
  //   var confirmNumeric = confirm("Include numeric?");
  //   var confirmSpecialCharacters = confirm("Include special characters?");

  //   if (confirmLowercase === false && confirmUppercase === false && confirmNumeric === false && confirmSpecialCharacters === false) {
  //       alert("You must choose at least one of the following character types to include in the password.");
  //         return false;
  //     }
  //   };

    
    
  
