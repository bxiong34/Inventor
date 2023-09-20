// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function validateLength(userLength) {
  return false;
};

function validateLowercase(userLowercase) {
  return false;
}

function generatePassword() {
  var characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()-=+,.?";
  var passLength = prompt("Enter password with a length of 8-128 characters.");
  var Lowercase = prompt("Add a lowercase?");
  var Uppercase = prompt("Add an uppercase?");
  var Numeric = prompt("Add numeric?");
  var SpecialCharacters = prompt("Add special characters?");


  console.log(passLength);

  if (validateLength(passLength)) {

  } else {
    alert("You have entered an invalid password length.")
    return;
   };

  // console.log(validateLowercase);

  // if (validateLowercase(addLowercase)) {
     
  //} else {
    // alert("You have added a lowercase.")
    //return;
   //};
  
};

    //} else if {
    //alert("You have entered an invalid password character".)
    

    



  //return newPass;
