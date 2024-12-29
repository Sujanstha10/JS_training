//Conditonal statements are used to execute a specific block of code based on a condition.

// if else statement
// const number = 10;
// // only takes true or false
// if (10 >= 0) {
//   console.log(number + " is a positive number"); //concatenation
// } else {
//   //block of code to be executed if the condition is false
//   console.log(number + "is a negative number");
// }

//else if statement(used when there are multiple conditions)
// check if you are baby ,child ,teenager,adult
// baby<2
//child<12
//teenager<19
//adult above

// let age = 25;
// if (age <= 2) {
//   console.log("you are a baby");
// } else if (age <= 12) {
//   console.log("you are a child");
// } else if (age <= 19) {
//   console.log("you are a teenager");
// } else {
//   console.log("you are a  adult");
// }
// wap to find if a student got distintion(>=80) ,1st division(>=60) ,2nd division(>40), just pass(=40) or fail(<40)
//else if ladder
// let marks = 20;
// if (marks >= 80) {
//   console.log("you got distinction");
// } else if (marks >= 60) {
//   console.log("you got 1st division");
// } else if (marks >= 40) {
//   console.log("you got 2nd division");
// } else if (marks == 40) {
//   console.log("just pass");
// } else {
//   console.log("failed");
// }
// //nested if else
// if (condition) {
//   if (condition) {
//   } else {
//   }
// } else {
//   if (condition) {
//   } else {
//   }
// }
// Example: Checking grade based on marks
let marks = 50;

if (marks >= 50) {
  if (marks >= 90) {
    console.log("Excellent! You got an A grade.");
  } else if (marks >= 75) {
    console.log("Good job! You got a B grade.");
  } else {
    console.log("You passed with a C grade.");
  }
} else {
  if (marks >= 35) {
    console.log("You failed but are eligible for a retest.");
  } else {
    console.log("You failed. Better luck next time.");
  }
}
