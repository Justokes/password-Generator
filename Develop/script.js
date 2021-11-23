// Assignment Code
function generatePassword() {


}





var generateBtn = document.querySelector("#generate");

function charPrompt() {
    var char = prompt("How many characters would you like your password to have?");
    var charChoice = parseInt(char, 10);

    if (charChoice >= 8 == charChoice <= 128) {
        alert("You have chosen " + charChoice + " characters!");
        specPrompt();
    } else {
        alert("You must choose a value between 8 and 128 characters");
        charPrompt();
    }
}
charPrompt();
// --------------------------
function specPrompt() {
    var spec = confirm("Would you like your password to include special characters? OK = Yes / Cancel = No");
    var specChoice = spec;

    if (specChoice === true) {
        alert("You have chosen to include special characters.");
        numPrompt();
    } else {
        specChoice === false
        alert(" You have chosen to exclude special characters");
        numPrompt();
    }
}

// // --------------------------
function numPrompt() {
    var num = confirm("Would you like your password to include numbers? OK = Yes Cancel = No?");
    var numChoice = num;

    if (numChoice === true) {
        alert("You have chosen to include numbers.");
        letPrompt();
    } else {
        numChoice === false
        alert("You have chosen to exclude numbers.");
        letPrompt();
    }

}

function letPrompt() {
    var letters = confirm("Would you like your password to include letters?");
    var letChoice = letters;

    if (letChoice === true) {
        alert("You have chosen to include letters");
        casePrompt();
    } else if (letChoice === false) {
        alert("You have chosen to exclude letters.")
    }
}

// ----------------------------
function casePrompt() {
    var cap = prompt(" Would you like your password to include uppercase letters, lowercase letters, or both? U/L/B?")
    var capChoice = cap.toLowerCase();

    if (capChoice === "u") {
        alert("You have chosen to include uppercase letters");

    } else if (capChoice === "l") {
        alert("You have chosen to include lowercase letters");

    } else {
        (capChoice === "b")
        alert("You have chosen to include both upper and lowercase letters.");
    }
}
// if {
//   alert("You must choose U for uppercase letters, L for lowercase letters, or B for both upper and lowercase letters.");
// }















// Write password to the #password input


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    passwordText.value = password;

}

function generatePassword() {

    return "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword => {


    const length = charChoice.value;
    const spec = specChoice === true;
    const num = numChoice === true;
    const lower = casePrompt === "l";
    const upper = casePrompt === "u";
    const bothUL = casePrompt === "b";
})