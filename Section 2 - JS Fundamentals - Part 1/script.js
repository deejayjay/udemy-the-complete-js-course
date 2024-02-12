/*
let js = "amazing";
if (js === "amazing") console.log("JavaScript is FUN!");

console.log(40 + 8 + 23 - 10);

// Values and Variables
let firstName = "Deepak";
console.log(firstName);
*/

// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/
/* const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = getBMI(massMark, heightMark);
const BMIJohn = getBMI(massJohn, heightJohn);

console.log(`BMI of Mark is: ${BMIMark}`)
console.log(`BMI of John is: ${BMIJohn}`)

const markHigherBMI = BMIMark > BMIJohn;

console.log(`${markHigherBMI ? "Mark" : "John"} has higher BMI.`);

// Accepts mass and height and returns the BMI
function getBMI(mass, height) {
    return mass / (height * height);
} */

/* 
const age = 19;

if (age < 18) {
    console.log(`You have to wait ${18 - age} years to become eligible to drive.`);    
} else {
    console.log("You can start driving 🚗🚗🚗.");
}
 */

// Type conversion
/* const inputYear = "1988";
console.log(Number(inputYear), inputYear);

console.log(Number("Deepak"));
console.log(typeof NaN); // type is number!

const age = 19;
console.log(String(age)); */

// Type coercion
// In the case of addition, number is converted to string and then concatenated
/* console.log("1" + 5);

// In the case of subtraction, multiplication or division, string is converted to number and then subtracted
console.log("10" - "4" - "2" - 2);
console.log("10" * "4");
console.log("10" / "4");

console.log("20" - "10" - 5 + "20"); // 5 +"20" = "520"
 */

// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
/* 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("")); // false
console.log(Boolean("Deepak")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true


const money = 0;

if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}
*/

// Equality operators: == vs. ===
/* 
const age = 18;
if (age === 18) console.log("You just became an adult (strict).");

if (age == 18) console.log("You just became an adult (loose).");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

if (favourite === 23) { 
    console.log("Cool! 23 is an amazing number!");
}

if (favourite !== 23) {
    console.log("Why not 23?");
} 
*/

// Logical operators
/* 
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
    console.log("Sarah is eligible to drive!");
} else {
    console.log("Someone else should drive...");
}

const isTired = true;

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log("Sarah is eligible to drive!");
}
*/

// Switch statement
/* 
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("Record videos");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;

  default:
    console.log("Not a valid day!");
    break;
}
*/


// Ternary/conditional operator
/* 
const age = 35;
const drink = age >= 18 ? "wine" : "water";
console.log(`I like to drink ${drink}!`);
*/