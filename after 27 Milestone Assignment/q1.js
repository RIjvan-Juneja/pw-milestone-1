// Prompt user for password and confirmed password
var password = prompt("Enter password:");
var confirmedPassword = prompt("Confirm password:");

// Check if passwords match
if (password === confirmedPassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful.");
}
