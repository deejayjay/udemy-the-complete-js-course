"use strict";
/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive :D');

*/

/* 
// Function declaration
function logName() {
  console.log('My name is Deepak.');
}

logName();
logName();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  return `Juice with ${apples} apples and ${oranges} oranges.`;  
}

console.log(fruitProcessor(5, 2));
*/

/* 
// Function expressions
const calculateAgeOne = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

console.log(calculateAgeOne(1988));

// Arrow function
const calculateAgeTwo = (birthYear) => new Date().getFullYear() - birthYear;
console.log(calculateAgeTwo(1988));

const RETIREMENT_AGE = 65;

const yearsUntilRetirement = (firstName, birthYear) =>  {
    const yearsLeft = RETIREMENT_AGE - (new Date().getFullYear() - birthYear);
    return `${firstName} retires in ${yearsLeft} years.`;
  };

console.log(yearsUntilRetirement('Deepak', 1988));
*/

/* 
// Function calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log(`Apples were cut into ${applePieces} pieces and oranges were cut into ${orangePieces} pieces.`);

  return `Juice with ${apples} apples and ${oranges} oranges.`;  
}

console.log(fruitProcessor(2, 3));
*/
/* 
const calculateAge = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

const yearsUntilRetirement = (firstName, birthYear) => {
  const RETIREMENT_AGE = 65;
  const yearsLeft = RETIREMENT_AGE - calculateAge(birthYear);

  if (yearsLeft > 0) return `${firstName} retires in ${yearsLeft} years.`;
  else if (yearsLeft === 0) return `${firstName} is retiring this year.`;
  else return `${firstName} has already retired.`;
};
console.log(yearsUntilRetirement('Joy', 1956));
console.log(yearsUntilRetirement('Joshy', 1959));
console.log(yearsUntilRetirement('Anand', 1992));
*/

/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/
/* 
const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    return;
  }

  if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    return;
  }

  console.log('No team wins...');
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
*/
/* 
const calculateAge = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

const birthYears = [1990, 1967, 2002, 2010, 2018];

const ages = [calculateAge(birthYears[0]), calculateAge(birthYears[1]), calculateAge(birthYears[2]), calculateAge(birthYears[3]), calculateAge(birthYears[4])];

console.log(ages);
*/
/* 
const birthYears = [1990, 1967, 2002, 2010, 2018];
birthYears.push(2020); // Adds item to the end of the array
console.log(birthYears);

birthYears.pop(); // Removes item from the end of the array
console.log(birthYears);

birthYears.unshift(1975); // Adds item to the beginning of the array
console.log(birthYears);

birthYears.shift(); // Removes item from the beginning of the array
console.log(birthYears);

console.log(birthYears.indexOf(2002)); // Returns the index of the item in the array
console.log(birthYears.includes(2002)); // Returns true if the item is in the array
*/

/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*/
/* 
// Intro to Objects
const user = {
  firstName: "Deepak",
  lastName: "Joy Jose",
  birthYear: 1988,
  job: "Software Developer",
  friends: ["Arun", "Vishnu", "John"]
};

console.log(user);

console.log(user.firstName);
console.log(user['lastName']);

const nameKey = 'Name';

console.log(user[`first${nameKey}`]);
console.log(user[`last${nameKey}`]);

const interestedIn = prompt("What do you want to know about the user? Choose between firstName, lastName, birthYear, job, and friends");

if (user[interestedIn]) {
  console.log(user[interestedIn]);  
} else {
  console.log('Wrong request! Please choose between firstName, lastName, birthYear, job, and friends');
}

// 'Deepak' has 3 friends, and his best friend is called 'Arun'

console.log(`${user.firstName} has ${user.friends.length} friends, and his best friend is ${user.friends[0]}`);
*/
/* 
const user = {
  firstName: "Deepak",
  lastName: "Joy Jose",
  birthYear: 1988,
  job: "Software Developer",
  friends: ["Arun", "Vishnu", "John"],
  hasDriversLicense: true,

  calcAge: function() {
    return new Date().getFullYear() - this.birthYear;
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  }
};

console.log(user.calcAge());
console.log(user.getSummary());
*/

/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

2. Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/
/* 
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.calcBMI() > mark.calcBMI()) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
*/
/* 
let dice = Math.ceil(Math.random() * 6);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.ceil(Math.random() * 6);

  if(dice === 6) console.log('You rolled a 6. Exiting loop...');
}
*/

/*
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

1. Create an array called bills containing all 10 test bill values.

2. Create empty arrays for the tips and the totals (tips and totals)

3. Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

1. First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

3. Call the function with the totals array.
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];
}

console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Totals: ${totals}`);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(`Average of totals: ${calcAverage(totals)}`);
