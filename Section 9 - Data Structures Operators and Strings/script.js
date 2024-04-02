"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24
    }
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, address, mainIndex = 0, starterIndex = 0 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  }
};

// Array Destructuring
// -------------------
/* const [first, second] = restaurant.categories;
console.log({ first, second }); // {first: 'Italian', second: 'Pizzeria'}

let [primary, , secondary] = restaurant.categories;
console.log({ primary, secondary }); // {primary: 'Italian', secondary: 'Vegetarian'}

// Can be used to swap variables
[secondary, primary] = [primary, secondary];
console.log({ primary, secondary });

const [starter, main] = restaurant.order(2, 0);
console.log({ starter, main }); // {starter: 'Garlic Bread', main: 'Pizza'}

// Destructuring nested arrays
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log({ i, j, k }); // {i: 2, j: 5, k: 6}

// Having default values when destructuring
const [p = 0, q = 0, r = 0] = [8, 9];
console.log({ p, q, r }); // {p: 8, q: 9, r: 0 */

// Object Destructuring
// --------------------
/* const { name, categories, openingHours } = restaurant;
console.log({ name, categories, openingHours });

// Object Destructuring with different variable names
const { name: newName } = restaurant;
console.log({ newName });

// Object Destructuring with default values
const { menu = [] } = restaurant; // 'menu' property does not exist. So [] is assigned to 'menu'.
console.log({ menu });

// Mutating variables while destructuring
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // Need to WRAP IN PARENTHESES to avoid syntax error
console.log({ a, b });

// Nested Object Destructuring
const {
  fri: { open, close }
} = openingHours;
console.log({ open, close });

const {
  sat: { open: satOpen, close: satClose }
} = openingHours;
console.log({ satOpen, satClose });

// More Nested Object Destructuring
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localizationTags: [],
      lastEdit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung"
    }
  ],
  url: "/en-US/docs/Tools/Scratchpad"
};

const {
  translations: [{ title, url }]
} = metadata;

console.log({ title, url });

// Unpacking properties from objects passed as a function parameter
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2
});
restaurant.orderDelivery({
  time: "22:00",
  address: "123 Main St"
}); */

// Spread Operator
// ---------------
/* const arr = [7, 8, 9];

// Creating a new array by adding elements from another array
const newArr = [4, 5, 6, ...arr];
console.log({ arr, newArr });

const newMenu = [...restaurant.mainMenu, "Biriyanai"];
console.log({ newMenu });

// Copying an array
const mainMenuCopy = [...restaurant.mainMenu];
console.log({ mainMenuCopy });

// Joining arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log({ menu });

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Deepak";
const letters = [...str, " ", "J"];
console.log({ letters });

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?", ""),
  prompt("Ingredient 2?", ""),
  prompt("Ingredient 3?", "")
];

console.log(ingredients);

restaurant.orderPasta(...ingredients); */

// Spread Operator with Objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Deepak"
};

console.log({ newRestaurant });

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Achayante Thattukada";

console.log({ restaurant, restaurantCopy });
