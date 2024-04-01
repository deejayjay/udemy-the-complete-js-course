"use strict";

/* 
const firstName = "Deepak";
calculateAge(1988);

function calculateAge(birthYear) {
  let age = new Date().getFullYear() - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // This will not work WHEN STRICT MODE IS ENABLED because add is not defined in this scope.
    // console.log(add(2, 3));
  }

  printAge();

  return age;
} 
*/

/*
// Hoisting with variables
console.log(me); // undefined
console.log(job); // Uncaught ReferenceError: Cannot access 'job' before initialization
console.log(year); // Uncaught ReferenceError: Cannot access 'year' before initialization

var me = "Deepak";
let job = "Software Engineer";
const year = 1988;
*/

/* 
// Hoisting with functions
console.log(addOne(2, 3)); // 5
console.log(addTwo(2, 3)); // Uncaught ReferenceError: Cannot access 'addTwo' before initialization
console.log(addThree(2, 3)); // Uncaght ReferenceError: Cannot access 'addThree' before initialization
console.log(addFour(2, 3)); // addFour is not a function

// Function Declaration
function addOne(a, b) {
  return a + b;
}

// Function Expression
const addTwo = function (a, b) {
  return a + b;
};

// Arrow Function
const addThree = (a, b) => a + b;

// Using var (Will be hoisted, but will be set to undefined)
var addFour = function (a, b) {
  return a + b;
};
 */

/* 
// undefined is falsy value!
if (!noOfProducts) deleteShoppingCart();

var noOfProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}
 */

/*
// 'this' keyword
// ---------------
// 'this' in methods
const student = {
  name: "Deepak",
  age: 32,
  course: "Computer Science",

  getAge: function () {
    console.log(this);
    return this.age; // this refers to the object that is calling the method (student, in 'this' case.)
  },
};

const age = student.getAge();
console.log(age);

const studentB = {
  name: "John",
  age: 25,
  course: "Mathematics",
};

studentB.getAge = student.getAge;
const ageB = studentB.getAge(); // this refers to the object that is calling the method (studentB, in 'this' case.)
console.log(ageB);

const f = student.getAge;
f(); // 'this' will be undefined in this case.


// 'this' in regular functions = undefined (in strict mode only; otherwise, it refers to the Window object)
function add(a, b) {
  console.log(this); // undefined
  return a + b;
}

add(2, 3);

// 'this' in arrow functions = 'this' of parent scope
const addB = (a, b) => {
  console.log(this); // Window
  return a + b;
};

addB(2, 3);

// 'this' in event listeners
document.querySelector("h1").addEventListener("click", function () {
  console.log(this); // h1 element since the event is attached to the <h1> element.
});
 */

// Regular functions vs Arrow functions
// -------------------------------------
/* 
const student = {
  name: "Deepak",
  age: 32,
  course: "Computer Science",

  getAge: function () {
    console.log(this);

    // Old solution - access 'this' when regular functions are used
    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.age >= 30 && self.age <= 35);
    };

    isMillenial();

    // New solution - access 'this' by using arrow functions
    const isMillenialArrow = () => {
      console.log(this);
      console.log(this.age >= 30 && this.age <= 35);
    };

    isMillenialArrow();

    return this.age; // this refers to the object that is calling the method (student, in 'this' case.)
  },

  greet: () => {
    console.log(this);
    console.log(`Hey, ${this.name}`);
  },
};

student.getAge(); // this => student object
student.greet(); // this => Window object
 */

// Arguments keyword
// -----------------
// Regular functions have access to the 'arguments' keyword.
/* 
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 3); // Arguments(2) [2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// Arrow functions do not have access to the 'arguments' keyword.
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 3); // Uncaught ReferenceError: arguments is not defined
 */

// Primitives vs Objects (Value vs Reference)
/* 
let age = 35;
let oldAge = age;
age = 36;

console.log({ age }); // 36
console.log({ oldAge }); // 35

const me = {
  name: "Deepak",
  age: 35,
};

const friend = me;
friend.age = 30;

console.log(me);
console.log(friend);
 */

// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log({ lastName, oldLastName }); // {lastName: "Davis", oldLastName: "Williams"}

// Reference types
const anju = {
  firstName: "Anjumol",
  lastName: "Sebastian",
  age: 35,
};

const marriedAnju = anju;
marriedAnju.lastName = "Deepak";

console.log({ anju, marriedAnju }); // {anju: {firstName: "Anjumol", lastName: "Deepak", age: 35}, marriedAnju: {firstName: "Anjumol", lastName: "Deepak", age: 35}}

// Copying objects
// Method 1: Shallow copy using Object.assign()
const employee = {
  name: "John",
  age: 35,
  job: "Software Engineer",
  family: ["Alice", "Bob"],
};

const employeeCopy = Object.assign({}, employee);
employeeCopy.name = "Deepak";

employeeCopy.family.push("Alan", "Alex"); // This will also modify the family array in the original object.

console.log({ employee, employeeCopy });

// Method 2: Deep clone using structuredClone()
const employeeCopyTwo = structuredClone(employee);
employeeCopyTwo.family.push("Mary"); // This will not modify the family array in the original object.
employeeCopyTwo.family.push("Mike"); // This will not modify the family array in the original object.

console.log({ employee, employeeCopyTwo });
