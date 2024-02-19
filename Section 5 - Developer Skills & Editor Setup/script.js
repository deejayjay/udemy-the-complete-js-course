"use strict";

/*
PROBLEM 1:
**********
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

1) Understanding the problem:
- Amplitude is the difference between the highest and lowest temperature in a sequence of temperature values.
- How to compute max and min temperature?
- What is a sensor error? What to do when there is a sensor error?

2) Breaking up into sub-problems:
- How to ignore sensor error?
- Find max value in temperature array
- Find min value in temperature array
- Calculate amplitude and return it
*/
/* 
const calculateAmplitude = function (temperatures) {
  let min = temperatures[0];
  let max = temperatures[0];

  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] === "error") continue;

    if (temperatures[i] < min) min = temperatures[i];
    else if (temperatures[i] > max) max = temperatures[i];
  }

  return max - min;
};

const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

console.log(calculateAmplitude(temps));
*/

// Coding Challenge #1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
const printForecast = function (temps) {
  let str = "... ";

  for (let i = 0; i < temps.length; i++) {
    str += `${temps[i]}ºC in ${i + 1} days ... `;
  }

  return str.trimEnd();
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
